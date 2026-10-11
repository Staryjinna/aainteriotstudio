/** Single source of truth for business details. Nothing else in the codebase hard-codes these. */
export const site = {
  name: "Illam Interiors",
  brand: "Illam Interiors",
  tamilName: "இல்லம் இன்டீரியர்ஸ்", // "Illam" (இல்லம்) = home
  // TODO: verify — domain not confirmed
  url: "https://illaminteriors.com",
  tagline: "Premium interiors in Chennai — traditional craftsmanship and modern modular design, under one roof.",
  owner: "Mohan",
  phone: "+91 98408 49658",
  phoneHref: "tel:+919840849658",
  phoneIntl: "+91-9840849658",
  whatsappNumber: "919840849658",
  // No email supplied yet. When you add one, set it here and show it in Footer/Contact.
  email: undefined as string | undefined,
  address: {
    street: "No.16 Madaveethi Street, Narayanapuram, Pallikaranai",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600100",
    country: "IN",
    mapQuery: "No.16 Madaveethi Street, Narayanapuram, Pallikaranai, Chennai 600100",
  },
  // TODO: verify — business hours not supplied
  hours: "Mon–Sat, 10 am – 7 pm",
  // TODO: verify — social handles not supplied
  socials: {} as { instagram?: string; facebook?: string },
  // TODO: verify — suggested service areas around Pallikaranai
  serviceAreas: ["Pallikaranai", "Velachery", "Medavakkam", "Sholinganallur", "Adyar", "Besant Nagar", "Anna Nagar", "T. Nagar", "ECR", "OMR"],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.locality} ${site.address.postalCode}`;

export const whatsappUrl = (text = "Hi Illam Interiors, I'd like a quote") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const seo = {
  title: "Illam Interiors | Premium Traditional & Modular Interior Designers in Chennai",
  description: `Premium home interiors in Chennai — modular kitchens, wardrobes, vaasakal & carved wood doors, pooja rooms and turnkey homes. Free consultation. Call ${site.phone}.`,
  keywords: [
    "interior designers in Chennai", "interior designers Pallikaranai", "traditional interiors Chennai",
    "modular kitchen Chennai", "vaasakal door Chennai", "pooja room design Chennai",
    "wooden main door Chennai", "turnkey home interiors Chennai", "Illam Interiors",
  ],
};
