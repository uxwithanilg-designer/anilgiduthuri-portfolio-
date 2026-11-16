const s = (name) => `/work/verato-mdm-cloud/screens/${name}.webp`
const p = (name) => `/work/verato-mdm-cloud/process/${name}.webp`

export const verato = {
  slug: 'verato-mdm-cloud',
  name: 'Verato MDM Cloud',
  kind: 'Healthcare identity platform',
  concept: true,
  title: 'Designing the calm behind “knowing who is who” in healthcare.',
  summary:
    'A new identity for the Verato MDM Cloud website, and the master-data platform it sells, designed from scratch. Patient and provider identity, stewardship, data quality, M&A onboarding, governance and an AI copilot, built around the people who resolve duplicate records all day.',
  year: '2026',
  accent: '#3A3FE0',
  accent2: '#8B5CF6',
  tint: '#EEEFFE',
  cover: s('command'),
  coverAlt: s('review'),
  meta: [
    { label: 'Role', value: 'Lead UX/UI designer' },
    { label: 'Type', value: 'Concept project' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Website · web platform (light + dark)' },
    { label: 'Scope', value: '4 web screens, 20 platform screens, 2 prototypes' },
  ],
  tags: ['Healthcare', 'Data platform', 'Explainable AI', 'Design system'],
  highlights: [
    { value: '20', label: 'platform screens, from command center to M&A onboarding' },
    { value: '15', label: 'card-view flows, one for every module' },
    { value: '28', label: 'ideas from two Crazy-8 rounds, scored with RICE' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'A strong engine, an invisible product',
      blocks: [
        {
          type: 'text',
          body: [
            'Healthcare runs on knowing who is who. When a patient registers as “Jon” at one clinic and “Jonathan A.” at another, the hospital ends up with two records, and labs, claims and appointments split between them. Verato sells the matching engine that joins those records back into one trusted “golden record”.',
            'Its website explains the problem well. It says 18% of patient records are incomplete at the point of care, and as many as 80% of payer directory entries are inaccurate. But it never shows the product a data steward actually uses all day. I wanted to answer two questions: what would a healthcare identity platform feel like if it were designed around those people, and how would a new identity make the website feel as modern as that product?',
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'Website copy and figures are quoted from Verato’s public website, platform data is synthetic, and the visual identity is new. Research marked as a plan has not been run, so personas and journeys are hypotheses.',
        },
        {
          type: 'pull',
          text: 'The matching engine is already strong. If around 95% of matches resolve themselves, the product should make the remaining few fast, explainable and safe, and prove the value to leadership every week.',
        },
        {
          type: 'stats',
          caption: 'Proof points quoted from Verato’s public pages, used as design constraints',
          items: [
            { value: '18%', label: 'of patient records incomplete at the point of care, at the average hospital' },
            { value: '80%', label: 'of payer directory entries can be inaccurate' },
            { value: '1.5B+', label: 'identities managed' },
            { value: '92 days', label: 'median time to initial value' },
          ],
        },
      ],
    },
    {
      id: 'role',
      label: 'Brief & role',
      title: 'Four things I set out to deliver',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            { kicker: 'Website', title: 'Redesign the landing page', body: 'Same copy and figures, a completely new brand and layout, plus a booking flow and a mobile version.' },
            { kicker: 'Platform', title: 'Design the MDM platform', body: 'Command center, search, Patient and Provider 360, stewardship, data quality, sources, M&A onboarding, governance and an AI copilot.' },
            { kicker: 'System', title: 'Build the brand and design system', body: 'A new logo, palette and type, 81 icons, components, and tokens in light and dark.' },
            { kicker: 'Process', title: 'Run the whole UX process', body: 'Twelve phases on a Double Diamond, with card-view flows for every module. Anything that needs real users is marked as a plan.' },
          ],
        },
        {
          type: 'text',
          body: [
            'I was the lead UX/UI designer on the concept: research plan, information architecture, flows, interaction design, brand, design system and two prototypes, one for the platform and one for the website.',
          ],
        },
      ],
    },
    {
      id: 'discover',
      label: 'Discover',
      title: 'Learn the domain before drawing a box',
      blocks: [
        {
          type: 'text',
          body: [
            'Master data management has its own vocabulary, and the product has to speak it without making anyone feel stupid. I started with a domain primer: how one person becomes many records, and what stewards mean by golden records, source records, match tiers and survivorship.',
          ],
        },
        {
          type: 'flow',
          items: ['Registration', 'Variation', 'New record', 'Fragmentation', 'Impact', 'Resolution'],
          caption: 'The duplicate lifecycle: a nickname, a typo or a new address creates a second record, and care, claims and outreach split across both.',
        },
        {
          type: 'table',
          title: 'Words the product must speak',
          head: ['Term', 'What it means', 'What it means for the UI'],
          rows: [
            ['Golden record', 'The single best view of a person, built from all linked records', 'Always the hero of Patient and Provider 360'],
            ['Source record', 'A record in one system: EHR, CRM, scheduling, billing', 'A source and ID chip on every field'],
            ['Referential Matching', 'Matching against curated reference identity data', 'Explain matches in plain language, not maths'],
            ['Match tiers', 'Confidence bands that decide automate or review', 'Visible, tunable thresholds with an impact preview'],
            ['Stewardship', 'Human review of uncertain matches', 'A queue-first workspace with keyboard shortcuts'],
          ],
        },
        {
          type: 'table',
          title: 'Alternatives buyers compare against',
          head: ['Alternative', 'Where it struggles', 'Design opportunity'],
          rows: [
            ['EHR-native matching', 'Unmanaged queues, low CRM-to-EHR match rates', 'A queue that empties itself and explains each pair'],
            ['Rules-based EMPI', 'Manual, rules-based matching', 'Plain-language reasons instead of rule IDs'],
            ['Homegrown tools', 'Scripts and spreadsheets that break during M&A', 'An M&A wizard with a test match before go-live'],
            ['Generic MDM', 'A data model retrofitted for healthcare', 'Healthcare objects first: patient, provider, encounter'],
          ],
          note: 'I also borrowed from analogous tools: side-by-side diffs from code review, confidence plus one-key decisions from fraud review, inbox zero from email triage.',
        },
        {
          type: 'cards',
          cols: 4,
          title: 'Rules for data-heavy products',
          items: [
            { kicker: '01', title: 'Queue first', body: 'Stewards need “what’s next” with an SLA, not charts. Charts serve leaders.' },
            { kicker: '02', title: 'Every score has a reason', body: 'Show the evidence behind a confidence % at the point of decision.' },
            { kicker: '03', title: 'One key per decision', body: 'M to merge, N for not a match, S to skip.' },
            { kicker: '04', title: 'Minimum necessary PHI', body: 'Mask by default, reveal by role, and audit every reveal.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: '“I mind 200 easy ones that should never have reached me.”',
      blocks: [
        { type: 'image', src: p('personas'), alt: 'Four proto-personas: data steward, provider data manager, CIO and integration engineer', caption: 'Four proto-personas built from desk research and the website’s own buyer triggers.' },
        {
          type: 'quotes',
          items: [
            { text: 'I don’t mind hard cases. I mind 200 easy ones that should never have reached me.', by: 'Maya · EMPI data steward' },
            { text: 'The same doctor exists five ways in five systems and every one is slightly wrong.', by: 'Jordan · provider data manager' },
            { text: 'I need proof identity is getting better, and that it’s ready for AI.', by: 'Dana · CIO' },
          ],
          caption: 'Illustrative quotes, to be validated through the research plan.',
        },
        {
          type: 'text',
          title: 'Where the time goes today',
          body: [
            'Maya’s current day, as I modelled it: an EHR duplicate queue of 600+ items with no priority, three systems in three tabs for every pair, fields copied into a spreadsheet to compare, a merge decision with no confidence score, then emails to registration and billing to fix their copies. The biggest pain is assembling evidence the system already has.',
            'The second journey follows an acquisition: a practice joins, someone maps 40+ fields by hand, the feed goes live with no way to test, and thousands of new duplicates land in the queue.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Current-state journey of a data steward resolving a duplicate', caption: 'Notice, investigate, compare, decide, fix downstream, report. Investigate and compare are where minutes disappear.' },
        {
          type: 'table',
          title: 'Four problems I committed to',
          head: ['Problem', 'How might we…'],
          rows: [
            ['Review queues show pairs, not reasons', '…explain a match well enough to decide in one glance?'],
            ['Provider truth lives in five places', '…update a provider once and publish everywhere?'],
            ['Identity health is invisible to leaders', '…turn identity health into one number leaders trust?'],
            ['Go-lives happen with no preview', '…let teams test a new source before it touches production?'],
          ],
        },
        {
          type: 'cards',
          cols: 4,
          title: 'Principles',
          items: [
            { kicker: '01', title: 'Explain, then ask', body: 'Every machine decision shows its reasons before asking a human.' },
            { kicker: '02', title: 'Safe by default', body: 'Reversible actions, masked PHI, audit on everything.' },
            { kicker: '03', title: 'Fast for experts', body: 'Keyboard-first stewardship; dense but calm screens.' },
            { kicker: '04', title: 'Show the impact', body: 'Preview what changes before publishing a rule or going live.' },
          ],
        },
      ],
    },
    {
      id: 'develop',
      label: 'Ideas & IA',
      title: 'The nouns stewards use became the screens',
      blocks: [
        {
          type: 'text',
          body: [
            'Two Crazy-8 rounds against the how-might-we questions gave me 28 ideas. I clustered them and scored them with RICE, so the roadmap was a decision rather than a wish list. The side-by-side compare with plain-language reasons and one-key decisions came out on top; a tier slider with a live impact preview was a “should”.',
            'For structure I used object-oriented UX. Patients, providers, source records, match tasks, rules and audit events each got a list view, a 360 view and clear relationships, and every screen follows the same rhythm: hub, list, 360, act, trace.',
          ],
        },
        { type: 'image', src: p('ia'), alt: 'Information architecture for the website and the MDM platform', caption: 'The website is one focused conversion page plus booking. The platform is organised by job: work, identity, stewardship, data and governance.' },
        {
          type: 'compare',
          title: 'Voice: a careful colleague, not a maths paper',
          head: ['Not this', 'This'],
          rows: [
            ['Jaro-Winkler 0.91', 'Same person, different nickname'],
            ['Score: 0.86', '86%: likely the same person, below your 95% auto-merge line'],
            ['Sync error', 'We couldn’t reach Epic. Your decision is saved.'],
          ],
          note: 'Vera, the AI copilot, follows its own rules: it explains and finds, never decides alone, and every answer ends with its sources.',
        },
        { type: 'image', src: p('flow-duplicate'), alt: 'Card-view user flow for resolving a duplicate', caption: 'Card-view flow for resolving a duplicate, one of fifteen.' },
        { type: 'image', src: p('wireframes'), alt: 'Wireframes of the platform screens', caption: 'Mid-fidelity wireframes of the core platform screens.' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Two records become one',
      blocks: [
        {
          type: 'text',
          body: [
            'The identity is completely new; nothing is borrowed from the current site. The mark is two overlapping rings for two source records, with a lime dot where they meet: the golden record. Deep navy carries trust, cobalt carries action, an aurora gradient marks moments of intelligence, and a lime spark means “resolved”.',
            'Vera, the in-product assistant, gets its own visual language so people always know when a machine is speaking: violet tokens, a sparkle icon used only for AI, and citations on every answer.',
          ],
        },
        { type: 'image', src: p('brand'), alt: 'Brand foundations: logo, semantic palette and usage rules', caption: 'Brand foundations: the mark, the semantic palette and its rules. Dark mode swaps values, not names.' },
        {
          type: 'palette',
          items: [
            { name: 'Deep navy', hex: '#0A0F24', role: 'Ink · trust' },
            { name: 'Cobalt', hex: '#3A3FE0', role: 'Action' },
            { name: 'Violet · AI', hex: '#7C5CFF', role: 'Vera only' },
            { name: 'Lime spark', hex: '#D4F45A', role: 'Resolved' },
            { name: 'Success', hex: '#1FA35B', role: 'Status' },
            { name: 'Danger', hex: '#E5484D', role: 'Status' },
          ],
        },
        { type: 'image', src: p('design-system'), alt: 'Design system components and tokens', caption: '81 icons on a 24 grid, 17 components and tokens in light and dark.' },
        { type: 'image', src: p('web-directions'), alt: 'Three website layout directions', caption: 'Website directions explored before the final landing page.' },
      ],
    },
    {
      id: 'screens',
      label: 'Final screens',
      title: 'The screens',
      blocks: [
        {
          type: 'spotlight',
          items: [
            { src: s('command'), title: 'Command center', body: 'Identity health across 14 hospitals in one view: golden records, duplicate rate, open tasks, the share resolved automatically, and the highest-impact pairs waiting for review.' },
            { src: s('review'), title: 'Is this the same patient?', body: 'Both records side by side with every field compared, a plain-language reason for the 86% score, and what will happen if you merge. One key per decision.' },
            { src: s('vera'), title: 'Ask Vera', body: 'Ask why two records were flagged or find twins and family members. Vera explains and cites its sources; it never merges anything on its own.' },
            { src: s('mna'), title: 'M&A onboarding', body: 'Test matching on a sample of the acquired practice’s data and see the impact before go-live, instead of finding out from a flooded queue.' },
            { src: s('landing'), title: 'Website landing page', body: 'The same promise and copy, with the booking form visible above the fold and the product itself shown, not a stock photo.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('search'), title: 'Smart search' },
            { src: s('patient360'), title: 'Patient 360' },
            { src: s('provider360'), title: 'Provider 360' },
            { src: s('match-review'), title: 'Match review queue' },
            { src: s('merge-history'), title: 'Merge history and unmerge' },
            { src: s('tiers'), title: 'Match tiers with impact preview' },
            { src: s('command-dark'), title: 'Command center · dark' },
            { src: s('landing-platform'), title: 'Website · platform section' },
            { src: s('booking'), title: 'Website · book a time' },
          ],
        },
        {
          type: 'phones',
          title: 'Website on mobile',
          items: [
            { src: s('m-hero'), title: 'Hero and call to action' },
            { src: s('m-challenges'), title: 'Challenges' },
            { src: s('m-identity'), title: 'Platform' },
            { src: s('m-cta'), title: 'Final call to action' },
          ],
        },
      ],
    },
    {
      id: 'validate',
      label: 'Validate',
      title: 'Ready to test, with nothing faked',
      blocks: [
        {
          type: 'table',
          title: 'Usability test plan (not run yet)',
          head: ['Scenario', 'Success means'],
          rows: [
            ['You’re the CIO. Decide if this fits and book a 30-minute session.', 'Reaches booking confirmed'],
            ['Find Jonathan Doe, born 1968, from Springfield.', 'Opens the correct Patient 360'],
            ['Work the next task in your queue.', 'Correct decision, with a confidence rating'],
            ['You merged two people by mistake. Fix it.', 'Unmerges from history'],
            ['Dr. Ndiaye’s payer listing is wrong. Fix it everywhere.', 'Publishes from Provider 360'],
            ['We just acquired Lakeview. Is it safe to go live?', 'Reads the impact preview correctly'],
          ],
          note: 'Ten participants planned, including two using assistive tech. Targets: task success ≥ 90%, SUS ≥ 80, under 60 seconds per Tier 2 pair.',
        },
        {
          type: 'facts',
          title: 'What I would measure after launch',
          items: [
            { k: 'Efficiency', v: 'Median handle time per Tier 2 pair, per steward.' },
            { k: 'Quality', v: 'Unmerge rate: wrong merges as a share of steward merges.' },
            { k: 'Trust', v: 'How often stewards open the evidence panel before deciding.' },
            { k: 'Website', v: 'A/B tests on the form above the fold and the product UI in the hero.' },
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
            { kicker: '01', title: 'The human layer is the product', body: 'When the machine already gets most matches right, design value moves to the few it can’t: explaining them, deciding fast and undoing safely.' },
            { kicker: '02', title: 'Undo removes fear', body: 'Stewards slow down because a wrong merge is scary. Making every merge reversible, with an impact warning, is a speed feature.' },
            { kicker: '03', title: 'AI needs a uniform', body: 'Giving Vera its own colour, icon and citation rule means people always know when a machine is talking.' },
          ],
        },
      ],
    },
  ],
}
