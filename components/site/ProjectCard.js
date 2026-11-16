'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { PhoneTrio } from './Phone'
import s from './project.module.css'

// Compact case study card used in the home grid and on /work.
export default function ProjectCard({ c, i = 0 }) {
  return (
    <motion.div
      className={s.wrap}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      <Link
        href={`/work/${c.slug}`}
        className={s.card}
        style={{ '--a': c.accent, '--a2': c.accent2, '--tint': c.tint }}
        data-cursor="Read"
      >
        <div className={s.visual} aria-hidden="true">
          {c.coverDevice === 'phone' ? (
            <PhoneTrio phones={c.coverPhones} />
          ) : (
            <div className={`frame ${s.shot}`}>
              <div className="frame-bar">
                <i />
                <i />
                <i />
                <span>{c.slug}.app</span>
              </div>
              <img src={c.cover} alt="" loading="lazy" width="1440" height="1000" />
            </div>
          )}
        </div>
        <div className={s.body}>
          <div className={s.top}>
            <span className={`mono ${s.index}`}>{c.index}</span>
            <span className={s.kind}>{c.kind}</span>
            {c.concept && <span className={s.concept}>Concept</span>}
          </div>
          <h3 className={s.name}>{c.name}</h3>
          <p className={s.title}>{c.title}</p>
          <div className={s.foot}>
            <ul className={s.tags}>
              {c.tags.slice(0, 3).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <span className={s.arrow} aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
