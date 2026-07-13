'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Work',       href: '/#work'       },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills',     href: '/#skills'     },
  { label: 'AI Dev',     href: '/dev'         },
  { label: 'Contact',    href: '/contact'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>AG</div>
        <span>Anil Kumar</span>
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        {navLinks.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={pathname === l.href ? styles.active : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.navActions}>
        <a href="/Anil_Kumar_Giduthuri_Resume_2026.pdf" download className={styles.resumeBtn}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Resume
        </a>
        <a href="/contact" className={styles.cta}>Let's Connect →</a>
      </div>

      {/* Mobile hamburger */}
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span className={`${styles.hLine} ${menuOpen ? styles.hOpen1 : ''}`}/>
        <span className={`${styles.hLine} ${menuOpen ? styles.hOpen2 : ''}`}/>
        <span className={`${styles.hLine} ${menuOpen ? styles.hOpen3 : ''}`}/>
      </button>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((l) => (
          <Link key={l.label} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a href="/Anil_Kumar_Giduthuri_Resume_2026.pdf" download className={styles.mobileResume}>
          ↓ Download Resume
        </a>
      </div>
    </nav>
  )
}
