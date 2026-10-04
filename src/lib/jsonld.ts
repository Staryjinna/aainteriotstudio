import { site } from "@/content/site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  additionalType: "https://schema.org/InteriorDesigner",
  name: site.name,
  alternateName: site.brand,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  foundingDate: String(site.founded),
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: String(site.rating.value), reviewCount: String(site.rating.count) },
  sameAs: [site.socials.instagram, site.socials.facebook],
  areaServed: "Chennai",
};
