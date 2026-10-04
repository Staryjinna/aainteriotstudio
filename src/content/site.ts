/** Single source of truth for business details. Nothing else in the codebase hard-codes these. */
export const site = {
  name: "A A Interior Design Studio",
  brand: "AA Interiors",
  tamilName: "ஏ ஏ இன்டீரியர் டிசைன் ஸ்டுடியோ",
  url: "https://aainteriordesignstudio.com",
  tagline: "Complete home interiors in Chennai — designed around how you live, delivered on budget and on time.",
  founded: 2013,
  founder: "Andrew Sunil",
  phone: "+91 90944 05043",
  phoneHref: "tel:+919094405043",
  phoneIntl: "+91-9094405043",
  whatsappNumber: "919094405043",
  // TODO: verify — brief suggests a domain email (e.g. hello@aainteriordesignstudio.com)
  email: "andrew2885@gmail.com",
  address: {
    street: "913, 21st St, S.Kolathur, Maxworth Nagar, Kovilambakkam",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600117",
    country: "IN",
    // TODO: verify — old website listed "132 A, 16th Street, Maxworth Nagar" (likely old office)
    mapQuery: "913, 21st St, Maxworth Nagar, Kovilambakkam, Chennai 600117",
    mapsUrl: "https://maps.app.goo.gl/4sF9YFxqyok3x6xU9",
    plusCode: "W5RX+H3 Chennai",
  },
  // TODO: verify — Google shows "Opens 12 am Mon", which looks misconfigured
  hours: "Mon–Sat, 10 am – 7 pm",
  socials: {
    instagram: "https://www.instagram.com/aainteriordesignstudio/",
    facebook: "http://www.facebook.com/thedesignstudio2k15",
  },
  rating: { value: 4.6, count: 127 },
  // TODO: verify — 11–25 (IndiaMART) vs 1–10 (ZoomInfo)
  teamSize: "11–25",
  // TODO: verify — pricing is from the old site and probably outdated
  pricing: { bhk2: "₹3 lakhs", bhk3: "₹4 lakhs" },
  serviceAreas: ["Kovilambakkam", "S.Kolathur", "Medavakkam", "Pallikaranai", "Madipakkam", "Keelkattalai", "Velachery", "Tambaram", "OMR"],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

export const whatsappUrl = (text = "Hi AA Interiors, I'd like a quote") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const seo = {
  title: "AA Interior Design Studio | Home Interior Designers in Chennai – Kovilambakkam",
  description:
    "Complete home interiors, modular kitchens & wardrobes in Chennai since 2013. 4.6★ rated on Google. Free consultation & 3D design. Call +91 90944 05043.",
  keywords: [
    "interior designer in Chennai", "home interiors Kovilambakkam", "modular kitchen Chennai",
    "wardrobe designers Chennai", "2BHK interiors Chennai", "false ceiling Chennai",
    "interior designers Medavakkam", "interior designers Pallikaranai",
  ],
};
