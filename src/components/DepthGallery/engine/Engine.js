import * as THREE from 'three'
import { Experience } from './Experience'
import { Scroll } from './Scroll'
import { galleryPlaneData } from '../data/galleryData'
import { createLogoTexture } from '../utils/createLogoTexture'

export class Engine {
  constructor(canvas, { sectionElement, overlayElement } = {}) {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Engine requires a valid canvas element')
    }

    this.canvas = canvas
    this.sectionElement = sectionElement || null
    this.overlayElement = overlayElement || null

    this.experience = new Experience()

    this.isInitialized = false
    this.isRunning = false
    this.animationFrameRequestId = null
    this.preloadedTextures = new Map()

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    this.camera.position.set(0, 0, 6)

    this.scroll = new Scroll(this.camera, this.experience.gallery)

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.autoClear = false

    this.onResize = () => this.resize()
    this.animate = this.update.bind(this)
  }

  async init() {
    if (this.isInitialized) return

    this.experience.gallery.setCanvasElement(this.canvas)
    if (this.overlayElement) {
      this.experience.label.setContainerElement(this.overlayElement)
    }

    this.preloadedTextures = await this.preloadTextures()
    this.experience.gallery.setPreloadedTextures(this.preloadedTextures)

    await this.experience.init(this.scene, this.camera)
    this.scroll.init()

    this.resize()
    window.addEventListener('resize', this.onResize)

    this.isInitialized = true
    this.start()
  }

  start() {
    if (!this.isInitialized || this.isRunning) return

    this.isRunning = true
    this.update()
  }

  resize() {
    const width = this.canvas.clientWidth || this.canvas.parentElement?.clientWidth || 1
    const height = this.canvas.clientHeight || this.canvas.parentElement?.clientHeight || 1
    if (width <= 0 || height <= 0) return

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
    this.experience.gallery.updatePlaneScale()
    this.experience.gallery.layoutPlanes()
  }

  async preloadTextures() {
    const loadedTextures = new Map()

    await Promise.all(
      galleryPlaneData.map(async (plane) => {
        if (!plane.iconComponent) return
        try {
          const texture = await createLogoTexture({
            IconComponent: plane.iconComponent,
            iconColor: plane.iconColor || '#ffffff',
            backgroundColor: plane.backgroundColor || '#0a0a0a',
            accentColor: plane.accentColor || '#3a3a3a',
          })
          loadedTextures.set(plane.name, texture)
        } catch (error) {
          console.warn(`Texture failed to load for ${plane.name}`, error)
        }
      })
    )

    return loadedTextures
  }

  computeScrollProgress() {
    if (!this.sectionElement) return 0
    const rect = this.sectionElement.getBoundingClientRect()
    const viewportHeight = window.innerHeight || 1
    const total = rect.height - viewportHeight
    if (total <= 0) return 0
    const progress = -rect.top / total
    if (!Number.isFinite(progress)) return 0
    return Math.max(0, Math.min(1, progress))
  }

  update() {
    if (!this.isRunning) return

    this.animationFrameRequestId = requestAnimationFrame(this.animate)

    const time = performance.now()

    this.scroll.setProgress(this.computeScrollProgress())
    this.scroll.update()
    this.experience.update(time, this.camera, this.scroll)

    this.renderer.clear(true, true, true)
    this.experience.background.render(this.renderer)
    this.renderer.clearDepth()
    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.isRunning = false

    if (this.animationFrameRequestId !== null) {
      cancelAnimationFrame(this.animationFrameRequestId)
      this.animationFrameRequestId = null
    }

    window.removeEventListener('resize', this.onResize)
    this.scroll.dispose()

    this.preloadedTextures.forEach((texture) => texture?.dispose?.())
    this.preloadedTextures.clear()

    this.experience.dispose?.()
    this.renderer?.dispose?.()
  }
}
