import * as THREE from 'three'

export class Scroll {
  constructor(camera, gallery) {
    this.isInitialized = false
    this.camera = camera
    this.gallery = gallery

    this.scrollProgress = 0
    this.smoothedProgress = 0
    this.scrollSmoothing = 0.045
    this.previousProgress = 0

    this.rawVelocity = 0
    this.velocity = 0
    this.velocityDamping = 0.08
    this.velocityMax = 1.5
    this.velocityStopThreshold = 0.0001

    this.firstPlaneViewOffset = 5
    this.lastPlaneViewOffset = 5
    this.minCameraZ = -Infinity
    this.maxCameraZ = Infinity
    this.cameraStartZ = this.camera.position.z
  }

  init() {
    if (this.isInitialized) return

    this.updateCameraBounds()
    this.cameraStartZ = this.maxCameraZ
    this.camera.position.z = this.cameraStartZ
    this.scrollProgress = 0
    this.smoothedProgress = 0
    this.previousProgress = 0
    this.rawVelocity = 0
    this.velocity = 0

    this.isInitialized = true
  }

  updateCameraBounds() {
    const depthRange = this.gallery.getDepthRange()
    this.maxCameraZ = depthRange.nearestZ + this.firstPlaneViewOffset
    this.minCameraZ = depthRange.deepestZ + this.lastPlaneViewOffset

    if (this.minCameraZ > this.maxCameraZ) {
      this.minCameraZ = this.maxCameraZ
    }
  }

  setProgress(progress) {
    this.scrollProgress = THREE.MathUtils.clamp(progress, 0, 1)
  }

  cameraZFromProgress(progress) {
    // Smoothstep easing — slow at the boundaries, fluid through the middle.
    // Gives each plane a brief "dwell" feeling before the camera glides forward.
    const eased = progress * progress * (3 - 2 * progress)
    return THREE.MathUtils.lerp(this.maxCameraZ, this.minCameraZ, eased)
  }

  updateVelocity() {
    // Scale to a comparable range with the original wheel-based velocity
    const velocityScale = 600
    this.rawVelocity = (this.smoothedProgress - this.previousProgress) * velocityScale
    this.velocity = THREE.MathUtils.lerp(this.velocity, this.rawVelocity, this.velocityDamping)
    this.velocity = THREE.MathUtils.clamp(this.velocity, -this.velocityMax, this.velocityMax)

    if (Math.abs(this.velocity) < this.velocityStopThreshold) {
      this.velocity = 0
    }

    this.previousProgress = this.smoothedProgress
  }

  update() {
    this.updateCameraBounds()

    this.smoothedProgress = THREE.MathUtils.lerp(
      this.smoothedProgress,
      this.scrollProgress,
      this.scrollSmoothing
    )

    this.updateVelocity()

    this.camera.position.z = THREE.MathUtils.clamp(
      this.cameraZFromProgress(this.smoothedProgress),
      this.minCameraZ,
      this.maxCameraZ
    )
  }

  dispose() {}
}
