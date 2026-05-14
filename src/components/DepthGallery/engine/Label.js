export class Label {
  constructor(gallery) {
    this.gallery = gallery

    this.containerElement = null
    this.overlayElement = null
    this.leftIndexElement = null
    this.wordElement = null
    this.chipElement = null
    this.categoryValueElement = null
    this.hexValueElement = null
    this.totalValueElement = null
    this.activePlaneIndex = -1
  }

  setContainerElement(containerElement) {
    this.containerElement = containerElement
  }

  createElement() {
    const element = document.createElement('section')
    element.className = 'depth-label-overlay'
    element.innerHTML = `
      <div class="depth-label-overlay__left">
        <p class="depth-label-overlay__index"></p>
        <p class="depth-label-card__word"></p>
        <span class="depth-label-overlay__chip"></span>
      </div>
      <article class="depth-label-card depth-label-overlay__right">
        <dl class="depth-label-card__specs">
          <div class="depth-label-card__row">
            <dt>Stack</dt>
            <dd class="depth-label-card__value depth-label-card__value--category"></dd>
          </div>
          <div class="depth-label-card__row">
            <dt>Hex</dt>
            <dd class="depth-label-card__value depth-label-card__value--hex"></dd>
          </div>
          <div class="depth-label-card__row">
            <dt>Total</dt>
            <dd class="depth-label-card__value depth-label-card__value--total"></dd>
          </div>
        </dl>
      </article>
    `

    return {
      element,
      leftIndexElement: element.querySelector('.depth-label-overlay__index'),
      wordElement: element.querySelector('.depth-label-card__word'),
      chipElement: element.querySelector('.depth-label-overlay__chip'),
      categoryValueElement: element.querySelector('.depth-label-card__value--category'),
      hexValueElement: element.querySelector('.depth-label-card__value--hex'),
      totalValueElement: element.querySelector('.depth-label-card__value--total'),
    }
  }

  init() {
    if (this.overlayElement) return

    const built = this.createElement()
    this.overlayElement = built.element
    this.leftIndexElement = built.leftIndexElement
    this.wordElement = built.wordElement
    this.chipElement = built.chipElement
    this.categoryValueElement = built.categoryValueElement
    this.hexValueElement = built.hexValueElement
    this.totalValueElement = built.totalValueElement
    this.overlayElement.style.opacity = '0'

    const host = this.containerElement || document.body
    host.append(this.overlayElement)
  }

  normalizeHexColor(rawColor) {
    const fallbackColor = '#ffffff'
    if (typeof rawColor !== 'string') return fallbackColor

    let hexColor = rawColor.trim()
    if (!hexColor) return fallbackColor
    if (!hexColor.startsWith('#')) {
      hexColor = `#${hexColor}`
    }

    if (/^#[0-9a-fA-F]{3}$/.test(hexColor)) {
      const shortHex = hexColor.slice(1)
      hexColor = `#${shortHex
        .split('')
        .map((character) => `${character}${character}`)
        .join('')}`
    }

    if (!/^#[0-9a-fA-F]{6}$/.test(hexColor)) return fallbackColor
    return hexColor.toLowerCase()
  }

  getTargetPlaneIndex(cameraZ) {
    const blendData = this.gallery.getPlaneBlendData(cameraZ)
    if (!blendData) return -1
    return blendData.blend >= 0.5 ? blendData.nextPlaneIndex : blendData.currentPlaneIndex
  }

  applyPlaneContent(planeIndex) {
    const plane = this.gallery.planes[planeIndex]
    if (!plane || this.activePlaneIndex === planeIndex) return

    this.activePlaneIndex = planeIndex

    const labelData = plane.userData.label || {}
    const accentHex = this.normalizeHexColor(plane.userData.accentColor)

    this.overlayElement.classList.add('depth-label-overlay--switching')

    clearTimeout(this._switchTimeout)
    this._switchTimeout = setTimeout(() => {
      this.leftIndexElement.textContent = String(planeIndex + 1).padStart(2, '0')
      this.wordElement.textContent = labelData.word || 'tech'
      this.chipElement.style.backgroundColor = accentHex
      this.categoryValueElement.textContent = labelData.category || ''
      this.hexValueElement.textContent = accentHex.slice(1).toUpperCase()
      this.totalValueElement.textContent = String(this.gallery.planes.length).padStart(2, '0')
      this.overlayElement.style.color = labelData.color || ''

      this.overlayElement.classList.remove('depth-label-overlay--switching')
    }, 150)
  }

  update(camera = null) {
    if (!camera || !this.overlayElement) return

    const targetPlaneIndex = this.getTargetPlaneIndex(camera.position.z)
    if (targetPlaneIndex < 0) {
      this.overlayElement.style.opacity = '0'
      return
    }

    this.applyPlaneContent(targetPlaneIndex)
    this.overlayElement.style.opacity = '1'
  }

  render() {}

  dispose() {
    clearTimeout(this._switchTimeout)
    this.overlayElement?.remove()
    this.overlayElement = null
    this.leftIndexElement = null
    this.wordElement = null
    this.chipElement = null
    this.categoryValueElement = null
    this.hexValueElement = null
    this.totalValueElement = null
    this.activePlaneIndex = -1
  }
}
