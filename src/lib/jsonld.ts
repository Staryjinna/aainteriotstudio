import { site } from "@/content/site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  additionalType: "https://schema.org/InteriorDesigner",
  name: site.name,
  alternateName: site.handle,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  slogan: "Luxury Interiors • Turnkey Solutions",
  description: site.tagline,
  sameAs: [site.socials.instagram, site.socials.facebook],
  areaServed: site.cities.map((c) => ({ "@type": "City", name: c })),
};
