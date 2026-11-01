'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { profile } from '@/data/profile'
import { cases } from '@/data/cases'
import { scrollToId, lockScroll } from './scroll'
import s from './site.module.css'

// A ⌘K menu for the portfolio, a small nod to the command palettes
// in the products shown here.
export default function CommandPalette() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const [toast, setToast] = useState('')
  const input = useRef(null)

  const goSection = (id) => {
    if (pathname === '/' && scrollToId(id)) return
    router.push(`/#${id}`)
  }

  const items = useMemo(
    () => [
      { group: 'Case studies', label: cases[0].name, hint: cases[0].kind, run: () => router.push(`/work/${cases[0].slug}`) },
      { group: 'Case studies', label: cases[1].name, hint: cases[1].kind, run: () => router.push(`/work/${cases[1].slug}`) },
      { group: 'Go to', label: 'Selected work', hint: 'Section', run: () => goSection('work') },
      { group: 'Go to', label: 'About Anil', hint: 'Section', run: () => goSection('about') },
      { group: 'Go to', label: 'How I work', hint: 'Section', run: () => goSection('process') },
      { group: 'Go to', label: 'Design + code', hint: 'Section', run: () => goSection('build') },
      { group: 'Go to', label: 'Experience', hint: 'Section', run: () => goSection('experience') },
      { group: 'Go to', label: 'Contact', hint: 'Section', run: () => goSection('contact') },
      {
        group: 'Actions',
        label: 'Copy email address',
        hint: profile.email,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email)
            setToast('Email copied')
          } catch {
            window.location.href = `mailto:${profile.email}`
          }
        },
      },
      {
        group: 'Actions',
        label: 'Download resume',
        hint: 'PDF',
        run: () => {
          const a = document.createElement('a')
          a.href = profile.resume
          a.download = ''
          a.click()
        },
      },
      { group: 'Actions', label: 'Open LinkedIn', hint: 'New tab', run: () => window.open(profile.linkedin, '_blank', 'noopener') },
      { group: 'Actions', label: 'Send an email', hint: 'Opens your mail app', run: () => (window.location.href = `mailto:${profile.email}`) },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  )

  const filtered = items.filter((i) => `${i.label} ${i.hint} ${i.group}`.toLowerCase().includes(q.toLowerCase()))

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    const onOpen = () => setOpen(true)
    window.addEventListener('keydown', onKey)
    window.addEventListener('palette:open', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('palette:open', onOpen)
    }
  }, [])

  useEffect(() => {
    lockScroll(open)
    if (open) {
      setQ('')
      setActive(0)
      setTimeout(() => input.current?.focus(), 30)
    }
  }, [open])

  useEffect(() => setActive(0), [q])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 1800)
    return () => clearTimeout(t)
  }, [toast])

  const choose = (item) => {
    setOpen(false)
    setTimeout(() => item.run(), 120)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((a) => Math.min(a + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((a) => Math.max(a - 1, 0))
    } else if (e.key === 'Enter' && filtered[active]) {
      choose(filtered[active])
    }
  }

  let lastGroup = ''

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={s.paletteWrap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              className={s.palette}
              role="dialog"
              aria-modal="true"
              aria-label="Quick menu"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={s.paletteSearch}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  ref={input}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search case studies, sections or actions…"
                  aria-label="Search"
                />
                <kbd>Esc</kbd>
              </div>
              <ul className={s.paletteList} role="listbox">
                {filtered.length === 0 && <li className={s.paletteEmpty}>Nothing matches “{q}”. Try “resume” or “AgenticOS”.</li>}
                {filtered.map((item, i) => {
                  const head = item.group !== lastGroup
                  lastGroup = item.group
                  return (
                    <li key={item.label}>
                      {head && <div className={s.paletteGroup}>{item.group}</div>}
                      <button
                        role="option"
                        aria-selected={i === active}
                        className={`${s.paletteItem} ${i === active ? s.paletteItemActive : ''}`}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => choose(item)}
                      >
                        <span>{item.label}</span>
                        <span className={s.paletteHint}>{item.hint}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
              <div className={s.paletteFoot}>
                <span>
                  <kbd>↑</kbd> <kbd>↓</kbd> to move
                </span>
                <span>
                  <kbd>Enter</kbd> to open
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toast && (
          <motion.div
            className={s.toast}
            role="status"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <span className="status-dot" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
