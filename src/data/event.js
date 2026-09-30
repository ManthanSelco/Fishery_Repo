/* Content from "Fisheries_Convening__Agenda.docx" (SELCO Foundation). Wording kept as in the agenda. */

export const EVENT = {
  kicker: 'National Convening',
  title: 'Catalysing Climate Action in Fisheries',
  subtitle: 'National Convening - Detailed Agenda',
  dateLabel: 'Wednesday, 07 October 2026',
  dateShort: '07 Oct 2026',
  day: '07',
  month: 'Oct',
  year: '2026',
  time: '9:00 – 17:15',
  venue: 'SELCO Office, Guwahati, Assam',
  organizer: 'SELCO Foundation',
  participantsCount: '40-50 Participants',
  // IST start / end, used for the countdown, the live "now" marker and the calendar file
  start: '2026-10-07T09:00:00+05:30',
  end: '2026-10-07T17:15:00+05:30',
  participants: [
    { label: 'Scientists and researchers', icon: '🔬' },
    { label: 'Government representatives', icon: '🏗' },
    { label: 'Farmers and aquaculture practitioners', icon: '🎣' },
    { label: 'Technology and solution providers', icon: 'bolt' },
    { label: 'NGOs and Civil Society Organizations', icon: '🔗' },
  ],
  purpose: [
    'The convening is intended to create a structured dialogue on the current and emerging needs of the aquaculture sector, with a particular focus on climate resilience and the challenges experienced at the field level. It will bring champion farmers, practitioners, researchers, government representatives, technology providers, and ecosystem actors to share their experience, perspectives, and priorities.',
    "The discussions will move from voices and experiences from the field to expert and state-level perspectives on the future of the sector. And then focusses on thematic discussions to identify and validate problem statements that emerged from the discussions. The learnings and priorities emerging from the convening will provide a pathway for shaping SELCO Foundation's next phase of engagement with aquaculture ecosystem.",
  ],
  // the arc described in the purpose paragraph
  flow: [
    { title: 'Voices from the field', text: 'Experiences of champion farmers and practitioners', icon: '🎣' },
    { title: 'Expert & state perspectives', text: 'The future of the sector, nationally and by state', icon: '📈' },
    { title: 'Thematic problem statements', text: 'Identified in working groups, validated in plenary', icon: '🎯' },
    { title: "SELCO's next phase", text: 'A pathway for engagement with the aquaculture ecosystem', icon: '🚀' },
  ],
};

/* Program structure (time table) with the detailed agenda points attached to each session. */
export const PROGRAM = [
  { start: '09:00', end: '09:45', time: '9:00 - 9:45', title: 'Registration', kind: 'break' },
  {
    start: '09:45', end: '10:30', time: '9:45 - 10:30', no: '1', title: 'Opening Session',
    focus: "Context for the convening and SELCO's engagement with the aquaculture sector, Self-Introduction by each Participant",
    points: [
      'Context and purpose of the national convening.',
      'Need for focused dialogue on climate resilience in aquaculture.',
      "Brief overview of SELCO Foundation's engagement with the sector.",
      'Self-Introduction by each Participant',
    ],
  },
  {
    start: '10:30', end: '11:00', time: '10:30 - 11:00', no: '1.1', title: 'Experience and Learning from the Field',
    focus: 'Biofloc, Aeration, Nursery and Hatchery systems, Fish drying, Shrimp and Crab interventions, including implementation experience, results and lessons',
    points: [
      "SELCO's experiences across Biofloc, Aeration, Nurseries and Hatcheries, Fish drying, Shrimp and Crab farming.",
      'Key interventions explored and implementation experiences.',
      'Challenges, learnings and gaps emerging from the field.',
    ],
  },
  {
    start: '11:00', end: '11:30', time: '11:00 - 11:30', no: '1.2', title: 'Voices from the field',
    subtitle: 'Champion farmers',
    focus: 'Champion farmers share their experiences, what has changed at the farm level and the challenges that remain',
    points: [
      'Experiences and changes observed at the farm level.',
      'Climate-related challenges: water stress, changing weather and temperature fluctuations.',
      'Adaptations, support and solutions needed by farmers.',
    ],
  },
  { start: '11:30', end: '12:00', time: '11:30 - 12:00', title: 'Tea break', kind: 'break' },
  {
    start: '12:00', end: '13:30', time: '12:00 - 13:30', no: '2', title: 'Thematic working groups',
    focus: 'Parallel discussions on Aquaculture across states; farm ponds and agriculture integration; and post-harvest, cold chain and retail',
    points: [
      'Context Setting for groups and guidelines for discussions',
      'Six parallel thematic discussions.',
      'Identify key challenges, gaps and priority areas within each theme.',
      'Explore opportunities for further attention, collaboration and action.',
    ],
  },
  { start: '13:30', end: '14:15', time: '13:30 - 14:15', title: 'Lunch Break', kind: 'break' },
  {
    start: '14:15', end: '14:45', time: '14:15 - 14:45', no: '2.1', title: 'Consolidation and Plenary',
    focus: 'Working-group moderators present key insights and proposed problem statements for discussion and validation',
    points: [
      'Presentation of key insights from the six working groups.',
      'Review and validation of proposed problem statements.',
      'Consolidation of common priorities emerging from the discussions.',
    ],
  },
  {
    start: '14:45', end: '15:30', time: '14:45 - 15:30', no: '3', title: 'Aquaculture Vision for India, 2036',
    focus: 'Expert perspectives followed by an open discussion on the future of the sector',
    points: [
      'Expert perspectives on emerging challenges and opportunities.',
      'Reflections on issues raised by farmers and field experiences.',
      'Discussion on priorities for the future of Indian aquaculture.',
    ],
  },
  {
    start: '15:30', end: '16:15', time: '15:30 - 16:15', no: '3.1', title: 'State-level aquaculture vision, 2036',
    focus: 'State departments and sector representatives discuss priorities and opportunities within their respective geographies',
    points: [
      'State-level priorities and opportunities.',
      'Perspectives from state departments and sector representatives.',
      'Pathways to translate the broader vision into state-level priorities.',
    ],
  },
  { start: '16:15', end: '16:45', time: '16:15 - 16:45', title: 'Tea break', kind: 'break' },
  {
    start: '16:45', end: '17:15', time: '16:45 - 17:15', no: '4', title: 'Closing',
    subtitle: 'Closing reflections and next steps',
    focus: 'Reflections and next steps',
    points: [
      'Key reflections and learnings from the convening.',
      'Priority areas emerging from the discussions.',
      'Next steps for continued engagement, collaboration, and follow-up.',
    ],
  },
];

