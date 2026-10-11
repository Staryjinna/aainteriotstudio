import { P, T, unsplash, type Img } from "@/lib/images";

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
    short: "Turnkey interiors that blend traditional warmth with modular efficiency.",
    long: "One team takes your home from bare shell to move-in ready: design, 3D visualisation, carpentry, modular manufacturing and on-site execution. We plan every room as one cohesive illam — a modern kitchen beside a carved pooja room, a sleek wardrobe beside a teak vaasakal.",
    image: { src: unsplash(P.livingCream), alt: "Premium living room interior in Chennai" }, // /images/services/living.jpg
    features: ["Apartments, independent houses & villas", "Traditional and modular under one roof", "Consultation at your home", "Single team from design to handover"],
  },
  {
    slug: "vaasakal-main-doors",
    title: "Vaasakal & Main Doors",
    short: "Carved teak vaasakal, main doors and entrance frames.",
    long: "The vaasakal is the face of a Tamil home. We craft solid-wood door frames, carved main doors and double-leaf entrances with traditional motifs, brass detailing and modern, durable finishes.",
    image: { src: T.vaasal.src, alt: T.vaasal.alt }, // /images/services/vaasakal.jpg
    features: ["Solid teak & hardwood frames", "Hand-carved motifs and brass fittings", "Double-leaf and single-leaf main doors", "Modern locks and weather-resistant polish"],
  },
  {
    slug: "pooja-rooms",
    title: "Pooja Rooms & Mandapams",
    short: "Carved wooden pooja units, mandapams and dedicated pooja rooms.",
    long: "A calm, sacred corner designed to your family's traditions — from compact wall-mounted mandapams to full pooja rooms with carved panels, lamp niches, storage and warm lighting.",
    image: { src: T.pooja.src, alt: T.pooja.alt }, // /images/services/pooja.jpg
    features: ["Wall-mounted & standalone mandapams", "Carved wood, marble or Corian options", "Lamp niches and concealed storage", "Warm, glare-free lighting"],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    short: "L, U, parallel and island kitchens built for Indian cooking.",
    long: "Modular kitchens planned around real Indian cooking — heavy tawas, masala storage, deep drawers and strong ventilation — manufactured to exact measurements with durable, moisture-resistant materials.",
    image: { src: unsplash(P.kitchenIsland), alt: "Modular kitchen with island and pendant lights" }, // /images/services/kitchen.jpg
    features: ["L-shape, U-shape, parallel & island layouts", "Soft-close hardware & tall units", "Moisture-resistant carcass and finishes", "Chimney, hob & appliance planning"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes & Storage",
    short: "Sliding, hinged and walk-in wardrobes made to measure.",
    long: "Floor-to-ceiling storage planned inside as carefully as it looks outside — loft units, drawers, saree and hanging zones, with finishes ranging from clean laminates to veneer and wood.",
    image: { src: unsplash(P.wardrobeShelf), alt: "Custom wardrobe storage unit" }, // /images/services/wardrobe.jpg
    features: ["Sliding, hinged & walk-in designs", "Custom internal layouts", "Laminate, veneer & wood finishes", "Loft and corner optimisation"],
  },
  {
    slug: "traditional-furniture-oonjal",
    title: "Traditional Furniture & Oonjal",
    short: "Teak swings (oonjal), carved cots, dining and display units.",
    long: "Heirloom-quality furniture for the way Chennai families live: oonjal swings with brass chains, carved cots and divans, dining sets and crockery units — made in solid wood and finished to last.",
    image: { src: T.oonjal.src, alt: T.oonjal.alt }, // /images/services/oonjal.jpg
    features: ["Oonjal with brass chains", "Carved cots, divans & dining sets", "Crockery and display units", "Solid teak and hardwood"],
  },
  {
    slug: "false-ceiling-lighting",
    title: "False Ceiling & Lighting",
    short: "Layered ceilings and lighting that set the mood of a room.",
    long: "Gypsum and POP false ceilings with cove, profile and spot lighting that add depth and warmth — including wooden-panel ceilings that tie traditional and modern rooms together.",
    image: { src: unsplash(P.ceilingRecessed), alt: "False ceiling with recessed lighting" }, // /images/services/ceiling.jpg
    features: ["Gypsum & POP ceilings", "Cove and profile lighting", "Wooden panel ceilings", "Electrical planning included"],
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
    slug: "commercial-interiors",
    title: "Commercial Interiors",
    short: "Offices, clinics and showrooms across Chennai.", // TODO: verify — commercial work not confirmed with client
    long: "Workspaces and showrooms designed for how teams and customers move: efficient layouts, durable finishes and on-time execution that keeps disruption low.",
    image: { src: unsplash(P.officeHall), alt: "Modern office interior" }, // /images/services/commercial.jpg
    features: ["Offices & clinics", "Showrooms and retail", "Space planning", "Premium finishes"],
  },
  {
    slug: "3d-visualisation",
    title: "3D Visualisation",
    short: "Realistic renders so you can see the design before we build.",
    long: "See your home before it is built: realistic 3D renders that let you compare traditional and modern options and finalise decisions with confidence.",
    image: { src: unsplash(P.livingModern), alt: "Photorealistic 3D rendered living room" }, // /images/services/3d.jpg
    features: ["Realistic renders", "Compare material options", "Revisions before production", "Clear sign-off"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
