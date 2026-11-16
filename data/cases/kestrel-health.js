const s = (name) => `/work/kestrel-health/screens/${name}.webp`
const p = (name) => `/work/kestrel-health/process/${name}.webp`

export const kestrel = {
  slug: 'kestrel-health',
  name: 'Kestrel Health',
  kind: 'Hospital & lab platform',
  concept: true,
  title: 'One record, one tube, one timeline, across hospital, lab and home.',
  summary:
    'A concept platform for a UK group that runs hospitals, pathology labs and home blood tests: a public website, an admin console for wards and labs, and one app with a patient mode and a staff mode. The idea that holds it together is simple: every sample, admission and booking is a journey you can follow.',
  year: '2026',
  accent: '#0B7A6F',
  accent2: '#FF8A5B',
  tint: '#E8F4F1',
  cover: s('command'),
  coverAlt: s('w-home'),
  meta: [
    { label: 'Role', value: 'Product designer, end to end' },
    { label: 'Type', value: 'Concept project' },
    { label: 'Year', value: '2026' },
    { label: 'Platform', value: 'Website · admin (light + dark) · iOS' },
    { label: 'Scope', value: '28 web pages, 36 admin screens, 30 app screens' },
  ],
  tags: ['Healthcare', 'Admin console', 'Mobile app', 'Design system'],
  highlights: [
    { value: '94', label: 'screens across the website, the admin console and the app' },
    { value: '6', label: 'tube-cap colours that became the whole visual language' },
    { value: '7', label: 'prototype flows with about 1,100 links between screens' },
  ],
  sections: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Patients chase PDFs. Staff re-key the same patient three times.',
      blocks: [
        {
          type: 'text',
          body: [
            'Picture a group that runs hospitals, pathology labs and home blood tests across Yorkshire. A patient books a thyroid test on one website, waits in for a four-hour window, gets a PDF by email with numbers and no explanation, and then calls a busy phone line to ask what it means. Behind the scenes, staff type the same patient into the hospital system, the lab system and the billing system. Samples go missing between systems, and results sit waiting for someone to sign them off.',
            'Kestrel Health is my answer to that, designed as one connected platform: a public website, a hospital and lab admin console, and one mobile app that patients and staff both use, each in their own mode. I took it through the whole process, from a research plan to a validation plan, with the IA, flows, a design system and a clickable prototype in between.',
          ],
        },
        {
          type: 'pull',
          text: 'The vision in one line: one record, one tube, one timeline. Every test, admission and result follows the patient through a single journey you can trace, from booking to collection, analyser, validation and report.',
        },
        {
          type: 'stats',
          items: [
            { value: '28', label: 'website pages, matching the breadth of a real diagnostics group' },
            { value: '36', label: 'admin screens for hospital, lab, imaging and business, plus dark mode' },
            { value: '30', label: 'app screens: 22 in patient mode and 8 in staff mode' },
            { value: '~1,100', label: 'prototype links across seven named flows' },
          ],
        },
        {
          type: 'note',
          title: 'A note on evidence',
          text: 'All names, prices, figures and quotes in this project are illustrative. The research and usability studies are written as plans that have not been run yet, so the personas are proto-personas and every number below is a target to validate, not a result. A real diagnostics website and a health super-app were used only as references for scope; no layouts, copy or imagery were reused.',
        },
      ],
    },
    {
      id: 'kickoff',
      label: 'Kickoff',
      title: 'Four audiences, one platform',
      blocks: [
        {
          type: 'cards',
          cols: 4,
          items: [
            { kicker: 'Patients & families', title: 'Book, track, understand', body: 'Self-pay and insured patients booking blood tests, scans, packages and consultations.' },
            { kicker: 'Clinicians', title: 'Act on results', body: 'Consultants, ward nurses and A&E teams ordering tests and acting on what comes back.' },
            { kicker: 'Lab teams', title: 'Run the samples', body: 'Phlebotomists, biomedical scientists, pathologists and the people who keep QC and stock in order.' },
            { kicker: 'Operations & finance', title: 'Watch capacity', body: 'Bed managers, billing, insurance and leadership keeping an eye on the whole group.' },
          ],
        },
        {
          type: 'table',
          title: 'What each stakeholder needs, and how we would know it worked',
          head: ['Stakeholder', 'What they need', 'Signal to measure'],
          rows: [
            ['Patients', 'Book in under two minutes, know when the phlebotomist arrives, understand results', 'Booking completion, report open rate, CSAT'],
            ['Ward nurses', 'Know which results need action without logging into three systems', 'Time from result to acknowledgement'],
            ['Biomedical scientists', 'An accurate worklist, with QC status visible before running', 'Repeat-run rate, turnaround per test'],
            ['Pathologists', 'Batch sign-off with deltas and critical flags first', 'Reports signed per hour, critical-call compliance'],
            ['Finance & insurance', 'Clean claims, with codes captured at the point of care', 'First-pass claim acceptance'],
            ['Information governance', 'UK GDPR, NHS DSPT, an audit trail on every record view', 'Audit coverage, zero unlogged access'],
          ],
        },
        {
          type: 'stats',
          caption: 'Three headline targets, written as hypotheses to validate',
          items: [
            { value: '< 2 min', label: 'from landing to a paid home-test slot on mobile' },
            { value: '≤ 4 h', label: 'routine turnaround, with a live status and expected report time' },
            { value: '100%', label: 'chain of custody: every tube scanned at every step' },
          ],
        },
        {
          type: 'facts',
          title: 'Constraints that shaped the UI from day one',
          items: [
            { k: 'Identifiers', v: 'NHS number (3-3-4 with checksum), hospital MRN, lab sample ID and GP ODS codes.' },
            { k: 'Standards', v: 'CQC for hospitals, UKAS ISO 15189 for labs, NHS DSPT for data security.' },
            { k: 'Interoperability', v: 'HL7 v2 for analysers, FHIR R4 for records, DICOMweb for imaging.' },
            { k: 'Clinical safety', v: 'Two identifiers before every sample. Critical results phoned and acknowledged.' },
            { k: 'Accessibility', v: 'WCAG 2.2 AA, dynamic type on mobile, colour never the only signal.' },
            { k: 'Money', v: 'Prices in GBP, self-pay and private insurance pre-authorisation side by side.' },
          ],
        },
      ],
    },
    {
      id: 'research',
      label: 'Research',
      title: 'What a hospital and lab system has to cover',
      blocks: [
        {
          type: 'text',
          body: [
            'I started with the desk work that needed no recruiting. I mapped a real UK-style diagnostics website page by page to understand the breadth a group like this needs, then wrote Kestrel’s own version of each page with the gap it fixes: turnaround times on the pathology page, prep guidance for scans, a consent journey for genomics, trends instead of PDF-only reports.',
            'I also broke a leading health super-app into feature groups and decided, group by group, what Kestrel keeps, adapts for the UK or drops. Lab tests at home stayed and got live tracking. Pharmacy was adapted to UK prescription rules. Rewards and coins were dropped as noise.',
          ],
        },
        {
          type: 'table',
          title: 'Competitors and analogues',
          head: ['Product', 'Learn from', 'Take-away for Kestrel'],
          rows: [
            ['Health super-app', 'One app for consults, pharmacy, lab tests and records', 'Super-app scope, but a calm, task-first home'],
            ['NHS App', 'Trusted identity and GP records', 'Support NHS login and the NHS number from day one'],
            ['Booking marketplaces', 'Fast doctor search and slots', 'Show continuity: same clinician, same record'],
            ['Hospital EHRs', 'Depth, orders, decision support', 'Keep the depth, cut clicks with role-based homes'],
            ['Lab systems (LIMS)', 'Analyser interfaces, QC, audit', 'A modern worklist and mobile phlebotomy'],
            ['UK private lab portals', 'Simple self-pay checkout', 'Trends and plain-English ranges, not static PDFs'],
          ],
          note: 'Desk review from public information, marked in the file to re-verify before any real decision.',
        },
        {
          type: 'stats',
          caption: 'The admin console had to cover a combined hospital (HIS) and lab (LIS) system',
          items: [
            { value: '5', label: 'patient administration modules' },
            { value: '6', label: 'clinical modules, from A&E triage to e-prescribing' },
            { value: '8', label: 'laboratory modules, from test orders to report sign-off' },
            { value: '7', label: 'imaging and revenue modules, plus a platform layer' },
          ],
        },
        {
          type: 'cards',
          cols: 2,
          title: 'The research plan for a four-week discovery',
          items: [
            { kicker: 'Planned', title: 'Contextual inquiry and ward shadowing', body: 'Six lab staff across two sites, four nurses and two consultants: where do samples stall, and how are results escalated today?' },
            { kicker: 'Planned', title: 'Patient interviews and a diary study', body: 'Ten patients across self-pay, insured and NHS-referred, then eight patients for two weeks between booking and report.' },
            { kicker: 'Planned', title: 'Survey of 300 patients', body: 'Home or clinic collection, and which report format people actually want.' },
            { kicker: 'Planned', title: 'Ethics first', body: 'Informed consent, no identifiable data in notes, recordings deleted after synthesis, and staff sessions outside critical shifts.' },
          ],
        },
      ],
    },
    {
      id: 'define',
      label: 'Define',
      title: 'Seven proto-personas and two journeys',
      blocks: [
        {
          type: 'text',
          body: [
            'I wrote three patient personas and four staff personas from the desk research. The staff ones matter as much as the patients, because the admin console and the staff mode of the app are designed around them.',
          ],
        },
        { type: 'image', src: p('personas'), alt: 'Three patient proto-personas with goals, frustrations and context', caption: 'Patient proto-personas: Amara (self-pay), Graham (71, insured) and Sana (booking for her kids).' },
        {
          type: 'quotes',
          items: [
            { text: 'I just want the blood test done before work and to know what the numbers mean.', by: 'Amara · self-pay patient' },
            { text: 'Show me which results need me now, not all of them.', by: 'Rachel · ward sister' },
            { text: 'If the app knows my route and the tubes I need, I can do 14 visits a day.', by: 'Daniel · phlebotomist' },
          ],
          caption: 'Illustrative quotes, to be replaced with real verbatims after research.',
        },
        {
          type: 'text',
          title: 'A home blood test, step by step',
          body: [
            'The first journey follows Amara from noticing she feels tired to acting on her results. The pain points are small on their own: too many similar packages, a four-hour window, conflicting fasting rules, zero visibility once the tube leaves her kitchen, and a number like “4.9” with no meaning attached. Together they make a simple test feel stressful.',
            'The second journey follows Graham, admitted through A&E with chest pain, to show how hospital and lab teams hand over through the same record: a wristband scanned at the desk, a triage board with timers, a critical troponin result that has to be acknowledged, a live bed board and an electronic discharge.',
          ],
        },
        { type: 'image', src: p('journey'), alt: 'Journey map of a home blood test across nine stages with pain points and opportunities', caption: 'Nine stages from “notice need” to “act on results”. Each pain point maps to a design opportunity.' },
        {
          type: 'table',
          title: 'Jobs to be done, and the questions they raised',
          head: ['Job', 'How might we…'],
          rows: [
            ['Patient: book a slot I trust', '…show the real arrival window, not a four-hour guess?'],
            ['Patient: understand my results', '…explain ranges in plain English, with history?'],
            ['Clinician: see only what needs me', '…rank results by clinical urgency and make acknowledgement part of the flow?'],
            ['Lab: release safely', '…make every tube traceable end to end, and auto-validate normals within rules?'],
            ['Operations: avoid boarding in A&E', '…predict discharges and show bed state live, without phone calls?'],
            ['Finance: get paid first time', '…capture codes at the point of care and show pre-auth status before treatment?'],
          ],
        },
        {
          type: 'table',
          title: 'What ships first, scored with RICE',
          head: ['Feature', 'RICE', 'Release'],
          rows: [
            ['Live sample tracking (patient + staff)', '12,000', 'MVP'],
            ['Home collection with 30-minute windows', '9,333', 'MVP'],
            ['Results trends in plain English', '7,000', 'MVP'],
            ['Critical result alert + acknowledge', '4,050', 'MVP'],
            ['Batch pathologist sign-off', '960', 'MVP'],
            ['Bed board with predicted discharges', '300', 'V2'],
          ],
          note: 'Reach, impact and effort are planning estimates only. AI summaries for patients were parked for research, with low confidence.',
        },
      ],
    },
    {
      id: 'ideate',
      label: 'Ideas & IA',
      title: 'Follow the tube',
      blocks: [
        {
          type: 'text',
          body: [
            'I sketched three directions. A module launcher was familiar, but every task started with a choice and nothing told you what was urgent. A conversational inbox was great on a phone and poor for batch lab work. The one I chose turns everything into a journey with steps: a tube, an admission, a booking.',
          ],
        },
        { type: 'image', src: p('concepts'), alt: 'Three concept directions with direction B, the live specimen timeline, chosen', caption: 'Direction B, the live specimen timeline, was chosen because status is always visible and it works for patients and staff alike.' },
        {
          type: 'cards',
          cols: 3,
          title: 'Six principles every screen was reviewed against',
          items: [
            { kicker: '01', title: 'Follow the tube', body: 'Every sample, order and result has a visible status and owner. If something is waiting, the screen says who for.' },
            { kicker: '02', title: 'Urgent before everything', body: 'Critical results, deteriorating patients and overdue samples rise to the top of every list, on every device.' },
            { kicker: '03', title: 'Explain, then show the number', body: 'Patients see what a result means before its value. Clinicians see the value and the change first.' },
            { kicker: '04', title: 'One record, many lenses', body: 'Patient, nurse, scientist and finance see the same record through role-based views, never copies.' },
            { kicker: '05', title: 'Calm by default', body: 'No promo noise above care tasks. Colour is for status, and tube colours always carry a label.' },
            { kicker: '06', title: 'Safe to act', body: 'Two-identifier checks, undo where possible, and every sensitive view logged with a reason.' },
          ],
        },
        { type: 'image', src: p('admin-ia'), alt: 'Admin console information architecture with role-based landing pages', caption: 'Admin IA: one set of modules, but each role lands on a different home and sees only what it should.' },
        {
          type: 'table',
          title: 'Role-based access in the console',
          head: ['Role', 'Can see', 'Cannot see'],
          rows: [
            ['Ward nurse', 'Patients on their own ward, results, pharmacy', 'Billing, lab configuration'],
            ['Biomedical scientist', 'Samples, QC, inventory', 'Patient demographics beyond the ID'],
            ['Pathologist', 'All lab data and patient history', 'Billing'],
            ['Front desk', 'Registry, outpatient queue, billing', 'Clinical notes'],
            ['Finance', 'Invoices, claims, prices', 'Clinical detail'],
          ],
          note: 'The app works the same way: one app, two modes, with the role decided at sign-in. Staff can still switch to their own patient profile.',
        },
      ],
    },
    {
      id: 'flows',
      label: 'Flows & wireframes',
      title: 'Seven flows before a single pixel',
      blocks: [
        {
          type: 'text',
          body: [
            'I mapped seven named flows across the three surfaces: booking a home blood test, tracking a sample and reading results, a consult with a prescription, family and a hospital stay, a phlebotomist’s home visit, a critical result on the ward, and admin approvals on the go. The admin pages got their own maps for overview, hospital, lab, imaging, business and platform.',
            'Then I wireframed the screens that carry the most risk: the command centre, the patient record, home collections and result validation in the console, and the home, slot picking, live tracking, report and staff scanning screens in the app.',
          ],
        },
        { type: 'image', src: p('flow-booking'), alt: 'User flow for booking a home blood test', caption: 'Flow 01: booking a home blood test, from landing to a paid 30-minute slot.' },
        { type: 'image', src: p('wireframe-validation'), alt: 'Greyscale wireframe of the result validation screen', caption: 'Wireframe of result validation: the screen where a scientist decides what is safe to release.' },
      ],
    },
    {
      id: 'system',
      label: 'Brand & system',
      title: 'A clinical colour code, turned into a brand',
      blocks: [
        {
          type: 'text',
          body: [
            'Real blood tube caps are colour-coded by what is inside them: lavender for a blood count, gold for chemistry, blue for clotting, grey for glucose. Lab staff already read that code all day. I made it Kestrel’s signature: in the logo, on specimen cards, in tube guides and in the patient app. The one rule is that a colour never appears without its label, so the code helps people who know it and never excludes people who don’t.',
            'The name comes from the kestrel, the bird that hovers perfectly still while watching everything below. The promise: we keep watch over your care.',
          ],
        },
        { type: 'image', src: p('tube-caps'), alt: 'Tube-cap colour system with six cap colours, additives and specimen cards', caption: 'The tube-cap system: six cap colours, each with its additive and typical tests, always paired with a label.' },
        { type: 'image', src: p('logo'), alt: 'Kestrel Health logo: three sample tubes rising like a skyline', caption: 'The mark is three sample tubes with coloured caps, rising like a skyline.' },
        {
          type: 'palette',
          items: [
            { name: 'Kestrel teal', hex: '#0B7A6F', role: 'Action · brand' },
            { name: 'Deep teal', hex: '#062C29', role: 'Dark surfaces' },
            { name: 'Ink', hex: '#0F1F20', role: 'Text' },
            { name: 'Canvas', hex: '#F3F6F5', role: 'Background' },
            { name: 'Peach signal', hex: '#FF8A5B', role: 'Live moments only' },
            { name: 'Mint wash', hex: '#E3F2EF', role: 'Brand subtle' },
          ],
        },
        {
          type: 'facts',
          title: 'Type and voice',
          items: [
            { k: 'Familjen Grotesk', v: 'Headlines with a warm, slightly irregular character. Human, not corporate.' },
            { k: 'Figtree', v: 'Interface text that stays legible at small sizes.' },
            { k: 'IBM Plex Mono', v: 'Only for identifiers people read back: sample IDs, NHS numbers, MRNs.' },
            { k: 'Reading age ~9', v: 'Patient copy explains medical terms on first use.' },
          ],
        },
        {
          type: 'compare',
          title: 'Calm for patients, precise for clinicians',
          head: ['We avoid', 'We say'],
          rows: [
            ['TSH elevated. Consult physician.', 'Your thyroid is working a little slowly. This is common and treatable. Book a short review within 2 weeks.'],
            ['Processing…', 'Your sample arrived at 09:02 and is being tested. Results by 12:00.'],
            ['Transaction failed (code 402).', 'We couldn’t take your payment. Your card wasn’t charged. Try again or use Apple Pay.'],
            ['URGENT!!!', 'Critical: K+ 6.9 mmol/L · A&E Majors 4 · acknowledge within 15 min'],
          ],
          note: 'Every status says when the next thing will happen.',
        },
        {
          type: 'stats',
          caption: 'The design system, counted from the file',
          items: [
            { value: '206', label: 'components, including the signature Tube, Specimen card and Wristband' },
            { value: '110', label: 'variables in three collections, with Light and Dark modes' },
            { value: '119', label: 'icons at 1.75 px stroke, with a matching medical set' },
            { value: '4.5:1', label: 'minimum text contrast in both Light and Dark' },
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
            'Ninety-four screens in total. The console is designed in light and dark, because labs and wards run around the clock. These are the ones that tell the story best.',
          ],
        },
        {
          type: 'spotlight',
          items: [
            { src: s('command'), title: 'Command centre', body: 'The clinical lead’s home: patients today, bed occupancy, A&E waits, a live sample pipeline, and three critical results waiting to be acknowledged. Urgent things sit at the top, with a button that does the job.' },
            { src: s('sample-tracking'), title: 'Sample tracking', body: 'Every tube with its patient, cap colour, location and temperature, plus a problems list for haemolysed or unlabelled samples. This is “follow the tube” for the lab.' },
            { src: s('result-validation'), title: 'Result validation', body: 'Scientists see values with their deltas and QC status before releasing anything, and normals can be auto-validated within rules.' },
            { src: s('w-home'), title: 'Website home', body: 'Book, track, understand: a slot finder on the first screen and a live “your sample” card that shows the promise before you book.' },
            { src: s('triage'), title: 'A&E triage', body: 'Patients grouped by Manchester Triage category, with the longest wait against target in each, so a breach is visible before it happens.' },
          ],
        },
        {
          type: 'gallery',
          items: [
            { src: s('home-collections'), title: 'Home collections dispatch' },
            { src: s('beds'), title: 'Beds and wards' },
            { src: s('patient-record'), title: 'Patient record' },
            { src: s('sign-off'), title: 'Report sign-off' },
            { src: s('qc'), title: 'Quality control' },
            { src: s('claims'), title: 'Insurance claims' },
            { src: s('command-dark'), title: 'Command centre · dark' },
            { src: s('w-test-detail'), title: 'Website · test detail' },
            { src: s('w-checkout'), title: 'Website · basket and checkout' },
            { src: s('w-pathology'), title: 'Website · pathology' },
            { src: s('w-reports'), title: 'Website · download reports' },
          ],
        },
        {
          type: 'phones',
          title: 'Mobile app · patient and staff modes',
          items: [
            { src: s('m-home'), title: 'Home · sample at the lab' },
            { src: s('m-slot'), title: 'Slot and address' },
            { src: s('m-track'), title: 'Track the phlebotomist' },
            { src: s('m-sample-journey'), title: 'Sample journey' },
            { src: s('m-report'), title: 'Report in plain English' },
            { src: s('m-hospital-stay'), title: 'My hospital stay' },
            { src: s('m-staff-id'), title: 'Staff · patient ID check' },
            { src: s('m-staff-scan'), title: 'Staff · scan tubes' },
            { src: s('m-staff-critical'), title: 'Staff · critical result' },
          ],
          caption: 'Staff mode is the part consumer health apps don’t have: routes, two-identifier checks, tube scanning and ward alerts, behind role-based sign-in.',
        },
      ],
    },
    {
      id: 'validate',
      label: 'Validate & handoff',
      title: 'How I would prove it works',
      blocks: [
        {
          type: 'table',
          title: 'Usability test plan (not run yet)',
          head: ['Task', 'Who', 'Pass criteria'],
          rows: [
            ['Book a home thyroid test for Monday morning', '6 patients', 'Done in under 2 minutes without help'],
            ['Find out where your sample is right now', '6 patients', 'Live status in two taps or fewer'],
            ['Explain your TSH result back to the moderator', '6 patients', 'Correct gist in their own words'],
            ['Acknowledge a critical potassium result', '4 nurses', 'Within 30 seconds, no wrong patient'],
            ['Validate a batch of thyroid results', '3 scientists', 'Spots the delta failure'],
            ['Collect and scan a sample at a home visit', '3 phlebotomists', 'Correct ID check and scan'],
          ],
          note: 'Recruitment includes two participants aged 70+ and one screen-reader user. Thresholds: task success ≥ 85%, SUS ≥ 75, zero wrong-patient errors.',
        },
        {
          type: 'stats',
          caption: 'What I would track after launch (targets)',
          items: [
            { value: '< 2 min', label: 'median booking time' },
            { value: '≥ 90%', label: 'of results opened in the app instead of by email' },
            { value: '−30%', label: 'calls to the patient team about results' },
            { value: '< 15 min', label: 'median time to acknowledge a critical result' },
          ],
        },
        {
          type: 'facts',
          title: 'Handoff notes for engineering',
          items: [
            { k: 'Tokens', v: 'Colour variables in Light and Dark, exported as CSS custom properties with semantic names only.' },
            { k: 'Spacing', v: '4-point scale; radius 8, 12, 20 and full.' },
            { k: 'Integrations', v: 'FHIR R4 (Patient, ServiceRequest, Specimen, Observation, DiagnosticReport), HL7 v2 for analysers, DICOMweb for imaging.' },
            { k: 'Security', v: 'NHS login for patients, smartcard or SSO for staff, and every record read audited.' },
            { k: 'States', v: 'Loading skeletons on every list, empty states with a next action, an offline queue for staff scans.' },
            { k: 'Safety', v: 'A clinical hazard log for result-release rules, to review with a clinical safety officer.' },
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
            { kicker: '01', title: 'Borrow the language users already speak', body: 'Lab staff already read tube-cap colours all day. Building the brand on that code made the UI feel familiar to experts and clear to patients.' },
            { kicker: '02', title: 'Staff are users too', body: 'Most health apps stop at the patient. Designing the phlebotomist and ward modes in the same app is what makes “follow the tube” actually true.' },
            { kicker: '03', title: 'Plans are not findings', body: 'I kept every persona, quote and number labelled as a hypothesis. It keeps the work honest, and it makes the next step obvious: run the study.' },
          ],
        },
        {
          type: 'text',
          body: [
            'Next, I would run the planned usability study, starting with the two tasks I am least sure about: explaining a TSH result back in plain words, and acknowledging a critical result on a busy ward. If either fails, the design changes before anything else does.',
          ],
        },
      ],
    },
  ],
}
