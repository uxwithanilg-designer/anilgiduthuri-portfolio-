'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      posRef.current.mx = e.clientX
      posRef.current.my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let raf
    function animate() {
      const p = posRef.current
      dot.style.left = p.mx + 'px'
      dot.style.top = p.my + 'px'
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      ring.style.left = p.rx + 'px'
      ring.style.top = p.ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    const hoverEls = document.querySelectorAll('a, button, .hover-target')
    const onEnter = () => {
      ring.style.width = '56px'; ring.style.height = '56px'
      ring.style.borderColor = 'rgba(0,212,255,0.8)'
      dot.style.transform = 'translate(-50%,-50%) scale(2)'
    }
    const onLeave = () => {
      ring.style.width = '36px'; ring.style.height = '36px'
      ring.style.borderColor = 'rgba(0,212,255,0.5)'
      dot.style.transform = 'translate(-50%,-50%) scale(1)'
    }
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
