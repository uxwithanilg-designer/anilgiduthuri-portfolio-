const s = (name) => `/work/starling-business/screens/${name}.webp`
const p = (name) => `/work/starling-business/process/${name}.webp`

export const starling = {
  slug: 'starling-business',
  name: 'Starling Business',
  kind: 'Business banking · web & iOS',
  concept: true,
  title: 'Making the business bank account do the books.',
  summary:
    'A redesign of the Starling Business account website, the account application and an iOS app imagined for 2026–27. Every real fact from the live site stays on the page; almost everything about how it feels changes, with bookkeeping and Making Tax Digital as the hero instead of a footnote.',
  year: '2026',
  accent: '#5444F2',
  accent2: '#2FD3A7',
  tint: '#EFEDFF',
  cover: s('w-business'),
  coverAlt: s('apply-type'),
  meta: [
    { label: 'Role', value: 'Lead UX/UI designer' },
    { label: 'Type', value: 'Concept project' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Website · iOS app' },
    { label: 'Scope', value: '10 web pages, 16 iOS screens, 2 prototypes' },
  ],
  tags: ['Fintech', 'Small business', 'iOS', 'Making Tax Digital'],
  highlights: [
    { value: '2 min', label: 'the goal for a quarterly tax update, reviewed and sent from a phone' },
    { value: '1', label: 'page for every fee and limit, instead of figures spread across the site' },
    { value: '26', label: 'screens: 10 web pages and 16 iOS screens' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'A great product, explained like a brochure',
      blocks: [
        {
          type: 'text',
          body: [
            'Starling’s Business account already does a lot: no monthly fees, invoicing, receipt capture, tax pots and its own accounting add-on. On the website, though, all of that arrives as one long list of equal-weight sections, and the numbers people need most, like fees, cash limits and tax dates, are spread across different pages.',
            'At the same time, Making Tax Digital is turning bookkeeping from a once-a-year chore into something sole traders do every quarter. I wanted to see what the experience could look like if it was built around that moment: the bank that already knows your money also helps you understand it, and sends your quarterly update for you.',
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'Figures on the pages are quoted from the live site (November 2026) so the redesign could never invent a number. The logo is a concept mark made for this project. Research that needs real customers is written as a plan and has not been run.',
        },
        {
          type: 'cards',
          cols: 4,
          title: 'The brief I set myself',
          items: [
            { kicker: 'Website', title: 'Redesign the Business pages', body: 'Business account, Sole trader, Accounting, Making Tax Digital, Fees & limits and Switch to us. Same content, new IA and UI.' },
            { kicker: 'Application', title: 'Design the apply journey', body: 'Account type, business details, documents and ID, decision. Make the “about ten minutes” promise feel true.' },
            { kicker: 'iOS app', title: 'A native 2026–27 app', body: 'Home, Spaces, invoices, insights, MTD tax, Tap to Pay, cards, team and support.' },
            { kicker: 'Process', title: 'Honest, end to end', body: 'Ten phases from kickoff to handoff. Anything needing real users is labelled as a plan, never faked.' },
          ],
        },
      ],
    },
    {
      id: 'discover',
      label: 'Discover',
      title: 'Facts first, then feelings',
      blocks: [
        {
          type: 'text',
          body: [
            'I started by reading every Business page and pulling each figure into one table, so the redesign could only ever use real numbers. Then a heuristic review of the current site and a competitor audit showed where people were most likely to get stuck: long pages with many sections of equal weight, key numbers spread across pages, accounting and MTD presented as add-ons, and an apply button that never says what you will need.',
          ],
        },
        {
          type: 'table',
          title: 'Stakeholders and how they would be involved',
          head: ['Stakeholder', 'Interest', 'How we involve them'],
          rows: [
            ['Sole traders and Ltd directors', 'Fast setup, low fees, less admin', 'Interviews, diary study, usability tests'],
            ['Accountants and bookkeepers', 'View-only access, clean exports, MTD', 'Expert interviews and a co-design session'],
            ['Compliance and legal', 'FCA promotions, KYC, FSCS wording', 'Copy review gates, with a veto'],
            ['Customer support', 'Fewer “how do I…” contacts', 'Top contact reasons, script review'],
            ['Engineering (web + iOS)', 'Feasible, token-based, accessible', 'Design system reviews, handoff, QA'],
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Research ethics for a real study',
          items: [
            { kicker: 'Rule', title: 'Consent first', body: 'Written consent before any session; participants can stop or withdraw data at any time.' },
            { kicker: 'Rule', title: 'No real account data', body: 'Never ask to see live balances or statements. Made-up numbers or redacted screenshots only.' },
            { kicker: 'Rule', title: 'Inclusive recruitment', body: 'A mix of trades, ages and digital confidence, not just tech-savvy founders.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: '“I do the books on Sunday night and I hate it.”',
      blocks: [
        { type: 'image', src: p('personas'), alt: 'Three proto-personas: an electrician, a ceramics studio director and an accountant', caption: 'Three proto-personas: Dan the sole trader electrician, Natasha who runs a ceramics studio, and Priya, their accountant.' },
        {
          type: 'quotes',
          items: [
            { text: 'I’m on a ladder all day. I do the books on Sunday night and I hate it.', by: 'Dan · sole trader electrician' },
            { text: 'I spend more time chasing invoices than making pots.', by: 'Natasha · director, ceramics studio' },
            { text: 'I just need clean data and view-only access, not another login dance.', by: 'Priya · accountant' },
          ],
          caption: 'Hypothesis quotes, to be validated by interviews.',
        },
        {
          type: 'text',
          title: 'Dan’s first quarterly update',
          body: [
            'The journey follows Dan preparing his first MTD update with today’s tools. He downloads statements, digs receipts out of the van’s glovebox, tags every line in a spreadsheet, works out the tax by hand and then buys separate software to submit. The worst of it is an evening spent matching receipts to transactions the bank already has.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Current-state journey of a sole trader preparing a quarterly tax update', caption: 'Realise, gather, categorise, calculate, submit, then do it all again in three months.' },
        {
          type: 'table',
          title: 'Problems I committed to',
          head: ['Problem', 'How might we…'],
          rows: [
            ['Bookkeeping happens outside the bank', '…make bookkeeping happen as a side effect of spending?'],
            ['MTD feels like a new job, not a review', '…turn each MTD deadline into a two-minute review?'],
            ['Fees and fit are hard to judge', '…let someone judge fees and fit in under 30 seconds?'],
            ['Accountants chase screenshots', '…give accountants what they need without new logins?'],
          ],
        },
        {
          type: 'cards',
          cols: 4,
          title: 'Principles',
          items: [
            { kicker: '01', title: 'Do the books, ask for decisions', body: 'Automate the matching; only interrupt when a human choice is needed.' },
            { kicker: '02', title: 'Numbers up front', body: 'Fees, limits and dates in plain figures where the decision happens.' },
            { kicker: '03', title: 'Respect the 10-minute owner', body: 'Every core task completes in one sitting on a phone.' },
            { kicker: '04', title: 'Calm confidence', body: 'Regulated, secure and human. Never alarming, never salesy.' },
          ],
        },
      ],
    },
    {
      id: 'develop',
      label: 'IA & flows',
      title: 'Four decisions that shaped the design',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            { kicker: '01', title: 'Lead with proof, not features', body: 'Every page opens with one promise and three hard facts, like no monthly fees, 600,000+ businesses and FSCS protection up to £120,000, so people can judge fit in seconds.' },
            { kicker: '02', title: 'Put every cost on one page', body: 'Fees & limits became a single scannable table, including the sole trader cash limits that used to live in a paragraph.' },
            { kicker: '03', title: 'Make tax a two-minute review', body: 'In the app, the Tax tab shows a ready-to-submit quarterly summary, flags what is missing, and a Lock Screen Live Activity counts down to the deadline.' },
            { kicker: '04', title: 'Tell people what they’ll need', body: 'The apply journey starts with a checklist and a realistic time, about ten minutes, so nobody abandons halfway to find a document.' },
          ],
        },
        { type: 'image', src: p('ia'), alt: 'Information architecture for the website and the iOS app', caption: 'Information architecture for the Business pages and the app.' },
        { type: 'image', src: p('flows'), alt: 'Key user flows', caption: 'Key flows: apply, send an invoice, capture a receipt, and submit a quarterly update.' },
        { type: 'image', src: p('wireframes-ios'), alt: 'Mid-fidelity iOS wireframes', caption: 'Mid-fi iOS wireframes, before colour or brand.' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Let the numbers breathe',
      blocks: [
        {
          type: 'text',
          body: [
            'The concept identity is a sharper, more confident take on a challenger bank: deep iris for trust, a mint spark for money moving in your favour, and generous white space so numbers can breathe. Manrope’s wide, friendly figures make balances the hero; Inter keeps dense UI legible at small sizes.',
          ],
        },
        { type: 'image', src: p('brand'), alt: 'Brand foundations: lock-up, semantic palette and typography', caption: 'Brand foundations. Every colour is a variable; dark mode swaps values, not names.' },
        {
          type: 'palette',
          items: [
            { name: 'Iris', hex: '#5444F2', role: 'Brand · action' },
            { name: 'Ink', hex: '#0B1020', role: 'Primary text' },
            { name: 'Mint', hex: '#2FD3A7', role: 'Money in' },
            { name: 'Brand subtle', hex: '#EFEDFF', role: 'Background' },
            { name: 'Danger', hex: '#E5483A', role: 'Status' },
            { name: 'Warning', hex: '#FFC23D', role: 'Status' },
          ],
        },
        { type: 'image', src: p('components'), alt: 'Core components of the design system', caption: 'Core components, built with auto layout and bound to tokens.' },
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
            { src: s('w-business'), title: 'Business account', body: 'One promise, three hard facts and a clear next step, with the product shown doing the work: an invoice paid, tax set aside.' },
            { src: s('w-fees'), title: 'Fees & limits', body: 'Every cost on one scannable page, in plain English, so “is this right for me?” takes seconds.' },
            { src: s('apply-type'), title: 'Apply · choose account type', body: 'A checklist of what you will need and a realistic time up front, before the first question.' },
            { src: s('w-mtd'), title: 'Making Tax Digital', body: 'MTD explained as a plan with dates, not a threat, with the app’s quarterly summary as the proof.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('w-accounting'), title: 'Starling Accounting' },
            { src: s('apply-decision'), title: 'Apply · decision' },
          ],
        },
        {
          type: 'phones',
          title: 'iOS app',
          items: [
            { src: s('m-welcome'), title: 'Welcome' },
            { src: s('m-home'), title: 'Home' },
            { src: s('m-spaces'), title: 'Spaces' },
            { src: s('m-invoice'), title: 'New invoice' },
            { src: s('m-tax'), title: 'Tax · MTD update' },
            { src: s('m-tap-to-pay'), title: 'Tap to Pay' },
            { src: s('m-face-id'), title: 'Confirm with Face ID' },
            { src: s('m-live-activity'), title: 'Lock Screen Live Activity' },
          ],
          caption: 'A 2026 iOS language: a liquid-glass tab bar, Live Activities, Face ID confirmation and Tap to Pay.',
        },
      ],
    },
    {
      id: 'validate',
      label: 'Validate',
      title: 'How I would measure it',
      blocks: [
        {
          type: 'facts',
          title: 'HEART metrics, set before testing',
          items: [
            { k: 'Happiness', v: 'Owners feel in control of tax: CSAT on MTD submit, SUS ≥ 80 in tests.' },
            { k: 'Engagement', v: 'Books kept up to date weekly: share of transactions with a receipt within 7 days.' },
            { k: 'Adoption', v: 'Prospects start applying: apply start rate from product pages.' },
            { k: 'Task success', v: 'A quarterly update reviewed and sent in one sitting on a phone.' },
          ],
        },
        {
          type: 'text',
          body: [
            'The validation plan covers usability sessions on both prototypes, a diary study, and experiments to measure the launch. None of it has been run, so there are no results to show here.',
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
            { kicker: '01', title: 'Keep the facts, change the feeling', body: 'Pulling every real figure into one table first meant the redesign could be bold about layout and never wrong about money.' },
            { kicker: '02', title: 'Find the moment that matters', body: 'MTD turns a yearly chore into a quarterly one. Designing around that moment gave the whole product a story.' },
            { kicker: '03', title: 'Say what people will need', body: 'Most abandoned applications are about missing documents, not bad forms. A checklist at the start costs nothing.' },
          ],
        },
      ],
    },
  ],
}
