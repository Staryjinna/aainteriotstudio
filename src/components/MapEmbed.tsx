import { site } from "@/content/site";

export function MapEmbed() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&output=embed`;
  return (
    <iframe
      title={`Map showing ${site.name}`}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-80 w-full rounded-2xl border border-line md:h-full md:min-h-96"
    />
  );
}
