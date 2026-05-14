import * as THREE from 'three'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const TEXTURE_SIZE = 1024

function drawBackground(ctx, { backgroundColor, accentColor }) {
  const gradient = ctx.createRadialGradient(
    TEXTURE_SIZE * 0.5,
    TEXTURE_SIZE * 0.45,
    TEXTURE_SIZE * 0.05,
    TEXTURE_SIZE * 0.5,
    TEXTURE_SIZE * 0.5,
    TEXTURE_SIZE * 0.75
  )
  gradient.addColorStop(0, accentColor)
  gradient.addColorStop(0.6, mixColors(accentColor, backgroundColor, 0.55))
  gradient.addColorStop(1, backgroundColor)

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE)

  ctx.fillStyle = withAlpha('#000000', 0.18)
  ctx.fillRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE)
}

function svgToDataUrl(svgString) {
  const cleaned = svgString.replace(/[\r\n]+/g, '')
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cleaned)}`
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.onerror = (error) => reject(error)
    image.src = src
  })
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '')
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((c) => c + c)
          .join('')
      : normalized
  const intVal = parseInt(value, 16)
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  }
}

function mixColors(colorA, colorB, ratio) {
  const a = hexToRgb(colorA)
  const b = hexToRgb(colorB)
  const r = Math.round(a.r * (1 - ratio) + b.r * ratio)
  const g = Math.round(a.g * (1 - ratio) + b.g * ratio)
  const bl = Math.round(a.b * (1 - ratio) + b.b * ratio)
  return `rgb(${r}, ${g}, ${bl})`
}

function withAlpha(hex, alpha) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export async function createLogoTexture({
  IconComponent,
  iconColor = '#ffffff',
  backgroundColor = '#0a0a0a',
  accentColor = '#3a3a3a',
}) {
  const canvas = document.createElement('canvas')
  canvas.width = TEXTURE_SIZE
  canvas.height = TEXTURE_SIZE
  const ctx = canvas.getContext('2d')

  drawBackground(ctx, { backgroundColor, accentColor })

  // Render react-icons component to SVG, then load as Image
  const svgMarkup = renderToStaticMarkup(
    createElement(IconComponent, {
      color: iconColor,
      size: TEXTURE_SIZE,
      style: { color: iconColor },
    })
  )

  // Ensure proper xmlns for browser parsing
  const wrappedSvg = svgMarkup.includes('xmlns=')
    ? svgMarkup
    : svgMarkup.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')

  try {
    const image = await loadImage(svgToDataUrl(wrappedSvg))
    const iconSize = TEXTURE_SIZE * 0.52
    const offset = (TEXTURE_SIZE - iconSize) / 2

    // Soft glow shadow behind the icon
    ctx.save()
    ctx.shadowColor = withAlpha(iconColor, 0.45)
    ctx.shadowBlur = TEXTURE_SIZE * 0.04
    ctx.drawImage(image, offset, offset, iconSize, iconSize)
    ctx.restore()

    // Subtle name caption below the icon
  } catch (error) {
    // If SVG rendering fails, fill a placeholder rectangle
    ctx.fillStyle = withAlpha(iconColor, 0.35)
    ctx.fillRect(TEXTURE_SIZE * 0.25, TEXTURE_SIZE * 0.25, TEXTURE_SIZE * 0.5, TEXTURE_SIZE * 0.5)
    console.warn('createLogoTexture: SVG render failed', error)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  texture.needsUpdate = true
  return texture
}
