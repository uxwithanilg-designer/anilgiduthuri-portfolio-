'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollReveal from '@/components/ScrollReveal'
import BgAnimation from '@/components/BgAnimation'
import MobileNav from '@/components/MobileNav'
import StickyAssets from '@/components/StickyAssets'
import styles from './designs.module.css'

/* ── Categories ── */
const categories = [
  { id: 'all',       label: 'All Work',        icon: '⊞' },
  { id: 'web',       label: 'Web Design',       icon: '🌐' },
  { id: 'dashboard', label: 'Dashboards',       icon: '📊' },
  { id: 'mobile',    label: 'Mobile Apps',      icon: '📱' },
  { id: 'figma',     label: 'Figma Systems',    icon: '🎨' },
  { id: 'graphics',  label: 'Graphic Design',   icon: '✦' },
  { id: 'motion',    label: 'Motion Graphics',  icon: '▶' },
  { id: 'social',    label: 'Post Designs',     icon: '📸' },
]

/* ── Design items — Anil's real work ── */
const designs = [
  // WEB
  {
    id:1, cat:'web', size:'large',
    title:'N3xgen Agentic OS',
    sub:'Enterprise AI Platform — Landing Page',
    tags:['Web Design','Enterprise','Dark UI'],
    year:'2024', client:'CloudGen Systems',
    color:'cyan',
    desc:'Full product landing page for the N3xgen AI orchestration platform. Designed for IT admins and enterprise stakeholders.',
    mockupType:'browser',
    accentColor:'rgba(0,212,255,0.12)',
    borderColor:'rgba(0,212,255,0.25)',
  },
  {
    id:2, cat:'web', size:'medium',
    title:'TILLI Payment Platform',
    sub:'Multi-currency B2B Web App',
    tags:['Web Design','Fintech','B2B'],
    year:'2022', client:'TILLI Software',
    color:'purple',
    desc:'Complete redesign of international payment platform. Reduced cognitive load, improved task completion by 40%+.',
    mockupType:'browser',
    accentColor:'rgba(157,78,221,0.12)',
    borderColor:'rgba(157,78,221,0.25)',
  },
  {
    id:3, cat:'web', size:'medium',
    title:'eFuse Energy Web Portal',
    sub:'Energy Monitoring & Analytics',
    tags:['Web Design','Energy Tech','Data Viz'],
    year:'2024', client:'CloudGen Systems',
    color:'green',
    desc:'Web portal for energy monitoring with real-time charts, alert systems, and usage analytics.',
    mockupType:'browser',
    accentColor:'rgba(45,255,158,0.1)',
    borderColor:'rgba(45,255,158,0.25)',
  },
  // DASHBOARDS
  {
    id:4, cat:'dashboard', size:'large',
    title:'Mission Control Dashboard',
    sub:'AI System Health & Incident Response',
    tags:['Dashboard','Enterprise','AI'],
    year:'2024', client:'CloudGen Systems',
    color:'cyan',
    desc:'Real-time mission control dashboard — colour-coded system health, single-command terminal, live incident management.',
    mockupType:'dashboard',
    accentColor:'rgba(0,212,255,0.12)',
    borderColor:'rgba(0,212,255,0.3)',
  },
  {
    id:5, cat:'dashboard', size:'medium',
    title:'eFuse Analytics Dashboard',
    sub:'Real-time Energy Data Visualisation',
    tags:['Dashboard','Charts','Alerts'],
    year:'2024', client:'CloudGen Systems',
    color:'green',
    desc:'Data-dense analytics dashboard with sparklines, trend charts, threshold alerts, and device-level drill-downs.',
    mockupType:'dashboard',
    accentColor:'rgba(45,255,158,0.1)',
    borderColor:'rgba(45,255,158,0.25)',
  },
  {
    id:6, cat:'dashboard', size:'medium',
    title:'SMARTEDI Workflow Dashboard',
    sub:'Electronic Data Interchange Management',
    tags:['Dashboard','B2B','Workflow'],
    year:'2024', client:'CloudGen Systems',
    color:'purple',
    desc:'Redesigned EDI workflow — partner onboarding, transaction monitoring, and error resolution in one view.',
    mockupType:'dashboard',
    accentColor:'rgba(157,78,221,0.1)',
    borderColor:'rgba(157,78,221,0.22)',
  },
  // MOBILE
  {
    id:7, cat:'mobile', size:'medium',
    title:'Genie Connections App',
    sub:'Social Dating — iOS & Android',
    tags:['Mobile','iOS','Social'],
    year:'2023', client:'Genie Connections',
    color:'green',
    desc:'Full iOS & Android UX — Two-Screen Swipe, QJump, Fetch patterns, real-time Bluetooth proximity matching.',
    mockupType:'mobile',
    accentColor:'rgba(45,255,158,0.1)',
    borderColor:'rgba(45,255,158,0.25)',
  },
  {
    id:8, cat:'mobile', size:'medium',
    title:"BYJU'S Learning App",
    sub:'K–12 Interactive Learning Modules',
    tags:['Mobile','EdTech','Child-centred'],
    year:'2022', client:"BYJU'S",
    color:'cyan',
    desc:'Child-centred lesson modules, interactive quiz flows, and video players designed for K–12 engagement.',
    mockupType:'mobile',
    accentColor:'rgba(0,212,255,0.1)',
    borderColor:'rgba(0,212,255,0.22)',
  },
  {
    id:9, cat:'mobile', size:'small',
    title:'TILLI Mobile Payments',
    sub:'Multi-currency Mobile Transactions',
    tags:['Mobile','Fintech','UX'],
    year:'2022', client:'TILLI Software',
    color:'purple',
    desc:'Mobile companion app for cross-border payments with simplified transaction flows.',
    mockupType:'mobile',
    accentColor:'rgba(157,78,221,0.1)',
    borderColor:'rgba(157,78,221,0.22)',
  },
  // FIGMA SYSTEMS
  {
    id:10, cat:'figma', size:'large',
    title:'N3xgen Design System',
    sub:'Enterprise Component Library',
    tags:['Figma','Design System','Tokens'],
    year:'2024', client:'CloudGen Systems',
    color:'purple',
    desc:'Full enterprise design system — 200+ components, colour tokens, spacing scale, icon library, interactive states.',
    mockupType:'figma',
    accentColor:'rgba(157,78,221,0.12)',
    borderColor:'rgba(157,78,221,0.3)',
  },
  {
    id:11, cat:'figma', size:'medium',
    title:'N3xgen-7.eleven Pipeline DS',
    sub:'Drag-and-Drop Data Pipeline Components',
    tags:['Figma','Design System','B2B'],
    year:'2024', client:'CloudGen Systems',
    color:'cyan',
    desc:'Reusable Figma component library for the enterprise data pipeline builder — nodes, edges, toolbars, panels.',
    mockupType:'figma',
    accentColor:'rgba(0,212,255,0.1)',
    borderColor:'rgba(0,212,255,0.22)',
  },
  // GRAPHICS
  {
    id:12, cat:'graphics', size:'medium',
    title:'Brand Identity — CloudGen',
    sub:'Logo, Typography, Color System',
    tags:['Branding','Identity','Print'],
    year:'2024', client:'CloudGen Systems',
    color:'cyan',
    desc:'Brand identity system — wordmark, icon mark, colour palette, typography scale, usage guidelines.',
    mockupType:'brand',
    accentColor:'rgba(0,212,255,0.1)',
    borderColor:'rgba(0,212,255,0.22)',
  },
  {
    id:13, cat:'graphics', size:'small',
    title:'Genie App Visual Identity',
    sub:'App Icon, Splash, Illustrations',
    tags:['Branding','Mobile','Illustration'],
    year:'2023', client:'Genie Connections',
    color:'green',
    desc:'Complete visual identity for Genie Connections — app icon system, onboarding illustrations, brand guide.',
    mockupType:'brand',
    accentColor:'rgba(45,255,158,0.08)',
    borderColor:'rgba(45,255,158,0.2)',
  },
  // MOTION
  {
    id:14, cat:'motion', size:'medium',
    title:'N3xgen Product Demo Reel',
    sub:'Platform Walkthrough Animation',
    tags:['Motion','After Effects','Product'],
    year:'2024', client:'CloudGen Systems',
    color:'purple',
    desc:'60-second product demo reel — animated UI walkthrough, feature highlights, transitions designed in After Effects.',
    mockupType:'motion',
    accentColor:'rgba(157,78,221,0.12)',
    borderColor:'rgba(157,78,221,0.25)',
  },
  {
    id:15, cat:'motion', size:'small',
    title:'Genie App Promo Video',
    sub:'Social Media Motion Graphics',
    tags:['Motion','Social Media','AE'],
    year:'2023', client:'Genie Connections',
    color:'green',
    desc:'15-second social media promo animations for app store and Instagram campaigns.',
    mockupType:'motion',
    accentColor:'rgba(45,255,158,0.08)',
    borderColor:'rgba(45,255,158,0.2)',
  },
  // SOCIAL / POST DESIGNS
  {
    id:16, cat:'social', size:'medium',
    title:'UX Insights Post Series',
    sub:'LinkedIn & Instagram Design Posts',
    tags:['Social Media','LinkedIn','Content'],
    year:'2024–25', client:'Personal Brand',
    color:'cyan',
    desc:'Ongoing series of UX tip posts, case study carousels, and thought leadership graphics for social media.',
    mockupType:'social',
    accentColor:'rgba(0,212,255,0.1)',
    borderColor:'rgba(0,212,255,0.22)',
  },
  {
    id:17, cat:'social', size:'small',
    title:'Product Launch Posts',
    sub:'CloudGen Product Announcements',
    tags:['Social Media','Product','Marketing'],
    year:'2024', client:'CloudGen Systems',
    color:'purple',
    desc:'Product announcement graphics, feature highlight posts, and event creatives for LinkedIn and Twitter.',
    mockupType:'social',
    accentColor:'rgba(157,78,221,0.1)',
    borderColor:'rgba(157,78,221,0.2)',
  },
]

