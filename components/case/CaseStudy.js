'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react'
import { SplitText, Reveal, ease } from '@/components/motion'
import Lightbox from '@/components/site/Lightbox'
import { scrollToId } from '@/components/site/scroll'
import Block from './Blocks'
import { ImageCtx, useOpenImage } from './imageContext'
import s from './case.module.css'


export default function CaseStudy({ c, next }) {
  // Every image in the case study can be opened full size, in reading order.
  const images = useMemo(() => {
    const out = [{ src: c.cover, title: `${c.name} · Home` }]
    c.sections.forEach((sec) =>
      sec.blocks.forEach((b) => {
        if (b.type === 'image') out.push({ src: b.src, title: b.caption || b.alt })
        if (b.type === 'spotlight' || b.type === 'gallery') b.items.forEach((it) => out.push({ src: it.src, title: it.title }))
      })
    )
    return out.filter((img, i, arr) => arr.findIndex((x) => x.src === img.src) === i)
  }, [c])
  const [open, setOpen] = useState(null)
  const openImage = useCallback((src) => setOpen(images.findIndex((i) => i.src === src)), [images])

  return (
    <ImageCtx.Provider value={openImage}>
      <article className={s.page} style={{ '--a': c.accent, '--a2': c.accent2, '--tint': c.tint }}>
        <Progress />
        <Hero c={c} />
        <div className={`container ${s.body}`}>
          <Toc sections={c.sections} />
          <div className={s.content}>
            {c.sections.map((sec, i) => (
              <section key={sec.id} id={sec.id} className={s.section}>
                <Reveal className={s.secHead}>
                  <span className={s.secNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={s.secLabel}>{sec.label}</span>
                </Reveal>
                <SplitText as="h2" className={s.secTitle} text={sec.title} stagger={0.035} />
                <div className={s.blocks}>
                  {sec.blocks.map((b, j) => (
                    <Block key={j} b={b} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <Next next={next} />
      </article>
      <Lightbox items={images} index={open === -1 ? null : open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </ImageCtx.Provider>
  )
}

function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <motion.div className={s.progress} style={{ scaleX }} aria-hidden="true" />
}

function Hero({ c }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const openImage = useOpenImage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.25'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [22, 0])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.88, 1])
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, 0])

  return (
    <header className={s.hero}>
      <div className={s.heroGlow} aria-hidden="true" />
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <Link href="/#work" className={s.back}>
            ← All work
          </Link>
        </motion.div>
        <motion.div
          className={s.heroTags}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          <span className="mono">Case study {c.index}</span>
          <span className="chip">{c.kind}</span>
          <span className="chip">{c.year}</span>
        </motion.div>
        <SplitText as="h1" inView={false} delay={0.1} className={s.heroName} text={c.name} />
        <motion.p
          className={s.heroTitle}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease }}
        >
          {c.title}
        </motion.p>
        <motion.p
          className={`lead ${s.heroSummary}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
        >
          {c.summary}
        </motion.p>
        <motion.dl
          className={s.meta}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.65 } } }}
        >
          {c.meta.map((m) => (
            <motion.div
              key={m.label}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            >
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      <div ref={ref} className={`container ${s.heroShotWrap}`}>
        <motion.button
          className={`frame ${s.heroShot}`}
          style={{ rotateX, scale, y, transformPerspective: 1400 }}
          onClick={() => openImage(c.cover)}
          data-cursor="Zoom"
          aria-label={`Open ${c.name} home screen full size`}
        >
          <div className="frame-bar">
            <i />
            <i />
            <i />
            <span>{c.slug}.app</span>
          </div>
          <img src={c.cover} alt={`${c.name} home screen`} width="1440" height="1000" />
        </motion.button>
      </div>

      <div className="container">
        <div className={s.highlights}>
          {c.highlights.map((h, i) => (
            <Reveal key={h.label} className={s.highlight} delay={i * 0.08}>
              <span className={s.highlightValue}>{h.value}</span>
              <span className={s.highlightLabel}>{h.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </header>
  )
}

function Toc({ sections }) {
  const [active, setActive] = useState(sections[0].id)
  useEffect(() => {
    const els = sections.map((x) => document.getElementById(x.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sections])

  const idx = sections.findIndex((x) => x.id === active)

  return (
    <aside className={s.toc} aria-label="On this page">
      <div className={s.tocInner}>
        <span className={s.tocHead}>On this page</span>
        <ol>
          {sections.map((sec, i) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`${s.tocLink} ${active === sec.id ? s.tocActive : ''} ${i < idx ? s.tocDone : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(sec.id)
                }}
              >
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                {sec.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}

function Next({ next }) {
  return (
    <section className={s.next} style={{ '--na': next.accent }}>
      <div className="container">
        <Link href={`/work/${next.slug}`} className={s.nextCard} data-cursor="Next">
          <div className={s.nextText}>
            <span className="eyebrow">Next case study</span>
            <span className={s.nextName}>{next.name}</span>
            <span className={s.nextTitle}>{next.title}</span>
            <span className={s.nextCta}>Read it →</span>
          </div>
          <div className={`frame ${s.nextShot}`} aria-hidden="true">
            <img src={next.cover} alt="" loading="lazy" width="1440" height="1000" />
          </div>
        </Link>
      </div>
    </section>
  )
}
