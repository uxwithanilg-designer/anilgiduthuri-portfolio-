'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'
import BgAnimation from '@/components/BgAnimation'
import StickyAssets from '@/components/StickyAssets'
import MobileNav from '@/components/MobileNav'
import styles from './posts.module.css'

const posts = [
  {
    slug: 'designing-for-ai-ux-patterns',
    category: 'AI Design',
    chip: 'cyan',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    title: 'Designing for AI: UX Patterns That Actually Work in Production',
    excerpt: 'How to handle loading states, hallucinations, and user trust when building AI-powered interfaces. Lessons from designing N3xgen Agentic OS.',
    tags: ['AI UX', 'Design Patterns', 'Enterprise'],
    featured: true,
    gradient: 'grad1',
  },
  {
    slug: 'token-first-design-system',
    category: 'Design Systems',
    chip: 'green',
    date: 'Feb 28, 2025',
    readTime: '6 min read',
    title: 'How I Built a Token-First Design System for Enterprise Scale',
    excerpt: 'Lessons from building component libraries used by 4 different product teams simultaneously. A deep dive into design tokens, theming, and Figma variables.',
    tags: ['Design Systems', 'Figma', 'Tokens'],
    featured: false,
    gradient: 'grad2',
  },
  {
    slug: 'nextjs-for-ux-designers',
    category: 'Dev + Design',
    chip: 'purple',
    date: 'Jan 20, 2025',
    readTime: '5 min read',
    title: 'Why Every UX Designer Should Learn Next.js in 2025',
    excerpt: 'The design-to-dev handoff is broken. Here\'s how writing real code changed the way I design — and made me a 10x better collaborator with engineering teams.',
    tags: ['Next.js', 'Development', 'Career'],
    featured: false,
    gradient: 'grad3',
  },
  {
    slug: 'enterprise-dashboard-ux',
    category: 'Enterprise UX',
    chip: 'cyan',
    date: 'Dec 10, 2024',
    readTime: '10 min read',
    title: 'Enterprise Dashboard UX: Designing for Data-Heavy Interfaces',
    excerpt: 'How to handle complexity without overwhelming users. Principles from designing dashboards for banking, healthcare, and energy sector clients.',
    tags: ['Dashboard', 'Data Viz', 'B2B'],
    featured: false,
    gradient: 'grad4',
  },
  {
    slug: 'wcag-accessibility-ux',
    category: 'Accessibility',
    chip: 'green',
    date: 'Nov 5, 2024',
    readTime: '7 min read',
    title: 'WCAG 2.1 in Practice: Accessibility That Doesn\'t Kill Your Design',
    excerpt: 'A practical guide to building accessible interfaces without compromising on aesthetics. Real examples from production B2B applications.',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
    featured: false,
    gradient: 'grad5',
  },
  {
    slug: 'ux-research-b2b-saas',
    category: 'UX Research',
    chip: 'purple',
    date: 'Oct 18, 2024',
    readTime: '9 min read',
    title: 'UX Research for B2B SaaS: Getting Insights from Busy Professionals',
    excerpt: 'IT admins don\'t have time for hour-long interviews. Here\'s how I adapted research methods to fit enterprise environments and extract actionable insights.',
    tags: ['Research', 'B2B SaaS', 'Interviews'],
    featured: false,
    gradient: 'grad6',
  },
]

const chipColors = { cyan: styles.chipCyan, green: styles.chipGreen, purple: styles.chipPurple }

export default function PostsPage() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <BgAnimation variant="posts" />
      <StickyAssets variant="posts" />
      <MobileNav />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main className={styles.main}>

        {/* PAGE HEADER */}
        <section className={styles.pageHeader}>
          <div className="section-orb section-orb-cyan" style={{width:400,height:400,top:-100,right:-100}} />
          <div className={styles.headerBg} />
          <div className={styles.inner}>
            <div className={`reveal ${styles.headerContent}`}>
              <div className={styles.pageLabel}>Design Thinking</div>
              <h1 className={styles.pageTitle}>Posts &amp; Articles</h1>
              <p className={styles.pageDesc}>
                Writing about UX strategy, design systems, AI-enabled workflows,
                and the intersection of design &amp; engineering.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.statChip}><span>{posts.length}</span> Articles</div>
                <div className={styles.statChip}><span>2024–25</span></div>
                <div className={styles.statChip}><span>UX · AI · Dev</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED POST */}
        {featured && (
          <section className={styles.featuredSection}>
            <div className={styles.inner}>
              <div className={`reveal ${styles.featuredLabel}`}>
                <span className={styles.featuredStar}>★</span> Featured Article
              </div>
              <div className={`anim-scale ${styles.featuredCard}`}>
                <div className={`${styles.featuredVisual} ${styles[featured.gradient]}`}>
                  <div className={styles.featuredVisualText}>{featured.category}</div>
                  <div className={styles.featuredVisualGrid} />
                </div>
                <div className={styles.featuredBody}>
                  <span className={`${styles.chip} ${chipColors[featured.chip]}`}>{featured.category}</span>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <div className={styles.featuredTags}>
                    {featured.tags.map(t => <span key={t} className={styles.tagPill}>{t}</span>)}
                  </div>
                  <div className={styles.featuredMeta}>
                    <span className={styles.metaDate}>{featured.date}</span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.metaTime}>{featured.readTime}</span>
                    <a href={`/posts/${featured.slug}`} className={styles.readBtn}>Read Article →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ALL POSTS GRID */}
        <section className={styles.allPosts}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.gridHeader}`}>
              <h2 className={styles.gridTitle}>All Articles</h2>
              <div className={styles.filterRow}>
                {['All','AI Design','Design Systems','Dev + Design','Enterprise UX','Accessibility','UX Research'].map(f => (
                  <button key={f} className={`${styles.filterBtn} ${f === 'All' ? styles.filterActive : ''}`}>{f}</button>
                ))}
              </div>
            </div>
            <div className={styles.postsGrid}>
              {rest.map((p, i) => (
                <a href={`/posts/${p.slug}`} key={p.slug} className={`anim-fade-up anim-d${(i % 3) + 1} ${styles.postCard}`} style={{transitionDelay: `${i * 0.08}s`}}>
                  <div className={`${styles.cardVisual} ${styles[p.gradient]}`}>
                    <div className={styles.cardVisualText}>{p.category}</div>
                    <span className={`${styles.chip} ${chipColors[p.chip]}`}>{p.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardExcerpt}>{p.excerpt}</p>
                    <div className={styles.cardTags}>
                      {p.tags.map(t => <span key={t} className={styles.tagPill}>{t}</span>)}
                    </div>
                    <div className={styles.cardMeta}>
                      <span>{p.date}</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className={styles.newsletter}>
          <div className={styles.inner}>
            <div className={`reveal ${styles.nlCard}`}>
              <div className={styles.nlLeft}>
                <div className={styles.nlIcon}>✍️</div>
                <div>
                  <h3 className={styles.nlTitle}>New articles every month</h3>
                  <p className={styles.nlDesc}>Writing about UX, design systems, and AI-powered development.</p>
                </div>
              </div>
              <a href="mailto:uxwithanilg@gmail.com?subject=Subscribe to Posts" className={styles.nlBtn}>
                Follow via Email →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
