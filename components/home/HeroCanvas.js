'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import s from './home.module.css'

// The hero is a small "workflow canvas", like the agent canvases in my work:
// my process runs as a flow, with multiplayer cursors drifting over it.
const W = 600
const H = 560

const nodes = [
  { id: 'discover', x: 24, y: 36, type: 'Research', title: 'Discover', sub: 'Interviews · audits', color: '#FF7A1A', icon: 'search' },
  { id: 'define', x: 316, y: 92, type: 'Strategy', title: 'Define', sub: 'IA · flows · metrics', color: '#E2A400', icon: 'map' },
  { id: 'design', x: 40, y: 224, type: 'Figma', title: 'Design', sub: 'System · hi-fi · states', color: '#8B5CF6', icon: 'pen' },
  { id: 'build', x: 330, y: 288, type: 'Vibe coding', title: 'Build', sub: 'React · Next.js', color: '#2F8CF5', icon: 'code' },
  { id: 'ship', x: 120, y: 410, type: 'Delivery', title: 'Ship', sub: 'Handoff · design QA', color: '#12B38A', icon: 'rocket' },
]

const NW = 236
const NH = 74

const edge = (a, b) => {
  const A = nodes.find((n) => n.id === a)
  const B = nodes.find((n) => n.id === b)
  const x1 = A.x + NW / 2
  const y1 = A.y + NH
  const x2 = B.x + NW / 2
  const y2 = B.y
  const my = (y1 + y2) / 2
  return `M ${x1} ${y1} C ${x1} ${my + 10}, ${x2} ${my - 10}, ${x2} ${y2}`
}

const edges = [
  ['discover', 'define'],
  ['define', 'design'],
  ['design', 'build'],
  ['build', 'ship'],
]

function Icon({ name }) {
  const p = {
    search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.2-4.2" /></>,
    map: <><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" /><path d="M9 4v14M15 6v14" /></>,
    pen: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" /></>,
    code: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" /></>,
    rocket: <><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2" /><path d="M9 15l-3-3a12 12 0 0112-9 12 12 0 01-9 12z" /><circle cx="14.5" cy="9.5" r="1.5" /></>,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {p[name]}
    </svg>
  )
}

export default function HeroCanvas() {
  const wrap = useRef(null)
  const [scale, setScale] = useState(1)
  const [step, setStep] = useState(-1)
  const reduce = useReducedMotion()

  // Scale the fixed-size canvas to whatever space it gets.
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1.12, e.contentRect.width / W)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Walk the run through each node, then rest and run again.
  useEffect(() => {
    if (reduce) {
      setStep(nodes.length)
      return
    }
    let i = -1
    let t
    const tick = () => {
      i = i >= nodes.length + 3 ? -1 : i + 1
      setStep(i)
      t = setTimeout(tick, i === -1 ? 500 : i >= nodes.length ? 1400 : 950)
    }
    t = setTimeout(tick, 900)
    return () => clearTimeout(t)
  }, [reduce])

  const done = Math.min(Math.max(step, 0), nodes.length)

  return (
    <div ref={wrap} className={s.canvasWrap} style={{ height: H * scale }}>
      <motion.div
        className={s.canvas}
        style={{ width: W, height: H, scale, transformOrigin: '0 0' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={s.canvasDots} />

        <svg className={s.edges} width={W} height={H} aria-hidden="true">
          {edges.map(([a, b], i) => (
            <g key={a}>
              <motion.path
                d={edge(a, b)}
                fill="none"
                stroke="rgba(15,15,18,0.16)"
                strokeWidth="1.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.9 + i * 0.18, ease: [0.65, 0, 0.35, 1] }}
              />
              <path
                d={edge(a, b)}
                fill="none"
                stroke="url(#flow)"
                strokeWidth="2.2"
                strokeDasharray="6 10"
                className={`${s.flowLine} ${step > i ? s.flowOn : ''}`}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="flow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4B3FE4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>

        {nodes.map((n, i) => {
          const state = step === i ? 'running' : step > i ? 'passed' : 'idle'
          return (
            <motion.div
              key={n.id}
              className={`${s.node} ${state === 'running' ? s.nodeRunning : ''}`}
              style={{ left: n.x, top: n.y, width: NW, '--c': n.color }}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <span className={s.nodeIcon}>
                <Icon name={n.icon} />
              </span>
              <span className={s.nodeBody}>
                <span className={s.nodeType}>{n.type}</span>
                <span className={s.nodeTitle}>{n.title}</span>
                <span className={s.nodeSub}>{n.sub}</span>
              </span>
              <span className={`${s.nodeState} ${s['st_' + state]}`}>
                {state === 'running' ? 'Running' : state === 'passed' ? '✓ Passed' : 'Idle'}
              </span>
              <i className={s.portIn} />
              <i className={s.portOut} />
            </motion.div>
          )
        })}

        {/* Multiplayer cursors */}
        {!reduce && (
          <>
            <motion.div
              className={s.mpCursor}
              style={{ '--c': '#4B3FE4' }}
              initial={{ x: 470, y: 30, opacity: 0 }}
              animate={{ x: [470, 250, 200, 450, 300, 470], y: [30, 150, 300, 360, 470, 30], opacity: 1 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', opacity: { delay: 1.6, duration: 0.4 } }}
            >
              <svg viewBox="0 0 20 20">
                <path d="M3 2l13 7-6 1.6L7.4 17z" />
              </svg>
              <span>Anil</span>
            </motion.div>
            <motion.div
              className={s.mpCursor}
              style={{ '--c': '#12B38A' }}
              initial={{ x: 90, y: 520, opacity: 0 }}
              animate={{ x: [90, 280, 520, 380, 120, 90], y: [520, 400, 250, 120, 190, 520], opacity: 1 }}
              transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut', opacity: { delay: 2.2, duration: 0.4 } }}
            >
              <svg viewBox="0 0 20 20">
                <path d="M3 2l13 7-6 1.6L7.4 17z" />
              </svg>
              <span>Engineer</span>
            </motion.div>
          </>
        )}

        <motion.div
          className={s.runBar}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`${s.runDot} ${step >= 0 && step < nodes.length ? s.runDotLive : ''}`} />
          <span className="mono">
            {step < 0
              ? `Queued · ${nodes.length} steps`
              : step < nodes.length
                ? `Running · ${nodes[step].title}`
                : `Run passed · ${done} of ${nodes.length} steps`}
          </span>
          <span className={s.runSep} />
          <span className="mono muted">8+ yrs · since 2018</span>
        </motion.div>
      </motion.div>
    </div>
  )
}
