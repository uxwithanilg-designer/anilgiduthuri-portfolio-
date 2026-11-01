'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal, SplitText } from '@/components/motion'
import Lightbox from '@/components/site/Lightbox'
import { railScreens } from '@/data/cases'
import s from './home.module.css'

// On desktop the page scroll drives a horizontal strip of real Figma screens.
// On touch screens it is a plain swipeable row.
export default function ScreenRail() {
  const section = useRef(null)
  const track = useRef(null)
  const [dist, setDist] = useState(0)
  const [pinned, setPinned] = useState(false)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)')
    const update = () => {
      setPinned(mq.matches)
      if (track.current) setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    }
    update()
    window.addEventListener('resize', update)
    mq.addEventListener('change', update)
    return () => {
      window.removeEventListener('resize', update)
      mq.removeEventListener('change', update)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={section} className={s.rail} style={{ height: pinned ? `calc(100vh + ${dist}px)` : 'auto' }} aria-label="Screens from the case studies">
      <div className={pinned ? s.railSticky : s.railStatic}>
        <div className={`container ${s.railHead}`}>
          <div>
            <Reveal>
              <span className="eyebrow">Inside the screens</span>
            </Reveal>
            <SplitText className="h2" text="Real screens, *straight from Figma.*" />
          </div>
          <Reveal delay={0.1}>
            <p className={s.railNote}>
              Ten of the 79 hi-fi screens I designed this year. {pinned ? 'Keep scrolling,' : 'Swipe,'} and tap any screen to see it
              full size.
            </p>
          </Reveal>
        </div>

        <motion.div ref={track} className={s.railTrack} style={pinned ? { x } : undefined}>
          {railScreens.map((item, i) => (
            <motion.button
              key={item.src}
              className={s.railItem}
              onClick={() => setOpen(i)}
              data-cursor="View"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`frame ${s.railFrame}`}>
                <div className="frame-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img src={item.src} alt={item.title} loading="lazy" width="1440" height="1000" />
              </div>
              <div className={s.railCaption}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <span className={s.railTitle}>{item.title}</span>
                <span className={s.railProject}>{item.project}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {pinned && (
          <div className={`container ${s.railProgress}`}>
            <span>
              <motion.i style={{ width: bar }} />
            </span>
          </div>
        )}
      </div>

      <Lightbox items={railScreens} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </section>
  )
}
