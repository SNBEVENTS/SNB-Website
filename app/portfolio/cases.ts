export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: string;
  activity: string;
  location: string;
  guests: string;
  /** One line under the title on the case study page. */
  intro: string;
  /** What the event set out to do for the client. */
  objectives: string[];
  /** The narrative, one paragraph per entry. */
  description: string[];
  hero: { src: string; alt: string; position?: string };
  gallery: { src: string; alt: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "preply-in-bloom",
    title: "Preply in Bloom",
    client: "Preply",
    category: "Company Event",
    activity: "Summer Garden Party",
    location: "Barcelona",
    guests: "450",
    intro:
      "A summer garden party for 450 Preply employees, flown in from across Europe to spend a day together under the pines.",
    objectives: [
      "Bring a distributed European team together in one place, in person.",
      "Give people room to meet properly — not a programme to sit through.",
      "Carry one idea, Preply in Bloom, across every corner of the venue.",
    ],
    description: [
      "Preply's teams work across Europe and rarely share a room. The brief was a single day that made 450 colleagues feel like one company, in a setting that did some of the work for us: a garden above Barcelona, pine trees, a lake, and the sea on the horizon.",
      "The theme, Preply in Bloom, ran through everything. Oversized flowers lined the lawn, florals topped the bars and tables, pink lanterns and blossom garlands hung through the trees, and the signage pointed guests between the lake, the chill-out and the bars in the same palette.",
      "The garden became the heart of it. We built the bar and food stations across the lawn so there was no single queue and no single room — people moved, found each other, and kept moving. Games ran through the afternoon. An ice cream station sat on the terrace beside the lake, and rugs and cushions under the pines gave people somewhere to drop out of the sun.",
      "As the light went, the day turned into a party: music through the garden, the bars still running, and a group that had arrived as colleagues from a dozen cities leaving as one.",
    ],
    hero: {
      src: "/portfolio/preply-in-bloom/garden-lanterns.webp",
      alt: "Pink lanterns and blossom garlands strung through the garden, with chill-out seating on the lawn",
      position: "object-[center_55%]",
    },
    gallery: [
      {
        src: "/portfolio/preply-in-bloom/flower-installation.webp",
        alt: "Oversized fabric flowers installed along the lawn, with the sea beyond",
      },
      {
        src: "/portfolio/preply-in-bloom/bloom-bar.webp",
        alt: "The garden bar dressed with florals under a Happy Bloom neon sign",
      },
      {
        src: "/portfolio/preply-in-bloom/chill-out.webp",
        alt: "Rugs and cushions laid out under the pine trees as a chill-out area",
      },
      {
        src: "/portfolio/preply-in-bloom/terrace-bar.webp",
        alt: "The long wooden bar on the terrace, set up and overlooking the coast",
      },
      {
        src: "/portfolio/preply-in-bloom/wayfinding.webp",
        alt: "Pink signage pointing guests towards the toilets and the lake chill-out area",
      },
      {
        src: "/portfolio/preply-in-bloom/florals.webp",
        alt: "A seasonal floral arrangement on a wooden table beside the pavilion",
      },
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
