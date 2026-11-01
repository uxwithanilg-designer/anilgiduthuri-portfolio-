'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'
import { Reveal, SplitText, Stagger, RevealItem } from '@/components/motion'
import { skills } from '@/data/profile'
import s from './home.module.css'

const code = `export function ApprovalCard({ agent, change, risk }) {
  const [state, setState] = useState('waiting')

  return (
    <Card tone={risk.level}>
      <AgentChip name={agent} />
      <h3>{change.title}</h3>
      <RiskBadge score={risk.score} />
      <Button onClick={() => setState('approved')}>
        Approve
      </Button>
    </Card>
  )
}`

// A tiny highlighter: good enough for one snippet, no library needed.
const rules = [
  ['kw', /^(export|function|const|return)\b/],
  ['str', /^'[^']*'/],
  ['tag', /^<\/?[A-Za-z][\w.]*/],
  ['attr', /^[a-zA-Z]+(?==)/],
  ['fn', /^[a-zA-Z_]\w*(?=\()/],
  ['punc', /^[{}()[\]=>/,.]/],
  ['txt', /^[\s\S]/],
]

function tokenize(src) {
  const out = []
  let i = 0
  while (i < src.length) {
    const rest = src.slice(i)
    for (const [type, re] of rules) {
      const m = rest.match(re)
      if (m) {
        const last = out[out.length - 1]
        if (type === 'txt' && last && last.type === 'txt') last.text += m[0]
        else out.push({ type, text: m[0] })
        i += m[0].length
        break
      }
    }
  }
  return out
}

export default function Build() {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const tokens = useMemo(() => tokenize(code), [])
  const [n, setN] = useState(0)
  const [approved, setApproved] = useState(false)
  const done = n >= code.length

  useEffect(() => {
    if (!seen) return
    if (reduce) {
      setN(code.length)
      return
    }
    let i = 0
    const t = setInterval(() => {
      i += 3
      setN(Math.min(i, code.length))
      if (i >= code.length) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [seen, reduce])

  let left = n
  const lines = code.slice(0, n).split('\n').length

  return (
    <section id="build" className={`section ${s.build}`}>
      <div className="container">
        <div className={s.head}>
          <Reveal>
            <span className="eyebrow">Design + code</span>
          </Reveal>
          <SplitText className="h2" text="I design it in Figma. Then I *build it.*" />
          <Reveal delay={0.1}>
            <p className={`lead ${s.headLead}`}>
              Vibe coding, done with care. I use AI coding tools to turn designs into working React and Next.js prototypes in
              hours, not weeks. Engineers get something real to click and question, and I get honest feedback before
              anything is final.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className={s.buildGrid}>
          <Reveal className={s.editor} y={40}>
            <div className={s.editorBar}>
              <span className={s.editorDots}>
                <i />
                <i />
                <i />
              </span>
              <span className={s.editorTab}>ApprovalCard.jsx</span>
              <span className={s.editorTabDim}>tokens.css</span>
              <span className={s.editorAi}>
                <span className="status-dot" />
                AI pair
              </span>
            </div>
            <pre className={s.code} aria-label="React code for an approval card component">
              <span className={s.gutter} aria-hidden="true">
                {Array.from({ length: Math.max(lines, 1) }, (_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </span>
              <code>
                {tokens.map((t, i) => {
                  if (left <= 0) return null
                  const text = t.text.slice(0, left)
                  left -= t.text.length
                  return (
                    <span key={i} className={s['c_' + t.type]}>
                      {text}
                    </span>
                  )
                })}
                {!done && <span className={s.caret} />}
              </code>
            </pre>
          </Reveal>

          <Reveal className={s.preview} y={40} delay={0.1}>
            <div className={s.previewBar}>
              <span className="mono">localhost:3000/inbox</span>
              <span className={s.previewLive}>
                <span className="status-dot" /> Live preview
              </span>
            </div>
            <div className={s.previewStage}>
              <AnimatePresence>
                {done && (
                  <motion.div
                    className={s.approval}
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={s.approvalTop}>
                      <span className={s.agentChip}>
                        <i>R</i> Release Agent
                      </span>
                      <span className={s.riskBadge}>Low risk · 18/100</span>
                    </div>
                    <h3>Release R-142 (GSTIN fix) is ready for QA</h3>
                    <p>PR #482 · 2 flow changes · 42 of 42 tests passed in sandbox</p>
                    <div className={s.approvalActions}>
                      <motion.button
                        className={`${s.approveBtn} ${approved ? s.approveDone : ''}`}
                        onClick={() => setApproved((v) => !v)}
                        whileTap={{ scale: 0.96 }}
                      >
                        {approved ? '✓ Approved' : 'Approve'}
                      </motion.button>
                      <button className={s.reviewBtn}>Review diff</button>
                    </div>
                    <AnimatePresence>
                      {approved && (
                        <motion.p
                          className={s.approvalLog}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          Saved to the audit trail · undo available for 7 days
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
              {done && !approved && <span className={s.tryIt}>Try it: press Approve</span>}
            </div>
          </Reveal>
        </div>

        <Stagger className={s.buildPoints} gap={0.1}>
          <RevealItem className={s.buildPoint}>
            <h4>Prototypes that behave</h4>
            <p>Real states, real data shapes and real edge cases, so usability tests feel like the product.</p>
          </RevealItem>
          <RevealItem className={s.buildPoint}>
            <h4>Components engineers can read</h4>
            <p>Clean React and Tailwind, with tokens that match the Figma variables one to one.</p>
          </RevealItem>
          <RevealItem className={s.buildPoint}>
            <h4>Shorter feedback loops</h4>
            <p>Feasibility questions get answered in a day, and design QA happens in the same language as the build.</p>
          </RevealItem>
        </Stagger>

        <Reveal className={s.stackRow}>
          <span className="mono muted">My stack</span>
          <ul>
            {skills[2].items.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
