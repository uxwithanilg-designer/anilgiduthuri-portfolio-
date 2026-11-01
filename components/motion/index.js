'use client'
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from 'motion/react'

export const ease = [0.22, 1, 0.36, 1]

/* Fade + rise when the element scrolls into view */
export function Reveal({ children, delay = 0, y = 28, as = 'div', className, once = true, amount = 0.25, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Stagger children that use <RevealItem> */
export function Stagger({ children, className, gap = 0.08, delay = 0, as = 'div', amount = 0.2, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className, as = 'div', y = 24, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Headline that rises word by word from behind a mask.
   `text` may contain *words in asterisks* to set them in the serif italic. */
export function SplitText({ text, className, delay = 0, as = 'h2', inView = true, stagger = 0.06 }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const words = text.split(' ')
  let serif = false
  return (
    <Tag
      className={className}
      aria-label={text.replace(/\*/g, '')}
      initial="hidden"
      {...(inView ? { whileInView: 'show', viewport: { once: true, amount: 0.4 } } : { animate: 'show' })}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((raw, i) => {
        const starts = raw.startsWith('*')
        if (starts) serif = true
        const isSerif = serif
        const ends = raw.endsWith('*') || raw.endsWith('*,') || raw.endsWith('*.')
        if (ends) serif = false
        const word = raw.replace(/\*/g, '')
        return (
          // The mask reaches past the line box (with matching negative margins, so
          // layout is unchanged) so tight display line-heights never clip g, y or p.
          <span key={i} aria-hidden="true" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', padding: '0.1em 0 0.24em', margin: '-0.1em 0 -0.24em' }}>
            <motion.span
              className={isSerif ? 'serif' : undefined}
              style={{ display: 'inline-block', willChange: 'transform' }}
              variants={{
                hidden: reduce ? { y: 0 } : { y: '140%', rotate: 4 },
                show: { y: 0, rotate: 0, transition: { duration: 1, ease } },
              }}
            >
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

/* Paragraph that lights up word by word as you scroll through it */
export function ScrollWords({ text, className }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={{ opacity }}>
      {children}{' '}
    </motion.span>
  )
}

/* Pulls the child gently toward the pointer */
export function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e) => {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const r = el.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
    const target = el.querySelector('.btn')
    if (target) {
      target.style.setProperty('--mx', `${e.clientX - r.left}px`)
      target.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={className} style={{ x: sx, y: sy, display: 'inline-flex' }} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </motion.div>
  )
}

/* Counts up from 0 the first time it is seen */
export function Counter({ value, suffix = '', className }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    const c = animate(0, value, { duration: 1.6, ease, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [seen, value])
  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  )
}

/* Subtle parallax on scroll */
export function Parallax({ children, offset = 60, className, style }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [offset, -offset])
  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  )
}
