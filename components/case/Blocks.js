'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Reveal, Stagger, RevealItem, ease } from '@/components/motion'
import { useOpenImage } from './imageContext'
import s from './case.module.css'

// Renders one content block of a case study. Content lives in data/cases/*.js.
export default function Block({ b }) {
  const Comp = blocks[b.type]
  return Comp ? <Comp b={b} /> : null
}

const Title = ({ children }) => (children ? <h3 className={s.blockTitle}>{children}</h3> : null)

function Text({ b }) {
  return (
    <div className={s.text}>
      <Title>{b.title}</Title>
      {b.body.map((p, i) => (
        <Reveal key={i} as="p" y={16}>
          {p}
        </Reveal>
      ))}
    </div>
  )
}

function Quote({ b }) {
  return (
    <Reveal as="figure" className={s.quote}>
      <span className={s.quoteMark} aria-hidden="true">
        “
      </span>
      <blockquote>{b.text}</blockquote>
      <figcaption>{b.by}</figcaption>
    </Reveal>
  )
}

function Pull({ b }) {
  return (
    <Reveal as="p" className={s.pull}>
      {b.text}
    </Reveal>
  )
}

function Note({ b }) {
  return (
    <Reveal className={s.note}>
      <span className={s.noteIcon} aria-hidden="true">
        i
      </span>
      <div>
        <strong>{b.title}</strong>
        <p>{b.text}</p>
      </div>
    </Reveal>
  )
}

function Stats({ b }) {
  return (
    <div>
      <Stagger className={s.stats} gap={0.08}>
        {b.items.map((it) => (
          <RevealItem key={it.label} className={s.stat}>
            <span className={s.statValue}>{it.value}</span>
            <span className={s.statLabel}>{it.label}</span>
          </RevealItem>
        ))}
      </Stagger>
      {b.caption && <p className={s.caption}>{b.caption}</p>}
    </div>
  )
}

function Cards({ b }) {
  return (
    <div>
      <Title>{b.title}</Title>
      <Stagger className={s.cards} gap={0.06} style={{ '--cols': b.cols || 3 }}>
        {b.items.map((it) => (
          <RevealItem key={it.title + it.kicker} className={s.card} style={{ '--cols': b.cols || 3 }}>
            {it.kicker && <span className={s.cardKicker}>{it.kicker}</span>}
            <h4>{it.title}</h4>
            <p>{it.body}</p>
          </RevealItem>
        ))}
      </Stagger>
    </div>
  )
}

