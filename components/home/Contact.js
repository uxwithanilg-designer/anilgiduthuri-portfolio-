'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal, SplitText, Magnetic } from '@/components/motion'
import { profile } from '@/data/profile'
import s from './home.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className={`section ${s.contact}`}>
      <div className={s.contactGlow} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <SplitText as="h2" className={s.contactTitle} text="Have a complex product? *Let’s make it calm.*" />
        <Reveal delay={0.15}>
          <p className={`lead ${s.contactLead}`}>
            I’m looking for a senior product or UX design role where AI, data or money makes the work hard. Recruiters and
            hiring managers, I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={0.2} className={s.emailRow}>
          <a href={`mailto:${profile.email}`} className={s.email} data-cursor="Write">
            {profile.email}
          </a>
          <button className={s.copy} onClick={copy} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'y' : 'n'}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? '✓ Copied' : 'Copy email'}
              </motion.span>
            </AnimatePresence>
          </button>
        </Reveal>

        <Reveal delay={0.25} className={s.contactBtns}>
          <Magnetic>
            <a className="btn" href={`mailto:${profile.email}?subject=Hello%20Anil`}>
              Send an email
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={profile.resume} download>
              Resume (PDF)
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn-ghost" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
