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
    title: 'The Empire Within',
    subtitle: 'A Seven-day, high-end Immersive Sanctuary for Emotional and Somatic Mastery.',
    shortDescription:
      'An invitation-only reset for leaders and creators who hold the great worlds in their hands but have no place to set it down.',
    description:
      'A restoration chamber of silence and somatic depth where you can finally stop holding up the sky and remember who you are when no one is watching.',

    duration: '7 days, 6 nights',
    location: 'Secluded sanctuary, Bali',
    groupSize: 'Invitation-only',
    nextSession: 'By invitation',

    price: {
      from: 'By invitation',
    },

    overview: [
      'The Empire Within is a Seven-day, high-end Immersive Sanctuary for Emotional and Somatic Mastery.',
      'This is an invitation-only reset for leaders and creators who hold the great worlds in their hands but have no place to set it down.',
      'A restoration chamber of silence and somatic depth where you can finally stop holding up the sky and remember who you are when no one is watching.',
      'Somatic rewiring, breath technologies, wealth frequency realignment and a raw space to rebuild the internal code that sustains the external power.',
      'The silent restoration for the human behind the power, in the most secluded sanctuary in Bali.',
      'When the mind rests, the empire rises.',
    ],

    pillars: [
      { label: 'Somatic rewiring', description: '' },
      { label: 'Breath technologies', description: '' },
      { label: 'Wealth frequency realignment', description: '' },
      { label: 'A raw space to rebuild the internal code that sustains the external power', description: '' },
    ],

    schedule: [
      { day: 'Daily Practice', title: 'Morning Breath & Somatic Flow', description: 'Daily Morning Breath & Somatic Flow Sessions to reset circadian rhythm & regulate nervous system.' },
      { day: 'Deep Dialogue', title: 'Patterns, Identity, Power', description: 'Deep Dialogue Modules: patterns, identity, power, emotional mastery.' },
      { day: 'Water Presence', title: 'WPA Meditations', description: 'WPA (Water Presence Awareness) meditations.' },
      { day: 'Consciousness', title: 'Tantra-based Techniques', description: 'Tantra-based Consciousness Techniques for dissolving mental noise.' },
      { day: 'Integration', title: 'Mystic Silence & Ceremony', description: 'Mystic Silence & Integration Ceremonies.' },
    ],

    includes: [
      'Daily Morning Breath & Somatic Flow Sessions.',
      'Deep Dialogue Modules for patterns, identity, power, and emotional mastery.',
      'WPA meditations, Tantra-based Consciousness Techniques, and Mystic Silence & Integration Ceremonies.',
    ],

    notIncluded: [],

    whoFor: [
      'Leaders and creators who hold great worlds in their hands.',
      'Those who need a place to set it down without performance.',
      'Those ready for emotional and somatic mastery in a secluded Bali sanctuary.',
      'Anyone who can give seven days to silence, somatic depth, and integration.',
    ],
    whoNotFor: [],

    images: [
      { label: 'Sanctuary', src: PHOTO.ecoRetreat, alt: 'Secluded sanctuary in Bali', aspectRatio: '4 / 5' },
      { label: 'Silence', src: PHOTO.ulaman, alt: 'Sanctuary space in Bali', aspectRatio: '4 / 5' },
      { label: 'Bali', src: PHOTO.lakeVilla, alt: 'Secluded Bali sanctuary', aspectRatio: '4 / 5' },
      { label: 'Restoration', src: PHOTO.spa, alt: 'Restoration space', aspectRatio: '1 / 1' },
      { label: 'Somatic Depth', src: PHOTO.skyVilla, alt: 'Somatic depth space', aspectRatio: '1 / 1' },
      { label: 'Integration', src: PHOTO.hotel, alt: 'Integration space', aspectRatio: '4 / 5' },
    ],
  },
];

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((r) => r.slug === slug);
}

export function getRetreatSlugs(): string[] {
  return retreats.map((r) => r.slug);
}
