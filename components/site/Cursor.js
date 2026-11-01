'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import s from './site.module.css'

// A soft ring that trails the pointer and turns into a label over
// anything with data-cursor="…". Mouse only; touch keeps the default.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')
  const [hot, setHot] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target.closest?.('[data-cursor], a, button')
      setLabel(t?.dataset?.cursor || '')
      setHot(!!t)
    }
    const leave = () => {
      x.set(-100)
      y.set(-100)
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [x, y])

  if (!enabled) return null
  return (
    <motion.div className={s.cursor} style={{ x: sx, y: sy }} aria-hidden="true">
      <motion.div
        className={s.cursorRing}
        animate={{
          width: label ? 96 : hot ? 44 : 22,
          height: label ? 96 : hot ? 44 : 22,
          backgroundColor: label ? 'rgba(15,15,18,0.92)' : 'rgba(75,63,228,0)',
          borderColor: label ? 'rgba(15,15,18,0)' : hot ? 'rgba(75,63,228,0.6)' : 'rgba(15,15,18,0.35)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {label && (
          <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} className={s.cursorLabel}>
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}