/* ── Mockup preview renders ── */
function MockupPreview({ type, color, accent }) {
  const c = { cyan:'#00d4ff', purple:'#9d4edd', green:'#2dff9e' }[color] || '#00d4ff'

  if (type === 'browser') return (
    <div className={styles.mockBrowser}>
      <div className={styles.mockBrowserBar}>
        {['#ff5f57','#febc2e','#28c840'].map(col=><div key={col} style={{width:8,height:8,borderRadius:'50%',background:col}}/>)}
        <div className={styles.mockUrl}/>
      </div>
      <div className={styles.mockBrowserBody} style={{background:accent}}>
        <div className={styles.mockNav} style={{borderColor:`${c}20`}}>
          <div style={{width:40,height:6,background:c,borderRadius:3,opacity:.5}}/>
          <div style={{display:'flex',gap:8}}>{[1,2,3].map(i=><div key={i} style={{width:24,height:5,background:'rgba(255,255,255,0.1)',borderRadius:3}}/>)}</div>
          <div style={{width:48,height:18,background:`${c}30`,border:`1px solid ${c}50`,borderRadius:5}}/>
        </div>
        <div style={{padding:'10px 12px'}}>
          <div style={{width:'60%',height:10,background:c,borderRadius:4,opacity:.4,marginBottom:8}}/>
          <div style={{width:'90%',height:6,background:'rgba(255,255,255,0.08)',borderRadius:3,marginBottom:5}}/>
          <div style={{width:'75%',height:6,background:'rgba(255,255,255,0.06)',borderRadius:3,marginBottom:12}}/>
          <div style={{display:'flex',gap:6}}>
            <div style={{width:72,height:22,background:`${c}40`,borderRadius:5}}/>
            <div style={{width:60,height:22,border:`1px solid ${c}40`,borderRadius:5}}/>
          </div>
        </div>
      </div>
    </div>
  )

  if (type === 'dashboard') return (
    <div className={styles.mockDash} style={{background:accent}}>
      <div className={styles.mockDashSide} style={{borderColor:`${c}18`}}>
        {[1,2,3,4,5].map(i=><div key={i} style={{width:'80%',height:6,background:i===2?`${c}40`:'rgba(255,255,255,0.07)',borderRadius:3,margin:'5px auto'}}/>)}
      </div>
      <div className={styles.mockDashMain}>
        <div style={{display:'flex',gap:6,marginBottom:8}}>
          {['#00d4ff','#9d4edd','#2dff9e'].map(col=>(
            <div key={col} style={{flex:1,height:36,background:`${col}15`,border:`1px solid ${col}30`,borderRadius:6}}>
              <div style={{width:'50%',height:4,background:col,borderRadius:2,margin:'6px auto 0',opacity:.5}}/>
              <div style={{width:'35%',height:8,background:col,borderRadius:2,margin:'4px auto 0',opacity:.3}}/>
            </div>
          ))}
        </div>
        <div style={{height:40,background:'rgba(255,255,255,0.04)',borderRadius:6,border:`1px solid ${c}15`,marginBottom:6}}/>
        <div style={{display:'flex',gap:4}}>
          {[1,2,3,4].map(i=><div key={i} style={{flex:1,height:16,background:`rgba(255,255,255,0.05)`,borderRadius:4}}/>)}
        </div>
      </div>
    </div>
  )

  if (type === 'mobile') return (
    <div className={styles.mockMobileWrap}>
      <div className={styles.mockMobile} style={{borderColor:`${c}30`}}>
        <div style={{width:36,height:5,background:'rgba(255,255,255,0.2)',borderRadius:3,margin:'8px auto'}}/>
        <div style={{height:44,background:accent,margin:'0 6px 6px',borderRadius:6}}>
          <div style={{width:'50%',height:5,background:c,borderRadius:2,margin:'0 auto',paddingTop:10,opacity:.5}}/>
        </div>
        {[1,2,3].map(i=>(
          <div key={i} style={{display:'flex',gap:4,margin:'0 6px 4px',alignItems:'center'}}>
            <div style={{width:20,height:20,borderRadius:5,background:`${c}20`,border:`1px solid ${c}30`,flexShrink:0}}/>
            <div style={{flex:1}}>
              <div style={{width:'70%',height:4,background:'rgba(255,255,255,0.1)',borderRadius:2,marginBottom:3}}/>
              <div style={{width:'45%',height:3,background:'rgba(255,255,255,0.06)',borderRadius:2}}/>
            </div>
          </div>
        ))}
        <div style={{display:'flex',justifyContent:'space-around',borderTop:'1px solid rgba(255,255,255,0.06)',marginTop:8,paddingTop:6}}>
          {[1,2,3].map(i=><div key={i} style={{width:14,height:14,background:i===2?`${c}40`:'rgba(255,255,255,0.06)',borderRadius:3}}/>)}
        </div>
      </div>
    </div>
  )

  if (type === 'figma') return (
    <div className={styles.mockFigma} style={{background:accent}}>
      {/* Figma toolbar */}
      <div style={{display:'flex',alignItems:'center',gap:6,padding:'6px 10px',borderBottom:`1px solid ${c}15`}}>
        <div style={{width:12,height:12,borderRadius:3,background:'linear-gradient(135deg,#ff7262,#a259ff,#1abcfe,#0acf83)'}}/>
        {['▲','○','□','T'].map(t=><span key={t} style={{fontSize:9,color:`${c}60`,fontFamily:'monospace'}}>{t}</span>)}
      </div>
      {/* Component grid */}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:5,padding:8}}>
        {['Button','Card','Input','Nav'].map((n,i)=>(
          <div key={n} style={{background:i===0?`${c}18`:'rgba(255,255,255,0.04)',border:`1px solid ${i===0?c+'40':'rgba(255,255,255,0.08)'}`,borderRadius:5,padding:'6px 8px'}}>
            <div style={{width:'60%',height:4,background:i===0?c:'rgba(255,255,255,0.15)',borderRadius:2,marginBottom:4,opacity:i===0?0.6:1}}/>
            <div style={{width:'40%',height:3,background:'rgba(255,255,255,0.08)',borderRadius:2}}/>
          </div>
        ))}
      </div>
      {/* Token row */}
      <div style={{display:'flex',gap:4,padding:'0 8px 8px'}}>
        {[c,'#9d4edd','#2dff9e','#ff6b47'].map(col=>(
          <div key={col} style={{width:16,height:16,borderRadius:'50%',background:col,opacity:.5,border:`1px solid ${col}`}}/>
        ))}
        <span style={{fontSize:8,color:'rgba(255,255,255,0.25)',fontFamily:'monospace',marginLeft:4,alignSelf:'center'}}>tokens</span>
      </div>
    </div>
  )

  if (type === 'brand') return (
    <div className={styles.mockBrand} style={{background:accent}}>
      <div style={{textAlign:'center',paddingTop:16}}>
        <div style={{width:48,height:48,borderRadius:12,background:`${c}25`,border:`2px solid ${c}50`,margin:'0 auto 10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'monospace',fontWeight:800,color:c,fontSize:16,opacity:.7}}>A</span>
        </div>
        <div style={{width:80,height:7,background:c,borderRadius:4,margin:'0 auto 6px',opacity:.4}}/>
        <div style={{width:56,height:4,background:'rgba(255,255,255,0.12)',borderRadius:3,margin:'0 auto'}}/>
      </div>
      <div style={{display:'flex',gap:6,padding:'10px 12px 0',justifyContent:'center'}}>
        {[c,'#9d4edd','#2dff9e','rgba(255,255,255,0.3)'].map((col,i)=>(
          <div key={i} style={{width:18,height:18,borderRadius:'50%',background:col,opacity:.6}}/>
        ))}
      </div>
    </div>
  )

  if (type === 'motion') return (
    <div className={styles.mockMotion} style={{background:accent}}>
      {/* Video timeline */}
      <div style={{padding:'10px 10px 6px'}}>
        <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
          <div style={{width:24,height:24,borderRadius:'50%',background:`${c}25`,border:`1px solid ${c}40`,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{color:c,fontSize:10,opacity:.7}}>▶</span>
          </div>
          <div style={{flex:1,height:4,background:`${c}20`,borderRadius:2,position:'relative'}}>
            <div style={{width:'35%',height:'100%',background:c,borderRadius:2,opacity:.6}}/>
          </div>
          <span style={{fontFamily:'monospace',fontSize:7,color:`${c}60`}}>0:24</span>
        </div>
        {/* Layers */}
        {['Motion','Text','BG'].map((l,i)=>(
          <div key={l} style={{display:'flex',alignItems:'center',gap:5,marginBottom:4}}>
            <span style={{fontFamily:'monospace',fontSize:6,color:'rgba(255,255,255,0.25)',width:24}}>{l}</span>
            <div style={{flex:1,height:8,background:'rgba(255,255,255,0.06)',borderRadius:2,position:'relative'}}>
              <div style={{
                position:'absolute',left:`${[0,15,5][i]}%`,
                width:`${[60,45,80][i]}%`,height:'100%',
                background:[`${c}50`,`${'#9d4edd'}50`,`${'#2dff9e'}30`][i],
                borderRadius:2
              }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // social
  return (
    <div className={styles.mockSocial} style={{background:accent}}>
      <div style={{padding:'10px 10px 6px'}}>
        <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8}}>
          <div style={{width:22,height:22,borderRadius:'50%',background:`${c}30`,border:`1px solid ${c}50`}}/>
          <div>
            <div style={{width:50,height:4,background:'rgba(255,255,255,0.15)',borderRadius:2,marginBottom:2}}/>
            <div style={{width:34,height:3,background:'rgba(255,255,255,0.08)',borderRadius:2}}/>
          </div>
        </div>
        <div style={{height:62,background:`${c}12`,borderRadius:8,border:`1px solid ${c}20`,marginBottom:6,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{textAlign:'center'}}>
            <div style={{width:48,height:5,background:c,borderRadius:3,margin:'0 auto 5px',opacity:.4}}/>
            <div style={{width:32,height:4,background:'rgba(255,255,255,0.1)',borderRadius:2,margin:'0 auto'}}/>
          </div>
        </div>
        <div style={{display:'flex',gap:8}}>
          {['♡','💬','↗'].map(ic=><span key={ic} style={{fontSize:11,opacity:.3}}>{ic}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function DesignsPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? designs : designs.filter(d => d.cat === active)

  return (
    <>
      <BgAnimation variant="page" />
      <StickyAssets variant="home" />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <MobileNav />

      <main className={styles.main}>

        {/* ── PAGE HEADER ── */}
        <section className={styles.header}>
          <div className={styles.headerBg}/>
          <div className={styles.inner}>
            <div className={`anim-fade-up ${styles.headerContent}`}>
              <div className={styles.label}>Portfolio</div>
              <h1 className={styles.title}>
                Design <span>Gallery.</span>
              </h1>
              <p className={styles.desc}>
                Web designs, dashboards, mobile apps, Figma design systems, branding,
                motion graphics, and social media post designs — all in one place.
              </p>
              <div className={styles.headerMeta}>
                <div className={styles.metaPill}><span>{designs.length}+</span> Projects</div>
                <div className={styles.metaPill}><span>8+</span> Categories</div>
                <div className={styles.metaPill}><span>2018–25</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTER ── */}
        <div className={styles.filterBar}>
          <div className={styles.inner}>
            <div className={`anim-fade-up ${styles.filterInner}`}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.filterBtn} ${active === cat.id ? styles.filterActive : ''}`}
                  onClick={() => setActive(cat.id)}
                >
                  <span className={styles.filterIcon}>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESIGNS GRID ── */}
        <section className={styles.grid}>
          <div className={styles.inner}>
            <div className={styles.masonry}>
              {filtered.map((item, i) => (
                <div
                  key={item.id}
                  className={`${styles.card} ${styles['card_'+item.size]} anim-fade-up`}
                  style={{ transitionDelay: `${(i % 3) * 0.08}s`, borderColor: item.borderColor }}
                >
                  {/* Mockup preview */}
                  <div className={styles.preview} style={{ background: item.accentColor }}>
                    <MockupPreview type={item.mockupType} color={item.color} accent={item.accentColor} />
                    <div className={styles.previewOverlay} />
                    <div className={styles.previewMeta}>
                      <span className={`${styles.catBadge} ${styles['cat_'+item.color]}`}>{categories.find(c=>c.id===item.cat)?.label}</span>
                      <span className={styles.yearBadge}>{item.year}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardClient}>{item.client}</div>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardSub}>{item.sub}</p>
                    <p className={styles.cardDesc}>{item.desc}</p>
                    <div className={styles.cardTags}>
                      {item.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className={styles.cardFoot}>
                    <a href="#" className={`${styles.viewBtn} ${styles['viewBtn_'+item.color]}`}>
                      View Case Study →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>🎨</div>
                <div className={styles.emptyTitle}>Coming soon</div>
                <div className={styles.emptyDesc}>More designs in this category will be added soon.</div>
              </div>
            )}
          </div>
        </section>

        {/* ── UPLOAD CTA ── */}
        <section className={styles.uploadCta}>
          <div className={styles.inner}>
            <div className={`anim-fade-up ${styles.ctaCard}`}>
              <div className={styles.ctaLeft}>
                <div className={styles.ctaIcon}>🎨</div>
                <div>
                  <h3 className={styles.ctaTitle}>More designs uploading soon</h3>
                  <p className={styles.ctaDesc}>This gallery is actively updated with new work. Reach out to see the complete portfolio with source files and process walkthroughs.</p>
                </div>
              </div>
              <div className={styles.ctaActions}>
                <a href="/contact" className={styles.ctaPrimary}>Request Full Portfolio →</a>
                <a href="/Anil_Kumar_Giduthuri_Resume.pdf" download className={styles.ctaSecondary}>
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
