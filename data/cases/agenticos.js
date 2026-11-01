const s = (name) => `/work/agenticos/screens/${name}.webp`
const p = (name) => `/work/agenticos/process/${name}.webp`

export const agenticos = {
  slug: 'agentic-os',
  index: '02',
  name: 'AgenticOS',
  kind: 'Enterprise AI agent platform',
  title: 'One calm place to build, test, govern and run AI agent workflows.',
  summary:
    'A ten-week, end-to-end redesign of an enterprise AI agent platform. The goal: a product a process owner can learn in a day and a CISO can approve in a meeting. I took it from a dense dark-mode admin tool to a calm, glass-box product with sandbox runs, replay, approvals and policies built in.',
  year: '2026',
  accent: '#4B42DE',
  accent2: '#8A5CF5',
  tint: '#EEF0FF',
  cover: s('home'),
  coverAlt: s('canvas'),
  meta: [
    { label: 'Role', value: 'Lead UX Designer' },
    { label: 'Client', value: 'N3XGEN.io' },
    { label: 'Timeline', value: '10 weeks · 2026' },
    { label: 'Platform', value: 'Web · light mode · 1440 → 1280' },
    { label: 'Team', value: '2 product designers, researcher, content designer' },
  ],
  tags: ['Enterprise AI', 'Governance UX', 'Design system', 'Canvas'],
  highlights: [
    { value: '5 → 3', label: 'core objects, so the product model can be learned in ten minutes' },
    { value: '13', label: 'innovation bets, ranked and split into Now, Next and Later' },
    { value: '218', label: 'components in a light-mode system built on 134 variables' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Agent projects fail on trust, not tech',
      blocks: [
        {
          type: 'text',
          body: [
            'AgenticOS is where enterprise teams build AI agent workflows: a support agent that reads a ticket, checks a policy and drafts a refund, with a manager’s approval in the middle. The first version worked, but it looked and felt like a set of admin tables and dense modals. The most important safety feature, Dry Run, was a small switch inside a long form.',
            'Gartner expects more than 40% of agentic AI projects to be cancelled by the end of 2027, because of rising costs, unclear value and weak risk controls. I treated those three reasons as the design brief. If the product could make cost visible, value provable and risk controllable, it would get approved. If not, it would end up in the 40%.',
          ],
        },
        {
          type: 'pull',
          text: 'North star: any enterprise team should be able to turn a process into a safe, observable AI agent workflow in one afternoon, and trust it in production.',
        },
        {
          type: 'stats',
          items: [
            { value: '10', label: 'weeks from kickoff to a beta-ready handoff' },
            { value: '6', label: 'personas across build, run, govern and fund' },
            { value: '13', label: 'innovation bets ranked by impact' },
            { value: '34', label: 'screens wireframed, then designed in hi-fi' },
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'The audit of the existing product, desk research, competitor review, concepts, wireframes, brand, design system and hi-fi screens are finished work. Interviews, usability rounds and the beta were planned for after handoff. So personas are proto-personas, and every metric here is a target we agreed, not a measured result.',
        },
      ],
    },
    {
      id: 'role',
      label: 'Role & process',
      title: 'A Double Diamond with five gates',
      blocks: [
        {
          type: 'text',
          body: [
            'I led the UX vision and process end to end, with two product designers, a UX researcher and a content designer. One designer owned Build (canvas, agents, templates). The other owned Run, Observe and Govern. I owned research strategy, the information architecture, the design system direction and the handoff, and I kept the decision log: what we chose, why, who decided, and what we did not choose.',
          ],
        },
        {
          type: 'table',
          head: ['Phase', 'Weeks', 'What happened', 'Gate'],
          rows: [
            ['Kickoff', 'W1', 'Vision workshop, stakeholder map, research ops, success criteria', 'G1 · Vision agreed'],
            ['Discover', 'W1–3', 'Audit, market scan, competitors, mood boards, personas, journeys', 'Insight report'],
            ['Define', 'W3–4', 'Problems and HMWs, 13 bets, principles, object model, IA, flows', 'G2 · Problems and bets signed'],
            ['Develop', 'W5–8', 'Concept sprints, lo-fi to mid-fi, design system, prototype', 'G3 · Concept chosen'],
            ['Deliver', 'W8–10', 'Hi-fi for every screen and state, accessibility pass, Dev Mode specs', 'G4 · Hi-fi approved'],
            ['Handoff', 'W10', 'Engineering walkthrough, design QA, beta plan', 'G5 · Beta live'],
          ],
        },
        {
          type: 'text',
          body: [
            'The design system started in week four, not week eight, so screens were built on it instead of before it. A steering group of the CPO, CTO and VP Sales signed each gate, and a one-page decision memo went out the day before every review. Short memos made for short meetings.',
          ],
        },
      ],
    },
    {
      id: 'discover',
      label: 'Discover',
      title: 'One workflow, eight places',
      blocks: [
        {
          type: 'text',
          body: [
            'I began with a screenshot audit of twenty screens from the existing dark-mode product, rated P0 to P2. The base was solid, but the product’s promise was invisible. Dry Run was a tiny switch in a dense form. Mission Control showed four failed KPIs while every service tile said Healthy. The task builder was a list, not a canvas, and nothing taught people the five-level model of Department, Task, Task Pipe, Goal and Run.',
            'Then I mapped how a team builds one AI workflow today. It touches eight places: Slack and Jira for the idea, scripts or n8n to build, an LLM console for the AI logic, a laptop with copied data to test, email and meetings to approve, CI to deploy, log tools to monitor, and spreadsheets to report.',
          ],
        },
        {
          type: 'flow',
          items: ['Idea', 'Build', 'AI logic', 'Test', 'Approve', 'Deploy', 'Monitor', 'Report'],
          caption: 'Eight places for one workflow. Our desk research assumed 6–8 tools and 4+ teams before go-live, with no single place to see flow, risk and cost.',
        },
        {
          type: 'table',
          title: 'What the client asked for, and what it meant for design',
          head: ['They said', 'For design, that means'],
          rows: [
            ['"Easy enough for business teams, not only engineers"', 'A visual canvas plus a plain-language Copilot'],
            ['"We need to trust it with real data and real money"', 'Safety, approvals, policies, audit and cost visible by design'],
            ['"Features that make us stand out in sales demos"', 'Simulation, replay, policy studio, evaluations, cost guardrails'],
            ['"Safety must be part of the product"', 'Sandbox by default, approvals, workspace isolation, full audit trail'],
          ],
        },
        {
          type: 'table',
          title: 'Seven competitors, one gap',
          head: ['Product', 'What we learned'],
          rows: [
            ['n8n', 'The canvas is the right mental model for builders, but it feels technical to business users.'],
            ['Zapier', 'Plain-language building lowers the barrier to start.'],
            ['Make', 'Show the data moving between steps.'],
            ['Copilot Studio', 'Admins need central policies.'],
            ['UiPath', 'Enterprise buyers expect audit by default, but it is heavy to learn.'],
            ['LangSmith', 'Trace trees and evals make agents trustworthy, but they are built for developers.'],
            ['Workato', 'Reusable building blocks speed teams up.'],
          ],
          note: 'The gap: easy enough for a process owner, governed enough for a CISO, and open to any model or tool. Nobody did all three well.',
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Borrow the idea, never the look',
          items: [
            { kicker: 'Stripe', title: 'Test vs Live, always visible', body: 'Became Sandbox vs Live, shown on every screen.' },
            { kicker: 'GitHub', title: 'Pull requests', body: 'Became Publish review: a diff, checks and a named reviewer.' },
            { kicker: 'LangSmith', title: 'Trace trees', body: 'Became Run Replay: watch a run like a video, re-run from any step.' },
            { kicker: 'Google Docs', title: 'Suggestion mode', body: 'Became Copilot suggestions you accept or reject, never auto-applied.' },
            { kicker: 'Flight checklists', title: 'Simulators', body: 'Became the sandbox plus a pre-publish checklist.' },
            { kicker: 'Linear · Raycast', title: '⌘K everywhere', body: 'Became one command palette for every object and action.' },
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Three visual directions',
          items: [
            { kicker: 'A · Chosen', title: 'Calm daylight', body: 'Readable for long sessions, and it looks trustworthy in a CISO meeting.' },
            { kicker: 'B · Rejected', title: 'Neon ops', body: 'Dark only. It felt like a tool for engineers, and the brief asked for light.' },
            { kicker: 'C · Rejected', title: 'Playful builder', body: 'Friendly, but less serious than banks and hospitals expect.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Six roles, one shared model',
      blocks: [
        {
          type: 'text',
          body: [
            'Six proto-personas covered the whole life of a workflow: Priya the business analyst who has the idea, Sarah the process architect and Karthik the AI engineer who build it, Rahul on call who keeps it running, Meera in risk and compliance who approves it, and Alex who pays for it.',
          ],
        },
        { type: 'image', src: p('persona'), alt: 'Six persona cards grouped as Build, Run, Govern and Fund', caption: 'Proto-personas grouped by what they do with a workflow: build, run, govern or fund.' },
        {
          type: 'quotes',
          items: [
            { text: 'Show me the whole flow on one screen, then let me test each step.', by: 'Sarah · Process Architect' },
            { text: 'If I can’t see the trace, I can’t fix it.', by: 'Karthik · AI Engineer' },
            { text: 'I will sign off only what I can explain to an auditor.', by: 'Meera · Risk & Compliance' },
          ],
          caption: 'Hypothesis quotes, written to be tested in interviews.',
        },
        { type: 'image', src: p('journey'), alt: 'Journey map of a refund-approval workflow across eight stages', caption: 'A refund-approval workflow, from idea to "was it worth it?". The mood drops from excited to in the dark.' },
        {
          type: 'table',
          title: 'Problems, ranked',
          head: ['#', 'Problem', 'Priority', 'How might we…'],
          rows: [
            ['P1', 'Too many tools and concepts', 'P0', '…make the product model simple enough to learn in ten minutes?'],
            ['P2', 'The flow is hidden', 'P0', '…let builders see the whole flow and test any step?'],
            ['P4', 'Agents are black boxes', 'P0', '…make every agent decision visible and replayable?'],
            ['P5', 'No safe road to live', 'P0', '…make testing safe, and going live a clear, reviewed decision?'],
            ['P6', 'Control is scattered', 'P0', '…give Meera one place to set, see and prove control?'],
            ['P7', 'Failures have no story', 'P1', '…turn every failure into a guided, safe fix?'],
            ['P8', 'Cost and value are invisible', 'P1', '…show cost before a run and value after it?'],
          ],
        },
        {
          type: 'split',
          title: 'From five objects to three',
          body: [
            'The old model asked people to learn Department, Task, Task Pipe, Goal and Run before they could do anything. We tried one single "Automation" object too, but it was impossible to govern. We landed on three core objects and four shared libraries.',
          ],
          left: { kicker: 'Before', items: ['Department', 'Task', 'Task Pipe', 'Goal', 'Run'] },
          right: { kicker: 'After', items: ['Workspace: team, members, budgets, policies', 'Workflow: a versioned canvas of nodes', 'Execution: one traced, replayable run'] },
          note: 'Plus four libraries: Agents, Connections, Policies and Knowledge. Lifecycle: Draft → Sandbox → Live, and rollback is one click.',
        },
        { type: 'image', src: p('ia'), alt: 'Information architecture in seven colour-coded columns plus a global layer', caption: 'IA grouped by intent: build it, run it, watch it, control it, connect it.' },
        {
          type: 'table',
          title: 'Six principles, each with a rule we could check',
          head: ['Principle', 'The UI rule', 'We say no to'],
          rows: [
            ['Show the whole flow', 'Every workflow opens on the canvas. Forms live in side panels.', 'Long wizards'],
            ['Safe by default, live by decision', 'New workflows start in Sandbox. Live needs a review, a diff and a typed confirmation.', 'Hidden test/live switches'],
            ['Glass box, not black box', 'Input, output, tools and reason are one click away.', 'Unexplained AI'],
            ['Every status leads to an action', 'Show the cause, the impact and the safest next step.', 'Red dots with no explanation'],
            ['Never start from blank', 'Every empty screen offers a template, Copilot or an example.', 'Empty "No data" tables'],
            ['One model, many roles', 'Same objects for every role, different panels.', 'A separate tool per team'],
          ],
        },
      ],
    },
    {
      id: 'bets',
      label: 'Bets & flows',
      title: 'Thirteen bets, one complete journey first',
      blocks: [
        {
          type: 'cards',
          cols: 4,
          items: [
            { kicker: 'Build', title: 'Agent Canvas', body: 'The whole flow on one screen.' },
            { kicker: 'Build', title: 'Copilot Builder', body: 'Drafts arrive as suggestions to accept or reject.' },
            { kicker: 'Test & trust', title: 'Simulation Sandbox', body: 'What would have happened in Live, with cost.' },
            { kicker: 'Test & trust', title: 'Run Replay', body: 'Watch a run like a video. Re-run from any step.' },
            { kicker: 'Govern', title: 'Approval Inbox', body: 'One queue with reason, data, policy and cost.' },
            { kicker: 'Govern', title: 'Policy Studio', body: 'When, If, Then in plain English, with a code view.' },
            { kicker: 'Run', title: 'Health & Recovery', body: 'Every alert links to the failing step.' },
            { kicker: 'Run', title: 'Cost & Value', body: 'Budgets, alerts and time saved per team.' },
          ],
        },
        {
          type: 'text',
          body: [
            'We scored all thirteen bets on user impact, business value, effort and risk. Release one had a simple rule: one complete, safe journey. Canvas, Copilot drafts, Sandbox, Replay, Approval Inbox, environments, Health and Recovery, and basic policies. The full Policy Studio, Quality Gate, Cost and Value and Blueprints came next. Co-editing and the marketplace came later.',
          ],
        },
        { type: 'image', src: p('flows'), alt: 'Six core flows A to F drawn as step chains', caption: 'Six core flows, one per persona, from "Priya builds from a sentence" to "Alex spots a budget at 80%".' },
        {
          type: 'cards',
          cols: 3,
          title: 'Three concepts, combined',
          items: [
            { kicker: 'A · Base', title: 'Canvas first', body: 'Chosen as the base. The risk was that it could feel technical.' },
            { kicker: 'B · Kept as Copilot', title: 'Chat first', body: 'Approvers cannot audit a chat, so chat became a side panel that drafts nodes.' },
            { kicker: 'C · Kept as list view', title: 'Step list', body: 'Messy with branches, so it became the accessible list view for screen readers.' },
          ],
        },
        {
          type: 'facts',
          title: 'Agent Canvas, in detail',
          items: [
            { k: '7 node types', v: 'Trigger, AI agent, Tool (incl. MCP), Logic, Human step, Policy check, Output. One shape, many colours.' },
            { k: '7 node states', v: 'Idle, running, passed, failed, waiting for approval, simulated, blocked by policy.' },
            { k: 'Test a node', v: 'Run one step with pinned sample data, without running the whole flow.' },
            { k: 'Keyboard', v: 'Tab between nodes in flow order, arrows along edges, Enter opens the panel.' },
          ],
        },
        { type: 'image', src: p('wireframe-canvas'), alt: 'Greyscale wireframe of the Agent Canvas editor', caption: 'Wireframe of the canvas editor. Library on the left, settings on the right, and a run bar: "Last test passed · ₹0.42 · 3.1 s".' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Calm control in daylight',
      blocks: [
        {
          type: 'text',
          body: [
            'The brand idea was calm control. Quiet surfaces instead of loud gradients, plain words instead of jargon, and proof instead of "just trust the AI". Agent Indigo is used for action and focus only, roughly 5–8% of any screen, so that when something is indigo it actually means something.',
          ],
        },
        { type: 'image', src: p('logo'), alt: 'AgenticOS logo with anatomy, clear space and misuse rules', caption: 'The mark: two steps and one connection, the agent’s path that is never broken.' },
        {
          type: 'palette',
          items: [
            { name: 'Agent Indigo', hex: '#4B42DE', role: 'Action · focus' },
            { name: 'Ink', hex: '#12141C', role: 'Text 1' },
            { name: 'App background', hex: '#F6F7F9', role: 'Surface' },
            { name: 'Success', hex: '#1FA855', role: 'Status' },
            { name: 'Warning', hex: '#F0A10A', role: 'Status' },
            { name: 'Danger', hex: '#E5483B', role: 'Status' },
          ],
        },
        {
          type: 'compare',
          title: 'Voice: talk like a helpful senior colleague',
          head: ['Not this', 'Say this'],
          rows: [
            ['Deploy to production environment', 'Publish to Live'],
            ['Execution error: upstream timeout (504)', 'Invoice reader stopped at "Post to SAP". 41 invoices are waiting.'],
            ['Pending HITL task #2318', 'Refund Agent wants to refund ₹42,000. Approve, change or reject.'],
            ['Execute in isolated environment', 'Run in Sandbox'],
          ],
          note: 'Errors follow one formula: what happened, why, and what you can do now.',
        },
        {
          type: 'stats',
          caption: 'The design system, counted from the library',
          items: [
            { value: '134', label: 'variables: 53 primitives, 60 semantic colours, 21 sizes' },
            { value: '218', label: 'components, all auto-layout and bound to tokens' },
            { value: '129', label: 'variants across 23 component sets' },
            { value: '72', label: 'icons at 20 px, 1.6 stroke, never filled' },
          ],
        },
        { type: 'image', src: p('ds-canvas-nodes'), alt: 'Canvas node component set showing seven types in four states', caption: 'Canvas node: 7 types × 4 states (default, selected, error, suggested by Copilot).' },
        { type: 'image', src: p('brand-colour'), alt: 'Brand colour board with indigo ramp, neutrals, status and node colours', caption: 'Indigo ramp, cool slate neutrals, status colours and the seven node hues used only on the canvas.' },
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
            'Thirty-four screens in eight groups, designed at 1440 and responsive down to 1280: Foundation, Build, Run, Observe, Govern, Connect, Admin and Global. A few of them carry most of the story.',
          ],
        },
        {
          type: 'spotlight',
          items: [
            { src: s('home'), title: 'Home', body: 'Copilot prompt first, then what needs you: an approval, a failing workflow, a quality gate that blocked a release. Runs, success rate and spend at a glance.' },
            { src: s('canvas'), title: 'Agent Canvas editor', body: 'The whole refund workflow on one screen. Sandbox is the default, and the run bar shows the last test, the cost and the time.' },
            { src: s('copilot'), title: 'Copilot drafting', body: 'Copilot proposes nodes as dashed suggestions. Nothing is applied until a person accepts it.' },
            { src: s('replay'), title: 'Run Replay', body: 'Scrub through a run like a video. See the input, the tools and the reason for every step, then re-run from the step that went wrong.' },
            { src: s('approvals'), title: 'Approval Inbox', body: 'Sorted by risk and deadline. Every item carries the reason, the data, the policy that asked and the cost.' },
            { src: s('publish'), title: 'Publish review', body: 'Going live works like a pull request: a diff, the checks, a named reviewer and a typed confirmation.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('workflows'), title: 'Workflows' },
            { src: s('executions'), title: 'Executions' },
            { src: s('health'), title: 'Health and Recovery Center' },
            { src: s('incident'), title: 'Incident and guided recovery' },
            { src: s('evaluations'), title: 'Evaluations and Quality Gate' },
            { src: s('cost'), title: 'Cost and Value Insights' },
            { src: s('policy'), title: 'Policy Studio editor' },
            { src: s('audit'), title: 'Audit log' },
            { src: s('integrations'), title: 'Integrations and MCP tools' },
            { src: s('command'), title: 'Command palette' },
            { src: s('signin'), title: 'Sign in with SSO' },
          ],
        },
      ],
    },
    {
      id: 'handoff',
      label: 'Handoff',
      title: 'Handoff is a conversation, not a file drop',
      blocks: [
        {
          type: 'text',
          body: [
            'Screens were marked "Ready for dev" in Dev Mode, with tokens as variables, the variant library, a canvas interaction spec (drag, connect, zoom, keyboard), a copy deck, annotated flows and accessibility notes per component. We walked engineering through each area, answered Jira questions within a day, and ran design QA on staging every sprint.',
            '"Done" had a strict meaning: every state designed, every string final, every token used, and every screen checked against the six principles.',
          ],
        },
        {
          type: 'table',
          title: 'Analytics events, agreed before build',
          head: ['Event', 'What it tells us'],
          rows: [
            ['sandbox_run_completed', 'Engagement, and time to the first safe run'],
            ['publish_requested / approved', 'Whether the review path is used, and how fast'],
            ['replay_opened', 'Whether people can debug on their own'],
            ['approval_decided', 'Governance guardrails'],
            ['recovery_action_taken', 'Time to fix'],
            ['confidence_rated', 'Happiness'],
          ],
        },
        {
          type: 'stats',
          caption: 'HEART targets for the first 90 days of beta',
          items: [
            { value: '< 30 min', label: 'to the first Sandbox run' },
            { value: '90%', label: 'of publishes preceded by a Sandbox run' },
            { value: '≥ 85%', label: 'task success on flows A–F' },
            { value: '0', label: 'Live actions without a recorded decision' },
          ],
        },
        {
          type: 'table',
          title: 'Risks we designed around',
          head: ['Risk', 'How we reduced it'],
          rows: [
            ['The canvas feels too technical', 'Copilot, blueprints and a list view'],
            ['Copilot suggests something wrong', 'Never auto-applied, always shown as a diff'],
            ['Approval fatigue', 'Risk-based approvals. Bulk actions only for low risk'],
            ['Simulation gets expensive', 'A cost estimate before every run, cheaper test models'],
            ['Too many features', 'Release one is one complete journey, nothing more'],
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
            { kicker: '01', title: 'Simplify the model first', body: 'Going from five objects to three did more for learnability than any screen. Changing a sticky note costs a minute. Changing a shipped product model costs a year.' },
            { kicker: '02', title: 'Safety has to be visible', body: 'A safety feature hidden in a form is not a safety feature. Making Sandbox the default and Live a decision changed how the whole product felt.' },
            { kicker: '03', title: 'Rules make design fast', body: 'Principles written as checkable UI rules ended a lot of debates. We could point to the rule instead of arguing taste.' },
          ],
        },
        {
          type: 'text',
          body: [
            'If I did it again, I would get two design partners into the sandbox flow even earlier, with real data, before the canvas was polished. The riskiest assumption in the project was that risk leads would approve inside the product instead of over email. That deserves real evidence first.',
          ],
        },
      ],
    },
  ],
}
