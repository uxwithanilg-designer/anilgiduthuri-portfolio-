'use client'
import { useState } from 'react'
import styles from './Sections.module.css'

/* ── MARQUEE ── */
const marqueeItems = [
  'UX Strategy', 'Design Systems', 'Enterprise AI', 'B2B SaaS',
  'Next.js 14', 'React.js', 'Figma Advanced', 'WCAG 2.1',
  'Claude API', 'AI-Assisted Dev', 'Information Architecture', 'Usability Testing',
]

export function Marquee() {
  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        {[...marqueeItems, ...marqueeItems].map((t, i) => (
          <span key={i} className={styles.marqueeItem}>
            <span className={styles.marqueeDot} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── WORK ── */
/* ── WORK ── */
const caseStudies = [
  {
    id: 1, bg: 'bg1', mockup: 'dashboard',
    company: 'CloudGen Systems', period: 'Feb 2024 – Present',
    tags: [{ t: 'Enterprise AI', c: 'indigo' }, { t: 'B2B SaaS', c: 'violet' }],
    title: 'N3xgen Agentic OS',
    subtitle: 'AI Orchestration Platform UI',
    desc: 'Mission control for IT admins — guided task flows, dry-run simulation, AI agent memory, forensic audit timelines, and compliance dashboards.',
    result: '30s incident response',
    image: '/01.png'
  },
  {
    id: 2, bg: 'bg5', mockup: 'dashboard',
    company: 'Aura Health', period: '2023 – 2024',
    tags: [{ t: 'Healthcare', c: 'emerald' }, { t: 'Patient Portal', c: 'sky' }],
    title: 'Aura Health Care',
    subtitle: 'Healthcare & Wellness Platform',
    desc: 'Comprehensive patient monitoring dashboard and wellness platform. Features include real-time vital tracking, clinical workflows, and accessible electronic health records.',
    result: 'Streamlined clinical workflows',
    image: '/02.png'
  }
]

export function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  return (
    <section id="work" className={styles.work}>
      <div className="section-orb section-orb-purple" style={{ width: 600, height: 600, top: 100, left: -200 }} />
      <div className="section-orb section-orb-indigo" style={{ width: 400, height: 400, bottom: 0, right: -100, animationDelay: '4s' }} />
      <div className={styles.inner}>
        <div className={styles.workHeader}>
          <div className="anim-fade-left">
            <div className={styles.sectionLabel}>Selected Work</div>
            <h2 className={styles.sectionTitle}>Case Studies</h2>
            <p className={styles.sectionSub}>
              Deep dive into Enterprise AI orchestration and consumer social discovery.
            </p>
          </div>
        </div>

        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((p, i) => (
            <div
              key={p.id}
              className={`${styles.caseCard} anim-fade-up anim-d${i + 1} grad-border`}
              onClick={() => setSelectedCaseStudy(p)}
              style={{ cursor: 'pointer' }}
            >
              <div className={`${styles.cardVisual} ${styles[p.bg]}`}>
                <MockupUI type={p.mockup} />
                <div className={styles.cardOverlay} />
                <div className={styles.cardCompany}>{p.company}</div>
                <div className={styles.cardLink} aria-label="Preview Case Study">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTags}>
                  {p.tags.map((t) => (
                    <span key={t.t} className={`${styles.cardTag} ${styles['tag_' + t.c]}`}>{t.t}</span>
                  ))}
                </div>
                <div className={styles.cardTitle}>{p.title}</div>
                <div className={styles.cardSub}>{p.subtitle}</div>
                <div className={styles.cardDesc}>{p.desc}</div>
                <div className={styles.cardResult}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {p.result}
                </div>
                <div className={styles.cardPeriod}>{p.period}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.workHeader} style={{ marginTop: 100 }}>
          <div className="anim-fade-left">
            <div className={styles.sectionLabel}>Live Products</div>
            <h2 className={styles.sectionTitle}>Developed Applications</h2>
            <p className={styles.sectionSub}>
              Fully functional, production-ready frontend builds translated pixel-perfectly from design.
            </p>
          </div>
        </div>

        <div className={styles.caseStudiesGrid}>
          <a
            href="/Agentic website/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.caseCard} anim-fade-up anim-d1 grad-border`}
            style={{ textDecoration: 'none' }}
          >
            <div className={`${styles.cardVisual} ${styles.bg6}`}>
              <MockupUI type="portfolio" />
              <div className={styles.cardOverlay} />
              <div className={styles.cardCompany}>CloudGen Systems</div>
              <div className={styles.cardLink} aria-label="Open Website">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTags}>
                <span className={`${styles.cardTag} ${styles.tag_sky}`}>HTML/CSS/JS</span>
                <span className={`${styles.cardTag} ${styles.tag_indigo}`}>Production Build</span>
              </div>
              <div className={styles.cardTitle}>Agentic OS Website</div>
              <div className={styles.cardSub}>Frontend Web Development</div>
              <div className={styles.cardDesc}>A fully developed frontend website featuring modular architecture, interactive animations, and a highly responsive layout—built directly from Figma designs.</div>
              <div className={styles.cardResult}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Deployed live in public folder
              </div>
              <div className={styles.cardPeriod}>2024</div>
            </div>
          </a>

          <a
            href="https://www.bubird.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.caseCard} anim-fade-up anim-d2 grad-border`}
            style={{ textDecoration: 'none' }}
          >
            <div className={`${styles.cardVisual} ${styles.bg3}`}>
              <MockupUI type="dashboard" />
              <div className={styles.cardOverlay} />
              <div className={styles.cardCompany}>Bubird</div>
              <div className={styles.cardLink} aria-label="Open Website">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTags}>
                <span className={`${styles.cardTag} ${styles.tag_violet}`}>Next.js</span>
                <span className={`${styles.cardTag} ${styles.tag_emerald}`}>Live Product</span>
              </div>
              <div className={styles.cardTitle}>Bubird Web Platform</div>
              <div className={styles.cardSub}>Live Production Application</div>
              <div className={styles.cardDesc}>A fully functional, live web platform. Developed with modern frameworks ensuring high performance, accessibility, and a seamless user experience.</div>
              <div className={styles.cardResult}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Active in Production
              </div>
              <div className={styles.cardPeriod}>2024</div>
            </div>
          </a>
        </div>

        <div className={styles.workHeader} style={{ marginTop: 100 }}>
          <div className="anim-fade-left">
            <div className={styles.sectionLabel}>Design Resources</div>
            <h2 className={styles.sectionTitle}>Portfolio & Workspace</h2>
            <p className={styles.sectionSub}>
              Explore my complete visual design journey, UI components, and raw Figma files.
            </p>
          </div>
        </div>

        <div className={styles.caseStudiesGrid}>
          <a
            href="https://www.behance.net/anilgiduthuri99"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.caseCard} anim-fade-up anim-d1 grad-border`}
            style={{ textDecoration: 'none' }}
          >
            <div className={`${styles.cardVisual} ${styles.bg1}`}>
              <MockupUI type="portfolio" />
              <div className={styles.cardOverlay} />
              <div className={styles.cardCompany}>Behance</div>
              <div className={styles.cardLink} aria-label="Open Behance">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTags}>
                <span className={`${styles.cardTag} ${styles.tag_indigo}`}>Case Studies</span>
                <span className={`${styles.cardTag} ${styles.tag_sky}`}>Visual Design</span>
              </div>
              <div className={styles.cardTitle}>Behance Portfolio</div>
              <div className={styles.cardSub}>Visual Design & Case Studies</div>
              <div className={styles.cardDesc}>Explore my extensive gallery of UI/UX case studies, visual design explorations, and full-length project presentations on Behance.</div>
              <div className={styles.cardResult}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                View full gallery
              </div>
              <div className={styles.cardPeriod}>External</div>
            </div>
          </a>

          <a
            href="https://www.figma.com/design/vFOiAfsH4b0bM5gPc0RLn4/Anil-Kumar-Giduthuri-Portfolio?node-id=8-18414&t=ZXvEt7tW02BTPsEB-1"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.caseCard} anim-fade-up anim-d2 grad-border`}
            style={{ textDecoration: 'none' }}
          >
            <div className={`${styles.cardVisual} ${styles.bg5}`}>
              <MockupUI type="dashboard" />
              <div className={styles.cardOverlay} />
              <div className={styles.cardCompany}>Figma</div>
              <div className={styles.cardLink} aria-label="Open Figma">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTags}>
                <span className={`${styles.cardTag} ${styles.tag_violet}`}>Design Systems</span>
                <span className={`${styles.cardTag} ${styles.tag_emerald}`}>Auto-layout</span>
              </div>
              <div className={styles.cardTitle}>Figma Workspace</div>
              <div className={styles.cardSub}>Raw Files & Design Systems</div>
              <div className={styles.cardDesc}>Dive into the raw Figma files. See exactly how I structure design systems, organize UI components, and build scalable auto-layout structures.</div>
              <div className={styles.cardResult}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Inspect my files
              </div>
              <div className={styles.cardPeriod}>External</div>
            </div>
          </a>
        </div>
      </div>

      {selectedCaseStudy && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCaseStudy(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedCaseStudy(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className={styles.modalHeader}>
              <h3>{selectedCaseStudy.title}</h3>
              <p>{selectedCaseStudy.subtitle}</p>
            </div>
            <div className={styles.modalScrollArea}>
              <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} className={styles.modalImage} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function MockupUI({ type }) {
  if (type === 'mobile') return (
    <div className={styles.mockupCenter}>
      <div className={styles.mockPhone}>
        <div className={styles.mockPhoneNotch} />
        <div className={styles.mockPhoneContent}>
          <div className={`${styles.mockLine} ${styles.mockLineAccent}`} style={{ width: '60%' }} />
          <div className={styles.mockLine} style={{ width: '90%' }} />
          <div className={styles.mockCards}>
            {[1,2].map(i => <div key={i} className={styles.mockCard} />)}
          </div>
          <div className={styles.mockLine} style={{ width: '75%' }} />
          <div className={styles.mockLine} style={{ width: '55%' }} />
          <div className={styles.mockPhoneBtn} />
        </div>
      </div>
    </div>
  )
  if (type === 'learning') return (
    <div className={styles.mockupCenter}>
      <div className={styles.mockPhone}>
        <div className={styles.mockPhoneNotch} />
        <div className={styles.mockPhoneContent}>
          <div className={styles.mockQuizHeader}>
            <div className={`${styles.mockLine} ${styles.mockLineGreen}`} style={{ width: '50%' }} />
            <div className={styles.mockProgress}><div className={styles.mockProgressFill} /></div>
          </div>
          <div className={styles.mockQuizArea}>
            {['A', 'B', 'C', 'D'].map((opt, i) => (
              <div key={opt} className={`${styles.mockOption} ${i === 1 ? styles.mockOptionActive : ''}`}>
                <div className={styles.mockOptionDot} />
                <div className={styles.mockLine} style={{ width: `${60 + i*8}%`, height: 4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
  if (type === 'pipeline') return (
    <div className={styles.mockupCenter}>
      <div className={styles.mockPipeline}>
        {['INPUT', 'MAP', 'VALIDATE', 'OUTPUT'].map((n, i) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <div className={`${styles.pipeNode} ${styles['pipeNode' + (i % 3)]}`}>{n}</div>
            {i < 3 && <div className={styles.pipeArrow}/>}
          </div>
        ))}
      </div>
    </div>
  )
  if (type === 'portfolio') return (
    <div className={styles.mockupCenter}>
      <div className={styles.mockPortfolio}>
        <div className={styles.mockPortNav}>
          <div className={styles.mockNavDot} />
          <div className={`${styles.mockLine} ${styles.mockLineAccent}`} style={{ width: '30%', height: 4 }} />
          <div className={styles.mockLine} style={{ width: '40%', height: 4 }} />
        </div>
        <div className={styles.mockPortHero}>
          <div className={styles.mockLine} style={{ width: '70%', height: 8 }} />
          <div className={`${styles.mockLine} ${styles.mockLineAccent}`} style={{ width: '50%', height: 8 }} />
          <div className={styles.mockLine} style={{ width: '80%', height: 4 }} />
          <div className={styles.mockLine} style={{ width: '60%', height: 4 }} />
        </div>
        <div className={styles.mockPortCards}>
          {[1,2].map(i => <div key={i} className={styles.mockPortCard}><div className={styles.mockLine} style={{ height: 40 }} /></div>)}
        </div>
      </div>
    </div>
  )
  if (type === 'smartedi') return (
    <div className={styles.mockupCenter}>
      <div className={styles.dashScreen}>
        <div className={styles.dashBar}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }}/>)}
        </div>
        <div className={styles.dashContent}>
          <div className={styles.mockDataTable}>
            {[1,2,3].map(i => (
              <div key={i} className={styles.mockTableRow}>
                <div className={`${styles.mockLine} ${i === 1 ? styles.mockLineAccent : ''}`} style={{ width: '20%', height: 5 }} />
                <div className={styles.mockLine} style={{ width: '35%', height: 5 }} />
                <div className={`${styles.mockLine} ${i === 2 ? styles.mockLineGreen : ''}`} style={{ width: '25%', height: 5 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
  // default: dashboard / chart / form
  return (
    <div className={styles.mockupCenter}>
      <div className={styles.dashScreen}>
        <div className={styles.dashBar}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: '50%', background: c }}/>)}
        </div>
        <div className={styles.dashContent}>
          <div className={`${styles.mockLine} ${styles.mockLineAccent}`} style={{ width: '30%' }}/>
          <div className={styles.mockLine} style={{ width: '90%' }}/>
          <div className={styles.mockCards}>
            {[1,2,3].map(i => <div key={i} className={styles.mockCard}/>)}
          </div>
          {type === 'chart' && (
            <div className={styles.mockChart}>
              {[40,65,45,80,55,70,60].map((h, i) => (
                <div key={i} className={styles.mockBar} style={{ height: `${h}%` }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


/* ── EXPERIENCE TIMELINE ── */
const experience = [
  {
    company: 'CloudGen Systems Pvt Ltd',
    role: 'Senior UX Designer — Product & AI Front-End',
    period: 'Feb 2024 – Present',
    location: 'Hyderabad, India',
    color: 'indigo',
    bullets: [
      'Led product design for N3xgen Agentic OS — an enterprise AI orchestration platform used by IT admins, process architects, and compliance teams in banking and healthcare.',
      'Simplified complex monitoring and execution workflows into Mission Control dashboards with guided task flows, dry-run states, and safety locks.',
      'Built and refined responsive coded prototypes using Next.js, React, HTML, CSS, Tailwind, and Bootstrap, with AI coding tools for faster design-to-frontend iteration.',
      'Established reusable Figma components and design-to-code patterns that improved consistency and reduced handoff ambiguity across product teams.',
    ],
    products: ['N3xgen Agentic OS', 'N3xgen 7.eleven', 'eFuse Energy Dashboard', 'SMARTEDI'],
  },
  {
    company: 'Genie Connections',
    role: 'Freelance UX/UI & Front-End Designer',
    period: 'Feb 2023 – Jan 2024',
    location: 'Remote',
    color: 'emerald',
    bullets: [
      'Owned UX and visual design for a social discovery and dating app across iOS and Android — covering onboarding, matching, messaging, and location-aware experiences.',
      'Designed original interaction patterns including Two-Screen Swipe, QJump, Fetch, and Bluetooth proximity matching while keeping privacy and consent easy to understand.',
      'Built high-fidelity interactive and coded prototypes using Figma, HTML, CSS, and React to validate responsive states and micro-interactions before development.',
      'Completed three rounds of prototype testing and used feedback to improve onboarding clarity and overall session flow.',
    ],
    products: [],
  },
  {
    company: 'TILLI Software India Pvt Ltd',
    role: 'Senior UX Designer & Front-End UI Contributor',
    period: 'May 2022 – Jan 2023',
    location: 'Remote',
    color: 'violet',
    bullets: [
      'Led UX for a global payments and communications platform supporting multi-currency transactions and international B2B users.',
      'Redesigned payment setup and transaction flows — improving task completion by 40%+ in usability testing by reducing cognitive load and clarifying decision points.',
      'Consolidated fragmented notification preferences into one clear, scannable communication settings panel.',
      'Partnered with engineers to translate Figma designs into reusable responsive UI components using HTML, CSS, Bootstrap, and React.',
    ],
    products: [],
  },
  {
    company: "BYJU'S — Think & Learn",
    role: 'UX/UI Designer',
    period: 'Jan 2022 – May 2022',
    location: 'Remote',
    color: 'sky',
    bullets: [
      'Designed child-centred learning interfaces for K-12 students — lesson modules, quiz flows, video-player states, and progress feedback.',
      'Used clear visual hierarchy, large touch targets, and engaging layouts to make learning easier to understand across devices.',
      'Worked with content, product, and engineering teams to refine interactions, support responsive implementation, and complete visual QA.',
    ],
    products: [],
  },
  {
    company: 'Krify Software Technologies',
    role: 'UX/UI Designer',
    period: 'Mar 2018 – Oct 2021',
    location: 'Kakinada, India',
    color: 'amber',
    bullets: [
      'Designed responsive web and mobile products for multiple client projects — from requirement discovery and user flows through wireframes, high-fidelity UI, and prototypes.',
      'Created reusable UI patterns, style guides, and developer-ready specifications across varied business domains.',
      'Collaborated closely with front-end teams using practical HTML and CSS knowledge to support implementation and improve design accuracy.',
    ],
    products: [],
  },
]

export function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="section-orb section-orb-indigo" style={{ width: 500, height: 500, top: 0, left: -150 }} />
      <div className="section-orb section-orb-purple" style={{ width: 400, height: 400, bottom: 100, right: -100, animationDelay: '5s' }} />
      <div className={styles.inner}>
        <div className={styles.expHeader}>
          <div className="anim-fade-left">
            <div className={styles.sectionLabel}>Career</div>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <p className={styles.sectionSub}>
              8+ years working with product teams to design things that actually make sense.
            </p>
          </div>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`${styles.timelineItem} anim-fade-up anim-d${(i % 3) + 1}`}
            >
              <div className={`${styles.timelineDot} ${styles['dot_' + exp.color]}`}>
                <div className={`${styles.timelinePing} ${styles['ping_' + exp.color]}`} />
              </div>
              <div className={`${styles.timelineCard} grad-border`}>
                <div className={styles.expMeta}>
                  <div className={`${styles.expCompany} ${styles['company_' + exp.color]}`}>{exp.company}</div>
                  <div className={styles.expPeriod}>{exp.period}</div>
                </div>
                <div className={styles.expRole}>{exp.role}</div>
                <div className={styles.expLocation}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {exp.location}
                </div>
                <ul className={styles.expBullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className={styles.expBullet}>{b}</li>
                  ))}
                </ul>
                {exp.products.length > 0 && (
                  <div className={styles.expProducts}>
                    <span className={styles.expProductsLabel}>Products:</span>
                    {exp.products.map((p) => (
                      <span key={p} className={styles.expProduct}>{p}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SKILLS ── */
const skillGroups = [
  {
    category: 'UX & Product Design',
    color: 'indigo',
    icon: '🎨',
    skills: ['UX Strategy', 'User Research', 'Journey Mapping', 'Information Architecture', 'Wireframing', 'Interaction Design', 'Prototyping', 'Usability Testing', 'Heuristic Evaluation', 'Product Discovery'],
  },
  {
    category: 'Design Systems & UI',
    color: 'violet',
    icon: '⚙️',
    skills: ['Component Libraries', 'Responsive Design', 'Mobile-First UI', 'Enterprise Dashboards', 'Data Visualisation', 'Typography', 'Color Systems', 'Iconography', 'Motion Design', 'Branding'],
  },
  {
    category: 'Front-End Development',
    color: 'sky',
    icon: '💻',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Next.js', 'Responsive Layouts', 'Component-Driven UI', 'Browser Dev Tools', 'Git & GitHub'],
  },
  {
    category: 'AI-Assisted Development',
    color: 'emerald',
    icon: '🤖',
    skills: ['Vibe Coding', 'Prompt-Driven Prototyping', 'GitHub Copilot', 'Claude API', 'LLM Design-to-Code Workflows', 'v0 by Vercel', 'Cursor IDE', 'Rapid AI Iteration'],
  },
  {
    category: 'Accessibility & Delivery',
    color: 'amber',
    icon: '♿',
    skills: ['WCAG 2.1', 'Accessible Interaction Patterns', 'Design Documentation', 'Developer Handoff', 'Implementation Reviews', 'Design QA', 'Agile Collaboration', 'Stakeholder Workshops'],
  },
  {
    category: 'Design Tools',
    color: 'rose',
    icon: '🔧',
    skills: ['Figma (Advanced)', 'FigJam', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects', 'Prototyping Tools', 'Three.js Fundamentals'],
  },
]

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-orb section-orb-green" style={{ width: 500, height: 500, top: 0, right: -100 }} />
      <div className="section-orb section-orb-purple" style={{ width: 400, height: 400, bottom: 0, left: -80, animationDelay: '7s' }} />
      <div className={styles.inner}>
        <div className="anim-fade-up">
          <div className={styles.sectionLabel}>Capabilities</div>
          <h2 className={styles.sectionTitle}>Skills & Tools</h2>
          <p className={styles.sectionSub}>
            I combine structured UX thinking with hands-on front-end work — so teams can test ideas earlier and ship with fewer gaps.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`${styles.skillGroup} anim-fade-up anim-d${(i % 4) + 1} grad-border`}
            >
              <div className={styles.skillGroupHeader}>
                <span className={styles.skillGroupIcon}>{group.icon}</span>
                <span className={`${styles.skillGroupName} ${styles['skillColor_' + group.color]}`}>
                  {group.category}
                </span>
              </div>
              <div className={styles.skillPills}>
                {group.skills.map((s) => (
                  <span key={s} className={`${styles.skillPill} ${styles['pillColor_' + group.color]}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── AI DEV ── */
const aiCards = [
  { icon: '🌐', title: 'AI-Powered Web Apps', desc: 'Next.js marketing sites and dashboards with Claude API integrations and real-time data feeds.', accent: '' },
  { icon: '📊', title: 'Enterprise Dashboards', desc: 'React data viz apps — live feeds, alert systems, and admin panels for operations teams.', accent: 'purple' },
  { icon: '🎨', title: 'Coded Prototypes', desc: 'High-fidelity interactive prototypes in HTML, CSS, and React — tested before engineering begins.', accent: 'green' },
  { icon: '🤖', title: 'AI UI Components', desc: 'Claude-powered chat interfaces, AI form assistants, smart search, and prompt-driven UX.', accent: '' },
]
const aiStack = [
  { t: 'Next.js 14', hot: true }, { t: 'React.js', hot: true }, { t: 'Claude API', hot: true },
  { t: 'OpenAI API' }, { t: 'Cursor IDE', hot: true }, { t: 'GitHub Copilot', hot: true },
  { t: 'v0 by Vercel' }, { t: 'Tailwind CSS' }, { t: 'Three.js' },
]

export function AIDev() {
  return (
    <section id="ai-dev" className={styles.aiDev}>
      <div className="section-orb section-orb-green" style={{ width: 500, height: 500, top: 0, right: -100 }} />
      <div className="section-orb section-orb-purple" style={{ width: 400, height: 400, bottom: 0, left: -80, animationDelay: '7s' }} />
      <div className={styles.inner}>
        <div className={styles.aiGrid}>
          <div className="anim-fade-left">
            <div className={styles.sectionLabel}>AI Development</div>
            <h2 className={styles.sectionTitle}>Built with AI.<br />Shipped with Precision.</h2>
            <p className={styles.aiP}>
              I use AI not just as a design tool — I build with it. I write HTML, CSS, React, and Next.js,
              and I use vibe coding workflows with Claude and Copilot to prototype faster and validate ideas
              before a single line goes to the engineering team.
            </p>
            <div className={styles.stackPills}>
              {aiStack.map((s) => (
                <span key={s.t} className={`${styles.stackPill} ${s.hot ? styles.hot : ''}`}>{s.t}</span>
              ))}
            </div>
            <a href="/dev" className={styles.btnPrimary}>View AI Projects →</a>
          </div>
          <div className={styles.aiRight}>
            {aiCards.map((c, i) => (
              <div
                key={c.title}
                className={`${styles.aiCard} ${c.accent ? styles['aiCard_' + c.accent] : ''} hover-target anim-fade-right anim-d${i + 1}`}
              >
                <div className={styles.aiCardIcon}>{c.icon}</div>
                <div className={styles.aiCardInfo}>
                  <div className={styles.aiCardTitle}>{c.title}</div>
                  <div className={styles.aiCardDesc}>{c.desc}</div>
                </div>
                <div className={styles.aiCardArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


/* ── FOOTER ── */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={`anim-fade-up ${styles.footerCTA}`}>
          Let's build something<br />
          <span>worth using.</span>
        </div>
        <div className={`anim-fade-up anim-d1 ${styles.footerActions}`}>
          <a href="mailto:uxwithanilg@gmail.com" className={styles.btnPrimary}>
            uxwithanilg@gmail.com →
          </a>
          <a href="/Anil_Kumar_Giduthuri_Resume.pdf" className={styles.btnOutline} download>
            ↓ Download Resume
          </a>
        </div>
        <div className={`anim-fade-up anim-d2 ${styles.footerBottom}`}>
          <div className={styles.footerBrand}>Anil Kumar G.</div>
          <ul className={styles.footerLinks}>
            <li><a href="/#work">Work</a></li>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#ai-dev">AI Dev</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className={styles.footerCopy}>© 2026 Anil Kumar Giduthuri · Hyderabad, India</div>
        </div>
      </div>
    </footer>
  )
}
