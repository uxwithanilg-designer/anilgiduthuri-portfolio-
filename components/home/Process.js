'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal, SplitText } from '@/components/motion'
import { process } from '@/data/profile'
import s from './home.module.css'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] })
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className={`section ${s.process}`}>
      <div className={`container ${s.processGrid}`}>
        <div className={s.processAside}>
          <Reveal>
            <span className="eyebrow">How I work</span>
          </Reveal>
          <SplitText className="h2" text="Five steps, *no magic.*" />
          <Reveal delay={0.1}>
            <p className="lead">
              A Double Diamond with gates, plus one step most designers skip: building it. Every phase ends with something
              people can sign off, so fast projects do not turn into fast mistakes.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className={s.steps}>
          <span className={s.stepsLine} aria-hidden="true">
            <motion.i style={{ height: line }} />
          </span>
          {process.map((p, i) => (
            <Step key={p.step} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step({ p, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.45'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1])
  const y = useTransform(scrollYProgress, [0, 1], [28, 0])
  const dot = useTransform(scrollYProgress, [0.6, 1], ['#d9d8d2', '#4b3fe4'])

  return (
    <motion.article ref={ref} className={s.step} style={{ opacity, y }}>
      <motion.span className={s.stepDot} style={{ backgroundColor: dot }} aria-hidden="true" />
      <div className={s.stepHead}>
        <span className="mono">0{i + 1}</span>
        <span className={s.stepName}>{p.step}</span>
      </div>
      <h3 className={s.stepTitle}>{p.title}</h3>
      <p className={s.stepBody}>{p.body}</p>
      <ul className={s.stepOut}>
        {p.outputs.map((o) => (
          <li key={o} className="chip">
            {o}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
