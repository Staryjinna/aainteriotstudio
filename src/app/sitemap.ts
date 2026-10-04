import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/projects", "/3d-visualisation", "/contact"];
  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
  ];
  return routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
