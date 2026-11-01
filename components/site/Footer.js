'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { nav, profile } from '@/data/profile'
import { cases } from '@/data/cases'
import { onHashLink, scrollToId } from './scroll'
import LocalTime from './LocalTime'
import s from './site.module.css'

export default function Footer() {
  const pathname = usePathname()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], ['40%', '0%'])

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.6 })
    else if (!scrollToId('top')) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={ref} className={s.footer}>
      <div className="container">
        <div className={s.footTop}>
          <div className={s.footCol}>
            <span className={s.footHead}>Pages</span>
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={(e) => onHashLink(e, n.href, pathname)}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className={s.footCol}>
            <span className={s.footHead}>Case studies</span>
            {cases.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div className={s.footCol}>
            <span className={s.footHead}>Elsewhere</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.resume} download>
              Resume (PDF)
            </a>
          </div>
          <div className={`${s.footCol} ${s.footNow}`}>
            <span className={s.footHead}>Right now</span>
            <span>
              <span className="status-dot" style={{ display: 'inline-block', marginRight: 10 }} />
              {profile.status}
            </span>
            <span className="muted">
              {profile.location} · <LocalTime />
            </span>
            <button className={s.toTop} onClick={toTop}>
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
      <div className={s.footBigWrap} aria-hidden="true">
        <motion.div className={s.footBig} style={{ y }}>
          Anil <span className="serif">Giduthuri</span>
        </motion.div>
      </div>
      <div className="container">
        <div className={s.footBase}>
          <span>© {new Date().getFullYear()} Anil Kumar Giduthuri</span>
          <span>Designed in Figma, built in Next.js. No templates.</span>
        </div>
      </div>
    </footer>
  )
}
