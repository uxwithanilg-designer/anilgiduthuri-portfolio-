'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'
import BgAnimation from '@/components/BgAnimation'
import StickyAssets from '@/components/StickyAssets'
import MobileNav from '@/components/MobileNav'
import styles from './dev.module.css'

const techStack = [
  { name: 'Next.js 14', color: '#fff', bg: 'rgba(255,255,255,0.06)', icon: '▲' },
  { name: 'React.js', color: '#61dafb', bg: 'rgba(97,218,251,0.08)', icon: '⚛' },
  { name: 'HTML5', color: '#e34f26', bg: 'rgba(227,79,38,0.1)', icon: '🌐' },
  { name: 'CSS3', color: '#1572b6', bg: 'rgba(21,114,182,0.1)', icon: '🎨' },
  { name: 'Bootstrap 5', color: '#7952b3', bg: 'rgba(121,82,179,0.1)', icon: 'B' },
  { name: 'Tailwind CSS', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', icon: '💨' },
  { name: 'Tailwind CDN', color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', icon: '⚡' },
  { name: 'Animate.css', color: '#ff6b6b', bg: 'rgba(255,107,107,0.08)', icon: '✨' },
  { name: 'AOS Library', color: '#2dff9e', bg: 'rgba(45,255,158,0.08)', icon: '↑' },
  { name: 'GSAP', color: '#88ce02', bg: 'rgba(136,206,2,0.08)', icon: '🟢' },
  { name: 'Three.js', color: '#049ef4', bg: 'rgba(4,158,244,0.08)', icon: '3D' },
  { name: 'Claude API', color: '#00d4ff', bg: 'rgba(0,212,255,0.08)', icon: '🤖' },
  { name: 'OpenAI API', color: '#10a37f', bg: 'rgba(16,163,127,0.08)', icon: '⚡' },
  { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.08)', icon: 'JS' },
  { name: 'TypeScript', color: '#3178c6', bg: 'rgba(49,120,198,0.08)', icon: 'TS' },
]

const filters = ['All', 'Next.js', 'HTML + CDN', 'AI Powered', 'Dashboard', 'Landing Page', 'Mobile']

const projects = [
  {
    id: 1,
    title: 'N3xgen Agentic OS — Mission Control',
    type: 'Dashboard',
    tags: ['Next.js', 'AI Powered', 'Dashboard'],
    stack: ['Next.js 14', 'React.js', 'Claude API', 'Tailwind CSS'],
    desc: 'Enterprise AI orchestration dashboard for IT admins. Real-time system health, incident management, and audit trails.',
    color: 'cyan',
    icon: '🖥️',
    year: '2024',
    live: '#',
  },
  {
    id: 2,
    title: 'eFuse Energy Analytics Dashboard',
    type: 'Dashboard',
    tags: ['Next.js', 'Dashboard'],
    stack: ['Next.js 14', 'React.js', 'Tailwind CSS'],
    desc: 'Real-time energy monitoring dashboard with dynamic charts, alert systems, and data visualisation.',
    color: 'green',
    icon: '⚡',
    year: '2024',
    live: '#',
  },
  {
    id: 3,
    title: 'UX Portfolio — Landing Page',
    type: 'Landing Page',
    tags: ['Next.js', 'Landing Page'],
    stack: ['Next.js 14', 'React.js', 'CSS Modules'],
    desc: 'This very portfolio — built with Next.js, CSS animations, 3D skill cards, and time-based dark theme.',
    color: 'purple',
    icon: '🎨',
    year: '2025',
    live: '/',
  },
  {
    id: 4,
    title: 'SMARTEDI — EDI Workflow Page',
    type: 'Landing Page',
    tags: ['HTML + CDN', 'Landing Page'],
    stack: ['HTML5', 'Bootstrap 5', 'AOS', 'Animate.css'],
    desc: 'Electronic data interchange workflow landing page built with Bootstrap CDN and scroll animations using AOS.',
    color: 'cyan',
    icon: '🔗',
    year: '2024',
    live: '#',
  },
  {
    id: 5,
    title: 'Genie Connections — App Landing',
    type: 'Landing Page',
    tags: ['HTML + CDN', 'Landing Page', 'Mobile'],
    stack: ['HTML5', 'CSS3', 'GSAP', 'Bootstrap 5'],
    desc: 'Animated mobile app landing page with GSAP scroll triggers, feature reveals, and app store CTAs.',
    color: 'green',
    icon: '💚',
    year: '2023',
    live: '#',
  },
  {
    id: 6,
    title: 'AI Chat Interface Component',
    type: 'AI Powered',
    tags: ['Next.js', 'AI Powered'],
    stack: ['Next.js 14', 'Claude API', 'TypeScript', 'Tailwind CSS'],
    desc: 'Claude-powered chat UI with streaming responses, typing indicators, and conversation history.',
    color: 'purple',
    icon: '🤖',
    year: '2025',
    live: '#',
  },
  {
    id: 7,
    title: 'TILLI — Payments UI',
    type: 'Dashboard',
    tags: ['HTML + CDN', 'Dashboard'],
    stack: ['HTML5', 'Bootstrap 5', 'CSS3', 'JavaScript'],
    desc: 'Multi-currency payment dashboard prototype. Clean HTML with Bootstrap grid and custom CSS variables.',
    color: 'cyan',
    icon: '💳',
    year: '2022',
    live: '#',
  },
  {
    id: 8,
    title: 'Component Library Showcase',
    type: 'Landing Page',
    tags: ['HTML + CDN', 'Landing Page'],
    stack: ['HTML5', 'Tailwind CDN', 'Animate.css', 'AOS'],
    desc: 'Free UI component showcase page. Pure HTML with Tailwind CDN, scroll-triggered animations via AOS.',
    color: 'green',
    icon: '🧩',
    year: '2025',
    live: '/library',
  },
]

const colorMap = {
  cyan: { border: 'rgba(0,212,255,0.3)', bg: 'rgba(0,212,255,0.05)', tag: styles.tagCyan },
  green: { border: 'rgba(45,255,158,0.3)', bg: 'rgba(45,255,158,0.05)', tag: styles.tagGreen },
  purple: { border: 'rgba(157,78,221,0.3)', bg: 'rgba(157,78,221,0.05)', tag: styles.tagPurple },
}

export default function DevPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <>
      <BgAnimation variant="dev" />
      <StickyAssets variant="dev" />
      <MobileNav />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main className={styles.main}>

        {/* HEADER */}
        <section className={styles.pageHeader}>
          <div className="section-orb section-orb-purple" style={{width:500,height:500,top:-100,right:-80}} />
          <div className={styles.headerBg} />
          <div className={styles.inner}>
            <div className={`reveal ${styles.headerContent}`}>
              <div className={styles.pageLabel}>AI Development</div>
              <h1 className={styles.pageTitle}>
                Built with AI.<br />
                <span>Shipped with Precision.</span>
              </h1>
              <p className={styles.pageDesc}>
                I don't just design — I build. From Next.js production apps to lightweight HTML pages
                with Bootstrap CDN, here are apps and interfaces I've developed.
              </p>
              <div className={styles.headerBadges}>
                <div className={styles.hBadge}>🚀 Next.js + React</div>
                <div className={styles.hBadge}>🌐 HTML + CDN Libraries</div>
                <div className={styles.hBadge}>🤖 Claude &amp; OpenAI API</div>
                <div className={styles.hBadge}>📱 Responsive + Mobile</div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SCROLL */}
        <section className={styles.stackSection}>
          <div className={styles.stackInner}>
            <div className={styles.stackLabel}>Tech Stack</div>
            <div className={styles.stackTrack}>
              {[...techStack, ...techStack].map((t, i) => (
                <div key={i} className={styles.stackPill} style={{ color: t.color, background: t.bg, border: `1px solid ${t.color}22` }}>
                  <span className={styles.stackIcon}>{t.icon}</span>
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.projectsSection}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.sectionHead}`}>
              <h2 className={styles.sectionTitle}>Development Projects</h2>
              <div className={styles.filters}>
                {filters.map(f => (
                  <button
                    key={f}
                    className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                    onClick={() => setActiveFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.projectsGrid}>
              {filtered.map((p, i) => {
                const c = colorMap[p.color]
                return (
                  <div
                    key={p.id}
                    className={`anim-fade-up ${styles.projectCard}`}
                    style={{ transitionDelay: `${(i % 3) * 0.08}s`, borderColor: c.border }}
                  >
                    <div className={styles.cardTop} style={{ background: c.bg }}>
                      <div className={styles.cardIcon}>{p.icon}</div>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardType}>{p.type}</span>
                        <span className={styles.cardYear}>{p.year}</span>
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <p className={styles.cardDesc}>{p.desc}</p>
                      <div className={styles.cardStack}>
                        {p.stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
                      </div>
                    </div>
                    <div className={styles.cardFooter}>
                      <a href={p.live} className={styles.viewBtn} style={{ borderColor: c.border, color: p.color === 'cyan' ? 'var(--cyan)' : p.color === 'green' ? 'var(--green)' : 'var(--purple)' }}>
                        View Project →
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CDN LIBS SHOWCASE */}
        <section className={styles.cdnSection}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.cdnHeader}`}>
              <div className={styles.pageLabel}>HTML + CDN Approach</div>
              <h2 className={styles.sectionTitle}>No Build Tools? No Problem.</h2>
              <p className={styles.cdnDesc}>Sometimes the fastest solution is a clean HTML file with the right CDN links. Here are the libraries I use for rapid, no-build-step web pages.</p>
            </div>
            <div className={styles.cdnGrid}>
              {[
                { name: 'Bootstrap 5', desc: 'Responsive grid, components, utilities. The fastest way to build clean UI.', link: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', color: '#7952b3', snippet: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">' },
                { name: 'Tailwind CDN', desc: 'Utility-first CSS via CDN. No config, instant styling.', link: 'https://cdn.tailwindcss.com', color: '#38bdf8', snippet: '<script src="https://cdn.tailwindcss.com"></script>' },
                { name: 'Animate.css', desc: 'Ready-to-use CSS animations. Add classes, get animations.', link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', color: '#ff6b6b', snippet: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">' },
                { name: 'AOS (Animate on Scroll)', desc: 'Scroll-triggered reveal animations with data attributes.', link: 'https://unpkg.com/aos@2.3.1/dist/aos.css', color: '#2dff9e', snippet: '<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>' },
                { name: 'GSAP CDN', desc: 'Professional-grade animation library. Timelines, scroll triggers.', link: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', color: '#88ce02', snippet: '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>' },
                { name: 'Font Awesome', desc: 'Icon library with 1000+ icons via CDN. No download needed.', link: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', color: '#528dd7', snippet: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">' },
              ].map(lib => (
                <div key={lib.name} className={`anim-scale ${styles.cdnCard}`} style={{ borderColor: `${lib.color}25` }}>
                  <div className={styles.cdnCardTop} style={{ background: `${lib.color}0f` }}>
                    <div className={styles.cdnName} style={{ color: lib.color }}>{lib.name}</div>
                    <a href={lib.link} target="_blank" rel="noopener noreferrer" className={styles.cdnLink}>CDN ↗</a>
                  </div>
                  <div className={styles.cdnBody}>
                    <p className={styles.cdnDesc2}>{lib.desc}</p>
                    <div className={styles.cdnSnippet}>
                      <div className={styles.snippetBar}>
                        <span className={styles.snippetDot} style={{ background: '#ff5f57' }} />
                        <span className={styles.snippetDot} style={{ background: '#febc2e' }} />
                        <span className={styles.snippetDot} style={{ background: '#28c840' }} />
                        <span className={styles.snippetLabel}>HTML</span>
                      </div>
                      <code className={styles.snippetCode}>{lib.snippet}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIRE CTA */}
        <section className={styles.hireCta}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.hireCard}`}>
              <div className={styles.hireLeft}>
                <h3 className={styles.hireTitle}>Need a developer who also designs?</h3>
                <p className={styles.hireDesc}>I deliver pixel-perfect interfaces — whether it's a full Next.js app or a fast Bootstrap HTML page. Design + dev in one person.</p>
              </div>
              <div className={styles.hireActions}>
                <a href="/contact" className={styles.hireBtn}>Hire Me →</a>
                <a href="/Anil_Kumar_Giduthuri_Resume.pdf" download className={styles.hireBtnOutline}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
