import { P, T, unsplash, type Img } from "@/lib/images";

export const projectTypes = ["traditional", "vaasakal", "pooja", "kitchen", "wardrobe", "living", "bedroom", "ceiling", "commercial"] as const;
export type ProjectType = (typeof projectTypes)[number];
export const typeLabels: Record<ProjectType, string> = {
  traditional: "Traditional", vaasakal: "Vaasakal", pooja: "Pooja", kitchen: "Kitchen", wardrobe: "Wardrobe",
  living: "Living", bedroom: "Bedroom", ceiling: "Ceiling", commercial: "Commercial",
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  type: ProjectType;
  summary: string;
  cover: Img;
  images: Img[];
  featured?: boolean;
};

const img = (id: string, alt: string): Img => ({ src: unsplash(id), alt });

// Placeholder projects (titles and locations are illustrative; TODO: verify) — replace with real work.
// Real photos: public/images/projects/<slug>/01.jpg ... and swap the image entries for "/images/projects/<slug>/01.jpg".
export const projects: Project[] = [
  {
    slug: "teak-vaasakal-pallikaranai", title: "Carved Teak Vaasakal", location: "Pallikaranai", type: "vaasakal", featured: true,
    summary: "A solid teak main door and frame with carved motifs and brass detailing.",
    cover: T.vaasal, images: [T.vaasal, T.carvedWood, T.studded],
  },
  {
    slug: "pooja-room-velachery", title: "Carved Pooja Room", location: "Velachery", type: "pooja", featured: true,
    summary: "A dedicated pooja room with a carved wooden mandapam and lamp niches.",
    cover: T.pooja, images: [T.pooja, T.brassLamp],
  },
  {
    slug: "heritage-hall-adyar", title: "Heritage Hall", location: "Adyar", type: "traditional", featured: true,
    summary: "A heritage-style hall with teak pillars, a carved ceiling and Athangudi-inspired flooring.",
    cover: T.hallTrad, images: [T.hallTrad, T.pillars, T.athangudi, T.oonjal],
  },
  {
    slug: "island-kitchen-sholinganallur", title: "Island Kitchen", location: "Sholinganallur", type: "kitchen", featured: true,
    summary: "An open modular kitchen with a breakfast island and pendant lighting.",
    cover: img(P.kitchenIsland, "Island modular kitchen in Chennai"),
    images: [img(P.kitchenIsland, "Island modular kitchen"), img(P.kitchenWhite, "White kitchen counters"), img(P.kitchenGrey, "Kitchen cabinets and tap")],
  },
  {
    slug: "u-shaped-kitchen-medavakkam", title: "U-Shaped Kitchen", location: "Medavakkam", type: "kitchen",
    summary: "A compact U-shaped kitchen with open shelving and tall storage.",
    cover: img(P.kitchenDark, "U-shaped kitchen in Medavakkam"),
    images: [img(P.kitchenDark, "U-shaped kitchen"), img(P.kitchenGrey, "Kitchen detail")],
  },
  {
    slug: "wardrobe-wall-anna-nagar", title: "Wardrobe Wall", location: "Anna Nagar", type: "wardrobe",
    summary: "Floor-to-ceiling wardrobes with open niches and closed storage.",
    cover: img(P.wardrobeShelf, "Custom wardrobe in Anna Nagar"),
    images: [img(P.wardrobeShelf, "Wardrobe with open shelves"), img(P.wardrobeDoor, "Wardrobe doors")],
  },
  {
    slug: "calm-living-besant-nagar", title: "Calm Living Room", location: "Besant Nagar", type: "living", featured: true,
    summary: "A neutral living room with warm wood accents and layered lighting.",
    cover: img(P.livingCream, "Living room in Besant Nagar"),
    images: [img(P.livingCream, "Living room"), img(P.livingBoho, "Living room styling"), img(P.livingGrey, "Seating area")],
  },
  {
    slug: "modern-living-ecr", title: "Modern Apartment Living", location: "ECR", type: "living",
    summary: "A bright living area with a feature wall and TV unit.",
    cover: img(P.livingBright, "Modern living room on ECR"),
    images: [img(P.livingBright, "Bright living room"), img(P.livingModern, "Open-plan living"), img(P.livingBlue, "Sofa and artwork")],
  },
  {
    slug: "master-bedroom-omr", title: "Master Bedroom", location: "OMR", type: "bedroom",
    summary: "A restful master bedroom with an upholstered headboard and statement lighting.",
    cover: img(P.bedroomTufted, "Master bedroom on OMR"),
    images: [img(P.bedroomTufted, "Master bedroom"), img(P.bedroomOrange, "Bedroom seating"), img(P.bedroomClassic, "Bedroom bedside")],
  },
  {
    slug: "cove-ceiling-t-nagar", title: "Layered False Ceiling", location: "T. Nagar", type: "ceiling",
    summary: "A gypsum false ceiling with recessed spots and cove lighting.",
    cover: img(P.ceilingRecessed, "False ceiling in T. Nagar"),
    images: [img(P.ceilingRecessed, "False ceiling with lights"), img(P.livingDark, "Ceiling and living area")],
  },
  {
    slug: "clinic-interior-pallikaranai", title: "Clinic Interior", location: "Pallikaranai", type: "commercial", // TODO: verify — illustrative
    summary: "A calm, durable clinic interior with glass partitions and reception.",
    cover: img(P.officeHall, "Commercial interior in Pallikaranai"),
    images: [img(P.officeHall, "Commercial corridor"), img(P.officeGlass, "Open workspace")],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
