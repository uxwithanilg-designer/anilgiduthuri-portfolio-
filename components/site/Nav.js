'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Wordmark } from './Logo'
import { nav, profile } from '@/data/profile'
import { onHashLink, lockScroll, scrollToId } from './scroll'
import { ease } from '@/components/motion'
import s from './site.module.css'

export const openPalette = () => window.dispatchEvent(new Event('palette:open'))

export default function Nav() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(null)
  const [isMac, setIsMac] = useState(true)

  useEffect(() => setIsMac(/Mac|iPhone|iPad/.test(navigator.platform)), [])

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 24)
    setHidden(y > 320 && y > prev + 2 && !open)
    if (y < prev - 2) setHidden(false)
  })

  useEffect(() => {
    lockScroll(open)
    return () => lockScroll(false)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const go = (e, href) => {
    if (open) {
      // The sheet locks scrolling, so unlock first and scroll on the next frame.
      const [path, hash] = href.split('#')
      setOpen(false)
      if (hash && (path || '/') === pathname) {
        e.preventDefault()
        lockScroll(false)
        history.replaceState(null, '', `#${hash}`)
        requestAnimationFrame(() => scrollToId(hash))
      }
      return
    }
    onHashLink(e, href, pathname)
  }

  return (
    <>
      <motion.header
        className={`${s.nav} ${solid ? s.navSolid : ''}`}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className={s.navInner}>
          <Link href="/" className={s.brand} aria-label="Anil Giduthuri, home" onClick={(e) => go(e, '/#top')}>
            <Wordmark />
          </Link>

          <nav className={s.links} aria-label="Main" onMouseLeave={() => setHover(null)}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={s.link}
                onMouseEnter={() => setHover(item.href)}
                onClick={(e) => go(e, item.href)}
              >
                {hover === item.href && (
                  <motion.span layoutId="nav-pill" className={s.linkPill} transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className={s.linkText}>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className={s.actions}>
            <button className={s.kbdBtn} onClick={openPalette} aria-label="Open quick menu">
              <span>Quick menu</span>
              <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
              <kbd>K</kbd>
            </button>
            <a className={`btn btn-sm ${s.resumeBtn}`} href={profile.resume} download>
              Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
              </svg>
            </a>
            <button
              className={`${s.burger} ${open ? s.burgerOpen : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={s.sheet}
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
          >
            <nav className={s.sheetLinks} aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease }}
                >
                  <Link href={item.href} className={s.sheetLink} onClick={(e) => go(e, item.href)}>
                    <span className="mono">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className={s.sheetFoot}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a className="btn" href={profile.resume} download>
                Download resume
              </a>
              <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
