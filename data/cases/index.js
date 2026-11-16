import { n3xgen } from './n3xgen'
import { agenticos } from './agenticos'
import { kestrel } from './kestrel-health'
import { atrio } from './atrio'
import { verato } from './verato-mdm-cloud'
import { genie } from './genie-connections'
import { starling } from './starling-business'
import { nextConcept } from './next-retail'

// Order here is the order on the site. `featured` cases get the big stacked
// cards on the home page; the rest go in the grid below them.
const listing = [
  { c: n3xgen, category: 'Enterprise AI', featured: true },
  { c: agenticos, category: 'Enterprise AI', featured: true },
  { c: kestrel, category: 'Healthcare', featured: true },
  { c: verato, category: 'Healthcare' },
  { c: atrio, category: 'Workplace SaaS' },
  { c: starling, category: 'Fintech' },
  { c: nextConcept, category: 'Retail' },
  { c: genie, category: 'Consumer app' },
]

export const cases = listing.map(({ c, ...rest }, i) => ({ ...c, ...rest, index: String(i + 1).padStart(2, '0') }))

export const featuredCases = cases.filter((c) => c.featured)

export const categories = [...new Set(cases.map((c) => c.category))]

export const getCase = (slug) => cases.find((c) => c.slug === slug)

const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
export const countWord = (n) => words[n] || String(n)

// A mix of projects for the home page screen rail.
export const railScreens = [
  { src: '/work/nexgen/screens/home.webp', title: 'Home · What needs me today', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/canvas.webp', title: 'Agent Canvas editor', project: 'AgenticOS' },
  { src: '/work/kestrel-health/screens/command.webp', title: 'Command centre', project: 'Kestrel Health' },
  { src: '/work/verato-mdm-cloud/screens/review.webp', title: 'Is this the same patient?', project: 'Verato MDM Cloud' },
  { src: '/work/atrio/screens/lobby.webp', title: 'Live lobby', project: 'Atrio' },
  { src: '/work/nexgen/screens/mapping.webp', title: 'AI Mapping Studio', project: 'N3XGEN Agentic' },
  { src: '/work/starling-business/screens/w-business.webp', title: 'Business account', project: 'Starling Business' },
  { src: '/work/agenticos/screens/replay.webp', title: 'Run Replay', project: 'AgenticOS' },
  { src: '/work/next-retail/screens/product.webp', title: 'Product page', project: 'Next' },
  { src: '/work/kestrel-health/screens/sample-tracking.webp', title: 'Sample tracking', project: 'Kestrel Health' },
]