function Table({ b }) {
  return (
    <Reveal>
      <Title>{b.title}</Title>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              {b.head.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>
                {r.map((cell, j) => (
                  <td key={j} data-label={b.head[j]}>
                    {cell === 'High' || cell === 'P0' ? <span className={s.sevHigh}>{cell}</span> : cell === 'Medium' || cell === 'P1' ? <span className={s.sevMed}>{cell}</span> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note && <p className={s.caption}>{b.note}</p>}
    </Reveal>
  )
}

function Img({ b }) {
  const open = useOpenImage()
  return (
    <Reveal as="figure" className={s.figure}>
      <button className={s.figureBtn} onClick={() => open(b.src)} data-cursor="Zoom" aria-label={`Open full size: ${b.alt}`}>
        <img src={b.src} alt={b.alt} loading="lazy" />
      </button>
      {b.caption && <figcaption className={s.caption}>{b.caption}</figcaption>}
    </Reveal>
  )
}

function Quotes({ b }) {
  return (
    <div>
      <Stagger className={s.quotes} gap={0.1}>
        {b.items.map((q) => (
          <RevealItem key={q.by} as="figure" className={s.quoteCard}>
            <blockquote>“{q.text}”</blockquote>
            <figcaption>{q.by}</figcaption>
          </RevealItem>
        ))}
      </Stagger>
      {b.caption && <p className={s.caption}>{b.caption}</p>}
    </div>
  )
}

function Timeline({ b }) {
  return (
    <Stagger className={s.timeline} gap={0.08}>
      {b.items.map((it, i) => (
        <RevealItem key={i} className={s.tItem}>
          <span className={s.tWhen}>{it.when}</span>
          <span className={s.tPhase}>{it.title}</span>
          <p>{it.body}</p>
          {it.gate && <span className={s.tGate}>{it.gate}</span>}
        </RevealItem>
      ))}
    </Stagger>
  )
}

function Facts({ b }) {
  return (
    <Reveal>
      <Title>{b.title}</Title>
      <dl className={s.facts}>
        {b.items.map((it) => (
          <div key={it.k}>
            <dt>{it.k}</dt>
            <dd>{it.v}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  )
}

function Compare({ b }) {
  const [from, to] = b.head || ['Before', 'After']
  return (
    <Reveal>
      <Title>{b.title}</Title>
      <div className={s.compare}>
        <div className={s.compareHead}>
          <span>{from}</span>
          <span />
          <span>{to}</span>
        </div>
        {b.rows.map(([a, c], i) => (
          <motion.div
            key={i}
            className={s.compareRow}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease }}
          >
            <span className={s.compareFrom}>{a}</span>
            <span className={s.compareArrow} aria-hidden="true">
              →
            </span>
            <span className={s.compareTo}>{c}</span>
          </motion.div>
        ))}
      </div>
      {b.note && <p className={s.caption}>{b.note}</p>}
    </Reveal>
  )
}

function Palette({ b }) {
  const [copied, setCopied] = useState('')
  const copy = async (hex) => {
    try {
      await navigator.clipboard.writeText(hex)
      setCopied(hex)
      setTimeout(() => setCopied(''), 1400)
    } catch {}
  }
  return (
    <Stagger className={s.palette} gap={0.06}>
      {b.items.map((c) => (
        <RevealItem key={c.hex} as="button" className={s.swatch} onClick={() => copy(c.hex)} aria-label={`Copy ${c.name} ${c.hex}`}>
          <span className={s.swatchColor} style={{ background: c.hex }} />
          <span className={s.swatchName}>{c.name}</span>
          <span className={s.swatchHex}>{copied === c.hex ? 'Copied ✓' : c.hex}</span>
          <span className={s.swatchRole}>{c.role}</span>
        </RevealItem>
      ))}
    </Stagger>
  )
}

function Flow({ b }) {
  return (
    <div>
      <ol className={s.flow}>
        {b.items.map((it, i) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.09, ease }}
          >
            <span className="mono">{i + 1}</span>
            {it}
          </motion.li>
        ))}
      </ol>
      {b.caption && <p className={s.caption}>{b.caption}</p>}
    </div>
  )
}

function Split({ b }) {
  return (
    <div className={s.splitBlock}>
      <Title>{b.title}</Title>
      {b.body?.map((p, i) => (
        <Reveal key={i} as="p" className={s.splitBody}>
          {p}
        </Reveal>
      ))}
      <div className={s.split}>
        <Reveal className={`${s.splitCol} ${s.splitBefore}`}>
          <span className={s.cardKicker}>{b.left.kicker}</span>
          <ul>
            {b.left.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={`${s.splitCol} ${s.splitAfter}`} delay={0.12}>
          <span className={s.cardKicker}>{b.right.kicker}</span>
          <ul>
            {b.right.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Reveal>
      </div>
      {b.note && <p className={s.caption}>{b.note}</p>}
    </div>
  )
}

function Spotlight({ b }) {
  const open = useOpenImage()
  return (
    <div className={s.spotlight}>
      {b.items.map((it, i) => (
        <div key={it.src} className={`${s.spot} ${i % 2 ? s.spotFlip : ''}`}>
          <Reveal className={s.spotShot} y={40}>
            <button className="frame" onClick={() => open(it.src)} data-cursor="Zoom" aria-label={`Open full size: ${it.title}`}>
              <div className="frame-bar">
                <i />
                <i />
                <i />
              </div>
              <img src={it.src} alt={it.title} loading="lazy" width="1440" height="1000" />
            </button>
          </Reveal>
          <Reveal className={s.spotText} delay={0.1}>
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            <h4>{it.title}</h4>
            <p>{it.body}</p>
          </Reveal>
        </div>
      ))}
    </div>
  )
}

function Gallery({ b }) {
  const open = useOpenImage()
  return (
    <div>
      <h3 className={s.blockTitle}>More screens</h3>
      <Stagger className={s.gallery} gap={0.05} amount={0.05}>
        {b.items.map((it) => (
          <RevealItem key={it.src} as="button" className={s.galleryItem} onClick={() => open(it.src)} data-cursor="Zoom">
            <span className="frame">
              <img src={it.src} alt={it.title} loading="lazy" width="1440" height="1000" />
            </span>
            <span className={s.galleryTitle}>{it.title}</span>
          </RevealItem>
        ))}
      </Stagger>
    </div>
  )
}

const blocks = {
  text: Text,
  quote: Quote,
  pull: Pull,
  note: Note,
  stats: Stats,
  cards: Cards,
  table: Table,
  image: Img,
  quotes: Quotes,
  timeline: Timeline,
  facts: Facts,
  compare: Compare,
  palette: Palette,
  flow: Flow,
  split: Split,
  spotlight: Spotlight,
  gallery: Gallery,
}
