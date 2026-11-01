import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="container" style={{ display: 'grid', gap: 20, justifyItems: 'center' }}>
        <span className="eyebrow">404</span>
        <h1 className="h2">
          This page took a <span className="serif">wrong turn.</span>
        </h1>
        <p className="lead">The link may be old. The work is still here.</p>
        <Link href="/" className="btn">
          Back to the homepage
        </Link>
      </div>
    </section>
  )
}
