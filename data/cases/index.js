import { n3xgen } from './n3xgen'
import { agenticos } from './agenticos'

export const cases = [n3xgen, agenticos]

export const getCase = (slug) => cases.find((c) => c.slug === slug)

// A mix of both projects for the home page screen rail.
export const railScreens = [
  { src: '/work/nexgen/screens/home.webp', title: 'Home · What needs me today', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/canvas.webp', title: 'Agent Canvas editor', project: 'AgenticOS' },
  { src: '/work/nexgen/screens/mapping.webp', title: 'AI Mapping Studio', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/replay.webp', title: 'Run Replay', project: 'AgenticOS' },
  { src: '/work/nexgen/screens/inbox.webp', title: 'Agent Inbox', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/approvals.webp', title: 'Approval Inbox', project: 'AgenticOS' },
  { src: '/work/nexgen/screens/incident.webp', title: 'Incident and self-healing', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/policy.webp', title: 'Policy Studio', project: 'AgenticOS' },
  { src: '/work/nexgen/screens/crew.webp', title: 'Agent Crew', project: 'N3XGEN Agentic' },
  { src: '/work/agenticos/screens/cost.webp', title: 'Cost and Value Insights', project: 'AgenticOS' },
]
