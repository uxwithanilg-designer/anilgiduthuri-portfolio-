'use client'
import { useEffect, useRef } from 'react'
import styles from './BgAnimation.module.css'

export default function BgAnimation({ variant = 'page' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf, W, H

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()

    const count = variant === 'home' ? 36 : 20
    // Subtle color palette — very low opacity so it doesn't interfere
    const colors = [
      { r: 99,  g: 102, b: 241 },  // indigo
      { r: 168, g: 85,  b: 247 },  // violet
      { r: 16,  g: 185, b: 129 },  // emerald
      { r: 56,  g: 189, b: 248 },  // sky
    ]

    const particles = Array.from({ length: count }, () => {
      const col = colors[Math.floor(Math.random() * colors.length)]
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        alpha: Math.random() * 0.25 + 0.05,
        col,
      }
    })

    function draw() {
      ctx.clearRect(0, 0, W, H)

      const maxDist = variant === 'home' ? 140 : 100
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < maxDist) {
            const lineAlpha = (1 - d / maxDist) * 0.04
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${lineAlpha})`
            ctx.lineWidth = 0.6
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.col.r},${p.col.g},${p.col.b},${p.alpha})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [variant])

  return (
    <div className={styles.bgWrap} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
