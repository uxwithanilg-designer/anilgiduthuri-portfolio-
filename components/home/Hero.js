'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SplitText, Magnetic, ease } from '@/components/motion'
import { scrollToId } from '@/components/site/scroll'
import LocalTime from '@/components/site/LocalTime'
import HeroCanvas from './HeroCanvas'
import { profile } from '@/data/profile'
import s from './home.module.css'

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className={s.hero}>
      <div className={s.aurora} aria-hidden="true">
        <span className={s.blobA} />
        <span className={s.blobB} />
        <span className={s.blobC} />
      </div>
      <div className={s.heroGrid} aria-hidden="true" />

      <motion.div className={`container ${s.heroInner}`} style={{ y, opacity }}>
        <div className={s.heroText}>
          <motion.div className={s.heroMeta} {...fade(0.1)}>
            <span className="chip">
              <span className="status-dot" />
              {profile.status}
            </span>
            <span className={`chip ${s.hideSm}`}>
              {profile.location} · <LocalTime />
            </span>
          </motion.div>

          <SplitText
            as="h1"
            inView={false}
            delay={0.2}
            className={s.heroTitle}
            text="I turn complex systems into *calm, usable* products."
          />

          <motion.p className={`lead ${s.heroLead}`} {...fade(0.75)}>
            I’m Anil, a senior product and UX designer with 8+ years in enterprise AI, payments, education and consumer
            apps. I design in Figma, then build the risky parts in React and Next.js, so teams test real behaviour,
            not just pictures.
          </motion.p>

          <motion.div className={s.heroCtas} {...fade(0.9)}>
            <Magnetic>
              <button className="btn" onClick={() => scrollToId('work')} data-cursor="Scroll">
                See the case studies
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={profile.resume} download>
                Download resume
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
                </svg>
              </a>
            </Magnetic>
          </motion.div>

          <motion.ul className={s.heroRoles} {...fade(1.05)}>
            <li>Senior UI/UX Designer</li>
            <li>Product Designer</li>
            <li>Vibe coder · React & Next.js</li>
          </motion.ul>
        </div>

        <div className={s.heroVisual}>
          <HeroCanvas />
        </div>
      </motion.div>

      <motion.button
        className={s.scrollCue}
        onClick={() => scrollToId('work')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-label="Scroll to work"
      >
        <span className={s.scrollTrack}>
          <span className={s.scrollThumb} />
        </span>
        <span className="mono">Scroll</span>
      </motion.button>
    </section>
  )
}
