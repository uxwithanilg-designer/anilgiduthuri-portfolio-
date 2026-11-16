const s = (name) => `/work/atrio/screens/${name}.webp`
const p = (name) => `/work/atrio/process/${name}.webp`

export const atrio = {
  slug: 'atrio',
  name: 'Atrio',
  kind: 'Visitor management platform',
  concept: true,
  title: 'A calm front door for the modern workplace. Every arrival, accounted for.',
  summary:
    'A visitor and workplace-access platform designed from scratch: a marketing website, an admin dashboard, a lobby kiosk and one mobile app for visitors, hosts and security. It replaces the paper logs, legacy kiosks and spreadsheets that run most front desks, and it is built around one object everyone already understands: the visitor pass.',
  year: '2026',
  accent: '#5B3DF5',
  accent2: '#FFB800',
  tint: '#F0EDFF',
  cover: s('lobby'),
  coverAlt: s('w-home'),
  meta: [
    { label: 'Role', value: 'Lead UX/UI designer' },
    { label: 'Type', value: 'Concept project' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Website · admin · kiosk · iOS' },
    { label: 'Scope', value: '42 web pages, 31 admin, 5 kiosk, 23 app screens' },
  ],
  tags: ['Workplace SaaS', 'Security UX', 'Kiosk', 'Mobile app'],
  highlights: [
    { value: '101', label: 'screens across four surfaces: website, admin, kiosk and app' },
    { value: '43', label: 'card-view flows, one for every screen and journey' },
    { value: '716', label: 'links in the clickable prototype' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Front doors are run by five disconnected tools',
      blocks: [
        {
          type: 'text',
          body: [
            'Walk into most office lobbies and you will see the problem. A visitor types details into a kiosk that they already sent by email. The host finds out late that their guest is downstairs. The front desk has five tabs open at nine in the morning. And when the fire alarm goes off, security cannot say with any confidence who is still inside the building, because the list is on paper.',
            'Atrio is my from-scratch answer: one calm, secure system for visitors, hosts, front-desk teams and security, across a website, an admin dashboard, a lobby kiosk and a mobile app. I led the UX and UI end to end, from the brief and research plan to a 716-link prototype and a test plan.',
          ],
        },
        {
          type: 'pull',
          text: 'The vision: every arrival is expected, verified and accounted for, from the invite email to the moment the visitor leaves, and every badge in between.',
        },
        {
          type: 'stats',
          caption: 'Goals from the brief, written as targets to validate in research and pilots',
          items: [
            { value: '< 45 s', label: 'visitor check-in, from the kiosk to holding a pass' },
            { value: '90%', label: 'of visits arriving already invited, screened and approved' },
            { value: '< 2 min', label: 'for a full headcount during an evacuation' },
            { value: '0', label: 'unscreened entries' },
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'The research plan and usability study are written as plans and have not been run, so the personas are proto-personas, the insights are hypotheses from desk research, and every number above is a target. The design iterations described later came from internal critique, not user testing.',
        },
      ],
    },
    {
      id: 'kickoff',
      label: 'Kickoff',
      title: 'Eight roles touch a single visit',
      blocks: [
        {
          type: 'text',
          body: [
            'The first thing I mapped was who actually touches a visit. It turned out to be eight roles, and they meet Atrio very differently: the front desk lives in it all day, a host uses it weekly, and a visitor meets it once and should barely notice it.',
          ],
        },
        {
          type: 'table',
          head: ['Role', 'How often', 'The decision Atrio must support'],
          rows: [
            ['Workplace admin', 'Daily', 'Which policies apply to which site and visitor type'],
            ['Security operations', 'Daily', 'Is this person allowed in, right now'],
            ['Front-desk ambassador', 'All day', 'How to resolve an exception without making the visitor wait'],
            ['Host employee', 'Weekly', 'Who to invite, and whether to approve a request'],
            ['Visitor', 'Once', 'What to do next, and where to go'],
            ['Contractor', 'Repeatedly', 'How to get the same paperwork done once, then walk straight in'],
            ['IT and compliance', 'Configures, audits', 'Is the data secure, retained correctly and auditable'],
          ],
        },
        {
          type: 'split',
          title: 'What I believed, and how I would know I was wrong',
          body: ['Each belief was written so it could be disproved by research or a pilot.'],
          left: {
            kicker: 'We believe',
            items: [
              'Most delays happen before the visitor arrives',
              'Hosts would invite more guests if it took one step from the calendar',
              'Security cares more about “who is here now” than charts',
              'Front desk needs one live queue, not five tabs',
            ],
          },
          right: {
            kicker: 'We are right when',
            items: [
              'Pre-registered visits check in in half the time of walk-ins',
              'Calendar invites become the main invite channel in pilots',
              'Security opens the live headcount more than any report',
              'Ambassadors resolve exceptions without leaving the live lobby',
            ],
          },
        },
        {
          type: 'facts',
          title: 'Constraints',
          items: [
            { k: 'Privacy by default', v: 'Visitor data is kept only as long as policy requires. IDs are verified, not stored, unless a site demands it.' },
            { k: 'Global and multi-site', v: 'Multi-language kiosks, time zones, local data residency and per-site rules.' },
            { k: 'Hardware reality', v: 'Shared iPads, badge printers, turnstiles and access control systems already on site.' },
            { k: 'Accessibility', v: 'WCAG 2.2 AA everywhere, including the kiosk: reachable controls, high contrast, screen-reader support.' },
          ],
        },
      ],
    },
    {
      id: 'research',
      label: 'Research',
      title: 'A 43-page audit and eight competitors',
      blocks: [
        {
          type: 'text',
          body: [
            'I inventoried every page of a real visitor-management website to understand the scope a buyer expects: 12 product pages, 10 solution and industry pages, resources, pricing and company pages. The breadth was right, but the story was missing. The home page stacked nineteen sections, and every module had its own page with its own shape. Atrio keeps the breadth and tells one story: the arrival.',
          ],
        },
        {
          type: 'table',
          title: 'Where the market is thin',
          head: ['Capability', 'Where the gap is', 'Atrio’s answer'],
          rows: [
            ['Invites and pre-registration', 'Visitors still re-type details at the kiosk', 'One link: details, documents and the pass before arrival'],
            ['Kiosk and badge printing', 'Long forms, small targets, no accessibility mode', 'Under-45-second check-in with a reachable kiosk mode'],
            ['Host notifications', 'Noisy and not actionable', '“Jordan is here, meet at Lobby B”, with one-tap actions'],
            ['Watchlist screening', 'Matches are binary, with no context', 'Explainable matches routed to security'],
            ['Emergency mustering', 'Headcounts depend on exports and paper', 'A live roll call on mobile that reconciles itself'],
            ['AI at the front desk', 'Early, often just a chat window', 'An agent that greets, verifies, escalates and explains why'],
          ],
          note: 'Desk-research snapshot of eight products from public pages, marked in the file to verify before external use.',
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Patterns to avoid, from a heuristic review of today’s tools',
          items: [
            { kicker: 'Severity 4', title: 'No visibility', body: 'Front desk can’t see at a glance who is expected, who is waiting and who is overdue to leave.' },
            { kicker: 'Severity 4', title: 'Typing at a kiosk', body: 'Visitors type names and emails on a kiosk, which creates duplicates and failed host matches.' },
            { kicker: 'Severity 3', title: 'Blocks without a next step', body: 'A watchlist match freezes the kiosk with a generic message and nothing to do.' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          title: 'The research plan for a five-week discovery',
          items: [
            { kicker: 'Planned', title: '6 stakeholder + 12 user interviews', body: 'Workplace, security, IT and compliance leads, then ambassadors, hosts, security and contractors. 45 minutes, story-led: “walk me through this morning’s first ten arrivals”.' },
            { kicker: 'Planned', title: 'Three lobbies at peak', body: 'Contextual inquiry between 08:30 and 10:00, mapping every handoff, wait and workaround.' },
            { kicker: 'Planned', title: 'Visitor survey', body: 'Right after check-in, aiming for 150 responses on effort, clarity and time to meeting.' },
            { kicker: 'Planned', title: 'Synthesis workshop', body: 'Affinity mapping, personas and journeys, then an opportunity-sizing session with stakeholders.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Six people, two very different days',
      blocks: [
        { type: 'image', src: p('personas'), alt: 'Six proto-persona cards for Atrio', caption: 'Six proto-personas, from Maya the workplace admin to Luis the contractor who fills the same form every Tuesday.' },
        {
          type: 'quotes',
          items: [
            { text: 'At 9 a.m. I have six people in front of me and three tabs open. Something always slips.', by: 'Rosa · front-desk ambassador' },
            { text: 'In an emergency I need one number I can trust: who is still inside.', by: 'Dev · security operations lead' },
            { text: 'Same building, same job, every Tuesday. Why do I fill the same form every Tuesday?', by: 'Luis · contractor' },
          ],
          caption: 'Illustrative quotes, to be revised after the planned interviews.',
        },
        {
          type: 'text',
          title: 'A visitor’s day, and an evacuation',
          body: [
            'The first journey follows Jordan, an interview candidate visiting for the first time. The worst moments are small and very human: looking for parking details across three emails, typing information they already sent, seeing their name on a public screen, and standing in the lobby wondering whether anyone knows they are there.',
            'The second follows Dev, the security lead, through a fire alarm with 1,240 people on site. That journey decided the priority of the whole product: a live headcount you can trust beats any report.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Journey map of a visitor’s day across seven stages', caption: 'Seven stages from invite to leaving. Most of the friction happens before the visitor even arrives.' },
        {
          type: 'table',
          title: 'Problem statements, opened up',
          head: ['Problem', 'How might we…'],
          rows: [
            ['Visitors re-enter information they already gave', '…make the invite the check-in, so arriving takes one scan?'],
            ['Hosts learn about arrivals late', '…tell hosts at the right moment, in the channel they already use, with one-tap actions?'],
            ['Front desk juggles exceptions across tools', '…bring every arrival, exception and action into one live queue?'],
            ['Security can’t produce a trusted headcount', '…keep an always-current roll call that works even when the network doesn’t?'],
            ['Watchlist matches stop the visit with no explanation', '…make every match explainable and route it to the right person?'],
            ['Contractors repeat compliance steps every visit', '…let compliance travel with the person, checked before each visit?'],
          ],
        },
      ],
    },
    {
      id: 'ideate',
      label: 'Ideas & IA',
      title: 'The pass is the product',
      blocks: [
        {
          type: 'text',
          body: [
            'I ran a crazy-eights session and scored three directions against the principles. A building-map-first direction was great for security and heavy for everyone else, so it became the emergency view. A conversational front desk was fast for experts but opaque for audits, so it became Ask Atrio and Sentinel, the AI lobby agent. The direction I chose makes every visit a single pass that changes state: invited, approved, on site, left.',
          ],
        },
        { type: 'image', src: p('principles'), alt: 'Five design principles and three concept directions', caption: 'Five principles that settle design arguments, and the three concepts scored against them.' },
        {
          type: 'cards',
          cols: 3,
          items: [
            { kicker: '01', title: 'The pass is the product', body: 'Invite, screening, access and check-out all hang off one pass. If it isn’t on the pass, it doesn’t exist.' },
            { kicker: '02', title: 'Live over historical', body: 'Lead with what is happening now. Reports are one click away, never the first thing.' },
            { kicker: '03', title: 'One decision per moment', body: 'Each alert, card and screen asks for one clear decision, with the default action first.' },
            { kicker: '04', title: 'Explain every block', body: 'If Atrio stops someone, it says why, who decided and what to do next, in plain language.' },
            { kicker: '05', title: 'Private by default', body: 'Collect the minimum, show names only to people who need them, and delete on schedule.' },
          ],
        },
        {
          type: 'facts',
          title: 'A small object model everything hangs off',
          items: [
            { k: 'Person', v: 'Visitor, contractor or employee, with identity, documents and history.' },
            { k: 'Visit', v: 'Person + host + site + time window + purpose. The unit everything hangs off.' },
            { k: 'Pass', v: 'The credential for one visit: QR, printed badge or wallet pass, with zones and expiry.' },
            { k: 'Site', v: 'Building, lobbies, kiosks, zones, policies and muster points.' },
            { k: 'Screening', v: 'Watchlist checks, approvals and document checks attached to a visit.' },
          ],
        },
        { type: 'image', src: p('mobile-ia'), alt: 'Mobile app information architecture with visitor, host and security modes', caption: 'One app, three modes. Most people only ever see the one their role allows.' },
      ],
    },
    {
      id: 'flows',
      label: 'Flows & wireframes',
      title: 'Forty-three flows, then wireframes',
      blocks: [
        {
          type: 'text',
          body: [
            'I drew 43 card-view flows, one per screen and journey, so every state had a reason to exist before it had a layout. Then I wireframed the dashboard, kiosk and app, keeping the pass as the visual anchor from the first grey box.',
          ],
        },
        { type: 'image', src: p('flows'), alt: 'Card-view user flows for Atrio', caption: 'Card-view flows: each card is a screen with its entry point, the decision on it and where it leads.' },
        { type: 'image', src: p('wireframes'), alt: 'Wireframes of the live lobby and dashboard', caption: 'Wireframes of the live lobby, the screen front desk lives in.' },
        {
          type: 'cards',
          cols: 3,
          title: 'What changed through internal critique',
          items: [
            { kicker: 'Iteration 1 → 2', title: 'The kiosk never says “watchlist”', body: 'The first hold screen named the reason. I changed it to a neutral “One moment” so a false positive never embarrasses a visitor.' },
            { kicker: 'Iteration 1 → 2', title: 'A board, not a table', body: 'A table hid exceptions. Columns by state (expected, waiting, on site, left) put waiting guests in the middle.' },
            { kicker: 'Iteration 1 → 2', title: 'Explain before you ask', body: 'Approvals now lead with “why this needs you” before any visitor details.' },
            { kicker: 'Iteration 2 → 3', title: 'Pass preview while inviting', body: 'Hosts couldn’t picture what their options did. A live pass preview made each choice concrete.' },
            { kicker: 'Iteration 2 → 3', title: 'Roll call on mobile first', body: 'Mustering started as a desktop page. Wardens need it on their phones, so mobile became the primary tool.' },
            { kicker: 'Iteration 2 → 3', title: 'Contractor matrix', body: 'A list of expiring documents hid who was blocked. A worker × document matrix shows gaps at a glance.' },
          ],
        },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'The yellow pass',
      blocks: [
        {
          type: 'text',
          body: [
            'Atrio comes from atrium, the open hall where a building greets people. The brand is built on the visitor pass: a violet tile holding a tilted yellow pass with a lanyard slot. The tilt suggests movement through the door; the slot makes it unmistakably a pass.',
            'Pass types share one shape and change colour, so security can tell a contractor from an interview candidate from across the lobby.',
          ],
        },
        { type: 'image', src: p('logo'), alt: 'Atrio logo on light, dark and brand backgrounds, with clear space and misuse rules', caption: 'The mark, on light, dark, violet and pass yellow.' },
        { type: 'image', src: p('pass-system'), alt: 'Five pass types in one shape, and voice guidelines', caption: 'Five pass types, one shape, plus the voice rules: errors give direction, and never alarm the visitor.' },
        {
          type: 'palette',
          items: [
            { name: 'Atrio violet', hex: '#5B3DF5', role: 'Actions · brand' },
            { name: 'Pass yellow', hex: '#FFD23F', role: 'The pass, arrivals' },
            { name: 'Ink', hex: '#17142B', role: 'Text · dark surfaces' },
            { name: 'Canvas', hex: '#F6F5FA', role: 'Background' },
            { name: 'Mint', hex: '#12B886', role: 'Safe · on site' },
            { name: 'Coral', hex: '#F2554A', role: 'Blocked · incident' },
          ],
        },
        {
          type: 'compare',
          title: 'Voice',
          head: ['Not this', 'This'],
          rows: [
            ['Error 0x31: print job failed.', 'The printer is out of labels. Use Printer B or send the pass to the visitor’s phone.'],
            ['Access denied: watchlist match.', 'One moment, please. A member of our team will be with you shortly.'],
            ['Submit', 'Approve with escort'],
          ],
        },
        {
          type: 'stats',
          caption: 'The design system, counted from the file',
          items: [
            { value: '104', label: 'variables: 41 primitives, 44 semantic colours in light and dark, 19 sizes' },
            { value: '22', label: 'text styles across Schibsted Grotesk, Hanken Grotesk and JetBrains Mono' },
            { value: '103', label: 'icons on a 24 px grid' },
            { value: '5.7:1', label: 'contrast for white text on violet buttons' },
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
          type: 'spotlight',
          items: [
            { src: s('lobby'), title: 'Live lobby', body: 'A board of passes by state: expected, waiting, on site, left. Waiting guests sit in the middle with the next action on each card, like “Ping host” or “Find backup”.' },
            { src: s('match-review'), title: 'Explainable watchlist match', body: 'Side-by-side evidence, a confidence score and a suggested decision. The kiosk stays neutral while security decides, and every decision is logged with a note.' },
            { src: s('invite'), title: 'New invite with a live pass preview', body: 'Hosts see exactly what their guest will receive while they set the time, entrance, documents and parking.' },
            { src: s('w-home'), title: 'Website home', body: '“Every arrival, accounted for.” The product, not stock photos, carries the story from the first screen.' },
            { src: s('muster'), title: 'Muster live', body: 'During an evacuation, security sees who is safe at each point and who is still unaccounted for, updating as wardens scan.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('overview'), title: 'Overview' },
            { src: s('ask-atrio'), title: 'Ask Atrio' },
            { src: s('approvals'), title: 'Approvals' },
            { src: s('contractors'), title: 'Contractors' },
            { src: s('analytics'), title: 'Analytics' },
            { src: s('kiosk-designer'), title: 'Kiosk designer' },
            { src: s('overview-dark'), title: 'Overview · dark mode' },
            { src: s('kiosk-welcome'), title: 'Kiosk · welcome' },
            { src: s('kiosk-hold'), title: 'Kiosk · one moment (screening hold)' },
            { src: s('kiosk-reachable'), title: 'Kiosk · reachable mode' },
            { src: s('w-muster'), title: 'Website · emergency and muster' },
            { src: s('w-sentinel'), title: 'Website · Sentinel AI agent' },
            { src: s('w-pricing'), title: 'Website · pricing' },
          ],
        },
        {
          type: 'phones',
          title: 'Mobile app · visitor, host and security modes',
          items: [
            { src: s('m-pass'), title: 'Visitor · mobile pass' },
            { src: s('m-directions'), title: 'Visitor · directions' },
            { src: s('m-host-notified'), title: 'Visitor · host notified' },
            { src: s('m-host-today'), title: 'Host · today’s guests' },
            { src: s('m-guest-arrived'), title: 'Host · guest arrived' },
            { src: s('m-approvals'), title: 'Host · approvals' },
            { src: s('m-scan'), title: 'Security · scan pass' },
            { src: s('m-rollcall'), title: 'Security · muster roll call' },
          ],
        },
      ],
    },
    {
      id: 'validate',
      label: 'Validate',
      title: 'How I would test it',
      blocks: [
        {
          type: 'table',
          title: 'Usability test plan (not run yet)',
          head: ['Task', 'Persona', 'Success means'],
          rows: [
            ['Clear the 9 a.m. queue: help a guest waiting 6 minutes', 'Front desk', 'Pings the host or finds a backup within 30 s'],
            ['Decide on a possible watchlist match', 'Security', 'Correct decision with a note, under 90 s'],
            ['Invite two guests for an interview tomorrow', 'Host', 'Invite sent with parking, under 60 s'],
            ['Run the roll call at muster point A', 'Warden', 'Everyone expected is marked or escalated'],
            ['Find your pass and get to the right entrance', 'Visitor', 'Arrives at Lobby A without help'],
            ['Check in at the kiosk with a QR code', 'Visitor', 'Pass printed in under 45 s'],
          ],
          note: 'Eight participants planned (two each of front desk, security, hosts and visitors). Targets: SUS ≥ 80 and task success ≥ 90%.',
        },
        { type: 'image', src: p('accessibility'), alt: 'Accessibility review table against WCAG 2.2 AA', caption: 'Design-time accessibility review. Two items are honestly marked: small 32 px icon buttons in admin, and focus states still to extend to every control.' },
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
            { kicker: '01', title: 'Find the one object', body: 'Once the pass became the product, the website, dashboard, kiosk and app stopped being four designs and became one.' },
            { kicker: '02', title: 'Design for the worst minute', body: 'The evacuation journey, not the happy path, set the priorities: live data first, works offline, one number you can trust.' },
            { kicker: '03', title: 'Protect the person being screened', body: 'A false watchlist match is a real person in a lobby. Keeping the kiosk neutral was the most important line of copy in the project.' },
          ],
        },
        {
          type: 'text',
          body: [
            'Next, I would run the usability study and pilot one lobby, starting with the kiosk and the approvals flow, where the stakes and the uncertainty are highest.',
          ],
        },
      ],
    },
  ],
}
