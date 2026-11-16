'use client'
import { useState } from 'react'
import { LayoutGroup, motion } from 'motion/react'
import { SplitText, Reveal, ease } from '@/components/motion'
import ProjectCard from '@/components/site/ProjectCard'
import { cases, categories, countWord } from '@/data/cases'
import s from './work.module.css'

export default function WorkIndex() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? cases : cases.filter((c) => c.category === filter)

  return (
    <section className={s.page}>
      <div className={s.glow} aria-hidden="true" />
      <div className="container">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          Work · {cases.length} case studies
        </motion.span>
        <SplitText as="h1" inView={false} delay={0.1} className={s.title} text={`${countWord(cases.length)} products, *one way of working.*`} />
        <motion.p
          className={`lead ${s.lead}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
        >
          Each case study follows the real process: research, problem framing, information architecture, flows, a design
          system and the screens. Concept projects are labelled as concepts.
        </motion.p>

        <motion.div
          className={s.filters}
          role="tablist"
          aria-label="Filter by industry"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
        >
          <LayoutGroup>
            {['All', ...categories].map((cat) => {
              const n = cat === 'All' ? cases.length : cases.filter((c) => c.category === cat).length
              const on = filter === cat
              return (
                <button key={cat} role="tab" aria-selected={on} className={`${s.chip} ${on ? s.chipOn : ''}`} onClick={() => setFilter(cat)}>
                  {on && <motion.span layoutId="work-filter" className={s.chipBg} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  <span className={s.chipText}>
                    {cat} <em>{n}</em>
                  </span>
                </button>
              )
            })}
          </LayoutGroup>
        </motion.div>

        <motion.div layout className={s.grid}>
          {shown.map((c, i) => (
            <ProjectCard key={c.slug} c={c} i={i} />
          ))}
        </motion.div>

        <Reveal className={s.note}>
          <p>
            Want the full story behind any of these, or a walkthrough of the Figma files? <a href="/#contact">Get in touch</a>.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
