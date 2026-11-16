import { notFound } from 'next/navigation'
import CaseStudy from '@/components/case/CaseStudy'
import { cases, getCase } from '@/data/cases'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }) {
  const c = getCase(params.slug)
  if (!c) return {}
  return {
    title: `${c.name} case study`,
    description: c.summary,
    openGraph: { title: `${c.name} · case study by Anil Kumar Giduthuri`, description: c.summary, images: [c.cover] },
  }
}

export default function Page({ params }) {
  const c = getCase(params.slug)
  if (!c) notFound()
  const next = cases[(cases.indexOf(c) + 1) % cases.length]
  const { slug, name, kind, title, cover, accent, coverDevice = null, coverPhones = null } = next
  return <CaseStudy c={c} next={{ slug, name, kind, title, cover, accent, coverDevice, coverPhones }} />
}
