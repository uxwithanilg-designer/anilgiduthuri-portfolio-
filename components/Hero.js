'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const roles = [
  'Senior UX/UI Designer',
  'Design Systems Architect',
  'AI Front-End Developer',
  'Enterprise UX Specialist',
]

// Skill orbit data
const orbitSkills = [
  { label: 'Figma', icon: '✦', ring: 1, angle: 0,   color: '#818cf8', desc: 'Design Systems' },
  { label: 'React', icon: '⬡', ring: 1, angle: 72,  color: '#67e8f9', desc: 'Front-End Dev' },
  { label: 'UX Research', icon: '◎', ring: 1, angle: 144, color: '#34d399', desc: 'User Research' },
  { label: 'Next.js', icon: '▲', ring: 1, angle: 216, color: '#f0f0fa', desc: 'Full-Stack' },
  { label: 'WCAG 2.1', icon: '♿', ring: 1, angle: 288, color: '#fbbf24', desc: 'Accessibility' },

  { label: 'Claude AI', icon: '⬥', ring: 2, angle: 36,  color: '#c084fc', desc: 'AI Development' },
  { label: 'Tailwind', icon: '◈', ring: 2, angle: 108, color: '#38bdf8', desc: 'CSS Framework' },
  { label: 'Prototyping', icon: '◉', ring: 2, angle: 180, color: '#a78bfa', desc: 'High Fidelity' },
  { label: 'Enterprise', icon: '⊞', ring: 2, angle: 252, color: '#6ee7b7', desc: 'B2B SaaS' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const containerRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 72)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2400)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38)
      } else {
        setIsDeleting(false)
        setRoleIdx((i) => (i + 1) % roles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIdx])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Floating particles */}
      <div className={styles.particles}>
        {[
          { t: '18%', l: '8%',  d: '0s',   o: 0.35, dur: '10s' },
          { t: '72%', l: '18%', d: '2.5s',  o: 0.25, dur: '9s'  },
          { t: '38%', l: '4%',  d: '0.8s',  o: 0.2,  dur: '14s', c: '#10b981' },
          { t: '82%', l: '78%', d: '3.2s',  o: 0.28, dur: '11s' },
          { t: '12%', l: '55%', d: '1.8s',  o: 0.3,  c: '#a855f7', dur: '13s' },
          { t: '58%', l: '28%', d: '4.5s',  o: 0.18, c: '#10b981', dur: '10s' },
          { t: '90%', l: '42%', d: '1.1s',  o: 0.22, dur: '12s' },
          { t: '30%', l: '90%', d: '3.8s',  o: 0.15, c: '#a855f7', dur: '8s' },
        ].map((p, i) => (
          <div key={i} className={styles.particle}
            style={{ top: p.t, left: p.l, animationDelay: p.d, opacity: p.o, background: p.c || '#6366f1', animationDuration: p.dur }} />
        ))}
      </div>

      {/* LEFT */}
      <div className={styles.heroLeft}>
        <div className={styles.availBadge}>
          <span className={styles.availDot} />
          <span>Open to full-time &amp; freelance</span>
        </div>

        <h1 className={styles.name}>
          Anil Kumar
          <span className={styles.nameGrad}> Giduthuri</span>
        </h1>

        <div className={styles.roleWrap}>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.roleCursor} />
        </div>

        <p className={styles.desc}>
          I've spent 8+ years turning messy, complex problems into clean, intuitive digital products.
          My work sits at the crossroads of UX strategy, design systems, and front-end development —
          so the handoff gap between design and engineering? I've essentially made that my job to close it.
        </p>

        <div className={styles.ctas}>
          <a href="#work" className={styles.btnPrimary}>
            <span>See My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/Anil_Kumar_Giduthuri_Resume_2026.pdf" className={styles.btnOutline} download>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            <span>Download Resume</span>
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { n: '8+', l: 'Years exp.' },
            { n: '20+', l: 'Products shipped' },
            { n: '5', l: 'Companies' },
            { n: 'B2B', l: 'SaaS focus' },
          ].map(({ n, l }) => (
            <div key={l} className={styles.stat}>
              <div className={styles.statNum}>{n}</div>
              <div className={styles.statLabel}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Skill Orbit System */}
      <div className={styles.heroRight} ref={containerRef}>
        <div className={styles.orbitSystem}>

          {/* SVG orbit rings */}
          <svg className={styles.orbitSvg} viewBox="0 0 500 500" fill="none">
            {/* Outer orbit ring */}
            <circle cx="250" cy="250" r="210" stroke="rgba(99,102,241,0.12)" strokeWidth="1" strokeDasharray="6 4"/>
            {/* Inner orbit ring */}
            <circle cx="250" cy="250" r="130" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="4 6"/>
            {/* Subtle cross lines */}
            <line x1="40" y1="250" x2="460" y2="250" stroke="rgba(99,102,241,0.05)" strokeWidth="1"/>
            <line x1="250" y1="40" x2="250" y2="460" stroke="rgba(99,102,241,0.05)" strokeWidth="1"/>
            {/* Diagonal guides */}
            <line x1="102" y1="102" x2="398" y2="398" stroke="rgba(99,102,241,0.04)" strokeWidth="1"/>
            <line x1="398" y1="102" x2="102" y2="398" stroke="rgba(99,102,241,0.04)" strokeWidth="1"/>
          </svg>

          {/* Animated orbit ring 1 — outer */}
          <div className={styles.ring1Animated}>
            <svg viewBox="0 0 420 420" fill="none">
              <circle cx="210" cy="210" r="200"
                stroke="url(#grad1)" strokeWidth="1.5"
                strokeDasharray="16 8" strokeLinecap="round"/>
              <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="420" y2="420" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Animated orbit ring 2 — inner */}
          <div className={styles.ring2Animated}>
            <svg viewBox="0 0 260 260" fill="none">
              <circle cx="130" cy="130" r="120"
                stroke="url(#grad2)" strokeWidth="1"
                strokeDasharray="10 6" strokeLinecap="round"/>
              <defs>
                <linearGradient id="grad2" x1="0" y1="0" x2="260" y2="260" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Center core */}
          <div className={styles.orbitCore}>
            <div className={styles.orbitCorePing} />
            <div className={styles.orbitCoreInner}>
              <div className={styles.coreProfile}>
                <div className={styles.coreInitials}>AK</div>
              </div>
              <div className={styles.coreLabel}>UX + Dev</div>
              <div className={styles.coreSub}>8+ years</div>
            </div>
          </div>

          {/* Ring 1 — outer skill nodes */}
          {orbitSkills.filter(s => s.ring === 1).map((skill, i) => {
            const rad = (skill.angle - 90) * (Math.PI / 180)
            const r = 210
            const cx = 250 + r * Math.cos(rad)
            const cy = 250 + r * Math.sin(rad)
            // Convert to % of container
            const x = (cx / 500) * 100
            const y = (cy / 500) * 100
            return (
              <div
                key={skill.label}
                className={`${styles.skillNode} ${activeSkill === skill.label ? styles.skillNodeActive : ''}`}
                style={{ left: `${x}%`, top: `${y}%`, '--skill-color': skill.color, animationDelay: `${i * 0.4}s` }}
                onMouseEnter={() => setActiveSkill(skill.label)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className={styles.skillNodeIcon}>{skill.icon}</div>
                <div className={styles.skillNodeLabel}>{skill.label}</div>
                <div className={styles.skillNodeDesc}>{skill.desc}</div>
                <div className={styles.skillNodeGlow} />
              </div>
            )
          })}

          {/* Ring 2 — inner skill nodes */}
          {orbitSkills.filter(s => s.ring === 2).map((skill, i) => {
            const rad = (skill.angle - 90) * (Math.PI / 180)
            const r = 130
            const cx = 250 + r * Math.cos(rad)
            const cy = 250 + r * Math.sin(rad)
            const x = (cx / 500) * 100
            const y = (cy / 500) * 100
            return (
              <div
                key={skill.label}
                className={`${styles.skillNodeSm} ${activeSkill === skill.label ? styles.skillNodeActive : ''}`}
                style={{ left: `${x}%`, top: `${y}%`, '--skill-color': skill.color, animationDelay: `${i * 0.3 + 0.2}s` }}
                onMouseEnter={() => setActiveSkill(skill.label)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className={styles.skillNodeSmIcon}>{skill.icon}</div>
                <div className={styles.skillNodeSmLabel}>{skill.label}</div>
              </div>
            )
          })}

          {/* Tooltip */}
          {activeSkill && (
            <div className={styles.skillTooltip}>
              {orbitSkills.find(s => s.label === activeSkill)?.label}
            </div>
          )}

          {/* Floating accent tags */}
          <div className={styles.accentTag} style={{ top: '8%', right: '5%', animationDelay: '0s' }}>
            <span className={styles.accentDot} style={{ background: '#10b981' }}/>Figma Advanced
          </div>
          <div className={styles.accentTag} style={{ bottom: '12%', left: '4%', animationDelay: '1.5s' }}>
            <span className={styles.accentDot} style={{ background: '#818cf8' }}/>WCAG 2.1 AA
          </div>
          <div className={styles.accentTag} style={{ top: '52%', right: '2%', animationDelay: '3s' }}>
            <span className={styles.accentDot} style={{ background: '#c084fc' }}/>AI-Assisted Dev
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
