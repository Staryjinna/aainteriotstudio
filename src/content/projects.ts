import { P, unsplash, type Img } from "@/lib/images";

export const projectTypes = ["kitchen", "wardrobe", "living", "bedroom", "ceiling", "commercial"] as const;
export type ProjectType = (typeof projectTypes)[number];
export const typeLabels: Record<ProjectType, string> = {
  kitchen: "Kitchen", wardrobe: "Wardrobe", living: "Living", bedroom: "Bedroom", ceiling: "Ceiling", commercial: "Commercial",
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

// Placeholder projects — replace titles, locations and images with real work.
// Real photos: public/images/projects/<slug>/01.jpg ... and swap the `img(...)` calls for "/images/projects/<slug>/01.jpg".
export const projects: Project[] = [
  {
    slug: "island-kitchen-medavakkam", title: "Island Kitchen", location: "Medavakkam", type: "kitchen", featured: true,
    summary: "An open modular kitchen with a breakfast island and pendant lighting.",
    cover: img(P.kitchenIsland, "Island modular kitchen in Medavakkam"),
    images: [img(P.kitchenIsland, "Island modular kitchen"), img(P.kitchenWhite, "White kitchen counters"), img(P.kitchenGrey, "Kitchen cabinets and tap")],
  },
  {
    slug: "u-shaped-kitchen-pallikaranai", title: "U-Shaped Kitchen", location: "Pallikaranai", type: "kitchen",
    summary: "A compact U-shaped kitchen with open shelving and tall storage.",
    cover: img(P.kitchenDark, "U-shaped kitchen in Pallikaranai"),
    images: [img(P.kitchenDark, "U-shaped kitchen"), img(P.kitchenGrey, "Kitchen detail")],
  },
  {
    slug: "walk-in-wardrobe-velachery", title: "Wardrobe Wall", location: "Velachery", type: "wardrobe",
    summary: "Floor-to-ceiling wardrobes with open niches and closed storage.",
    cover: img(P.wardrobeShelf, "Custom wardrobe in Velachery"),
    images: [img(P.wardrobeShelf, "Wardrobe with open shelves"), img(P.wardrobeDoor, "Wardrobe doors")],
  },
  {
    slug: "calm-living-kovilambakkam", title: "Calm Living Room", location: "Kovilambakkam", type: "living", featured: true,
    summary: "A neutral living room with warm textures and layered lighting.",
    cover: img(P.livingCream, "Living room in Kovilambakkam"),
    images: [img(P.livingCream, "Living room"), img(P.livingBoho, "Living room styling"), img(P.livingGrey, "Seating area")],
  },
  {
    slug: "modern-living-tambaram", title: "Modern Apartment Living", location: "Tambaram", type: "living",
    summary: "A bright 3BHK living area with a feature wall and TV unit.",
    cover: img(P.livingBright, "Modern living room in Tambaram"),
    images: [img(P.livingBright, "Bright living room"), img(P.livingModern, "Open-plan living"), img(P.livingBlue, "Sofa and artwork")],
  },
  {
    slug: "master-bedroom-omr", title: "Master Bedroom", location: "OMR", type: "bedroom", featured: true,
    summary: "A restful master bedroom with an upholstered headboard and statement lighting.",
    cover: img(P.bedroomTufted, "Master bedroom on OMR"),
    images: [img(P.bedroomTufted, "Master bedroom"), img(P.bedroomOrange, "Bedroom seating"), img(P.bedroomClassic, "Bedroom bedside")],
  },
  {
    slug: "guest-bedroom-madipakkam", title: "Guest Bedroom", location: "Madipakkam", type: "bedroom",
    summary: "A simple guest bedroom with bedside storage and warm lighting.",
    cover: img(P.bedroomLamp, "Guest bedroom in Madipakkam"),
    images: [img(P.bedroomLamp, "Guest bedroom"), img(P.bedroomClassic, "Bed and lamps")],
  },
  {
    slug: "cove-ceiling-keelkattalai", title: "Layered False Ceiling", location: "Keelkattalai", type: "ceiling",
    summary: "A gypsum false ceiling with recessed spots and cove lighting.",
    cover: img(P.ceilingRecessed, "False ceiling in Keelkattalai"),
    images: [img(P.ceilingRecessed, "False ceiling with lights"), img(P.livingDark, "Ceiling and living area")],
  },
  {
    slug: "corporate-office-chennai", title: "Corporate Office", location: "Chennai", type: "commercial", featured: true,
    summary: "A corporate office with glass partitions and breakout spaces.",
    cover: img(P.officeHall, "Corporate office interior"),
    images: [img(P.officeHall, "Office corridor"), img(P.officeGlass, "Open workspace"), img(P.officeLounge, "Breakout lounge")],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
