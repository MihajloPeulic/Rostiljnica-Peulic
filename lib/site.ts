export const site = {
  name: "Roštiljnica Peulić",
  phone: "+387 51 663 456",
  phoneHref: "tel:+38751663456",
  email: "kontakt@rostiljnicapeulic.com",
  address: "Ulica Doktora Slavka Šuška 54, 78430 Prnjavor",
  hours: "07:00–20:00",
  mapsUrl: "https://maps.app.goo.gl/QbZffvpWEfow7RcE8",
  instagramUrl: "https://www.instagram.com/rostiljnica.peulic/",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://rostiljnicapeulic.com",
} as const;

export const routes = ["", "menu", "gallery", "about", "contact"] as const;
export type SiteRoute = (typeof routes)[number];

export function localizedPath(locale: string, route: SiteRoute = "") {
  return `/${locale}${route ? `/${route}` : ""}`;
}
