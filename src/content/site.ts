/** Single source of truth for business details. Nothing else in the codebase hard-codes these. */
export const site = {
  name: "Interiors By RB",
  brand: "Interiors By RB",
  handle: "InteriorsByRB",
  // TODO: verify — domain not confirmed
  url: "https://interiorsbyrb.com",
  tagline: "Luxury interiors and turnkey solutions for full homes in Pune and Mumbai.",
  yearsExperience: 15,
  // TODO: verify — brief said "200+ projects" in one place and "600+ projects" in the bio; using 600+
  projectsCount: "600+",
  cities: ["Pune", "Mumbai"],
  // TODO: verify — the phone number was cut off in the brief; replace the placeholder below
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  phoneIntl: "+91-0000000000",
  whatsappNumber: "910000000000",
  // TODO: verify — placeholder email
  email: "hello@interiorsbyrb.com",
  // TODO: verify — studio addresses not provided
  hours: "Mon–Sat, 10 am – 7 pm",
  // TODO: verify — social handles assumed from the brand name
  socials: {
    instagram: "https://www.instagram.com/interiorsbyrb/",
    facebook: "https://www.facebook.com/interiorsbyrb",
  },
} as const;

export const citiesLabel = site.cities.join(" • ");

export const whatsappUrl = (text = "Hi Interiors By RB, I'd like a quote") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const seo = {
  title: "Interiors By RB | Luxury Interior Designers in Pune & Mumbai",
  description: `Luxury full-home interiors & turnkey solutions in Pune and Mumbai. ${site.yearsExperience}+ years of experience, ${site.projectsCount} projects. Free consultation & 3D design.`,
  keywords: [
    "luxury interior designers Pune", "luxury interior designers Mumbai", "turnkey interiors Pune",
    "full home interiors Mumbai", "modular kitchen Pune", "wardrobe designers Mumbai",
    "interior designers Pune", "interior designers Mumbai", "InteriorsByRB",
  ],
};
