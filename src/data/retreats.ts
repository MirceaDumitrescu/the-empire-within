/**
 * Retreats data
 * Each entry maps to a generated page at /retreats/[slug]
 * Add a new retreat by appending to the array; Astro's getStaticPaths
 * will pick it up at build time.
 */

// Photos kept in public/ulamas; referenced as absolute URLs.
// Centralised here so retreats can reuse the same shots without copy-pasting paths.
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

export type RetreatCategory = 'Immersive Retreat' | 'Private Offering';

export interface Pillar {
  label: string;
  description: string;
}

export interface ScheduleDay {
  day: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  context?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RetreatImage {
  label: string;
  src?: string;
  alt?: string;
  aspectRatio?: string;
}

export interface Retreat {
  slug: string;
  category: RetreatCategory;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;

  duration: string;
  location: string;
  groupSize: string;
  nextSession: string;

  price: {
    from: string;
    unit?: string;
    note?: string;
  };

  overview: string[];
  pillars: Pillar[];
  schedule: ScheduleDay[];

  includes: string[];
  notIncluded: string[];

  whoFor: string[];
  whoNotFor: string[];

  testimonials?: Testimonial[];
  faqs?: FaqItem[];
  images?: RetreatImage[];

  ctaLabel?: string;
  ctaHref?: string;
}

export const retreats: Retreat[] = [
  // ─────────────────────────────────────────────────────────
  {
    slug: 'empire-within-bali',
    category: 'Immersive Retreat',
    title: 'The Empire Within — Bali',
    subtitle: 'Our flagship seven-day immersive sanctuary.',
    shortDescription:
      'Seven days in Bali for emotional and somatic mastery — silence, ceremony, and the slow work of returning to center.',
    description:
      'A seven-day immersive sanctuary held in Bali. The flagship arc that the rest of our practice grew from — designed as a restoration chamber for leaders and creators ready to reclaim their own center.',

    duration: '7 days, 6 nights',
    location: 'Ubud, Bali',
    groupSize: 'Up to 8 practitioners',
    nextSession: 'Spring 2027 — limited availability',

    price: {
      from: '$8,500 USD',
      unit: 'per practitioner',
      note: 'Includes private accommodation, meals, sessions, ceremonies, and integration support.',
    },

    overview: [
      'The Empire Within is a seven-day immersive sanctuary built around a single intention: to return power to the body. The week unfolds slowly and on purpose. Silence is built into each day. Ceremony is held with local elders. Pacing is set by the nervous system, not the clock.',
      'Cohorts are kept small — never more than eight — so that the work can be tailored, the discretion preserved, and the conversation real. This is not a wellness package. It is a contained week of work, hospitality, and quiet, in one of the most considered places on earth.',
      'The arc draws from somatic intelligence, breathwork, the ceremonial heritage of the Balinese water temples, and a long study of how external power is sustained — or undone — by what is happening internally. By day seven, what felt heavy at arrival has been met with deliberate care.',
    ],

    pillars: [
      { label: 'Stillness', description: 'Silence and sensory centering as the foundation.' },
      { label: 'Somatic Mastery', description: 'Body-led work to regulate, release, and rebuild.' },
      { label: 'Breathwork', description: 'Conscious breath as ritual, used throughout the week.' },
      { label: 'Ceremony', description: 'Held space, including the water temple ritual on day five.' },
      { label: 'Embodiment', description: 'Power that is felt, not performed.' },
      { label: 'Integration', description: 'Translating insight into the textures of an everyday life.' },
    ],

    schedule: [
      { day: 'Day One', title: 'Arrival & Welcome', description: 'Private transfer, settling into the sanctuary, and an opening circle to set intention for the week.' },
      { day: 'Day Two', title: 'Slowing Down', description: 'Silence in the morning, somatic groundwork in the afternoon, and a gentle group meal in the evening.' },
      { day: 'Day Three', title: 'Breath & Body', description: 'Extended breathwork session, integration in pairs, and unstructured time built into the afternoon.' },
      { day: 'Day Four', title: 'Depth', description: 'A longer 1:1 session with the lead facilitator, followed by quiet hours and a curated dinner.' },
      { day: 'Day Five', title: 'Water Temple Ceremony', description: 'Travel to the water temple, ceremony with local elders, and a held return to the sanctuary.' },
      { day: 'Day Six', title: 'Integration', description: 'Reflection, movement, and the practical work of bringing the week home.' },
      { day: 'Day Seven', title: 'Closing & Departure', description: 'Closing circle, late check-out, and a pre-arranged departure.' },
    ],

    includes: [
      'Private en-suite accommodation at the sanctuary for six nights.',
      'All meals, prepared with local, seasonal ingredients.',
      'Daily group sessions and at least two extended 1:1 sessions.',
      'Water temple ceremony with local elders (offerings included).',
      'All transfers within the retreat, including airport pick-up and drop-off.',
      'Pre-arrival call and post-retreat integration call.',
      'Curated take-home materials — recordings, journaling prompts, and reading.',
    ],

    notIncluded: [
      'International or domestic flights to and from Bali.',
      'Travel and medical insurance (required for participation).',
      'Visas, vaccinations, and any personal medical care.',
      'Spa treatments, massages, and personal expenses.',
      'Optional excursions outside the retreat schedule.',
    ],

    whoFor: [
      'Leaders, founders, and creators carrying consequential decisions.',
      'Long-time practitioners ready for a deeper, contained container.',
      'Those who already know intensity is not the same as depth.',
      'Anyone who can give the work a full week of undivided attention.',
    ],
    whoNotFor: [
      'Those looking for a luxury vacation rather than active inner work.',
      'Those unable to step away from work for the duration.',
      'Anyone seeking medical or psychiatric treatment — this is wellness, not care.',
    ],

    testimonials: [
      {
        quote:
          'I came expecting to be pushed. Instead I was met with a slowness I had forgotten was possible — and that slowness changed something I could not name on my own.',
        attribution: '— A founder',
        context: 'Spring cohort, prior season',
      },
      {
        quote:
          'The water temple ceremony alone would have been enough. The rest of the week was simply the careful preparation for it.',
        attribution: '— A long-time practitioner',
        context: 'Returning, second season',
      },
    ],

    faqs: [
      { question: 'Is this retreat suitable for beginners?', answer: 'It can be, but the pre-arrival call is where we decide. Our cohorts blend newer and seasoned practitioners; we will not place you in a container that does not fit.' },
      { question: 'How private are the rooms?', answer: 'Each practitioner has private en-suite accommodation. Couples may request a shared room when both are participating; otherwise rooms are single-occupancy.' },
      { question: 'What is the application process?', answer: 'Begin with the application form. We respond within a few days, set a discovery call, and confirm the booking only after that conversation.' },
      { question: 'Are there any dietary restrictions you cannot accommodate?', answer: 'Our kitchen is plant-forward and accommodates most allergies and preferences. Tell us in advance and we will plan around you.' },
    ],

    images: [
      { label: 'Sanctuary', src: PHOTO.ecoRetreat, alt: 'Sanctuary grounds at the retreat in Bali', aspectRatio: '4 / 5' },
      { label: 'Ceremony', src: PHOTO.ulaman, alt: 'Ceremonial space within the property', aspectRatio: '4 / 5' },
      { label: 'Landscape', src: PHOTO.lakeVilla, alt: 'Water-side villa in Bali', aspectRatio: '4 / 5' },
      { label: 'Detail', src: PHOTO.spa, alt: 'Spa interior detail', aspectRatio: '1 / 1' },
      { label: 'Practice', src: PHOTO.skyVilla, alt: 'Elevated villa practice space', aspectRatio: '1 / 1' },
      { label: 'Water Temple', src: PHOTO.hotel, alt: 'Architectural detail near the water temple', aspectRatio: '4 / 5' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    slug: 'somatic-mastery-intensive',
    category: 'Immersive Retreat',
    title: 'Somatic Mastery Intensive',
    subtitle: 'A focused five-day container for deep somatic work.',
    shortDescription:
      'Five days of body-led work in a small, contained cohort — somatic intelligence, breathwork, and integration.',
    description:
      'A five-day intensive for practitioners who want concentrated somatic work without the wider retreat arc. Smaller cohort, more 1:1 time, less ceremony — purpose-built for depth.',

    duration: '5 days, 4 nights',
    location: 'Ubud, Bali',
    groupSize: 'Up to 6 practitioners',
    nextSession: 'Autumn 2026 — applications open',

    price: {
      from: '$5,800 USD',
      unit: 'per practitioner',
      note: 'Includes accommodation, meals, and all sessions.',
    },

    overview: [
      'The Somatic Mastery Intensive is a focused container — five days, six practitioners, two extended 1:1 sessions, and the somatic groundwork that the longer retreat builds on.',
      'It is built for those who want the body-led work without the broader ceremonial arc. The intensity is the same; the surface area is smaller. By design.',
    ],

    pillars: [
      { label: 'Somatic Mastery', description: 'The core focus of the week.' },
      { label: 'Breathwork', description: 'Daily sessions, used as a regulating instrument.' },
      { label: 'Embodiment', description: 'Translating somatic insight into how you move.' },
      { label: 'Integration', description: 'Tools for taking the work home.' },
    ],

    schedule: [
      { day: 'Day One', title: 'Arrival & Opening', description: 'Settling in, an opening circle, and an evening welcome meal.' },
      { day: 'Day Two', title: 'Foundations', description: 'Morning silence, somatic groundwork, and a 1:1 session in the afternoon.' },
      { day: 'Day Three', title: 'Depth', description: 'Extended group somatic work, breathwork, and unstructured time.' },
      { day: 'Day Four', title: 'Integration', description: 'A second 1:1 session, reflection, and group close.' },
      { day: 'Day Five', title: 'Closing & Departure', description: 'Morning practice, closing circle, and pre-arranged departure.' },
    ],

    includes: [
      'Private en-suite accommodation for four nights.',
      'All meals.',
      'Daily group somatic sessions and two 1:1 sessions.',
      'Transfers within the retreat.',
      'Pre-arrival and integration calls.',
    ],
    notIncluded: [
      'International or domestic flights.',
      'Travel and medical insurance.',
      'Visas and personal medical care.',
      'Optional excursions and spa treatments.',
    ],

    whoFor: [
      'Practitioners who want focused somatic work in a small group.',
      'Those returning for a second or third visit and wanting depth, not arc.',
      'Bodyworkers, coaches, and facilitators in their own training.',
    ],
    whoNotFor: [
      'Those looking for the full ceremonial week — see The Empire Within — Bali.',
      'Anyone seeking medical or psychiatric treatment.',
    ],

    faqs: [
      { question: 'How is this different from the seven-day retreat?', answer: 'The Intensive is shorter, smaller, and focused tightly on somatic work. There is no water temple ceremony, and the group practice is more concentrated.' },
      { question: 'Can I extend my stay before or after?', answer: 'Yes. We can recommend nearby accommodation and arrange transfers, though personal stays are not part of the retreat fee.' },
    ],

    images: [
      { label: 'Studio', src: PHOTO.spa, alt: 'Spa studio interior', aspectRatio: '4 / 5' },
      { label: 'Practice', src: PHOTO.ulaman, alt: 'Practice space at the retreat', aspectRatio: '4 / 5' },
      { label: 'Sanctuary', src: PHOTO.resort, alt: 'Sanctuary grounds in Bali', aspectRatio: '4 / 5' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    slug: 'water-temple-journey',
    category: 'Immersive Retreat',
    title: 'Water Temple Journey',
    subtitle: 'Four days held in ritual, water, and quiet.',
    shortDescription:
      'A four-day ceremonial arc anchored by the Balinese water temples and the ocean — rite, return, and reset.',
    description:
      'A focused four-day arc for those drawn specifically to the ceremonial side of our work. The water temples, the ocean, and the slow ritual of return.',

    duration: '4 days, 3 nights',
    location: 'East Bali',
    groupSize: 'Up to 12 practitioners',
    nextSession: 'Summer 2027 — early access for past participants',

    price: {
      from: '$4,200 USD',
      unit: 'per practitioner',
      note: 'Includes accommodation, meals, ceremony offerings, and transport.',
    },

    overview: [
      'The Water Temple Journey is an introduction to the ceremonial heritage of Bali — held with local elders who have invited us to bring practitioners into their tradition with full context and reverence.',
      'It is the shortest of our retreats, and the most ritually anchored. Days are paced around water — temple, ocean, river — with practice and integration in between.',
    ],

    pillars: [
      { label: 'Ceremony', description: 'The water temple at the heart of the journey.' },
      { label: 'Stillness', description: 'Silence and centering between rites.' },
      { label: 'Embodiment', description: 'Receiving ceremony in the body, not the mind alone.' },
    ],

    schedule: [
      { day: 'Day One', title: 'Arrival & Preparation', description: 'Travel to East Bali, opening circle, and ritual preparation in the evening.' },
      { day: 'Day Two', title: 'The Water Temple', description: 'Ceremony with local elders, including blessings, offerings, and immersion.' },
      { day: 'Day Three', title: 'Ocean & Integration', description: 'Time at the ocean, integration practice, and a held closing meal.' },
      { day: 'Day Four', title: 'Return', description: 'Morning practice, closing circle, and pre-arranged departure.' },
    ],

    includes: [
      'Shared or private accommodation for three nights (specify on application).',
      'All meals.',
      'Water temple ceremony (offerings included).',
      'Transport within the retreat.',
      'Pre-arrival briefing on the cultural context of the rituals.',
    ],
    notIncluded: [
      'International flights and Bali domestic transfers outside the retreat.',
      'Travel and medical insurance.',
      'Personal expenses and optional treatments.',
    ],

    whoFor: [
      'Those drawn to the ceremonial side of the practice.',
      'Returning practitioners ready for a focused ritual arc.',
      'Anyone who wants a shorter, more accessible introduction to our work.',
    ],
    whoNotFor: [
      'Those seeking primarily somatic or 1:1 work — the Intensive or Empire Within is a better fit.',
      'Anyone uncomfortable with cultural ritual and ceremonial protocol.',
    ],

    faqs: [
      { question: 'Do I need to follow a specific tradition to take part?', answer: 'No. Participants come from many traditions and from none. What is required is reverence and a willingness to follow the protocol set by our local elders.' },
      { question: 'What is the dress code for the ceremony?', answer: 'We provide ceremonial wear and a briefing in advance. There is nothing to source on your end.' },
    ],

    images: [
      { label: 'Water Temple', src: PHOTO.lakeVilla, alt: 'Water temple villa in Bali', aspectRatio: '4 / 5' },
      { label: 'Ocean', src: PHOTO.ecoRetreat, alt: 'Eco-retreat landscape near the ocean', aspectRatio: '4 / 5' },
      { label: 'Ritual', src: PHOTO.hotel, alt: 'Ritual setting at the retreat', aspectRatio: '4 / 5' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    slug: 'couples-sanctuary',
    category: 'Private Offering',
    title: "Couple's Sanctuary",
    subtitle: 'A shared private container for two.',
    shortDescription:
      'A private five-day container for one couple — the sanctuary, the practice, and the held space, shared.',
    description:
      'A private retreat designed for one couple — the same arc as the immersive week, recalibrated for two people meeting the work together.',

    duration: '5 days, 4 nights',
    location: 'Bali (private villa)',
    groupSize: 'One couple',
    nextSession: 'Bookable year-round, by application',

    price: {
      from: '$14,000 USD',
      unit: 'per couple',
      note: 'Includes private villa, meals, sessions, and transfers.',
    },

    overview: [
      "The Couple's Sanctuary is a fully private container for two. It is the shape of our group work, recalibrated — paced for two nervous systems and tuned to the dynamic between you.",
      'It is not couples therapy and we are not therapists. It is somatic and ritual work that two people can move through together, with the same architecture, discretion, and care as our other private offerings.',
    ],

    pillars: [
      { label: 'Stillness', description: 'A foundation of slowness for both of you.' },
      { label: 'Somatic Mastery', description: 'Body-led work, taken individually and together.' },
      { label: 'Embodiment', description: 'Tuning the dynamic between you to something less reactive.' },
      { label: 'Integration', description: 'Carrying the week into life together.' },
    ],

    schedule: [
      { day: 'Day One', title: 'Arrival & Settling', description: 'Private transfer to the villa, an opening conversation, and a quiet welcome meal.' },
      { day: 'Day Two', title: 'Individual Work', description: 'Separate 1:1 sessions and unstructured solo time.' },
      { day: 'Day Three', title: 'Together', description: 'Shared somatic work and an evening practice in the villa.' },
      { day: 'Day Four', title: 'Depth', description: 'A longer joint session and an extended quiet afternoon.' },
      { day: 'Day Five', title: 'Closing & Departure', description: 'Closing circle, a final meal, and pre-arranged departure.' },
    ],

    includes: [
      'Private villa stay for four nights, exclusively yours.',
      'All meals.',
      'Daily 1:1 and joint sessions.',
      'Optional water temple ceremony as an add-on.',
      'Pre-arrival and integration calls (both joint and individual).',
    ],
    notIncluded: [
      'International or domestic flights.',
      'Travel and medical insurance.',
      'Personal expenses and optional excursions.',
      'Add-ons such as private chef-led tasting menus.',
    ],

    whoFor: [
      'Couples in seasons of transition who want a contained reset.',
      'Couples already in good health who want depth, not crisis intervention.',
      'Couples who can give the work a full week away from work.',
    ],
    whoNotFor: [
      'Couples in active conflict requiring therapy — please seek a qualified couples therapist first.',
      'Anyone seeking a vacation framed as a retreat.',
    ],

    faqs: [
      { question: 'Is this couples therapy?', answer: 'No. This is somatic and ritual retreat work designed for two. It can be a powerful complement to therapy but is not a substitute for it.' },
      { question: 'Can same-sex couples book the Sanctuary?', answer: 'Yes. The container is for any committed couple regardless of orientation, gender, or marital status.' },
    ],

    images: [
      { label: 'Villa', src: PHOTO.honeymoon, alt: 'Private villa in Bali', aspectRatio: '4 / 5' },
      { label: 'Garden', src: PHOTO.skyVilla, alt: 'Elevated villa with garden views', aspectRatio: '4 / 5' },
      { label: 'Practice Room', src: PHOTO.lakeVilla, alt: 'Lake-side villa practice room', aspectRatio: '4 / 5' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    slug: 'leadership-retreats',
    category: 'Private Offering',
    title: 'Leadership Retreats',
    subtitle: 'Small cohorts for founders and executive teams.',
    shortDescription:
      'A four-day private cohort retreat for founders, leadership teams, and small invited groups — held in Bali or at a chosen location.',
    description:
      'A four-day cohort retreat designed for founders and executive teams. Closed group, custom arc, full discretion. Held in Bali or at a location of your choice.',

    duration: '4 days, 3 nights',
    location: 'Bali, or chosen location',
    groupSize: '4–6 leaders, by invitation',
    nextSession: 'Custom dates by inquiry',

    price: {
      from: 'By application',
      note: 'Pricing reflects location, group size, and customisation. Quoted after a discovery call.',
    },

    overview: [
      'The Leadership Retreat is a closed-group container for teams that already work together — co-founders, executive groups, or small invited cohorts. The arc is built around the shared decisions and dynamics actually present in the room.',
      'Confidentiality is total. We do not name participants or use the work for case studies, marketing, or referrals.',
    ],

    pillars: [
      { label: 'Embodiment', description: 'Power that is felt, not performed — for those who lead.' },
      { label: 'Somatic Mastery', description: 'Regulating the nervous system under sustained pressure.' },
      { label: 'Stillness', description: 'A pace that allows real conversation rather than reaction.' },
      { label: 'Integration', description: 'Translating insight back into how you operate as a team.' },
    ],

    schedule: [
      { day: 'Day One', title: 'Arrival & Framing', description: 'Settling in, scoping the working questions for the cohort, and a held opening dinner.' },
      { day: 'Day Two', title: 'Individual Work', description: '1:1 sessions for each leader; cohort somatic groundwork in the afternoon.' },
      { day: 'Day Three', title: 'The Hard Conversation', description: 'A long, facilitated session on the dynamic in the room. Often the centerpiece of the week.' },
      { day: 'Day Four', title: 'Integration & Departure', description: 'Closing circle, written commitments, and a pre-arranged departure.' },
    ],

    includes: [
      'Custom-built arc shaped to the cohort, after a scoping call.',
      'Private venue or villa, exclusively for the group.',
      'All meals.',
      'Individual and group sessions throughout.',
      'Pre-retreat scoping call and post-retreat follow-up.',
      'Take-home written summary of agreements (optional).',
    ],
    notIncluded: [
      'Travel to and from the chosen location.',
      'Travel and medical insurance.',
      'Personal expenses.',
    ],

    whoFor: [
      'Co-founder pairs and small executive teams in seasons of consequential change.',
      'Boards or partner groups that need to make a decision they keep avoiding.',
      'Investor cohorts that want a non-operational space to talk straight.',
    ],
    whoNotFor: [
      'Off-sites that want activities and entertainment as the main thing.',
      'Groups not aligned on doing real work together.',
    ],

    faqs: [
      { question: 'Can the retreat be held outside Bali?', answer: 'Yes. We have hosted leadership retreats in selected locations globally. Logistics and pricing are scoped after a discovery call.' },
      { question: 'How is confidentiality handled?', answer: 'Total. We do not name participants publicly, use the work for case studies, or share testimonials with identifying detail.' },
    ],

    images: [
      { label: 'Venue', src: PHOTO.resortWide, alt: 'Resort venue used for leadership cohorts', aspectRatio: '4 / 5' },
      { label: 'Dining', src: PHOTO.resort, alt: 'Private dining setting', aspectRatio: '4 / 5' },
      { label: 'Practice', src: PHOTO.ulaman, alt: 'Practice grounds', aspectRatio: '4 / 5' },
    ],
  },
];

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((r) => r.slug === slug);
}

export function getRetreatSlugs(): string[] {
  return retreats.map((r) => r.slug);
}
