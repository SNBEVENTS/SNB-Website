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
  testimonial?: { quote: string; name: string; role: string };
  hero: { src: string; alt: string; position?: string };
  gallery: { src: string; alt: string }[];
};

export const cases: CaseStudy[] = [
  {
    slug: "summer-garden-party",
    title: "In Bloom",
    client: "International tech company",
    category: "Company Event",
    activity: "Summer Garden Party",
    location: "Barcelona",
    guests: "450",
    intro:
      "A summer garden party for 450 employees of an international tech company, flown in from across Europe to spend a day together under the pines.",
    objectives: [
      "Bring a distributed European team together in one place, in person.",
      "Give people room to meet properly — not a programme to sit through.",
      "Carry one idea, In Bloom, across every corner of the venue.",
    ],
    description: [
      "Our client's teams work across Europe and rarely share a room. The brief was a single day that made 450 colleagues feel like one company, in a setting that did some of the work for us: a garden above Barcelona, pine trees, a lake, and the sea on the horizon.",
      "The theme, In Bloom, ran through everything. Oversized flowers lined the lawn, florals topped the bars and tables, pink lanterns and blossom garlands hung through the trees, and the signage pointed guests between the lake, the chill-out and the bars in the same palette.",
      "The garden became the heart of it. We built the bar and food stations across the lawn so there was no single queue and no single room — people moved, found each other, and kept moving. Games ran through the afternoon. An ice cream station sat on the terrace beside the lake, and rugs and cushions under the pines gave people somewhere to drop out of the sun.",
      "As the light went, the day turned into a party: music through the garden, the bars still running, and a group that had arrived as colleagues from a dozen cities leaving as one.",
    ],
    hero: {
      src: "/portfolio/summer-garden-party/garden-lanterns.webp",
      alt: "Pink lanterns and blossom garlands strung through the garden, with chill-out seating on the lawn",
      position: "object-[center_55%]",
    },
    gallery: [
      {
        src: "/portfolio/summer-garden-party/flower-installation.webp",
        alt: "Oversized fabric flowers installed along the lawn, with the sea beyond",
      },
      {
        src: "/portfolio/summer-garden-party/bloom-bar.webp",
        alt: "The garden bar dressed with florals under a Happy Bloom neon sign",
      },
      {
        src: "/portfolio/summer-garden-party/chill-out.webp",
        alt: "Rugs and cushions laid out under the pine trees as a chill-out area",
      },
      {
        src: "/portfolio/summer-garden-party/terrace-bar.webp",
        alt: "The long wooden bar on the terrace, set up and overlooking the coast",
      },
      {
        src: "/portfolio/summer-garden-party/wayfinding.webp",
        alt: "Pink signage pointing guests towards the toilets and the lake chill-out area",
      },
      {
        src: "/portfolio/summer-garden-party/florals.webp",
        alt: "A seasonal floral arrangement on a wooden table beside the pavilion",
      },
    ],
  },
  {
    slug: "vintage-summer-party",
    title: "The Owls' Villa",
    client: "International tech company",
    category: "Company Event",
    activity: "Summer Party",
    location: "Can Magí, Barcelona",
    guests: "180",
    intro:
      "A vintage-themed summer party for 180 employees at Can Magí, outside Barcelona — cocktails in the garden, dinner under the trees, and the party indoors after dark.",
    objectives: [
      "Give 180 colleagues one evening together, away from the office.",
      "Put the brand into the venue properly, not just on a welcome sign.",
      "Move the night through three settings so it never sat still.",
    ],
    description: [
      "Our client wanted a summer party for 180 people with a vintage theme, at Can Magí, a masia just outside Barcelona. One evening, one place, and a brand that had to be present without turning the night into a conference.",
      "So we built the branding into the setting. Their mark went up as a wall of red roses against the hedge, as a cut-out on the garden bar, and on illuminated cubes carrying their own lines. Guests arrived at a welcome station stocked with straw hats, paper parasols and sunglasses for the heat.",
      "The vintage theme ran through the furniture and the detail: a photo corner built around a green velvet sofa, a gramophone, a typewriter, stacked suitcases, vinyl and layered rugs. Chesterfields and low tables sat out on the lawn with deep red florals and candles.",
      "The evening moved in three acts. Cocktails in the garden while the sun was still up, then dinner outdoors on long banquet tables dressed in white linen, burgundy napkins and red anthuriums, and then indoors for the party once it was dark.",
    ],
    hero: {
      src: "/portfolio/vintage-summer-party/dinner-tables.jpg",
      alt: "Long outdoor banquet tables in white linen with burgundy napkins and red anthuriums, set on the lawn",
      position: "object-[center_60%]",
    },
    gallery: [
      {
        src: "/portfolio/vintage-summer-party/rose-wall.jpg",
        alt: "The client's mark built as a wall of red roses against a green hedge",
      },
      {
        src: "/portfolio/vintage-summer-party/welcome-station.jpg",
        alt: "Welcome station with straw hats, paper parasols and a branded arrival sign",
      },
      {
        src: "/portfolio/vintage-summer-party/vintage-corner.jpg",
        alt: "Vintage photo corner with a green velvet sofa, gramophone, typewriter and layered rugs",
      },
      {
        src: "/portfolio/vintage-summer-party/garden-bar.jpg",
        alt: "The garden bar in wood with the brand mark on the front and glassware set out",
      },
      {
        src: "/portfolio/vintage-summer-party/garden-lounge.jpg",
        alt: "Garden lounge seating with deep red florals and candles on a low wooden table",
      },
      {
        src: "/portfolio/vintage-summer-party/lightboxes.jpg",
        alt: "Illuminated cubes carrying the brand mark and slogans in the indoor party space",
      },
    ],
  },
  {
    slug: "hackathon-offsite-sitges",
    title: "Four Days in Sitges",
    client: "Junior.ai",
    category: "Offsite",
    activity: "4-Day Hackathon Offsite",
    location: "Sitges",
    guests: "50",
    intro:
      "A four-day hackathon offsite for 50 people in Sitges — villa, private chef, beach day, winery dinner and everything in between, run end to end.",
    objectives: [
      "Run four full days so their team could concentrate on the hackathon.",
      "Break up heads-down work with things worth looking forward to.",
      "Make it feel like Spain, not like a hotel conference floor.",
    ],
    description: [
      "Junior.ai brought fifty people to Sitges for a four-day hackathon. Our brief was everything around the work: where they stayed, what they ate, what they did when they stopped, and making sure none of it landed on their team to organise.",
      "The villa was the base. Guests arrived to a goodie bag, and from there the days were built around them — a private chef on site, yoga in the morning, games, and a salsa and sangria session in the afternoon.",
      "One day moved to the beach, with branded kit laid out for the group and beach tennis on the sand. Another evening left the villa entirely for dinner at a winery, with flamenco dancers between courses.",
      "A videographer stayed with the group across the four days, so they finished the week with the footage as well as the event.",
    ],
    testimonial: {
      quote:
        "They immediately understood the vision for the event and got to work straight away. Their knowledge of Barcelona and their extensive network of local vendors made the whole process incredibly smooth. As with most large events, there were plenty of last-minute changes and moving parts, but Babet took everything in her stride.",
      name: "Gemma Bryant",
      role: "Office Manager, Junior.ai",
    },
    hero: {
      src: "/portfolio/hackathon-offsite-sitges/pool-loungers.jpg",
      alt: "Loungers and white parasols set out around the villa pool",
      position: "object-[center_80%]",
    },
    gallery: [
      {
        src: "/portfolio/hackathon-offsite-sitges/beach-tennis.jpg",
        alt: "The group on the sand holding beach tennis rackets after a match",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/flamenco.jpg",
        alt: "A flamenco dancer performing between the tables at the winery dinner",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/winery-dinner.jpg",
        alt: "Round tables set for dinner in the winery's stone-vaulted room",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/villa-arrival.jpg",
        alt: "The villa facade with classic cars parked under the arches",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/willow-dinner.jpg",
        alt: "A long table laid for dinner under a willow tree in the villa garden",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/sangria-bar.jpg",
        alt: "A letterboard reading Classic and Cava Sangria on the garden bar",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/garden-tables.jpg",
        alt: "Tables set under the palms with festoon lights strung overhead",
      },
      {
        src: "/portfolio/hackathon-offsite-sitges/villa-pool.jpg",
        alt: "The villa pool surrounded by palms and planting",
      },
    ],
  },
  {
    slug: "fomo-hotel-takeover",
    title: "FOMO Hotel",
    client: "FOMO",
    category: "Brand Activation",
    activity: "4-Day Hotel Takeover",
    location: "Barcelona",
    guests: "50-100 a night",
    intro:
      "A four-day takeover of a 30-room boutique hotel during Barcelona's gaming fair: branded end to end, staffed by us, and a different event every night.",
    objectives: [
      "Turn a hotel into the client's own venue for the length of the fair.",
      "Give their customers a reason to come back each night, not just to the stand.",
      "Keep the team's days running so they could work the fair itself.",
    ],
    description: [
      "FOMO came to Barcelona for the gaming fair and took a 30-room boutique hotel for four days. Their team slept there, and every evening it became a venue for their customers, who were at the fair too.",
      "We branded the hotel throughout, from the neon over the door to the letters in the lobby and the signage upstairs, and put our own staff on reception in their colours. Guests arrived into the brand rather than into a hotel lobby.",
      "The days were logistics: transport to the fair and back, timed around the exhibition schedule, so the team could work rather than organise.",
      "The nights were three different events. A casino games night. A party night for a hundred people with headline DJs. And an Arabian night with belly dancers and shisha. Around fifty guests on the quieter evenings, a full house for the party.",
    ],
    hero: {
      src: "/portfolio/fomo-hotel-takeover/hotel-entrance.jpg",
      alt: "The hotel entrance at night under a neon FOMO Hotel sign",
      position: "object-[center_55%]",
    },
    gallery: [
      {
        src: "/portfolio/fomo-hotel-takeover/rooftop-letters.jpg",
        alt: "Illuminated brand letters beside the rooftop pool with the city lit up behind",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/dj.jpg",
        alt: "A DJ playing under pink light on the party night",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/casino-night.jpg",
        alt: "Guests playing cards at the casino games night",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/ice-luge.jpg",
        alt: "A drink poured through a branded ice luge lit in pink",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/balloons.jpg",
        alt: "Oversized branded balloons lit from within on the party floor",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/cube-sign.jpg",
        alt: "Illuminated brand cubes rigged above the party space",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/lobby-letters.webp",
        alt: "Freestanding light-up brand letters in the hotel lobby",
      },
      {
        src: "/portfolio/fomo-hotel-takeover/card-games.jpg",
        alt: "A branded card game set out on a cocktail table",
      },
    ],
  },
  {
    slug: "haircare-product-launch",
    title: "The Deluxe Prime Launch",
    client: "Truss Professional",
    category: "Product Launch",
    activity: "Product Presentation",
    location: "Barcelona",
    guests: "30",
    intro:
      "An intimate product launch for thirty hair stylists in Barcelona — a beautiful room dressed around a new Truss Professional range, in the brand's own blue and white.",
    objectives: [
      "Put a new range in front of the stylists who would go on to sell it.",
      "Dress a room that was already beautiful without competing with it.",
      "Keep the product the thing people looked at, at every height.",
    ],
    description: [
      "Truss Professional was launching a new range and wanted the people who matter most to see it first: thirty stylists, in one room, in Barcelona.",
      "The space came with its own character — whitewashed stone, soft arches, warm floors — so the job was to dress it rather than cover it. We uplit the stone, kept the palette to the brand's blue and white, and ran candlelight the length of the tables.",
      "Product sat on white plinths at three heights, so the range read as a set from across the room and in detail up close. Florals in blue roses, hydrangea and delphinium picked up the packaging and tied the displays to the tables.",
      "Every place was set with product, printed material and a name card, so the stylists could handle the range as the presentation ran rather than watch it from a distance.",
    ],
    hero: {
      src: "/portfolio/haircare-product-launch/room.jpg",
      alt: "The dressed room: a lit product plinth against whitewashed stone, with florals and candles along the table",
      position: "object-center",
    },
    gallery: [
      {
        src: "/portfolio/haircare-product-launch/plinths.jpg",
        alt: "Three white product plinths at stepped heights, dressed with florals and candles",
      },
      {
        src: "/portfolio/haircare-product-launch/florals.jpg",
        alt: "A blue and white floral arrangement beside candles and product on the table",
      },
      {
        src: "/portfolio/haircare-product-launch/place-setting.jpg",
        alt: "A place setting being laid with product, printed material and a name card",
      },
    ],
  },
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
