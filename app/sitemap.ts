import type { MetadataRoute } from "next";
import { localizedPath, routes, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => ["ba", "en"].map(locale => ({
    url: `${site.url}${localizedPath(locale, route)}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "menu" ? .8 : .6,
    alternates: { languages: { "bs-BA": `${site.url}${localizedPath("ba",route)}`, en: `${site.url}${localizedPath("en",route)}` } },
  })));
}
