'use client'
import { Reveal, ScrollWords, Stagger, RevealItem, Counter, SplitText } from '@/components/motion'
import LocalTime from '@/components/site/LocalTime'
import { profile, stats, principles } from '@/data/profile'
import s from './home.module.css'

export default function About() {
  return (
    <section id="about" className={`section ${s.about}`}>
      <div className="container">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>
        <ScrollWords
          className={s.statement}
          text="For eight years I’ve worked on products where a confusing screen has a real cost. AI agents that touch live systems. Payment flows that move money across borders. Lessons a ten-year-old should understand without help. My job is to make that complexity feel calm."
        />

        <div className={s.aboutGrid}>
          <Reveal className={s.idCard}>
            <div className={s.idTop}>
              <span className={s.idMono}>AG</span>
              <span className="chip">
                <span className="status-dot" />
                Available
              </span>
            </div>
            <h3 className={s.idName}>{profile.name}</h3>
            <p className={s.idRole}>Senior Product Designer · Senior UX Designer</p>
            <dl className={s.idList}>
              <div>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Local time</dt>
                <dd>
                  <LocalTime />
                </dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Enterprise AI, B2B SaaS, design systems</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>B.Com · Google UX Design Professional Certificate</dd>
              </div>
            </dl>
            <a className={`btn ${s.idBtn}`} href={profile.resume} download>
              Download resume (PDF)
            </a>
          </Reveal>

          <div className={s.aboutCopy}>
            <Reveal>
              <p>
                I start with people and the work they actually do, not the feature list. I like messy problems: twelve tools
                stitched together, approvals that live in email, logs nobody can read at 2 AM. I map them, give things plain
                names, and design the few moments where a person really has to decide.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Most of my recent work is enterprise AI. At CloudGen Systems I led UX for N3xgen Agentic OS, designing how
                IT admins, architects, analysts and compliance teams build, test, approve and audit AI agent workflows. The
                thread through all of it is trust. Show what the system did, why it did it, and how to undo it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Before that I worked on payments at TILLI, where my redesign of payment setup lifted task completion by more
                than 40% in testing; on K–12 learning at BYJU’S; on a social discovery app as a freelancer; and on many web
                and mobile products at Krify, where I learned the craft.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                I also write code. I prototype in React and Next.js with AI coding tools, so engineers get something they
                can click, break and question early. This site is one of those builds.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className={s.stats} gap={0.1}>
          {stats.map((st) => (
            <RevealItem key={st.label} className={s.stat}>
              <Counter value={st.value} suffix={st.suffix} className={s.statValue} />
              <span className={s.statLabel}>{st.label}</span>
            </RevealItem>
          ))}
        </Stagger>

        <div className={s.principles}>
          <div className={s.principlesHead}>
            <SplitText className="h3" text="What I *believe* about design" />
            <Reveal delay={0.1}>
              <p className="muted">Four rules I keep coming back to. Each one has saved a project at least once.</p>
            </Reveal>
          </div>
          <Stagger className={s.principleGrid} gap={0.1}>
            {principles.map((p, i) => (
              <RevealItem key={p.title} className={s.principle}>
                <span className={`mono ${s.principleNum}`}>0{i + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
