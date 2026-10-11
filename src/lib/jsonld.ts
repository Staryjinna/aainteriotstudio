import { site } from "@/content/site";

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  additionalType: "https://schema.org/InteriorDesigner",
  name: site.name,
  alternateName: site.tamilName,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  image: `${site.url}/images/logo.png`,
  telephone: site.phoneIntl,
  ...(site.email ? { email: site.email } : {}),
  description: site.tagline,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: `${a}, Chennai` })),
  ...(Object.values(site.socials).length ? { sameAs: Object.values(site.socials) } : {}),
};
