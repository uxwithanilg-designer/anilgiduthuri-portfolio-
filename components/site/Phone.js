import s from './phone.module.css'

// A simple phone mockup for mobile screens. The screen image is pinned to the
// top, so long scrolling screens show their first view; the full image opens
// in the viewer.
export default function Phone({ src, alt = '', className = '', loading = 'lazy' }) {
  return (
    <span className={`${s.phone} ${className}`}>
      <span className={s.island} aria-hidden="true" />
      <img src={src} alt={alt} loading={loading} />
    </span>
  )
}

// Three phones, the middle one raised: the cover for mobile-first projects.
export function PhoneTrio({ phones, className = '', loading = 'lazy' }) {
  const [a, b, c] = phones
  return (
    <span className={`${s.trio} ${className}`}>
      <Phone src={a} className={s.trioSide} loading={loading} />
      <Phone src={b} className={s.trioMid} loading={loading} />
      <Phone src={c || a} className={s.trioSide} loading={loading} />
    </span>
  )
}
