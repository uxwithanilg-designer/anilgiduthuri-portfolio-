const s = (name) => `/work/genie-connections/screens/${name}.webp`
const p = (name) => `/work/genie-connections/process/${name}.webp`

export const genie = {
  slug: 'genie-connections',
  name: 'Genie Connections',
  kind: 'Proximity dating app · iOS',
  concept: false,
  title: 'Meet in the moment. Show who is near, never where.',
  summary:
    'I worked with Genie Connections as a freelance designer from 2023 to early 2024. Genie is a London dating app that uses Bluetooth to show who is close by right now, without ever showing where they are. This case study is my proposal for the next version of the app, for 2026–27: calmer, safer and native to iOS 26.',
  year: '2026',
  accent: '#E23D63',
  accent2: '#8B7CFF',
  tint: '#FFF1F3',
  cover: s('m-nearby'),
  coverAlt: s('m-split-screen'),
  coverDevice: 'phone',
  coverPhones: [s('m-split-screen'), s('m-nearby'), s('m-check-in')],
  meta: [
    { label: 'Role', value: 'Lead UX/UI designer' },
    { label: 'Client', value: 'Genie Dating App Ltd, London' },
    { label: 'Timeline', value: 'Freelance 2023–24 · proposal for 2026–27' },
    { label: 'Platform', value: 'iOS 26 · iPhone' },
    { label: 'Scope', value: '44 wireframes, 44 hi-fi screens, prototype' },
  ],
  tags: ['Consumer app', 'Privacy & safety', 'iOS 26', 'Design system'],
  highlights: [
    { value: '44', label: 'iPhone screens, from lo-fi to hi-fi, plus a clickable prototype' },
    { value: '5', label: 'design principles every screen had to pass' },
    { value: '0', label: 'maps, pins or places anywhere in the app' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Wrong place, wrong time, right person?',
      blocks: [
        {
          type: 'text',
          body: [
            'Everyone in London has had the moment. Someone across the Tube carriage, a smile in a café queue, a good chat at a gig that ended too soon. Then the doors close. Genie is built for exactly that moment. It is the first Bluetooth dating app: it shows people who are in range right now, and it never shows anyone where you are.',
            'When I freelanced for Genie between 2023 and early 2024, I designed onboarding, matching, messaging and location-aware features, including the privacy, permission and consent states, built Figma and coded prototypes, and ran three rounds of testing to improve onboarding and notifications. This file is what I would do next: the same end-to-end process, pointed at one question. How do we turn London’s near-misses into safe, real connections?',
          ],
        },
        {
          type: 'stats',
          caption: 'Desk research, each figure from a named public source',
          items: [
            { value: '~1 in 10', label: 'UK adults used an online dating service in 2024 (Ofcom)' },
            { value: '> 50%', label: 'of UK adults would rather stop using apps and meet in person (Novuna, 2024)' },
            { value: '6', label: 'competing apps reviewed, plus Genie’s public site and store listing' },
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'The freelance work in 2023–24 was real and shipped with the client. This case study is a proposal for the next version, written in 2026. Desk research is real and every number has a named source. Anything that needs real Londoners, such as interviews, a diary study and usability tests, is marked as a plan. The personas are proto-personas and the people shown in the screens are fictional adults.',
        },
      ],
    },
    {
      id: 'brief',
      label: 'Brief & team',
      title: 'Start from the real product, not a blank page',
      blocks: [
        {
          type: 'text',
          body: [
            'Genie already did things very few dating apps do. I listed them first, because the next version had to build on them rather than reinvent them.',
          ],
        },
        {
          type: 'cards',
          cols: 4,
          items: [
            { kicker: 'Proximity', title: 'Bluetooth, not GPS', body: 'You see people within Bluetooth range in real time, with no location tracking.' },
            { kicker: 'RealLife toggle', title: 'Switch the magic off', body: 'Turn discoverability off and Genie works like a normal online dating app.' },
            { kicker: 'Split-screen', title: 'Two at once', body: 'Two profiles side by side, so a right swipe is a real choice.' },
            { kicker: 'Women’s safety', title: 'Anonymous and Invisible', body: 'Browse without being seen, or blur your photos until you like someone back.' },
          ],
        },
        {
          type: 'facts',
          title: 'A small team that talks every day',
          items: [
            { k: 'Me · Lead UX/UI', v: 'Research, UX, UI, design system, prototype and handoff. I hold the user’s side in every decision.' },
            { k: 'Product manager', v: 'Roadmap, priorities and success metrics. Owns the “why now”.' },
            { k: 'iOS engineers ×2', v: 'SwiftUI, Core Bluetooth, Live Activities and Apple Pay: what the phone can really do.' },
            { k: 'Trust & Safety lead', v: 'Verification, reporting and moderation. Has a veto on anything unsafe.' },
            { k: 'Marketing lead', v: 'Voice, the App Store page and the London launch plan, area by area.' },
          ],
        },
      ],
    },
    {
      id: 'discover',
      label: 'Discover',
      title: 'People want real life, but real life raises a hard question',
      blocks: [
        {
          type: 'text',
          body: [
            'The opportunity looked obvious: people are tired of swiping and want to meet in person. But the moment an app shows someone nearby, it raises a harder question, especially for women. Is this safe? Every part of the research came back to that tension.',
            'I reviewed six competing apps, ran a heuristic review of Genie’s public site and App Store listing, and read public app-store reviews for patterns (read, not counted). The loudest themes were swiping fatigue (“a second job”), chats that die after “hey”, fake profiles that break trust, subscriptions that feel like a trap, and location features that scare people.',
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Research planned with real Londoners',
          items: [
            { kicker: 'Planned', title: 'Interviews with 10–12 Londoners', body: 'Who notices whom, where, and what stops them saying hello.' },
            { kicker: 'Planned', title: 'A “near-miss moments” diary study', body: 'Capturing the moments as they happen, not as people remember them later.' },
            { kicker: 'Planned', title: 'Concept tests with 5–6 people', body: 'Which ideas feel safe, calm and a little magical, and which feel creepy.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Five Londoners and one moment that slips away',
      blocks: [
        { type: 'image', src: p('personas'), alt: 'Proto-personas for five London daters', caption: 'Five proto-personas, built from desk research, public reviews and my time working with the Genie team.' },
        {
          type: 'pull',
          text: 'The core job: when I notice someone in real life, help me find out if the feeling is mutual, safely, quietly and before the moment is gone. No swiping app does this job.',
        },
        {
          type: 'text',
          title: 'Maya’s Tuesday on the Northern line',
          body: [
            'The journey map follows Maya, 29, on a normal Tuesday. Two stops after Clapham Common she shares a smile with someone reading the same novel. They step off at Bank, the doors close, and nothing happens. She replays it all day. At 10 p.m. she opens a swiping app out of habit, gets three chats that say “hey”, and closes it. The spark was real; the app just wasn’t there for it.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Current-state journey map of Maya’s day', caption: 'A hypothesis journey, to be checked step by step with real London daters.' },
        {
          type: 'table',
          title: 'How might we…',
          head: ['Theme', 'Question'],
          rows: [
            ['Moments → connections', '…help Maya act on a spark before the moment is gone?'],
            ['Moments → connections', '…keep a moment for later without ever saving a place?'],
            ['Privacy & safety', '…show who is nearby without ever showing where?'],
            ['Privacy & safety', '…let women decide exactly when, and by whom, they are seen?'],
            ['Privacy & safety', '…support a first date without live location tracking?'],
            ['Quality over quantity', '…encourage deliberate choices instead of endless swiping?'],
          ],
        },
        {
          type: 'cards',
          cols: 3,
          title: 'Five principles',
          items: [
            { kicker: '01', title: 'Right here, right now', body: 'Alerts happen while you are both there, not hours later.' },
            { kicker: '02', title: 'Never where', body: 'Soft bands like “very close”, never a map, street or direction.' },
            { kicker: '03', title: 'She’s in control', body: 'Being visible is a choice that changes with place and mood.' },
            { kicker: '04', title: 'Slow is better', body: 'Fewer, better choices beat endless swipes.' },
            { kicker: '05', title: 'Pay only for what you use', body: 'No subscription traps. The price shows before every tap.' },
          ],
        },
      ],
    },
    {
      id: 'develop',
      label: 'Develop',
      title: 'Lo-fi, mid-fi, then the hard calls',
      blocks: [
        {
          type: 'text',
          body: [
            'I turned the principles into an information architecture, six key flows and clear proximity rules, then wireframed all 44 screens in lo-fi and mid-fi before any colour went in. Most of the interesting decisions happened here, because “never where” turned out to be a rule that simplifies a lot and kills a few exciting ideas.',
          ],
        },
        {
          type: 'phones',
          title: 'The Nearby radar, from lo-fi to mid-fi',
          items: [
            { src: p('m-lofi-nearby'), title: 'Lo-fi · Nearby radar' },
            { src: p('m-midfi-nearby'), title: 'Mid-fi · Nearby radar' },
            { src: s('m-nearby'), title: 'Hi-fi · Nearby radar' },
          ],
          caption: 'Three soft bands, very close, close and in range, and no distances, streets or directions.',
        },
        {
          type: 'cards',
          cols: 2,
          title: 'Five decisions that shaped the app',
          items: [
            { kicker: 'Who, never where', title: 'Soft bands, no map', body: 'The radar shows bands, never a map. Crossed Paths remembers the time and the vibe, never the place. A map of crossings was exciting, and it had to go.' },
            { kicker: 'She is in control', title: 'Anonymous and Invisible, in onboarding', body: 'Anonymous Mode blurs your photos until you like someone back; Invisible Mode lets you look without being seen. Both are free, and both are offered up front.' },
            { kicker: 'Slow is better', title: 'Choose one of two, or neither', body: 'Split-screen asks you to pick between two people who crossed your path, or neither. Requests come with a short note. It is harder to swipe without thinking, and that is the point.' },
            { kicker: 'Safety without fear', title: 'Date Plan and Safety Check-in', body: 'Date Plan suggests busy public places midway. Check-in shares your plan with a friend and asks if you are okay, calmly, without live location.' },
            { kicker: 'Pay for what you use', title: 'Credits, not subscriptions', body: 'Credits from £4.99 that never expire, the price shown before every tap, and Apple Pay. If a payment fails, the app says so and confirms you weren’t charged.' },
          ],
        },
        { type: 'image', src: p('prototype-flow'), alt: 'Prototype flow connecting the key iPhone screens', caption: 'The clickable prototype’s main flow, from welcome to a spark.' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'Five colours, each with one job',
      blocks: [
        {
          type: 'text',
          body: [
            'The brand idea is “right place, right time, right person”. The logo is two circles crossing paths; the only part filled in is where they overlap, the moment you meet, with a small coral spark for the genie.',
            'Every colour has exactly one job. Coral is for love and action, gold for anything you pay for, lilac for anything nearby. Red is never used for love, because red means danger. Instrument Serif carries the big feelings, like “It’s a spark”; Inter handles everything you read and tap.',
          ],
        },
        { type: 'image', src: p('brand-cover'), alt: 'Genie brand book cover: Meet in the moment', caption: 'Brand book cover. Real London light, warm and candid, never a hint of an exact place.' },
        {
          type: 'palette',
          items: [
            { name: 'Genie Coral', hex: '#FF5470', role: 'Actions, likes, sparks' },
            { name: 'Lamp Gold', hex: '#FFB547', role: 'Credits only' },
            { name: 'Wish Lilac', hex: '#8B7CFF', role: 'Nearby, Bluetooth' },
            { name: 'Midnight Ink', hex: '#15101F', role: 'Text, night screens' },
            { name: 'Cream', hex: '#FBF8F6', role: 'Calm backgrounds' },
          ],
        },
        { type: 'image', src: p('components'), alt: 'Genie component library', caption: 'Components with clear variants, so engineers build exactly what they see.' },
        {
          type: 'stats',
          caption: 'The design system, counted from the file',
          items: [
            { value: '116', label: 'variables: 51 primitives, 44 colours in light and dark, 21 sizes' },
            { value: '2', label: 'typefaces: Instrument Serif and Inter' },
            { value: '20 px', label: 'line icons with rounded ends' },
          ],
        },
      ],
    },
    {
      id: 'screens',
      label: 'Final screens',
      title: 'Built for iOS 26',
      blocks: [
        {
          type: 'text',
          body: [
            'The app is meant to feel at home on a modern iPhone: Liquid Glass bars and sheets, a Live Activity that counts people nearby on the lock screen, a Dynamic Island radar, Sign in with Apple, Face ID and Apple Pay. Even there, the rule holds: the lock screen counts people, it never names places.',
          ],
        },
        {
          type: 'phones',
          title: 'Hi-fi iPhone screens',
          items: [
            { src: s('m-welcome'), title: 'Welcome' },
            { src: s('m-bluetooth'), title: 'Bluetooth permission' },
            { src: s('m-anonymous'), title: 'Anonymous Mode' },
            { src: s('m-nearby'), title: 'Nearby radar' },
            { src: s('m-split-screen'), title: 'Choose slowly' },
            { src: s('m-request'), title: 'Request with a note' },
            { src: s('m-chat'), title: 'Chat' },
            { src: s('m-check-in'), title: 'Date safety check-in' },
            { src: s('m-credits'), title: 'Credits, no subscription' },
            { src: s('m-lock-screen'), title: 'Lock screen Live Activity' },
          ],
        },
        { type: 'image', src: p('handoff'), alt: 'Handoff board with specs, states and accessibility notes', caption: 'Handoff: specs, states and accessibility notes, including Dynamic Type and VoiceOver.' },
      ],
    },
    {
      id: 'measure',
      label: 'Measure',
      title: 'How we will know it works',
      blocks: [
        {
          type: 'text',
          body: [
            'These are targets, not results: more two-way chats per match, less time from match to first date, fewer unwanted messages and reports, almost no credit refunds. And most of all, women telling us they feel safe enough to switch RealLife on.',
            'The plan is a second usability round on the hi-fi prototype, then a beta in three London areas, measured with HEART.',
          ],
        },
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
            { kicker: '01', title: 'Privacy is a design material', body: 'Once “never where” became a hard rule, many ideas got simpler, and a few exciting ones had to go. That trade was worth it.' },
            { kicker: '02', title: 'Safety words matter', body: 'The same feature can feel caring or frightening depending on three words. Check-in copy got more rewrites than any screen.' },
            { kicker: '03', title: 'Slower can feel better', body: 'Most apps fight for more swipes. Choosing one of two, or neither, made every choice feel like it meant something.' },
          ],
        },
      ],
    },
  ],
}
