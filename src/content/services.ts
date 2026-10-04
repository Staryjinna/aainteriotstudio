import { P, unsplash, type Img } from "@/lib/images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: Img;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "complete-home-interiors",
    title: "Complete Home Interiors",
    short: "Turnkey interiors for 2BHK, 3BHK flats and villas.",
    long: "One team takes your home from bare shell to move-in ready: design, 3D visualisation, modular manufacturing and on-site execution, with a single point of responsibility for quality, cost and timeline.",
    image: { src: unsplash(P.livingCream), alt: "Completed living room interior by AA Interiors" }, // /images/services/living.jpg
    features: ["2BHK, 3BHK & villa packages", "Consultation at your home", "Transparent, itemised quotes", "Single team from design to handover"],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "L, U, parallel and island kitchens — our headline specialty.",
    long: "Strong modular kitchen expertise built over a decade of Chennai homes. We plan the work triangle, storage and lighting around the way you actually cook, then manufacture to exact measurements.",
    image: { src: unsplash(P.kitchenIsland), alt: "Modular kitchen with island and pendant lights" }, // /images/services/kitchen.jpg
    features: ["L-shape, U-shape, parallel & island layouts", "Soft-close hardware & tall units", "Durable, moisture-resistant materials", "Chimney, hob & appliance planning"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    short: "Sliding, hinged and walk-in wardrobes made to measure.",
    long: "Floor-to-ceiling storage that is planned inside as carefully as it looks outside — loft units, drawers, hanging zones and lighting tailored to your wardrobe.",
    image: { src: unsplash(P.wardrobeShelf), alt: "Custom wardrobe storage unit" }, // /images/services/wardrobe.jpg
    features: ["Sliding, hinged & walk-in designs", "Custom internal layouts", "Mirror, laminate & veneer finishes", "Loft and corner optimisation"],
  },
  {
    slug: "false-ceiling-lighting",
    title: "False Ceiling & Lighting",
    short: "Layered ceilings and lighting — frequently praised by clients.",
    long: "Gypsum and POP false ceilings with cove, profile and spot lighting that add depth and warmth while keeping the room feeling spacious.",
    image: { src: unsplash(P.ceilingRecessed), alt: "False ceiling with recessed lighting" }, // /images/services/ceiling.jpg
    features: ["Gypsum & POP ceilings", "Cove and profile lighting", "Recessed and decorative fixtures", "Electrical planning included"],
  },
  {
    slug: "living-bedroom",
    title: "Living & Bedroom",
    short: "TV units, beds, storage and wall panelling.",
    long: "Calm, well-planned living rooms and bedrooms: TV units, headboards, storage beds, study corners and wall panelling that bring colour, material and layout together.",
    image: { src: unsplash(P.bedroomTufted), alt: "Bedroom with upholstered headboard and pendant lighting" }, // /images/services/bedroom.jpg
    features: ["TV units & feature walls", "Beds with storage", "Wall panelling & paint", "Study and dressing corners"],
  },
  {
    slug: "pooja-crockery-study-units",
    title: "Pooja, Crockery & Study Units",
    short: "Compact units for the everyday needs of a Chennai home.", // TODO: verify — common asks, not confirmed with client
    long: "Purpose-built pooja units, crockery cabinets and study units sized to fit your floor plan and finished to match the rest of your interiors.",
    image: { src: unsplash(P.livingBoho), alt: "Styled living room with custom storage" }, // /images/services/units.jpg
    features: ["Pooja units with storage", "Crockery & display cabinets", "Study desks and shelving", "Matching finishes throughout"],
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    short: "Offices and retail stores for Chennai businesses.",
    long: "Workspaces and stores designed for how teams and customers move: efficient layouts, durable finishes and on-time execution that keeps disruption low.",
    image: { src: unsplash(P.officeHall), alt: "Modern office interior" }, // /images/services/commercial.jpg
    features: ["Offices & corporate fit-outs", "Retail stores", "Space planning", "Experience with Chennai corporates"],
  },
  {
    slug: "3d-visualisation",
    title: "3D Visualisation",
    short: "Photorealistic renders and walkthroughs before we build.",
    long: "See your home before it is built: photorealistic renders, 360° VR walkthroughs and walkthrough animations that let you finalise decisions with confidence.",
    image: { src: unsplash(P.livingModern), alt: "Photorealistic 3D rendered living room" }, // /images/services/3d.jpg
    features: ["Photorealistic renders", "360° VR walkthroughs", "Walkthrough animations", "Revisions before production"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
