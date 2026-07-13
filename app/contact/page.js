'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'
import BgAnimation from '@/components/BgAnimation'
import StickyAssets from '@/components/StickyAssets'
import MobileNav from '@/components/MobileNav'
import styles from './contact.module.css'

const services = [
  { icon: '🎨', title: 'UX/UI Design', desc: 'End-to-end design — from research and wireframes to high-fidelity Figma prototypes.' },
  { icon: '🧩', title: 'Design Systems', desc: 'Scalable component libraries, token architecture, and Figma-to-code handoff.' },
  { icon: '🤖', title: 'AI Product UX', desc: 'UX strategy for AI-powered products — dashboards, chatbots, orchestration tools.' },
  { icon: '⚡', title: 'Next.js / React Development', desc: 'Production-ready React & Next.js interfaces, landing pages, and dashboards.' },
  { icon: '🌐', title: 'HTML Webpages (Bootstrap / CDN)', desc: 'Fast, clean HTML pages using Bootstrap, Tailwind CDN, Animate.css, AOS, and more — no build tools needed.' },
]

const faqs = [
  { q: 'What types of projects do you take on?', a: 'B2B SaaS products, enterprise platforms, AI-powered tools, dashboards, mobile apps, and design system builds. I work best on complex, multi-user products where UX strategy matters.' },
  { q: 'What is your typical engagement model?', a: 'I work both as a full-time designer and as a freelance/contract designer. For freelance, I offer project-based and monthly retainer models. Happy to discuss what fits your needs.' },
  { q: 'How quickly can you start?', a: 'For most projects I can start within 1–2 weeks. Drop me an email with your project brief and timeline and we\'ll figure it out together.' },
  { q: 'Do you work with international clients?', a: 'Yes — I\'ve worked with teams across India, US, and Europe. I\'m comfortable with async workflows and different time zones.' },
  { q: 'Can you work in our existing design system or Figma workspace?', a: 'Absolutely. I\'m experienced in joining existing teams, adapting to existing component libraries, and scaling what\'s already built.' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    const subject = encodeURIComponent(formData.subject || 'Project Inquiry — Portfolio')
    const body = encodeURIComponent(
      `Hi Anil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    window.location.href = `mailto:uxwithanilg@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => { setSending(false); setSent(true) }, 1000)
  }

  const toggleFaq = (i) => {
    setOpenFaq(prev => (prev === i ? null : i))
  }

  return (
    <>
      <BgAnimation variant="contact" />
      <StickyAssets variant="contact" />
      <MobileNav />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main className={styles.main}>

        {/* PAGE HEADER */}
        <section className={styles.pageHeader}>
          <div className={styles.headerBg} />
          <div className={styles.inner}>
            <div className={`reveal ${styles.headerGrid}`}>
              <div className={styles.headerLeft}>
                <div className={styles.pageLabel}>Get in Touch</div>
                <h1 className={styles.pageTitle}>Let's Build Something<br /><span>Remarkable.</span></h1>
                <p className={styles.pageDesc}>Open to freelance projects, full-time roles, and creative collaborations. I typically respond within 24 hours.</p>
                <div className={styles.contactInfo}>
                  <a href="mailto:uxwithanilg@gmail.com" className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div className={styles.infoLabel}>Email</div>
                      <div className={styles.infoValue}>uxwithanilg@gmail.com</div>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/anilkumargiduthuri" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                    <div>
                      <div className={styles.infoLabel}>LinkedIn</div>
                      <div className={styles.infoValue}>anilkumargiduthuri</div>
                    </div>
                  </a>
                  <div className={styles.infoItem} style={{cursor:'default'}}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                      <div className={styles.infoLabel}>Location</div>
                      <div className={styles.infoValue}>Hyderabad, India · Remote OK</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.headerRight}>
                <div className={styles.profileCard}>
                  <div className={styles.profilePhoto}>
                    <Image src="/anil-profile.png" alt="Anil Kumar Giduthuri" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
                  </div>
                  <div className={styles.profileInfo}>
                    <div className={styles.profileName}>Anil Kumar Giduthuri</div>
                    <div className={styles.profileRole}>Senior UX/UI Designer</div>
                    <div className={styles.availBadge}><span className={styles.availDot} /> Available for work</div>
                  </div>
                  <div className={styles.profileStats}>
                    {[['8+','Years'],['20+','Projects'],['B2B','Focus']].map(([n,l]) => (
                      <div key={l} className={styles.pStat}>
                        <div className={styles.pStatNum}>{n}</div>
                        <div className={styles.pStatLbl}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORM + SERVICES */}
        <section className={styles.formSection}>
          <div className={styles.inner}>
            <div className={styles.formGrid}>
              <div className={`reveal ${styles.formLeft}`}>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <p className={styles.formDesc}>Fill in the form and I'll get back to you within 24 hours.</p>
                {sent ? (
                  <div className={styles.sentMsg}>
                    <div className={styles.sentIcon}>✅</div>
                    <div className={styles.sentTitle}>Email client opened!</div>
                    <div className={styles.sentSub}>Your message has been prepared. Please send it from your email client.</div>
                    <button className={styles.resetBtn} onClick={() => { setSent(false); setFormData({ name:'', email:'', subject:'', message:'' }) }}>Send Another →</button>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Your Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={styles.input} />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className={styles.input} />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Subject *</label>
                      <input name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry / Collaboration / Full-time Role" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={7} placeholder="Tell me about your project, goals, timeline, and how I can help..." className={`${styles.input} ${styles.textarea}`} />
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={sending}>
                      {sending ? <><span className={styles.spinner} /> Opening email client...</> : <>Send Message <span className={styles.arrow}>→</span></>}
                    </button>
                  </form>
                )}
              </div>

              <div className={`reveal reveal-delay-2 ${styles.formRight}`}>
                <h3 className={styles.sideTitle}>What I Can Help With</h3>
                <div className={styles.servicesList}>
                  {services.map(s => (
                    <div key={s.title} className={styles.serviceCard}>
                      <div className={styles.serviceIcon}>{s.icon}</div>
                      <div>
                        <div className={styles.serviceTitle}>{s.title}</div>
                        <div className={styles.serviceDesc}>{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.resumeCard}>
                  <div className={styles.resumeCardIcon}>📄</div>
                  <div className={styles.resumeCardText}>
                    <div className={styles.resumeCardTitle}>Download Resume</div>
                    <div className={styles.resumeCardSub}>Full work history &amp; case studies</div>
                  </div>
                  <a href="/Anil_Kumar_Giduthuri_Resume_2026.pdf" download className={styles.resumeCardBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqSection}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.faqHeader}`}>
              <div className={styles.pageLabel}>FAQ</div>
              <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                  <button
                    type="button"
                    className={styles.faqQ}
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{f.q}</span>
                    <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className={`${styles.faqA} ${openFaq === i ? styles.faqAOpen : ''}`}>
                    <div className={styles.faqAInner}>{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
