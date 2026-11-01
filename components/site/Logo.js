// The mark: a soft square, a serif "a" and an indigo status dot.
// Design (the letter) and build (the live dot), in one small shape.
export function Mark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="#0F0F12" />
      <text
        x="18.5"
        y="28.5"
        textAnchor="middle"
        fontFamily="'Instrument Serif', Georgia, serif"
        fontStyle="italic"
        fontSize="27"
        fill="#fff"
      >
        a
      </text>
      <circle cx="29.5" cy="27" r="3.6" fill="#6D62FF" />
      <circle cx="29.5" cy="27" r="3.6" fill="none" stroke="#0F0F12" strokeWidth="1.2" />
    </svg>
  )
}

export function Wordmark() {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <Mark />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <span style={{ fontWeight: 650, letterSpacing: '-0.03em', fontSize: 16 }}>Anil Giduthuri</span>
        <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Design · Code
        </span>
      </span>
    </span>
  )
}
