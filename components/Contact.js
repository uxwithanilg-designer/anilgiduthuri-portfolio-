'use client'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-orb section-orb-indigo" style={{ width: 500, height: 500, top: 0, left: -100 }} />
      <div className="section-orb section-orb-purple" style={{ width: 400, height: 400, bottom: 0, right: -100, animationDelay: '6s' }} />

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={`${styles.left} anim-fade-left`}>
            <div className={styles.label}>Get in Touch</div>
            <h2 className={styles.title}>
              Open to building<br />
              <span>something great.</span>
            </h2>
            <p className={styles.desc}>
              I'm actively looking for full-time roles and freelance collaborations.
              Whether it's a design challenge, an AI product, or just a coffee chat
              about UX — drop me a line and I'll get back to you within 24 hours.
            </p>

            <div className={styles.availability}>
              <div className={styles.availRow}>
                <div className={styles.availDot} />
                <span>Available for <strong>full-time roles</strong></span>
              </div>
              <div className={styles.availRow}>
                <div className={styles.availDot} />
                <span>Available for <strong>freelance projects</strong></span>
              </div>
            </div>

            <div className={styles.options}>
              {/* Email */}
              <a href="mailto:uxwithanilg@gmail.com" className={`${styles.opt} ${styles.optEmail}`}>
                <div className={`${styles.optIcon} ${styles.iconEmail}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className={styles.optInfo}>
                  <div className={styles.optTitle}>Email</div>
                  <div className={styles.optSub}>uxwithanilg@gmail.com</div>
                </div>
                <span className={styles.optArrow}>→</span>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/anilkumargiduthuri" target="_blank" rel="noopener noreferrer" className={`${styles.opt} ${styles.optLI}`}>
                <div className={`${styles.optIcon} ${styles.iconLI}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className={styles.optInfo}>
                  <div className={styles.optTitle}>LinkedIn</div>
                  <div className={styles.optSub}>linkedin.com/in/anilkumargiduthuri</div>
                </div>
                <span className={styles.optArrow}>→</span>
              </a>

              {/* Phone */}
              <a href="tel:+919553578760" className={`${styles.opt} ${styles.optPhone}`}>
                <div className={`${styles.optIcon} ${styles.iconPhone}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                </div>
                <div className={styles.optInfo}>
                  <div className={styles.optTitle}>Phone</div>
                  <div className={styles.optSub}>+91 95535 78760</div>
                </div>
                <span className={styles.optArrow}>→</span>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.right} anim-fade-right anim-d2`}>
            {/* Response time card */}
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>⏱ Typical Response Times</div>
              <div className={styles.infoRows}>
                <div className={styles.infoRow}>
                  <div className={styles.infoChannel}>
                    <div className={styles.dot} style={{ background: 'var(--indigo-light)' }}/>
                    Email
                  </div>
                  <div className={styles.infoTime}>Within 24 hours</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoChannel}>
                    <div className={styles.dot} style={{ background: '#0077b5' }}/>
                    LinkedIn
                  </div>
                  <div className={styles.infoTime}>Within 48 hours</div>
                </div>
                <div className={styles.infoRow}>
                  <div className={styles.infoChannel}>
                    <div className={styles.dot} style={{ background: '#e1306c' }}/>
                    Instagram
                  </div>
                  <div className={styles.infoTime}>2–3 days</div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className={styles.ctaCard}>
              <div className={styles.ctaIcon}>✉️</div>
              <div className={styles.ctaText}>
                <div className={styles.ctaTitle}>Best way to reach me</div>
                <div className={styles.ctaSub}>
                  Email is the fastest route for project inquiries,
                  role discussions, and design collaborations.
                </div>
              </div>
              <a href="mailto:uxwithanilg@gmail.com?subject=Let's Connect — Portfolio" className={styles.ctaBtn}>
                Send Email →
              </a>
            </div>

            {/* Location card */}
            <div className={styles.locationCard}>
              <div className={styles.locationInfo}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--indigo-light)" strokeWidth="2">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div className={styles.locationCity}>Hyderabad, India</div>
                  <div className={styles.locationTz}>IST (UTC +5:30) · Open to remote & relocation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
