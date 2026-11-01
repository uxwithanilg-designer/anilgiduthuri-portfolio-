const s = (name) => `/work/nexgen/screens/${name}.webp`
const p = (name) => `/work/nexgen/process/${name}.webp`

export const n3xgen = {
  slug: 'n3xgen-agentic',
  index: '01',
  name: 'N3XGEN Agentic',
  kind: 'AI-native integration platform',
  title: 'An integration platform where AI agents do the heavy lifting, and people stay in charge.',
  summary:
    'N3XGEN connects systems like Oracle, Salesforce and SAP. Building one flow used to take days of wizards and hand mapping. I redesigned it around a crew of eight AI agents that build, test, ship and heal integrations, and every risky step waits for a human yes.',
  year: '2026',
  accent: '#0B6FD6',
  accent2: '#7C5CFF',
  tint: '#EAF3FE',
  cover: s('home'),
  coverAlt: s('canvas'),
  meta: [
    { label: 'Role', value: 'Lead UX Designer' },
    { label: 'Client', value: 'N3XGEN.io' },
    { label: 'Timeline', value: '6 weeks · 2026' },
    { label: 'Platform', value: 'Web · desktop-first' },
    { label: 'Team', value: '2 product designers, researcher, content designer' },
  ],
  tags: ['Enterprise AI', 'Agent UX', 'Design system', 'IA'],
  highlights: [
    { value: '25 → 5', label: 'screens to build one flow, down to five moments where a person decides' },
    { value: '8', label: 'AI agents, each with one job and one human checkpoint' },
    { value: '40', label: 'screens wireframed, every P0 screen in eight states' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Days of wizards for a single integration',
      blocks: [
        {
          type: 'quote',
          text: 'Our engineers spend days building one integration. Mapping is manual, deploys are scary and we find failures late. We already added AI, but it feels like a side feature.',
          by: 'The client brief',
        },
        {
          type: 'text',
          body: [
            'N3XGEN is an enterprise integration platform. Teams use it to move data between business systems, for example new Salesforce accounts into Oracle ERP every hour. When I picked up the project, building one standard flow meant clicking through about 25 screens, mapping fields by hand and then hoping the deploy would go fine. AI had been added, but it lived on its own page as a list of models, an API key field and a "safety score 0.65 unsafe" that never explained itself.',
            'The ask was big: make N3XGEN the platform where AI agents do the heavy work. My reading of it was narrower, and I think more useful. Agents should draft, people should decide, and every AI action should be visible and easy to undo. Everything in this case study comes back to that one sentence.',
          ],
        },
        {
          type: 'stats',
          caption: 'Targets agreed with the client at kickoff',
          items: [
            { value: '≤ 1 hr', label: 'to build a standard integration (today it takes days)' },
            { value: '−70%', label: 'manual mapping effort' },
            { value: '≤ 15 min', label: 'mean time to recover from a failure' },
            { value: '0', label: 'unapproved changes in Production' },
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'The audit, desk research, competitor review, concepts and all the design work here are done. Interviews and usability rounds with real users were planned for after handoff. So the personas are proto-personas, their quotes are hypotheses, and every number on this page is a target, not a result. I would rather show that honestly than dress it up.',
        },
      ],
    },
    {
      id: 'role',
      label: 'My role',
      title: 'Lead UX, from the first workshop to the handoff',
      blocks: [
        {
          type: 'text',
          body: [
            'I led UX for the whole project. I owned the vision, the process and the quality bar, and I designed the agent interaction model myself: how an agent asks for permission, how it acts, how it explains itself and how a person undoes it. Two product designers split Build and Run, a researcher owned the research plan, and a content designer owned naming and error copy.',
            'We worked in six weeks with five gates. At each gate the sponsor, PM, engineering, AI/ML and security leads had to agree on one question before we moved on. That rhythm kept a fast project from turning into a fast mess.',
          ],
        },
        {
          type: 'timeline',
          items: [
            { when: 'Week 1', title: 'Discover', body: 'Kickoff, stakeholder talks, heuristic audit, desk research.', gate: 'Audit report · research plan' },
            { when: 'Week 2', title: 'Discover', body: 'Competitor review, proto-personas, interview guide.', gate: 'G1 · Do we understand the people and the market?' },
            { when: 'Week 3', title: 'Define', body: 'Journeys, problem statements, the agent crew model, IA and naming.', gate: 'G2 · Are these the right problems?' },
            { when: 'Week 4', title: 'Develop', body: 'Three concepts, core flows, lo-fi wireframes.', gate: 'G3 · Which concept do we take forward?' },
            { when: 'Week 5', title: 'Develop', body: 'Hi-fi screens, design system, prototype.', gate: 'G4 · Usable, buildable, safe and on brand?' },
            { when: 'Week 6', title: 'Deliver', body: 'Specs, edge cases, roadmap, risks and measurement.', gate: 'G5 · Can engineering start without guessing?' },
          ],
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            { kicker: 'Monday', title: 'Design + dev sync', body: '30 minutes. What changed, what is blocked, what engineering needs from design this week.' },
            { kicker: 'Wednesday', title: 'Critique', body: '45 minutes, using "I like, I wish, what if". One clear question per designer.' },
            { kicker: 'Friday', title: 'Decision log + demo', body: 'Every decision written down with the options we did not choose, and why.' },
          ],
        },
      ],
    },
    {
      id: 'discover',
      label: 'Discover',
      title: 'Start with the product we already had',
      blocks: [
        {
          type: 'text',
          body: [
            'Recruiting real users takes time, so I started with what I could check on day one: the product itself. I audited all 21 pages of the existing Figma file against Nielsen’s ten heuristics, with WCAG 2.2 spot checks. It gave us twelve findings, five of them high severity.',
            'The worst one was easy to show. To build one Oracle → Salesforce flow, a person went through about 25 screens. Fifteen of those were the same five-step wizard (Functions, Versions, Mappings, Settings, Review), repeated for the source, the processor and the target.',
          ],
        },
        {
          type: 'stats',
          items: [
            { value: '~25', label: 'screens to build one standard flow' },
            { value: '10', label: 'modules with no place in the navigation' },
            { value: '0', label: 'text labels in the icon-only sidebar' },
            { value: '12', label: 'heuristic findings, 5 of them high severity' },
          ],
        },
        {
          type: 'table',
          title: 'The findings that shaped the redesign',
          head: ['Finding', 'Severity', 'What it looked like'],
          rows: [
            ['The workflow builder is not a real canvas', 'High', 'A vertical chain of circles. Each node opens a five-step wizard.'],
            ['The AI layer feels bolted on', 'High', 'A radio list of models, an API key, and a safety score with no reason or next step.'],
            ['Credentials are everywhere', 'High', 'Passwords typed into forms, Git credentials inside the deploy wizard, no vault.'],
            ['The dashboard is decorative', 'High', 'Rings with no values and a chart of String, Boolean and Number field types.'],
            ['Names confuse people', 'Medium', 'Connections vs Connectors. Smart Store vs Intelligent Store vs "Intelligence Store".'],
            ['The debugger shows raw JSON only', 'Medium', 'Fine for one engineer, useless for the person who gets the 2 AM call.'],
          ],
        },
        {
          type: 'pull',
          text: 'The product made people do the machine’s work: wizards, retyping secrets, reading JSON. Before adding more AI, we had to make it explainable.',
        },
        {
          type: 'text',
          title: 'What the market was doing',
          body: [
            'Desk research in October 2026 told a clear story. Gartner expects 40% of enterprise apps to have task-specific agents by the end of 2026, and also warns that more than 40% of agentic AI projects could be cancelled by 2027. Open standards like MCP and A2A were making agent crews possible. The EU AI Act and India’s DPDP rules were making audit trails non-negotiable.',
            'I reviewed seven platforms using public information only. Everyone was adding agents. Very few were explaining them.',
          ],
        },
        {
          type: 'table',
          head: ['Platform', 'What we learned'],
          rows: [
            ['MuleSoft Agent Fabric', 'Make the crew visible. People want to see which agents exist and what they touch.'],
            ['Boomi Agentstudio', 'People need one big red button: a kill switch they can find in a panic.'],
            ['IBM webMethods', 'One agent per job, plus a gateway that controls model cost.'],
            ['Microsoft Logic Apps', 'Show the agent’s reasoning as a trace, not as a chat log.'],
            ['n8n', 'Agents can live as nodes on the same canvas as everything else.'],
            ['Zapier', 'Credentials should never reach the model.'],
          ],
        },
        {
          type: 'cards',
          cols: 2,
          title: 'Research we planned with the client',
          items: [
            { kicker: 'Planned', title: '8 stakeholder + 15 user interviews', body: 'Across six roles, 60 minutes each, remote. Always "tell me about the last real time", never "would you use…".' },
            { kicker: 'Planned', title: 'Night-shift contextual inquiry', body: 'Sitting with three on-call ops engineers, including one night shift for US clients.' },
            { kicker: 'Planned', title: 'Six months of tickets and logs', body: 'To check whether a handful of failure types really cause most incidents.' },
            { kicker: 'Planned', title: 'Nine written hypotheses', body: 'Each with an owner and a kill signal written before testing, so we could not move the goalposts later.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Six people, one bad Friday',
      blocks: [
        {
          type: 'text',
          body: [
            'I wrote six proto-personas from the audit and the stakeholder talks: Arjun the integration engineer, Kavya the architect, Rohit on call, Fatima in data governance, Vikram the platform admin and Neha, a business analyst who knows exactly what she needs but cannot build it. They are hypotheses to test, and the file says so on every card.',
          ],
        },
        { type: 'image', src: p('persona'), alt: 'Six proto-persona cards with quotes, goals, pains, tools and the agents that help them most', caption: 'Six proto-personas, each mapped to the agents that would help them most.' },
        {
          type: 'quotes',
          items: [
            { text: 'I spend more time clicking Next than thinking about the flow.', by: 'Arjun · Integration Engineer' },
            { text: 'At 2 AM I don’t want a dashboard. I want to know what broke and what to do.', by: 'Rohit · Ops / SRE' },
            { text: 'If an auditor asks who saw a customer’s PAN, I should answer in minutes, not weeks.', by: 'Fatima · Data Governance' },
          ],
          caption: 'Hypothesis quotes, written to be tested in interviews.',
        },
        {
          type: 'text',
          title: 'Following one flow from request to 2 AM',
          body: [
            'The journey map follows Arjun building Oracle → Salesforce. It made three moments obvious. Mapping is the lowest point ("Is CUST_NO the same as AccountNumber?"). Deploy is about fear, not effort ("Please don’t break anything on a Friday"). And when something fails, the business team usually notices before the platform does.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Journey map with eight stages, an emotion curve, pains and agent opportunities', caption: 'Eight stages, one emotion curve, and where an agent could actually help.' },
        {
          type: 'table',
          title: 'Problems we agreed to solve',
          head: ['#', 'Problem', 'How might we…'],
          rows: [
            ['P1', 'Building a standard flow takes days, not hours', '…let Arjun describe a flow in plain English and get a working draft on a real canvas?'],
            ['P2', 'Failures are found late and are hard to explain', '…fix known failures before Rohit even wakes up?'],
            ['P3', 'People get lost in the product', '…make Home answer "what needs me today" in five seconds?'],
            ['P4', 'AI feels bolted on, so nobody trusts it near Production', '…make every agent action show a reason, a confidence and a cost?'],
            ['P5', 'Secrets are typed everywhere, with no audit trail', '…make the safe way (the vault) also the fastest way to connect a system?'],
            ['P6', 'It does not look or behave like one product', '…give every screen one language, one system and one set of names?'],
          ],
        },
      ],
    },
    {
      id: 'crew',
      label: 'The agent crew',
      title: 'Eight agents. One job each. One human checkpoint each.',
      blocks: [
        {
          type: 'text',
          body: [
            'The big idea is a crew instead of one all-knowing assistant. Each agent has a narrow job, clear inputs and outputs, the tools it is allowed to use, and a point where it must stop and ask a person. Narrow jobs are easier to trust, easier to test and much easier to explain to a security team.',
          ],
        },
        {
          type: 'cards',
          cols: 4,
          items: [
            { kicker: 'Connector', title: 'Connects systems', body: 'Sets up connections through the vault. Never sees a password.' },
            { kicker: 'Flow Architect', title: 'Drafts the flow', body: 'Turns a sentence into nodes on the canvas, as suggestions.' },
            { kicker: 'Mapping', title: 'Maps the fields', body: 'Acts alone only at 90%+ confidence, and only in Dev.' },
            { kicker: 'Test', title: 'Writes the tests', body: 'Runs flows against synthetic data before anything ships.' },
            { kicker: 'Release', title: 'Ships safely', body: 'Opens a PR with a risk score. A person approves Prod.' },
            { kicker: 'Ops', title: 'Watches and heals', body: 'Fixes known failures within limits and writes the summary.' },
            { kicker: 'Guardian', title: 'Keeps the rules', body: 'Can always block. Can never loosen a rule.' },
            { kicker: 'Modernisation', title: 'Moves legacy code', body: 'Converts old packages and runs old and new side by side.' },
          ],
        },
        {
          type: 'text',
          title: 'Autonomy is earned, and it can be lost',
          body: [
            'Every agent works at one of three levels in each environment: Suggest, Ask before acting, or Act within limits. "Within limits" has a strict meaning: a known fix, a small blast radius, inside budget, rollback ready, inside the allowed time window, and Guardian checks passed. An agent moves up a level only after a person signs it off. Never automatically.',
            'Some things always need a human, whatever the level: any logic change or promotion to Production, new Prod secrets, deletes, sending personal data to a cloud model, going over budget, or raising an agent’s own autonomy.',
          ],
        },
        {
          type: 'facts',
          title: '"Show your work": the same six facts on every agent action',
          items: [
            { k: 'What', v: 'The change, in one plain sentence.' },
            { k: 'Why', v: 'The reason. No reason, no card.' },
            { k: 'Confidence', v: 'Always a % and a word: High, Medium or Low.' },
            { k: 'Sources', v: 'What the agent looked at to decide.' },
            { k: 'Cost', v: 'Tokens and dollars, so spend never surprises anyone.' },
            { k: 'Undo', v: 'How to roll it back, and for how long.' },
          ],
        },
      ],
    },
    {
      id: 'ia',
      label: 'IA & naming',
      title: 'A product that had outgrown its map',
      blocks: [
        {
          type: 'text',
          body: [
            'The old sidebar was icons only, and ten modules had no home at all. I rebuilt the navigation around jobs people do, in nine groups: Home, Build, Run & Release, Operate, Agents, Govern, Connect, Modernise and Admin. Labels are always visible, Ctrl+K works from anywhere, and breadcrumbs follow the object model: Workspace → Project → Integration flow → Run.',
          ],
        },
        { type: 'image', src: p('ia-sitemap'), alt: 'New navigation tree with nine groups named by job', caption: 'Nine groups, named by the job people came to do.' },
        {
          type: 'compare',
          title: 'Old names → new names',
          rows: [
            ['Connections + Connectors', 'Connector Hub'],
            ['Smart Store + Intelligent Store', 'Data Store + Prompt Lab'],
            ['Smart Stack', 'LLM Gateway'],
            ['Debugger', 'Run Replay'],
            ['Ops Monitoring', 'Command Center'],
            ['CI/CD', 'Releases'],
          ],
          note: 'Old names stay searchable for six months, so nobody gets lost on day one.',
        },
      ],
    },
    {
      id: 'develop',
      label: 'Concepts & flows',
      title: 'Three concepts, and none of them won alone',
      blocks: [
        {
          type: 'text',
          body: [
            'We sketched three directions and scored each from 1 to 5 on speed, control, learnability, enterprise trust and build effort. The scores were close, which was the real finding. Each concept was good at one thing.',
          ],
        },
        {
          type: 'cards',
          cols: 3,
          items: [
            { kicker: 'A · 18 / 25', title: 'Canvas-first', body: 'Great for seeing and building. Can feel technical for Neha.' },
            { kicker: 'B · 17 / 25', title: 'Chat-first', body: 'Great for asking. But you cannot audit a chat, and nothing should reach Prod through one.' },
            { kicker: 'C · 19 / 25', title: 'Inbox-first', body: 'Great for deciding. Weak for building anything new.' },
          ],
        },
        {
          type: 'pull',
          text: 'So we combined them. The canvas is where you see and build. Copilot is how you ask. The Inbox is where you decide. One rule on top: no chat-only path to Production, and no agent ever acts silently.',
        },
        { type: 'image', src: p('wireframe-canvas'), alt: 'Annotated lo-fi wireframe of the Agentic Canvas with numbered notes', caption: 'Lo-fi Agentic Canvas with numbered design notes: a panel instead of a wizard, suggestions shown dashed until accepted.' },
        { type: 'image', src: p('user-flow'), alt: 'Swimlane user flow showing person and agent lanes with human checkpoints', caption: 'Flow A, build with Copilot: who does what, and where a person has to say yes.' },
        {
          type: 'table',
          title: 'What ships first: scored with RICE, then checked with MoSCoW',
          head: ['Feature', 'RICE', 'Why it is early'],
          rows: [
            ['Agent Inbox', '10.7', 'Cheap to build, and every other agent feature depends on a place to decide.'],
            ['Run Replay', '9.3', 'Replaces raw JSON. Rohit’s 2 AM problem starts here.'],
            ['Credential Vault', '9.0', 'Trust first: secrets out of forms before agents touch anything.'],
            ['Home', '8.0', '"What needs me today", answered in five seconds.'],
            ['AI Mapping Studio', '4.8', 'The lowest point of the journey, and the biggest time saver.'],
          ],
          note: 'Build order: trust first, then speed, then reach.',
        },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Confident automation, in daylight',
      blocks: [
        {
          type: 'text',
          body: [
            'The client wanted to keep the N3XGEN name and evolve its blue and green. I pushed the action colour to a stronger electric blue, added a deep navy as the ground, and gave AI exactly one colour: violet. Violet means an agent is speaking. Dashed violet means suggested, not applied. That rule is simple enough that people learn it without a tooltip.',
            'The mood board had a "less of" list too: sparkle icons on everything, purple gradients and glowing robots.',
          ],
        },
        { type: 'image', src: p('brand'), alt: 'N3XGEN brand book cover with logo, idea and three pillars', caption: 'Brand book cover: "Confident automation", built on three pillars: Clear, Calm, In control.' },
        {
          type: 'palette',
          items: [
            { name: 'Electric blue', hex: '#0B6FD6', role: 'Action' },
            { name: 'Agent violet', hex: '#7C5CFF', role: 'AI only' },
            { name: 'Signal cyan', hex: '#22C3EE', role: 'Highlight' },
            { name: 'Teal', hex: '#12B39A', role: 'Success · flow' },
            { name: 'Deep navy', hex: '#0B1324', role: 'Ground · nav' },
          ],
        },
        {
          type: 'stats',
          caption: 'The design system, counted from the file',
          items: [
            { value: '45', label: 'component sets with 225 variants' },
            { value: '75', label: 'semantic colour tokens, bound to 65 primitives' },
            { value: '105', label: 'line icons on a 20 px grid' },
            { value: '42', label: 'canvas node variants: 7 types × 6 states' },
          ],
        },
        { type: 'image', src: p('design-system'), alt: 'Agentic canvas example built only from design system components', caption: 'A canvas assembled only from system parts: nodes, a suggested node, edge labels, toolbar and minimap.' },
        {
          type: 'facts',
          title: 'Agent-specific components',
          items: [
            { k: 'Confidence meter', v: 'High ≥ 85%, Medium 60–84%, Low < 60%. Number, word and colour, never colour alone.' },
            { k: 'Risk badge', v: '0–100. Low, Medium, High, Critical.' },
            { k: 'Autonomy pill', v: 'Suggest, Ask, Act.' },
            { k: 'Agent step', v: 'Thought, tool call, result, handoff, human.' },
            { k: 'Env switch', v: 'Prod tints the control red and adds a lock.' },
            { k: 'Motion', v: '120 / 200 / 320 ms. The only loop is the agent "thinking" pulse.' },
          ],
        },
      ],
    },
    {
      id: 'screens',
      label: 'Final screens',
      title: 'The screens',
      blocks: [
        {
          type: 'text',
          body: [
            'Forty screens in eleven groups, desktop first at 1440. Every P0 screen is designed in eight states: default, empty, loading, error with a next step, agent working, needs approval, no permission and read-only in Prod. Here are the ones that carry the story.',
          ],
        },
        {
          type: 'spotlight',
          items: [
            { src: s('home'), title: 'Home · What needs me today', body: 'Four things need you, two runs failed, eleven were fixed by agents overnight. Each item says which agent raised it, the risk and the one action that matters.' },
            { src: s('copilot'), title: 'Copilot build · describe it, build it', body: 'Neha writes two lines in plain English. The Flow Architect drafts nodes on the canvas as suggestions she can accept, edit or throw away.' },
            { src: s('mapping'), title: 'AI Mapping Studio', body: 'Mapping becomes a review job. Every link shows a confidence and a reason, and Arjun filters straight to the few that need him.' },
            { src: s('inbox'), title: 'Agent Inbox', body: 'One place to decide, sorted by risk instead of time. Approve, edit or reject in place, and every reject asks why so agents learn.' },
            { src: s('incident'), title: 'Incident and self-healing', body: 'Root cause, confidence, affected records and the proposed fix, with rollback ready. Readable at 2 AM, on a phone.' },
            { src: s('diff'), title: 'Legacy vs new, side by side', body: 'The Modernisation agent converts an old package. Old and new run in parallel until a person is confident to switch.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('canvas'), title: 'Agentic Canvas' },
            { src: s('testlab'), title: 'Test Lab with synthetic data' },
            { src: s('releases'), title: 'Releases · Dev → QA → Prod' },
            { src: s('release-detail'), title: 'Release detail · risk score and Git PR' },
            { src: s('trace'), title: 'Run history and trace viewer' },
            { src: s('ops'), title: 'Ops Command Center' },
            { src: s('crew'), title: 'Agent Crew' },
            { src: s('guardian'), title: 'Guardian overview' },
            { src: s('audit'), title: 'Audit trail' },
            { src: s('knowledge'), title: 'Knowledge graph explorer' },
            { src: s('command'), title: 'Command palette' },
            { src: s('signin'), title: 'Sign in and SSO' },
          ],
        },
      ],
    },
    {
      id: 'handoff',
      label: 'Handoff',
      title: 'Engineering should never have to guess',
      blocks: [
        {
          type: 'text',
          body: [
            'The handoff package had tokens, component specs, every agent state, edge cases, Given/When/Then acceptance criteria and a prototype linked from Jira. Frames were marked "Ready for dev" only after the last gate, and design questions got an answer within one working day.',
          ],
        },
        { type: 'image', src: p('handoff'), alt: 'Agent action card component spec with anatomy and rules', caption: 'Agent action card spec. Six parts, and one hard rule: no reason, no card.' },
        {
          type: 'table',
          title: 'Edge cases we designed before anyone asked',
          head: ['When this happens', 'The product does this'],
          rows: [
            ['The LLM provider goes down', 'A clear banner, and a fallback to a local model.'],
            ['Nobody approves a request', 'A reminder at 4 hours. It expires at 24.'],
            ['Two people act on one request', 'The first one wins. The second sees what happened.'],
            ['The budget is reached', 'The agent pauses and says why.'],
            ['A schema has 5,000+ fields', 'A virtualised list that stays fast.'],
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Roadmap for 2027',
          items: [
            { kicker: 'MVP · Q1', title: 'Build faster, safely', body: 'Canvas, Copilot, Mapping, Inbox, Vault, Home. Agents only suggest or ask. Three pilot customers.' },
            { kicker: 'Beta · Q2', title: 'Test, ship and watch', body: 'Test Lab, releases, Ops, LLM Gateway, Guardian. Agents can act in Dev and QA.' },
            { kicker: 'GA · Q3', title: 'Heal and modernise', body: 'Self-healing for known fixes in Prod, legacy modernisation, and an audit pack ready for the EU AI Act and DPDP.' },
          ],
        },
        {
          type: 'stats',
          caption: 'How we will know it works (targets)',
          items: [
            { value: '≥ 4/5', label: 'trust score, with SUS of 75 or more' },
            { value: '50%', label: 'of new flows started with Copilot by GA' },
            { value: '80%', label: 'of known failures fixed automatically' },
            { value: '100%', label: 'of AI actions traceable' },
          ],
        },
      ],
    },
    {
      id: 'reflection',
      label: 'Reflection',
      title: 'What I took away',
      blocks: [
        {
          type: 'cards',
          cols: 3,
          items: [
            { kicker: '01', title: 'Trust is a design material', body: 'Confidence, reasons, cost and undo are not extra features. They are the product. Without them, nobody lets an agent near Production.' },
            { kicker: '02', title: 'Some fixes need no AI', body: 'Labels in the sidebar, one name per thing and a vault for secrets solved real problems before a single agent was designed.' },
            { kicker: '03', title: 'Say what you don’t know', body: 'Marking every persona and number as a hypothesis made the gate reviews faster, not slower. People argued about evidence, not opinions.' },
          ],
        },
        {
          type: 'text',
          body: [
            'Next, I want to see the research plan run. My bet is on H2, that confidence plus a reason makes people accept agent mappings. If that one is wrong, a lot of this design has to change, and I would rather find out in week one of the pilot than in month six.',
          ],
        },
      ],
    },
  ],
}
