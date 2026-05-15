import * as THREE from 'three'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Portrait card — width:height = 3:4
const TEXTURE_W = 768
const TEXTURE_H = 1024

function drawBackground(ctx, { backgroundColor, accentColor, blob1Color, blob2Color }) {
  // Deep dark base
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, TEXTURE_W, TEXTURE_H)

  // Diagonal gradient from blob1 (top-left) to blob2 (bottom-right)
  const linearGrad = ctx.createLinearGradient(0, 0, TEXTURE_W, TEXTURE_H)
  linearGrad.addColorStop(0, withAlpha(blob1Color, 0.30))
  linearGrad.addColorStop(0.5, withAlpha(mixColors(blob1Color, blob2Color, 0.5), 0.20))
  linearGrad.addColorStop(1, withAlpha(blob2Color, 0.25))
  ctx.fillStyle = linearGrad
  ctx.fillRect(0, 0, TEXTURE_W, TEXTURE_H)

  // Main radial glow centred in the upper third where the icon lives
  const gx = TEXTURE_W * 0.5
  const gy = TEXTURE_H * 0.38
  const innerR = TEXTURE_H * 0.06
  const outerR = TEXTURE_H * 0.72

  const radial = ctx.createRadialGradient(gx, gy, innerR, gx, gy, outerR)
  radial.addColorStop(0.0, withAlpha(accentColor, 0.72))
  radial.addColorStop(0.38, withAlpha(mixColors(accentColor, backgroundColor, 0.55), 0.55))
  radial.addColorStop(0.75, withAlpha(backgroundColor, 0.15))
  radial.addColorStop(1.0, 'rgba(0,0,0,0)')

  ctx.fillStyle = radial
  ctx.fillRect(0, 0, TEXTURE_W, TEXTURE_H)

  // Vignette — darkens all four edges
  const vignette = ctx.createRadialGradient(
    TEXTURE_W * 0.5, TEXTURE_H * 0.5, TEXTURE_H * 0.25,
    TEXTURE_W * 0.5, TEXTURE_H * 0.5, TEXTURE_H * 0.85
  )
  vignette.addColorStop(0, 'rgba(0,0,0,0)')
  vignette.addColorStop(1, 'rgba(0,0,0,0.68)')

  ctx.fillStyle = vignette
  ctx.fillRect(0, 0, TEXTURE_W, TEXTURE_H)
}

function svgToDataUrl(svgString) {
  const cleaned = svgString.replace(/[\r\n]+/g, '')
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(cleaned)}`
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (e) => reject(e)
    img.src = src
  })
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '')
  const val =
    normalized.length === 3
      ? normalized.split('').map((c) => c + c).join('')
      : normalized
  const int = parseInt(val, 16)
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 }
}

function mixColors(colorA, colorB, ratio) {
  const a = hexToRgb(colorA)
  const b = hexToRgb(colorB)
  const r = Math.round(a.r * (1 - ratio) + b.r * ratio)
  const g = Math.round(a.g * (1 - ratio) + b.g * ratio)
  const bl = Math.round(a.b * (1 - ratio) + b.b * ratio)
  return `rgb(${r},${g},${bl})`
}

function withAlpha(hex, alpha) {
  try {
    const { r, g, b } = hexToRgb(hex)
    return `rgba(${r},${g},${b},${alpha})`
  } catch {
    return `rgba(255,255,255,${alpha})`
  }
}

export async function createLogoTexture({
  IconComponent,
  iconColor = '#ffffff',
  backgroundColor = '#000000',
  accentColor = '#555555',
  blob1Color = '#333333',
  blob2Color = '#111111',
}) {
  const canvas = document.createElement('canvas')
  canvas.width = TEXTURE_W
  canvas.height = TEXTURE_H
  const ctx = canvas.getContext('2d')

  drawBackground(ctx, { backgroundColor, accentColor, blob1Color, blob2Color })

  // Render icon SVG
  const svgMarkup = renderToStaticMarkup(
    createElement(IconComponent, {
      color: iconColor,
      size: TEXTURE_W,
      style: { color: iconColor },
    })
  )

  const wrappedSvg = svgMarkup.includes('xmlns=')
    ? svgMarkup
    : svgMarkup.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')

  try {
    const image = await loadImage(svgToDataUrl(wrappedSvg))

    // Icon occupies ~55% of the canvas width, vertically centred in the upper half
    const iconSize = TEXTURE_W * 0.55
    const iconX = (TEXTURE_W - iconSize) / 2
    const iconY = (TEXTURE_H - iconSize) / 2 - TEXTURE_H * 0.06

    // Outer diffuse glow
    ctx.save()
    ctx.shadowColor = withAlpha(accentColor, 0.6)
    ctx.shadowBlur = TEXTURE_W * 0.12
    ctx.drawImage(image, iconX, iconY, iconSize, iconSize)
    ctx.restore()

    // Inner crisp pass (draw again without blur for sharpness)
    ctx.save()
    ctx.shadowColor = withAlpha(iconColor, 0.3)
    ctx.shadowBlur = TEXTURE_W * 0.03
    ctx.drawImage(image, iconX, iconY, iconSize, iconSize)
    ctx.restore()
  } catch (error) {
    ctx.fillStyle = withAlpha(iconColor, 0.35)
    ctx.fillRect(TEXTURE_W * 0.25, TEXTURE_H * 0.3, TEXTURE_W * 0.5, TEXTURE_W * 0.5)
    console.warn('createLogoTexture: SVG render failed', error)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  texture.needsUpdate = true
  return texture
}
