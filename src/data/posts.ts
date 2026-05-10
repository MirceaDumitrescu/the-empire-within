/**
 * Blog posts data
 * Each entry maps to a generated page at /blog/[slug].
 * Add a new post by appending to the array.
 *
 * Body is a block array so layout stays consistent across posts:
 *   - paragraph: a single paragraph of prose
 *   - heading:   a section heading inside the body
 *   - quote:     a pull-quote (italic, indented)
 *   - list:      an unordered list
 *   - image:     a decorative image with optional caption
 */

export type PostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src?: string; alt?: string; caption?: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  body: PostBlock[];
  featured?: boolean;
  tags?: string[];
}

const PHOTO = {
  ecoRetreat: '/ulamas/ZjHaf0MTzAJOCdga_ulaman-eco-retreat.avif',
  spa: '/ulamas/ZjNFm0MTzAJOCfDW_best-spa-bali.avif',
  resortWide: '/ulamas/ZjNQMkMTzAJOCfIQ_best-resort-ulaman.avif',
  hotel: '/ulamas/ZjeookMTzAJOCiqx_hotel-indonesia.avif',
  resort: '/ulamas/ZjeopEMTzAJOCiqz_resorts-bali.avif',
  lakeVilla: '/ulamas/Zlbe8aWtHYXtT4Qk_lakevillabali.avif',
  ulaman: '/ulamas/ZotMNx5LeNNTw4r1_ulaman.avif',
  skyVilla: '/ulamas/Zpct2h5LeNNTxOAy_skyvilla.avif',
  honeymoon: '/ulamas/aaE6k8FoBIGEg502_honeymoon-package-bali.avif',
} as const;

