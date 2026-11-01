'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal, SplitText, Stagger, RevealItem } from '@/components/motion'
import { experience, skills } from '@/data/profile'
import s from './home.module.css'

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className={`section ${s.experience}`}>
      <div className="container">
        <div className={s.head}>
          <Reveal>
            <span className="eyebrow">Experience</span>
          </Reveal>
          <SplitText className="h2" text="Eight years, *five teams.*" />
        </div>

        <ol className={s.roles}>
          {experience.map((e, i) => {
            const isOpen = open === i
            return (
              <Reveal as="li" key={e.company} className={`${s.role} ${isOpen ? s.roleOpen : ''}`} delay={i * 0.04}>
                <button className={s.roleHead} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span className={`mono ${s.rolePeriod}`}>{e.period}</span>
                  <span className={s.roleMain}>
                    <span className={s.roleCompany}>{e.company}</span>
                    <span className={s.roleTitle}>{e.role}</span>
                  </span>
                  <span className={s.roleTags}>
                    {e.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className={s.rolePlus} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={s.roleBody}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className={s.roleInner}>
                        <p className={s.roleSummary}>{e.summary}</p>
                        <ul>
                          {e.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </ol>

        <div className={s.skillsHead}>
          <SplitText className="h3" text="Skills, in *plain words*" />
        </div>
        <Stagger className={s.skills} gap={0.1}>
          {skills.map((g, i) => (
            <RevealItem key={g.title} className={`${s.skill} ${i === 2 ? s.skillCode : ''}`}>
              <span className={`mono ${s.skillNum}`}>0{i + 1}</span>
              <h4>{g.title}</h4>
              <p>{g.body}</p>
              <ul>
                {g.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
