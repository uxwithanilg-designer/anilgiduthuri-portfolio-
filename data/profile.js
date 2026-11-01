export const profile = {
  name: 'Anil Kumar Giduthuri',
  first: 'Anil',
  role: 'Senior Product & UX Designer',
  tagline: 'Calm design for complex systems.',
  location: 'Hyderabad, India',
  timezone: 'Asia/Kolkata',
  email: 'uxwithanilg@gmail.com',
  phone: '+91 95535 78760',
  phoneHref: 'tel:+919553578760',
  linkedin: 'https://www.linkedin.com/in/anil-kumar-giduthuri-430367385/',
  resume: '/Anil_Kumar_Giduthuri_Resume_2026.pdf',
  status: 'Open to senior product design roles',
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

export const stats = [
  { value: 8, suffix: '+', label: 'years designing digital products' },
  { value: 5, suffix: '', label: 'companies, from start-ups to BYJU’S' },
  { value: 79, suffix: '', label: 'hi-fi screens across two AI platforms in 2026' },
  { value: 40, suffix: '%+', label: 'better task completion on a payments redesign' },
]

export const experience = [
  {
    company: 'CloudGen Systems',
    role: 'Senior UX Designer',
    period: 'Feb 2024 — Jun 2026',
    summary:
      'Led UX for N3xgen Agentic OS, an enterprise AI platform that IT admins, process architects, analysts and compliance teams use to run and watch automated workflows.',
    points: [
      'Designed Mission Control dashboards, guided task flows, dry-run states, confirmations and safety locks, so people understand a workflow before they let it act.',
      'Pulled event timelines, structured logs and raw JSON into one audit review experience for banking and healthcare teams.',
      'Built responsive React and Next.js prototypes and UI components with AI coding tools, then worked through edge cases, feasibility and design QA with engineers.',
      'Created reusable Figma components and interaction patterns for Agentic OS, a data pipeline builder, an energy dashboard and other enterprise products.',
    ],
    tags: ['Enterprise AI', 'Design systems', 'React · Next.js'],
  },
  {
    company: 'Genie Connections',
    role: 'Freelance UX/UI & Front-End Designer',
    period: 'Feb 2023 — Jan 2024',
    summary:
      'Designed a social discovery app end to end, from the first sign-up screen to the moment two people start talking.',
    points: [
      'Designed onboarding, matching, messaging and location-aware features, including the privacy, permission and consent states people usually skip.',
      'Built interactive Figma and coded prototypes, ran three rounds of testing, and used what we learned to fix onboarding and notification flows.',
    ],
    tags: ['Consumer app', 'Privacy UX', 'Testing'],
  },
  {
    company: 'TILLI Software India',
    role: 'Senior UX Designer & Front-End UI Contributor',
    period: 'May 2022 — Jan 2023',
    summary: 'Worked on payments for a global B2B platform, where a confusing step means money stuck in the wrong place.',
    points: [
      'Redesigned payment setup and transaction flows. In usability testing, task completion went up by more than 40%.',
      'Merged scattered notification preferences into one settings panel and worked with engineers on the responsive build.',
    ],
    tags: ['Payments', 'B2B', 'Usability testing'],
  },
  {
    company: 'BYJU’S — Think & Learn',
    role: 'UX/UI Designer',
    period: 'Jan 2022 — May 2022',
    summary: 'Designed learning experiences for K–12 students, who are honest and impatient users.',
    points: [
      'Designed lessons, quizzes, video-player states and progress feedback with a clear hierarchy and touch-friendly interactions.',
    ],
    tags: ['EdTech', 'Mobile', 'K–12'],
  },
  {
    company: 'Krify Software Technologies',
    role: 'UX/UI Designer',
    period: 'Mar 2018 — Oct 2021',
    summary: 'Where I learned the craft: many clients, many products, real deadlines.',
    points: [
      'Designed web and mobile products for clients, from requirements and user flows to wireframes, high-fidelity UI and prototypes.',
      'Built reusable UI patterns and developer specs, and helped front-end teams solve responsive issues before they shipped.',
    ],
    tags: ['Web & mobile', 'Client work', 'UI patterns'],
  },
]

export const skills = [
  {
    title: 'Product & UX',
    body: 'Finding the real problem and shaping the flow around it.',
    items: [
      'Discovery',
      'User research',
      'Interviews',
      'Journey mapping',
      'Information architecture',
      'Task flows',
      'Interaction design',
      'Wireframing',
      'Prototyping',
      'Usability testing',
    ],
  },
  {
    title: 'UI & delivery',
    body: 'Systems that scale, and handoff that engineers actually like.',
    items: [
      'Design systems',
      'Figma components & variables',
      'Enterprise dashboards',
      'Responsive design',
      'Accessibility (WCAG 2.1 / 2.2)',
      'Developer handoff',
      'Design QA',
    ],
  },
  {
    title: 'Vibe coding',
    body: 'AI-assisted prototypes in real code, so we test behaviour, not pictures.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML & CSS', 'Bootstrap', 'Git & GitHub', 'GitHub Copilot', 'AI coding tools'],
  },
]

export const principles = [
  {
    title: 'Show the whole picture',
    body: 'People trust what they can see. I would rather put the full flow on one screen than hide it behind a five-step wizard.',
  },
  {
    title: 'Safe by default, live by decision',
    body: 'Testing should be the default. Going live should be a clear, reviewed choice, never a toggle buried in a form.',
  },
  {
    title: 'Every status leads to an action',
    body: 'A red dot is not a design. Say what broke, what it affects and the safest thing to do next.',
  },
  {
    title: 'Plain words, one name',
    body: 'If a new teammate cannot guess what a label means on their first day, the label is wrong, not the teammate.',
  },
]

export const process = [
  {
    step: 'Discover',
    title: 'Understand the work, not the feature list',
    body: 'Stakeholder talks, an honest audit of what exists, desk research and competitor reviews. I end this phase with two lists: what we know and what we are only guessing.',
    outputs: ['Heuristic audit', 'Research plan', 'Competitor map'],
  },
  {
    step: 'Define',
    title: 'Name the problem before solving it',
    body: 'Proto-personas, journeys, problem statements and an object model simple enough to learn in ten minutes. Then I agree on the success metrics before drawing a single screen.',
    outputs: ['Problem statements', 'IA & naming', 'HEART targets'],
  },
  {
    step: 'Design',
    title: 'Concepts first, pixels later',
    body: 'Three directions, scored openly. Then wireframes, a token-based design system and hi-fi screens where every state is designed: empty, loading, error, waiting for approval.',
    outputs: ['Concepts', 'Wireframes', 'Design system'],
  },
  {
    step: 'Build',
    title: 'Prototype in real code',
    body: 'I build the risky parts in React and Next.js with AI coding tools. Engineers can click it, break it and question it early, and we argue about behaviour instead of pictures.',
    outputs: ['React prototypes', 'UI components', 'Feasibility notes'],
  },
  {
    step: 'Deliver',
    title: 'Handoff is a conversation',
    body: 'Dev Mode specs, edge cases, acceptance criteria and design QA every sprint. I stay close until it ships, because that is where the details get lost.',
    outputs: ['Specs & edge cases', 'Design QA', 'Analytics events'],
  },
]

export const clients = [
  'CloudGen Systems',
  'N3XGEN.io',
  'Genie Connections',
  'TILLI Software',
  'BYJU’S',
  'Krify Software',
]
