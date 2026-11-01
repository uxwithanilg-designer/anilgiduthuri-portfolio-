'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal, SplitText } from '@/components/motion'
import { cases } from '@/data/cases'
import s from './home.module.css'

export default function Work() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  return (
    <section id="work" className={`section ${s.work}`}>
      <div className="container">
        <div className={s.head}>
          <Reveal>
            <span className="eyebrow">Selected work · 2026</span>
          </Reveal>
          <SplitText className="h2" text="Two AI platforms, designed *end to end.*" />
          <Reveal delay={0.15}>
            <p className={`lead ${s.headLead}`}>
              Both are enterprise products where AI agents touch real systems, real data and real money. The hard part was
              never the AI. It was making people trust it.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className={s.stack}>
          {cases.map((c, i) => (
            <Card key={c.slug} c={c} i={i} n={cases.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ c, i, n, progress }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05])
  const inner = useRef(null)
  const { scrollYProgress } = useScroll({ target: inner, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const altY = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <div className={s.stackItem} style={{ top: `calc(var(--nav-h) + 28px + ${i * 26}px)` }}>
      <motion.article ref={inner} className={s.card} style={{ scale, '--a': c.accent, '--a2': c.accent2, '--tint': c.tint }}>
        <Link href={`/work/${c.slug}`} className={s.cardLink} data-cursor="Read" aria-label={`Read the ${c.name} case study`} />
        <div className={s.cardText}>
          <div className={s.cardTop}>
            <span className={`mono ${s.cardIndex}`}>{c.index}</span>
            <span className="chip">{c.kind}</span>
          </div>
          <h3 className={s.cardName}>{c.name}</h3>
          <p className={s.cardTitle}>{c.title}</p>
          <ul className={s.cardTags}>
            {c.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <dl className={s.cardStats}>
            {c.highlights.map((h) => (
              <div key={h.label}>
                <dt>{h.value}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
          <span className={s.cardCta}>
            Read the case study
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <div className={s.cardVisual} aria-hidden="true">
          <motion.div className={`frame ${s.cardMain}`} style={{ y: imgY }}>
            <div className="frame-bar">
              <i />
              <i />
              <i />
              <span>{c.slug}.app/home</span>
            </div>
            <img src={c.cover} alt="" loading="lazy" width="1440" height="1000" />
          </motion.div>
          <motion.div className={`frame ${s.cardAlt}`} style={{ y: altY }}>
            <img src={c.coverAlt} alt="" loading="lazy" width="1440" height="1000" />
          </motion.div>
          <div className={s.cardBadge}>
            <span className="status-dot" />
            {c.meta[0].value} · {c.meta[2].value}
          </div>
        </div>
      </motion.article>
    </div>
  )
}
