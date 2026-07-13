'use client'
import Image from 'next/image'
import styles from './About.module.css'

const coreExpertise = [
  { t: 'UX Strategy', a: '' },
  { t: 'Design Systems', a: 'a1' },
  { t: 'Enterprise Dashboards', a: '' },
  { t: 'AI Workflow UX', a: 'a2' },
  { t: 'Front-End UI Dev', a: 'a1' },
  { t: 'Accessibility', a: '' },
  { t: 'Usability Testing', a: 'a2' },
  { t: 'Design QA', a: '' },
  { t: 'B2B SaaS', a: 'a1' },
  { t: 'Figma Advanced', a: '' },
  { t: 'React & Next.js', a: 'a2' },
  { t: 'Product Discovery', a: '' },
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="section-orb section-orb-indigo" style={{ width: 500, height: 500, top: -80, right: -100 }} />
      <div className="section-orb section-orb-purple" style={{ width: 350, height: 350, bottom: 0, left: -80, animationDelay: '5s' }} />

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={`anim-fade-left ${styles.left}`}>
            <div className={styles.label}>About Me</div>
            <h2 className={styles.heading}>
              I design at the<br />
              crossroads of <em>people</em><br />
              and <em>complex systems.</em>
            </h2>
            <p className={styles.para}>
              I'm a Senior UX/UI Designer based in Hyderabad with 8+ years building products
              that people in banking, healthcare, fintech, and education actually use every day.
              I'm drawn to the hard stuff — multi-user enterprise systems, compliance workflows,
              AI orchestration platforms — and I genuinely enjoy figuring out how to make
              complicated things feel simple.
            </p>
            <p className={styles.para}>
              My front-end fluency in React, Next.js, HTML, and CSS means I can go beyond
              Figma. I write the code, build the prototypes, and close the gap between what's
              designed and what ships. AI-assisted development (vibe coding) is now a core
              part of how I work — it's made me significantly faster at prototyping and
              validation without sacrificing quality.
            </p>

            <div className={styles.expertiseLabel}>Core Expertise</div>
            <div className={styles.tags}>
              {coreExpertise.map((s, i) => (
                <span
                  key={s.t}
                  className={`${styles.tag} ${s.a ? styles[s.a] : ''} anim-fade-up anim-d${(i % 5) + 1}`}
                >
                  {s.t}
                </span>
              ))}
            </div>

            <div className={styles.educationCard}>
              <div className={styles.eduIcon}>🎓</div>
              <div>
                <div className={styles.eduTitle}>Google UX Design Professional Certificate</div>
                <div className={styles.eduSub}>Coursera / Google · Seven-course specialisation covering UX foundations, research, ideation, wireframes, prototypes, usability testing and high-fidelity product design.</div>
                <div className={styles.eduDeg}>Bachelor of Commerce (B.Com.)</div>
              </div>
            </div>
          </div>

          <div className={`anim-fade-right ${styles.right}`}>
            <div className={styles.photoWrap}>
              <div className={styles.photoFrame}>
                <Image
                  src="/anil-profile.png"
                  alt="Anil Kumar Giduthuri — Senior UX/UI Designer"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
              <div className={styles.frameAccent} />

              {/* Stat badge: TILLI 40% */}
              <div className={`${styles.badge} anim-scale anim-d2`}>
                <div className={styles.badgeNum}>40%</div>
                <div className={styles.badgeLbl}>Task completion<br />boost at TILLI</div>
              </div>

              {/* Stat badge: 8+ years */}
              <div className={`${styles.badge2} anim-scale anim-d3`}>
                <div className={styles.badge2Num}>8+</div>
                <div className={styles.badge2Lbl}>Years<br />Experience</div>
              </div>
            </div>

            {/* Working style card */}
            <div className={`${styles.workStyleCard} anim-fade-up anim-d4`}>
              <div className={styles.workStyleIcon}>⚡</div>
              <div>
                <div className={styles.workStyleTitle}>Working Style</div>
                <div className={styles.workStyleText}>
                  Structured UX thinking + hands-on prototyping. I help teams test ideas earlier,
                  communicate decisions clearly, and move from Figma to implementation with fewer gaps.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
