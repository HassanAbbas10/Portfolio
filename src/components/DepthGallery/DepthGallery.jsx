import { useEffect, useRef } from 'react'
import { Engine } from './engine/Engine'
import './DepthGallery.css'

const DepthGallery = () => {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !sectionRef.current || !overlayRef.current) return

    const engine = new Engine(canvasRef.current, {
      sectionElement: sectionRef.current,
      overlayElement: overlayRef.current,
    })

    let isMounted = true
    engine.init().catch((error) => {
      console.error('DepthGallery engine init failed', error)
    })

    return () => {
      isMounted = false
      engine.dispose()
      void isMounted
    }
  }, [])

  return (
    <section ref={sectionRef} className="depth-gallery-section">
      <div className="depth-gallery-sticky">
        <canvas ref={canvasRef} className="depth-gallery-canvas" />
        <div ref={overlayRef} className="depth-gallery-overlay-host" />
        <header className="depth-gallery-heading">
          <p className="depth-gallery-heading__eyebrow">The Stack</p>
          <h2 className="depth-gallery-heading__title">Tools I Build With</h2>
        </header>
        <p className="depth-gallery-hint">Scroll to explore</p>
      </div>
    </section>
  )
}

export default DepthGallery
