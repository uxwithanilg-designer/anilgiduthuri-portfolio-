const s = (name) => `/work/next-retail/screens/${name}.webp`
const p = (name) => `/work/next-retail/process/${name}.webp`

export const nextConcept = {
  slug: 'next-retail',
  name: 'Next',
  kind: 'Fashion & home retail · web & iOS',
  concept: true,
  title: 'A calmer way to shop a very big store.',
  summary:
    'A design study for one of the UK’s best-known retailers: a warmer brand, a faster website and an iOS 26 app that does the boring bits for you. The question behind it was simple: what if the biggest store on the high street felt as calm as a small boutique?',
  year: '2026',
  accent: '#B5653F',
  accent2: '#1F6B4E',
  tint: '#F6EFE8',
  cover: s('home'),
  coverAlt: s('product'),
  meta: [
    { label: 'Role', value: 'Lead UX/UI designer' },
    { label: 'Type', value: 'Concept project' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Website · iOS 26' },
    { label: 'Scope', value: '11 web screens, 16 app screens, 2 prototypes' },
  ],
  tags: ['Retail', 'E-commerce', 'iOS 26', 'Brand refresh'],
  highlights: [
    { value: '17', label: 'items in the live main menu, the first sign the store felt busy' },
    { value: '2 taps', label: 'from bag to paid, with Apple Pay and passkeys' },
    { value: '27', label: 'screens across the website and the iOS app' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'A big store doesn’t need a busy shop window',
      blocks: [
        {
          type: 'text',
          body: [
            'Next is one of the shops most British families know: clothes for everyone, homeware, beauty and hundreds of partner brands, all in one basket and often delivered the next day. That range is its superpower. It is also what makes the website feel busy.',
            'I walked through the live site on 14 November 2026 using Nielsen’s heuristics. Seventeen items in the main menu. Seasonal banners stacked on top of each other. A Recently Viewed module showing an error message on the home page. A favourites notice telling me I had reached my limit of zero items. None of these are big problems on their own. Together, they make a great store feel like harder work than it should.',
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'Research that needs real shoppers (interviews, a card sort, a tree test and usability tests) is planned, not run, so the personas and journey are assumptions to test. I took out every number I could not check.',
        },
        {
          type: 'cards',
          cols: 4,
          title: 'How I worked',
          items: [
            { kicker: 'Discover', title: 'Site review and competitors', body: 'A heuristic review of the live site, then Marks & Spencer, John Lewis, ASOS and Zara.' },
            { kicker: 'Define', title: 'People and problems', body: 'Three proto-personas, four problem statements, five principles and a journey map.' },
            { kicker: 'Develop', title: 'Structure and flows', body: 'A simpler IA, key flows and priorities, then lo-fi and mid-fi wireframes.' },
            { kicker: 'Deliver', title: 'Brand, system, screens', body: 'A refreshed brand, a variables-based design system, 27 screens and two prototypes.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Three shoppers and four problems',
      blocks: [
        { type: 'image', src: p('persona'), alt: 'Proto-persona for a busy shopper', caption: 'Proto-personas built from desk research and the site review. They will change once I talk to real people.' },
        {
          type: 'quotes',
          items: [
            { text: 'I know what I want. Just let me find it in my size.', by: 'Priya, 34 · Notting Hill' },
            { text: 'Matching pyjamas for four, delivered by Friday.', by: 'Tom & Aisha, 38 · Leeds' },
            { text: 'Show me something good. I’ll know it when I see it.', by: 'James, 29 · Manchester' },
          ],
          caption: 'Illustrative persona statements, not research quotes.',
        },
        {
          type: 'table',
          title: 'Problems and how might we',
          head: ['Problem', 'How might we…'],
          rows: [
            ['Too many choices at the top of the page slow people down', '…make a huge store feel easy to browse in under ten seconds?'],
            ['People find a style, then discover their size has gone', '…show size and stock before someone falls in love with a product?'],
            ['Checkout asks for details people have already given', '…let returning shoppers pay in two taps?'],
            ['After paying, people keep checking for delivery news', '…keep people updated without them opening the app?'],
          ],
        },
        {
          type: 'compare',
          title: 'Priya’s journey, today and with the concept',
          head: ['Today (assumed)', 'With the concept'],
          rows: [
            ['Busy home page, seasonal banners compete', 'One hero edit, departments one tap away'],
            ['Long menu, filters hidden on mobile', 'Smart search, photo search, a glass filter bar'],
            ['Size sold out after choosing a colour', 'Size shown first, a fit tip, a low-stock warning'],
            ['Fill in details again', 'Apple Pay or a passkey, two taps'],
            ['Refresh the tracking page', 'A Live Activity on the Lock Screen'],
            ['Find the returns page', 'Return from the order, one tap'],
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Five principles',
          items: [
            { kicker: '01', title: 'Calm over clutter', body: 'One clear job per section. White space is a feature.' },
            { kicker: '02', title: 'Size first', body: 'Your size and stock show before anything else.' },
            { kicker: '03', title: 'Photos lead', body: 'Big, honest imagery. The UI steps back.' },
            { kicker: '04', title: 'Two-tap checkout', body: 'Apple Pay and saved details by default.' },
            { kicker: '05', title: 'Tell me before I ask', body: 'Delivery dates, price drops and stock alerts come to you.' },
          ],
        },
      ],
    },
    {
      id: 'develop',
      label: 'Flows & wireframes',
      title: 'Five decisions',
      blocks: [
        {
          type: 'cards',
          cols: 2,
          items: [
            { kicker: 'Size first', title: 'Stock before the crush', body: 'On the product page your size and stock come before anything else. If size 18 has gone, you see it before you fall in love with the coat.' },
            { kicker: 'Photos lead', title: 'The UI steps back', body: 'Big editorial images, a quiet stone background and one clay accent. Red is only ever used for sale prices.' },
            { kicker: 'Thumb-reach filters', title: 'A floating glass bar', body: 'On the listing page, a Liquid Glass bar opens a sheet with sizes, colours, price and delivery options.' },
            { kicker: 'Two-tap checkout', title: 'Apple Pay and passkeys', body: 'Apple Pay on the bag and checkout, passkeys for sign-in, and one clear order summary on the web.' },
            { kicker: 'Tell me before I ask', title: 'After you pay', body: 'A Live Activity follows the parcel on the Lock Screen, and favourites tell you when the price drops.' },
          ],
        },
        { type: 'image', src: p('flows'), alt: 'Key user flows for shopping, checkout and delivery', caption: 'Key flows: find in your size, pay, wait, return.' },
        { type: 'image', src: p('wireframes-app'), alt: 'Lo-fi wireframes for every iOS screen', caption: 'Lo-fi wireframes for every app screen, before any brand work.' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Warm stone, one clay accent',
      blocks: [
        {
          type: 'text',
          body: [
            'The idea is a big, friendly store that feels calm: warm stone instead of stark white, one clay accent and an editorial serif for big moments. The concept wordmark is lower case with a clay full stop. “next.” is a promise, not a question.',
            'Colour only appears where it means something. Berry red is reserved for sale prices, so a red price always means a saving.',
          ],
        },
        { type: 'image', src: p('brand-logo'), alt: 'Concept wordmark on light and dark, with principles', caption: 'The concept wordmark: lower case and light, with a clay full stop.' },
        {
          type: 'palette',
          items: [
            { name: 'Ink', hex: '#0B0B0C', role: 'Text · buttons' },
            { name: 'Stone', hex: '#F3EFE8', role: 'Calm areas' },
            { name: 'Clay', hex: '#B5653F', role: 'Accent · brand dot' },
            { name: 'Berry', hex: '#D11A45', role: 'Sale prices only' },
            { name: 'Pine', hex: '#1F6B4E', role: 'Success · delivery' },
          ],
        },
        {
          type: 'compare',
          title: 'Voice',
          head: ['We don’t say', 'We say'],
          rows: [
            ['HURRY! SELLING FAST!!!', 'Only 3 left in your size'],
            ['Cut-off times apply*', 'Order in 6h 12m for delivery tomorrow'],
            ['Transaction error 402', 'That didn’t go through. You haven’t been charged.'],
            ['No items found', 'Tap the heart on anything you love, and we’ll tell you if the price drops.'],
          ],
        },
        { type: 'image', src: p('brand-type'), alt: 'Typography: Fraunces and Inter', caption: 'Fraunces for feeling, Inter for doing.' },
        { type: 'image', src: p('design-system'), alt: 'Design system components', caption: 'Variables for colour, spacing and radius in light and dark, 20 text styles, and components from size pills to the Liquid Glass tab bar.' },
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
            { src: s('home'), title: 'Home', body: 'One hero edit instead of stacked banners, with every department one tap away in a shorter menu.' },
            { src: s('product'), title: 'Product page', body: 'Size and stock first, a fit tip, delivery cut-off in plain words, and Apple Pay right next to Add to bag.' },
            { src: s('listing'), title: 'Listing', body: 'Filters by size, colour and price, with the shopper’s size remembered and sold-out styles out of the way.' },
            { src: s('checkout'), title: 'Checkout', body: 'One clear order summary. Returning shoppers pay with saved details or a passkey.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('mega-menu'), title: 'Mega menu' },
            { src: s('search'), title: 'Search' },
            { src: s('bag'), title: 'Bag' },
            { src: s('confirmed'), title: 'Order confirmed' },
            { src: s('favourites'), title: 'Favourites' },
            { src: s('account'), title: 'Account' },
            { src: s('signin'), title: 'Sign in with a passkey' },
          ],
        },
        {
          type: 'phones',
          title: 'iOS 26 app',
          items: [
            { src: s('m-home'), title: 'What’s new' },
            { src: s('m-listing'), title: 'Listing' },
            { src: s('m-filters'), title: 'Filter sheet' },
            { src: s('m-product'), title: 'Product' },
            { src: s('m-size'), title: 'Select your size' },
            { src: s('m-bag'), title: 'Bag' },
            { src: s('m-applepay'), title: 'Apple Pay' },
            { src: s('m-tracking'), title: 'Order tracking' },
            { src: s('m-live-activity'), title: 'Lock Screen Live Activity' },
            { src: s('m-favourites'), title: 'Favourites with price drops' },
          ],
        },
        { type: 'image', src: p('prototype'), alt: 'Prototype connections across the app screens', caption: 'The clickable prototype, from inspiration to a parcel at the door.' },
      ],
    },
    {
      id: 'measure',
      label: 'Measure',
      title: 'How we would know it works',
      blocks: [
        {
          type: 'text',
          body: [
            'These are targets, not results: more people finding their size on the first product they open, fewer steps from bag to paid, fewer “where is my order?” contacts once the Live Activity launches, and more shoppers saying the site feels easy.',
            'Next steps: run the interviews, card sort and tree test, then test the prototype with six shoppers per round and update the design with what we learn.',
          ],
        },
        { type: 'image', src: p('handoff'), alt: 'Handoff board with specs and states', caption: 'Handoff: every screen built from system parts, so an engineer can trust what they see in Dev Mode.' },
      ],
    },
    {
      id: 'reflection',
      label: 'Reflection',
      title: 'What I learned',
      blocks: [
        {
          type: 'cards',
          cols: 3,
          items: [
            { kicker: '01', title: 'Calm is a feature', body: 'Removing things was harder than adding them, and it made the biggest difference.' },
            { kicker: '02', title: 'Honest copy builds trust', body: 'I took out every number I couldn’t check, and wrote stock and delivery messages in plain English.' },
            { kicker: '03', title: 'Design for after paying', body: 'Most of the anxiety in online shopping happens while you wait. That is where the app can quietly help.' },
          ],
        },
      ],
    },
  ],
}