export const OUTCOMES_INTRO = "The convening is expected to generate a set of tangible outputs that can inform SELCO's future engagement with the aquaculture sector.";

export const OUTCOMES = [
  { title: 'Validated problem statements', icon: '✅', text: 'A consolidated set of sector problem statements emerging from the four thematic working groups and validated through the plenary discussion.' },
  { title: 'State-wise Vision 2036', icon: '📈', text: 'An initial framework for a state-wise Aquaculture Vision towards 2036, capturing priorities and perspectives from participating states and institutions.' },
  { title: 'Ecosystem connections', icon: '🔗', text: 'Stronger connections across the ecosystem, particularly among farmers, technology providers, government departments, researchers, implementing organizations and financial institutions.' },
  { title: 'Technology partnerships', icon: 'bolt', text: 'New opportunities for technology and implementation of partnerships, including in areas where suitable technology providers or delivery models are currently limited.' },
  { title: 'Champion farmer network', icon: '🎣', text: 'A stronger network of champion farmers and practitioners who can contribute to future demonstrations, learning exchanges and program development.' },
  { title: 'Stakeholder network', icon: '📍', text: 'A stakeholder network for continued engagement, providing a foundation for subsequent thematic discussions, collaborations and program-level partnerships.' },
  { title: 'Portfolio direction', icon: '🎯', text: "Clearer direction for SELCO's future aquaculture portfolio, informed by sector priorities rather than being defined only through individual technology opportunities." },
];

export const FIELD_VISIT = {
  dateLabel: 'Thursday, 08 October 2026',
  dateShort: '08 Oct 2026',
  intro: 'The second day of the engagement will include visits to selected aquaculture sites in and around Guwahati, providing participants an opportunity to observe field level applications, interact directly with farmers and practitioners, and understand the practical realities of different aquaculture systems.',
  sites: [
    { name: 'Eastern Agro Farming', location: 'Bangalgaon', focus: 'Hatchery, integrated fish culture', icon: '🥚', link: { to: '/chapter/ch2', label: 'Chapter 2 · Fish Hatchery' } },
    { name: 'Biofloc Unit', location: 'Hajo, Kamrup District', focus: 'Solar powered aeration system for biofloc unit', icon: '🦠', link: { to: '/solar/sol_biofloc', label: 'Solar Biofloc System' } },
    { name: 'RAS Unit', location: 'Hajo, Kamrup District', focus: 'Solar powered aeration system for Recirculating Aquaculture System (RAS)', icon: '🔄', link: { to: '/solar/sol_ras', label: 'Solar RAS' } },
    { name: 'Field School, Kalong Kapili', location: 'Bagibari, Kamrup Metro', focus: 'Field school comprising end to end fisheries technologies', icon: '📖', link: { to: '/stories?open=cs1', label: 'Field story · Kalong Kapili' } },
    { name: 'Ornamental Fish Breeding Unit', location: 'Darrang', focus: 'Solar powered aeration system for ornamental fish breeding', icon: '🐠', link: { to: '/solar/sol_ornamental', label: 'Solar Ornamental Fish Breeding' } },
  ],
};
