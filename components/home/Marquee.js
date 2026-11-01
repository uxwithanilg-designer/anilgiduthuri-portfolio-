'use client'
import { clients } from '@/data/profile'
import s from './home.module.css'

const words = [...clients, 'Enterprise AI', 'Payments', 'EdTech', 'Consumer apps', 'Design systems']

export default function Marquee() {
  const row = (
    <div className={s.marqueeRow} aria-hidden="true">
      {words.map((w, i) => (
        <span key={i} className={s.marqueeItem}>
          {i % 2 ? <span className="serif">{w}</span> : w}
          <span className={s.marqueeStar}>✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <section className={s.marquee} aria-label="Companies and domains I have worked in">
      <p className="sr-only">Worked with {clients.join(', ')} across enterprise AI, payments, EdTech and consumer apps.</p>
      <div className={s.marqueeTrack}>
        {row}
        {row}
      </div>
    </section>
  )
}