export const posts: Post[] = [
  {
    slug: 'on-the-discipline-of-stillness',
    title: 'On the discipline of stillness',
    excerpt:
      'Why the slowest practices ask the most of us — and what changes when the body finally lets go of urgency.',
    category: 'Reflection',
    date: 'Spring 2026',
    readingTime: '6 min read',
    imageSrc: PHOTO.ecoRetreat,
    imageAlt: 'A still morning at the sanctuary',
    imageLabel: 'Reflection',
    featured: true,
    tags: ['Stillness', 'Practice', 'Nervous System'],
    body: [
      {
        type: 'paragraph',
        text: "It is the strangest thing to teach. People arrive at our retreats expecting intensity — a hard reset, a confrontation with whatever they have been avoiding, a week that breaks them open. What we offer instead is slowness. And slowness, it turns out, is the most demanding practice we know.",
      },
      {
        type: 'paragraph',
        text: "The first day, almost no one believes us. They have been moving fast for years — sometimes decades. Their nervous systems are calibrated to urgency. To stop is to feel exposed, then anxious, then occasionally panicked. The instinct is to fill the silence with something useful.",
      },
      {
        type: 'paragraph',
        text: "We watch this happen with care, and we hold the line. We do not give them more to do. By the second day the resistance softens. By the third, something else begins to surface — not the breakdown they feared, but a quieter recognition: they had been carrying something they could no longer feel.",
      },
      {
        type: 'quote',
        text: 'Stillness is not the absence of motion. It is the presence of attention without urgency.',
      },
      {
        type: 'heading',
        text: 'What slowness asks of you',
      },
      {
        type: 'paragraph',
        text: "The discipline of stillness is not passive. It asks you to stay with sensation when every part of you wants to move on. It asks you to notice your own breath without modifying it. It asks you to let the room be what it is — without arrangement, without performance, without exit.",
      },
      {
        type: 'list',
        items: [
          'A morning hour with no input. No phone, no reading, no planning.',
          'A meal eaten without conversation, slowly enough to taste.',
          'A walk where you do not know where you are going, and that is the point.',
          'A stretch of time, long enough to be uncomfortable, where you simply do not act.',
        ],
      },
      {
        type: 'paragraph',
        text: "These are not exotic practices. They are the practices our great-grandparents took for granted, before the day was sliced into transactions. We have lost the muscle memory for them. The retreats are, in part, a place to rebuild it.",
      },
      {
        type: 'heading',
        text: 'What changes',
      },
      {
        type: 'paragraph',
        text: "When the body finally lets go of urgency — and it does, given enough time and the right container — something underneath becomes visible. Not always pleasant. Often, what was being outrun. But also: clarity. The decisions that had been impossible become obvious. The relationships that had been confusing simplify. The next move becomes clear, and is usually smaller than expected.",
      },
      {
        type: 'paragraph',
        text: "This is the work. Not the doing. The undoing. The slow restoration of a body that has, perhaps for the first time in a long time, permission to set the rest down.",
      },
    ],
  },

  {
    slug: 'notes-from-the-water-temples',
    title: 'Notes from the water temples',
    excerpt:
      'Field notes on the ceremonies we hold in Bali, the elders who guide them, and the protocol that earns the right to step into the water.',
    category: 'Field Notes',
    date: 'Winter 2026',
    readingTime: '5 min read',
    imageSrc: PHOTO.lakeVilla,
    imageAlt: 'A water temple in Bali',
    imageLabel: 'Field Notes',
    tags: ['Ceremony', 'Bali', 'Tradition'],
    body: [
      {
        type: 'paragraph',
        text: "There is a way of arriving at a temple in Bali that has nothing to do with arriving anywhere else. You do not park, walk in, and look around. You do not photograph the priest. You enter slowly, in clothing that has been chosen for you, with a small offering you have learned how to make.",
      },
      {
        type: 'paragraph',
        text: "We have been hosting practitioners at the water temples for several years now, and almost nothing about the protocol has gotten easier — by design. The friction is the practice. The pause at the gate, the stillness while the priest decides whether the moment is right, the long quiet of the actual ceremony — these are not bugs. They are the entire point.",
      },
      {
        type: 'heading',
        text: 'On earning the right',
      },
      {
        type: 'paragraph',
        text: "We do not bring participants to the temples on day one. We have learned, slowly, that ceremony asks something of the body, and that something is presence. A nervous system still vibrating at the frequency of an inbox cannot meet the temple. It will be there physically and absent in every other way.",
      },
      {
        type: 'paragraph',
        text: "By day five — after silence, after sleep, after long meals and unstructured afternoons — the body is closer to ready. Not finished. Not transformed. But ready in the small, real way that matters: capable of being where it is.",
      },
      {
        type: 'quote',
        text: 'The temple does not change you. It shows you what you brought.',
        attribution: '— A Balinese elder we work with',
      },
      {
        type: 'heading',
        text: 'On the water itself',
      },
      {
        type: 'paragraph',
        text: "The springs are cold. They feel ancient because they are. Practitioners often describe a kind of clarity afterwards that is hard to put into words — and we have stopped asking them to. The work of integration happens in the days that follow, not in the moment.",
      },
      {
        type: 'paragraph',
        text: "What we do ask is that participants honour the lineage that made the experience possible. The elders who hold the rituals do so without spectacle. We follow their lead. We do not market them. We do not photograph the ceremony. We do not narrate it on social media. The discipline of the protocol is part of why it works.",
      },
    ],
  },

  {
    slug: 'why-we-keep-cohorts-small',
    title: 'Why we keep cohorts small',
    excerpt:
      'The case for tight containers — what intimate group size makes possible that scale never can.',
    category: 'Practice',
    date: 'Autumn 2025',
    readingTime: '4 min read',
    imageSrc: PHOTO.skyVilla,
    imageAlt: 'A small group setting at the sanctuary',
    imageLabel: 'Practice',
    tags: ['Cohort', 'Design', 'Practice'],
    body: [
      {
        type: 'paragraph',
        text: "Eight people. That is the largest cohort we will run. Most of our retreats are smaller. The maths is straightforward, and the maths is the point: every additional person is a multiplier on the dynamics in the room, and dynamics, more than content, are what determines whether the work lands.",
      },
      {
        type: 'paragraph',
        text: "There is a real economic argument for larger groups. We have been offered it many times. We decline, every time, for the same reason: above a certain size, the container becomes a venue. People are addressed rather than met. The week becomes good content with poor integration. We have seen this play out in other operators' work, and we have decided not to participate.",
      },
      {
        type: 'heading',
        text: 'What small makes possible',
      },
      {
        type: 'list',
        items: [
          'Genuine 1:1 attention from facilitators, not a token check-in.',
          'A group dynamic that can be tuned, not just managed.',
          'Real silence — the kind that is impossible in larger gatherings.',
          'Conversations that do not have to perform for an audience.',
          'Logistics that flex around the cohort, not the other way around.',
        ],
      },
      {
        type: 'paragraph',
        text: "The trade is real: at this size, our work cannot reach as many people, and the price reflects the operational reality. We have made our peace with this. The alternative — broader reach at the cost of depth — is a different business, and we are not running it.",
      },
      {
        type: 'quote',
        text: 'A small room is the only place the truth can stretch out.',
      },
      {
        type: 'paragraph',
        text: "If you have been to retreats before and felt invisible inside them, the difference here is not the content. It is the size of the room.",
      },
    ],
  },

  {
    slug: 'the-architecture-of-a-retreat-day',
    title: 'The architecture of a retreat day',
    excerpt:
      'A look at how a single day is shaped — from the morning silence through the evening close — and why every transition is intentional.',
    category: 'Practice',
    date: 'Summer 2025',
    readingTime: '7 min read',
    imageSrc: PHOTO.resortWide,
    imageAlt: 'A morning at the retreat',
    imageLabel: 'Practice',
    tags: ['Design', 'Daily Rhythm'],
    body: [
      {
        type: 'paragraph',
        text: "The schedule looks deceptively simple. A handful of sessions, meals, and built-in unstructured time. The first time we share the day with practitioners, almost everyone underestimates how full it will feel. By the third day, they understand: a slow day, done well, is more demanding than a busy one.",
      },
      {
        type: 'heading',
        text: 'Morning',
      },
      {
        type: 'paragraph',
        text: "We open with silence. The first ninety minutes of every day are wordless. No greeting at breakfast. No music. No phones. The rationale is operational, not mystical — we have noticed that any input within the first hour of waking determines the texture of the day. By preserving the space, we let practitioners arrive in their own bodies before the work begins.",
      },
      {
        type: 'paragraph',
        text: "Movement follows. A breathwork session, a slow somatic practice, sometimes a walk. Nothing strenuous. The morning is for grounding, not for breakthrough.",
      },
      {
        type: 'heading',
        text: 'Midday',
      },
      {
        type: 'paragraph',
        text: "The first meal is the centerpiece of the morning. Food is local, plant-forward, and unhurried. Conversation is welcome but not required. Many participants eat alone for the first few days. By midweek, the table is louder — and that softening of group silence is itself a marker that the work is taking.",
      },
      {
        type: 'paragraph',
        text: "Afternoons are reserved for either deep work — a longer session, a 1:1, or a ceremony — or for nothing. We protect the nothing aggressively. It is the part of the day most prone to being filled, and the part where the most integration happens.",
      },
      {
        type: 'quote',
        text: 'The empty hour is not empty. It is where everything you just did finds a place to land.',
      },
      {
        type: 'heading',
        text: 'Evening',
      },
      {
        type: 'paragraph',
        text: "The day closes deliberately. A shared meal, a held conversation if there is one to have, and an early night. We do not run programming after dinner. The body needs the dark hours to do its own work, and we leave it to them.",
      },
      {
        type: 'paragraph',
        text: "By the seventh day the architecture is invisible. Practitioners stop checking the schedule. They simply move through the day, and the day moves through them. That is what the structure is for — to become unnecessary by the end of the week.",
      },
    ],
  },

  {
    slug: 'power-peace-and-the-quiet-between',
    title: 'Power, peace, and the quiet between',
    excerpt:
      'A short essay on what we mean by deliberate power — and the kind of peace that has to be chosen, not waited for.',
    category: 'Reflection',
    date: 'Summer 2025',
    readingTime: '5 min read',
    imageSrc: PHOTO.hotel,
    imageAlt: 'A quiet detail at the sanctuary',
    imageLabel: 'Reflection',
    tags: ['Leadership', 'Power', 'Peace'],
    body: [
      {
        type: 'paragraph',
        text: "The leaders we work with do not lack power. They have it, often in considerable quantity, and most of them know how to wield it. What they often lack — and what brings them to us — is the kind of peace that cannot be purchased and does not arrive on its own.",
      },
      {
        type: 'paragraph',
        text: "We are careful about the word peace. It is overused, and it sounds soft. The peace we are talking about is not soft. It is structural. It is what allows a leader to make a hard decision without first becoming hard themselves. It is the difference between sustained authority and reactive control.",
      },
      {
        type: 'heading',
        text: 'Two kinds of power',
      },
      {
        type: 'paragraph',
        text: "There is power that comes from urgency, and power that comes from rest. The first is exhausting. It produces results, often impressive ones, and leaves the body that produced them in some state of debt. The second is rare. It produces results that compound rather than burn out the person making them.",
      },
      {
        type: 'paragraph',
        text: "Most leaders we meet are operating on the first kind. They have been doing so for years, sometimes decades. The cost is felt in the body before it is felt anywhere else. By the time it shows up in the work — in dropped attention, brittleness, decision fatigue — the debt is already large.",
      },
      {
        type: 'quote',
        text: 'Peace is not the reward for power. It is the foundation under it.',
      },
      {
        type: 'paragraph',
        text: "The work, then, is not to become less powerful. It is to power oneself differently — from a body that is regulated rather than recruited, from a mind that has had room to settle. From there, the same external life is possible, and considerably less expensive.",
      },
      {
        type: 'paragraph',
        text: "The retreats are not the answer to this. They are a place where the question can finally be asked without the meeting calendar interrupting it. What practitioners do with the answer is their own.",
      },
    ],
  },

  {
    slug: 'what-integration-actually-looks-like',
    title: 'What integration actually looks like',
    excerpt:
      'The work after the work — how participants carry the retreat home, and the practices that make insight stick.',
    category: 'Practice',
    date: 'Spring 2025',
    readingTime: '6 min read',
    imageSrc: PHOTO.spa,
    imageAlt: 'A practice space at the sanctuary',
    imageLabel: 'Practice',
    tags: ['Integration', 'Daily Practice'],
    body: [
      {
        type: 'paragraph',
        text: "The week ends. Practitioners go home. Within seventy-two hours, the inbox has reasserted itself, the meetings have resumed, and the question every facilitator quietly fears is unavoidable: was that real, or was it the location?",
      },
      {
        type: 'paragraph',
        text: "It is real, and we know how to keep it that way. But integration is not what people often imagine — a triumphant before-and-after, a clean break with the old life. It is much smaller than that, and much more steady.",
      },
      {
        type: 'heading',
        text: 'The first month',
      },
      {
        type: 'list',
        items: [
          'A short morning practice. Five minutes is enough; ten is generous. We send a written guide on the way home.',
          'One scheduled hour per week of unstructured time. No calls, no inputs. We are surprisingly direct about this — it is on the calendar.',
          'A single relationship to recalibrate. Not all of them. One.',
          'A weekly note, written by hand, on what the week asked of you. Read once, the following week. Then put away.',
        ],
      },
      {
        type: 'paragraph',
        text: "These four practices are intentionally modest. The most common reason integration fails is that practitioners try to do too much. They return inspired and overload themselves with new commitments. Within a month, none of them remain.",
      },
      {
        type: 'quote',
        text: 'Integration is not the application of insight. It is the slow re-shaping of the day around what you now know.',
      },
      {
        type: 'heading',
        text: 'The follow-up call',
      },
      {
        type: 'paragraph',
        text: "We schedule one private call with each participant six weeks after the retreat. Not for accountability — that has its place but not ours — but for re-calibration. By six weeks, the body has settled, and what remains is what was real. We talk about that, briefly, and adjust the practices.",
      },
      {
        type: 'paragraph',
        text: "What does not survive the follow-up call was not yours. What does, is. The week was an introduction. The work, properly speaking, begins after.",
      },
    ],
  },

  {
    slug: 'on-returning-again-and-again',
    title: 'On returning, again and again',
    excerpt:
      'A meditation on cycles — why some practitioners come back season after season, and what each return offers that the first cannot.',
    category: 'Reflection',
    date: 'Winter 2025',
    readingTime: '5 min read',
    imageSrc: PHOTO.ulaman,
    imageAlt: 'A returning view of the sanctuary',
    imageLabel: 'Reflection',
    tags: ['Returning', 'Cycles', 'Practice'],
    body: [
      {
        type: 'paragraph',
        text: "We did not design the retreats with returning in mind. The first cohort surprised us; several wrote within a few months asking when they could come back. We had not anticipated this, and we sat with it before answering. Was the work supposed to be done in a week? If they came back, what were we offering them that was not the same week again?",
      },
      {
        type: 'paragraph',
        text: "The answer, we have learned, is that the same week is never the same week. The body that arrives the second time is not the body that arrived the first. It carries the work it has done in between, and it brings new questions that did not exist before.",
      },
      {
        type: 'heading',
        text: 'What the first time gives you',
      },
      {
        type: 'paragraph',
        text: "The first retreat is, for most practitioners, a recognition. They had been carrying something, and the week shows them what. The work afterwards is largely the slow process of putting it down. This is enough, for many. They come once and that is the right answer.",
      },
      {
        type: 'heading',
        text: 'What returning gives you',
      },
      {
        type: 'paragraph',
        text: "The second time — and the third, and beyond — is something else. The recognition is no longer the project. The project is the practice itself, and how it has held up across the seasons of the year. Practitioners who return often arrive with a precision they did not have the first time. They know what they are here for.",
      },
      {
        type: 'quote',
        text: 'You do not come back to the same week. You come back as someone who is now able to receive what the week was always offering.',
      },
      {
        type: 'paragraph',
        text: "We have a small set of practitioners who come every year, sometimes twice. We do not promote this. We do not encourage it actively. It is, simply, what some lives need — a deliberate marker, set into the calendar, that says: here, again, I return to my own center. We hold the room for them when they ask.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
