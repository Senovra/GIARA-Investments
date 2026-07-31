export interface DestinationSectionContent {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
}

export type DestinationSlug = "dubai" | "colombo" | "maldives";
export type SectionSlug =
  | "overview"
  | "accommodation"
  | "dining"
  | "wellness"
  | "events"
  | "experiences"
  | "offers";

type ContentMap = Record<DestinationSlug, Record<SectionSlug, DestinationSectionContent>>;

export const destinationContent: ContentMap = {
  dubai: {
    overview: {
      title: "GIARA Dubai",
      description:
        "Set within Dubai's most considered address, GIARA Dubai brings a sense of stillness to a city defined by momentum. Every space is composed with restraint — a quiet counterpoint to the skyline beyond.",
      image: "https://images.unsplash.com/photo-1748373448914-1d7f882700e2?q=80&w=2400",
      imageAlt: "Burj Khalifa towering over the Dubai skyline",
      secondaryImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600",
      secondaryImageAlt: "GIARA Dubai lobby interior",
    },
    accommodation: {
      title: "Residences & Suites",
      description:
        "Each residence is composed with natural materials and unhurried proportions, offering a sense of calm rarely found at this scale.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1600",
      imageAlt: "GIARA Dubai suite interior",
    },
    dining: {
      title: "Dining",
      description:
        "A single, considered dining room shaped around seasonal ingredients and quiet hospitality — nothing performative, nothing rushed.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600",
      imageAlt: "GIARA Dubai dining room",
    },
    wellness: {
      title: "Wellness",
      description:
        "A wellness floor built around stillness — treatment rooms, a heated pool, and spaces designed to slow the pace of the day.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600",
      imageAlt: "GIARA Dubai wellness spa",
    },
    events: {
      title: "Events",
      description:
        "Private spaces for gatherings of quiet significance, each shaped by natural light and considered restraint.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
      imageAlt: "GIARA Dubai event space",
    },
    experiences: {
      title: "Experiences",
      description:
        "Curated moments beyond the property itself — from private city tours to quiet cultural excursions across Dubai.",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1600",
      imageAlt: "Dubai cultural experience",
    },
    offers: {
      title: "Offers",
      description:
        "Seasonal offers and considered packages — enquire directly with our team for current availability.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600",
      imageAlt: "GIARA Dubai offer",
    },
  },
  colombo: {
    overview: {
      title: "GIARA Colombo",
      description:
        "Overlooking the harbour of Colombo Port City, GIARA Colombo brings an unhurried elegance to Sri Lanka's evolving skyline — composed, coastal, quietly confident.",
      image: "https://images.pexels.com/photos/30379319/pexels-photo-30379319.jpeg",
      imageAlt: "Colombo city skyline",
      secondaryImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600",
      secondaryImageAlt: "GIARA Colombo lobby interior",
    },
    accommodation: {
      title: "Residences & Suites",
      description:
        "Coastal light and considered materials define each residence — a quiet retreat above the harbour.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600",
      imageAlt: "GIARA Colombo suite interior",
    },
    dining: {
      title: "Dining",
      description:
        "A dining room shaped by coastal ingredients and calm hospitality, overlooking Colombo's harbour.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1600",
      imageAlt: "GIARA Colombo dining room",
    },
    wellness: {
      title: "Wellness",
      description:
        "A wellness space built around the rhythm of the coast — treatment rooms, a pool, and quiet spaces to slow down.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600",
      imageAlt: "GIARA Colombo wellness spa",
    },
    events: {
      title: "Events",
      description:
        "Private venues shaped by harbour views, suited to gatherings of quiet significance.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
      imageAlt: "GIARA Colombo event space",
    },
    experiences: {
      title: "Experiences",
      description:
        "Curated experiences across Colombo — from private harbour tours to quiet cultural excursions.",
      image: "https://images.unsplash.com/photo-1544258299-673aa5a4d21f?q=80&w=1600",
      imageAlt: "Colombo cultural experience",
    },
    offers: {
      title: "Offers",
      description:
        "Seasonal offers and considered packages — enquire directly with our team for current availability.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600",
      imageAlt: "GIARA Colombo offer",
    },
  },
  maldives: {
    overview: {
      title: "GIARA Maldives",
      description:
        "An overwater sanctuary in the Maldives, GIARA Maldives is defined by restraint, space, and the rhythm of the tide — luxury measured in stillness, not scale.",
      image: "https://images.pexels.com/photos/28843980/pexels-photo-28843980.jpeg",
      imageAlt: "Overwater villa in the Maldives",
      secondaryImage: "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1600",
      secondaryImageAlt: "GIARA Maldives villa interior",
    },
    accommodation: {
      title: "Residences & Villas",
      description:
        "Overwater villas composed of natural materials, each shaped around the horizon and the sound of the tide.",
      image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?q=80&w=1600",
      imageAlt: "GIARA Maldives villa interior",
    },
    dining: {
      title: "Dining",
      description:
        "Ocean-facing dining shaped around the day's catch and the calm of the surrounding water.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600",
      imageAlt: "GIARA Maldives dining pavilion",
    },
    wellness: {
      title: "Wellness",
      description:
        "An overwater wellness pavilion built entirely around stillness — treatments, a pool, and the sound of the ocean.",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600",
      imageAlt: "GIARA Maldives wellness pavilion",
    },
    events: {
      title: "Events",
      description:
        "Private overwater venues for gatherings shaped by the horizon, suited to occasions of quiet significance.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600",
      imageAlt: "GIARA Maldives event space",
    },
    experiences: {
      title: "Experiences",
      description:
        "Curated moments on and beneath the water — from private sunset sails to quiet reef excursions.",
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600",
      imageAlt: "Maldives ocean experience",
    },
    offers: {
      title: "Offers",
      description:
        "Seasonal offers and considered packages — enquire directly with our team for current availability.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1600",
      imageAlt: "GIARA Maldives offer",
    },
  },
};