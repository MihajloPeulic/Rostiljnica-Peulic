import type { Metadata } from "next";
import { localizedPath, site, type SiteRoute } from "./site";

const copy = {
  ba: {
    name: "Roštiljnica Peulić",
    home: ["Roštiljnica Peulić | Roštilj i domaća kuhinja u Prnjavoru", "Tradicionalni roštilj, domaća jela i prijatan ambijent u Prnjavoru. Pogledajte jelovnik, fotografije i kontakt Roštiljnice Peulić."],
    menu: ["Jelovnik", "Pogledajte jelovnik Roštiljnice Peulić u Prnjavoru: ćevapi, jela sa roštilja, domaća gotova jela, salate i još mnogo toga."],
    gallery: ["Galerija", "Fotografije hrane, restorana i ambijenta Roštiljnice Peulić u Prnjavoru."],
    about: ["O nama", "Upoznajte Roštiljnicu Peulić u Prnjavoru, našu kuhinju i mjesto za druženje uz dobru hranu."],
    contact: ["Kontakt", "Kontakt, radno vrijeme i lokacija Roštiljnice Peulić u Prnjavoru. Pozovite nas ili pošaljite poruku."],
  },
  en: {
    name: "Peulić Grill",
    home: ["Peulić Grill | Traditional barbecue in Prnjavor", "Traditional barbecue, homemade dishes and a welcoming atmosphere in Prnjavor. Explore our menu, gallery and contact details."],
    menu: ["Menu", "Explore the Peulić Grill menu in Prnjavor: ćevapi, grilled specialties, homemade dishes, salads and more."],
    gallery: ["Gallery", "Photos of food, the restaurant and atmosphere at Peulić Grill in Prnjavor."],
    about: ["About us", "Get to know Peulić Grill in Prnjavor, our kitchen and a welcoming place to share good food."],
    contact: ["Contact", "Contact details, opening hours and location for Peulić Grill in Prnjavor. Call or send us a message."],
  },
} as const;

export function pageMetadata(locale: string, route: SiteRoute = ""): Metadata {
  const language = locale === "en" ? "en" : "ba";
  const content = copy[language];
  const [title, description] = content[route || "home"];
  const path = localizedPath(language, route);
  const fullTitle = route ? `${title} | ${content.name}` : title;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
      languages: {
        "bs-BA": localizedPath("ba", route),
        en: localizedPath("en", route),
        "x-default": localizedPath("ba", route),
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: content.name,
      locale: language === "en" ? "en_US" : "bs_BA",
      type: "website",
      images: [{ url: "/images/hero_img1.jpg", width: 1170, height: 879, alt: content.name }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/images/hero_img1.jpg"] },
  };
}
