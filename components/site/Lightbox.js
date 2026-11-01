'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { lockScroll } from './scroll'
import s from './lightbox.module.css'

// Full-screen viewer for Figma screens. Arrow keys move, Esc closes.
export default function Lightbox({ items, index, onClose, onIndex }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const open = index !== null && index !== undefined

  useEffect(() => {
    if (!open) return
    lockScroll(true)
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lockScroll(false)
    }
  }, [open, index, items.length, onClose, onIndex])

  if (!mounted) return null
  const item = open ? items[index] : null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={s.wrap}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className={s.top}>
            <span className="mono">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <span className={s.title}>
              {item.title}
              {item.project && <em> · {item.project}</em>}
            </span>
            <button className={s.close} onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.img
              key={item.src}
              src={item.src}
              alt={item.title}
              className={s.img}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          {items.length > 1 && (
            <>
              <button className={`${s.nav} ${s.prev}`} onClick={() => onIndex((index - 1 + items.length) % items.length)} aria-label="Previous screen">
                ←
              </button>
              <button className={`${s.nav} ${s.next}`} onClick={() => onIndex((index + 1) % items.length)} aria-label="Next screen">
                →
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
