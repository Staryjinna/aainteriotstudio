import type { Metadata } from "next";
import { seo } from "@/content/site";

/** Per-page metadata with canonical URL. `path` must start with "/". */
export function pageMeta(opts: { title?: string; description?: string; path: string; image?: string }): Metadata {
  const title = opts.title ? `${opts.title} | AA Interior Design Studio` : seo.title;
  const description = opts.description ?? seo.description;
  return {
    title: opts.title ? { absolute: title } : { absolute: seo.title },
    description,
    alternates: { canonical: opts.path },
    openGraph: { title, description, url: opts.path, type: "website", siteName: "AA Interior Design Studio", locale: "en_IN", ...(opts.image ? { images: [opts.image] } : {}) },
    twitter: { card: "summary_large_image", title, description },
  };
}
