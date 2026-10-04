import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ActionLink from "@/components/ui/ActionLink";
import SectionHeading from "@/components/ui/SectionHeading";
import RestaurantMap from "@/components/ui/RestaurantMap";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return pageMetadata((await params).locale); }
const gallery = [
  { src: "/images/basta.jpg", alt: "Bašta Roštiljnice Peulić" },
  { src: "/images/cevapi.jpg", alt: "Ćevapi sa roštilja" },
  { src: "/images/gornji_sprat.jpg", alt: "Restoranski ambijent" },
  { src: "/images/plata.jpg", alt: "Plata sa roštilja" },
];
export default async function Home() {
  const locale = await getLocale();
  const hero = await getTranslations("hero"); const dishes = await getTranslations("favorite_dishes");
  const galleryText = await getTranslations("gallery_comp"); const maps = await getTranslations("maps"); const about = await getTranslations("about");
  const reviews = await getTranslations("guests"); const final = await getTranslations("final_cta");
  const featured = dishes.raw("dishes") as { name: string; description: string; image: string }[];
  const quotes = reviews.raw("reviews") as { name: string; text: string }[];
  return <>
    <section className="home-hero"><Image src="/images/plata_za_troje.jpg" alt="" fill priority sizes="100vw" className="hero-photo" /><div className="hero-shade" /><div className="hero-grid" aria-hidden="true" /><div className="container-page hero-content">
      <p className="hero-kicker">ROŠTILJNICA PEULIĆ <span>·</span> PRNJAVOR</p>
      <h1>{hero("title1")}{" "}<em>{hero("title2")}</em><br />{hero("title3")}</h1>
      <p className="hero-description">{hero("desc")}</p>
      <div className="hero-actions"><ActionLink href="/menu">{hero("buttonY")} <span aria-hidden="true">↗</span></ActionLink><ActionLink href={site.phoneHref} variant="outline">{hero("buttonW")}</ActionLink></div>
      <div className="hero-detail"><span>EST. 2012</span><span>{locale === "en" ? "EVERY DAY" : "SVAKI DAN"} · {site.hours}</span></div>
    </div><div className="hero-side-note" aria-hidden="true">PEULIĆ / PRNJAVOR / 2012</div><div className="hero-stamp" aria-hidden="true"><span>2012</span><small>{locale === "en" ? "SINCE" : "OD"}</small></div></section>

    <div className="brand-ticker" aria-hidden="true"><div className="brand-ticker-track">{Array.from({length:4}, (_, index) => <span key={index}>{dishes("title1")} <b>✳</b> {hero("title3")} <b>✳</b> {maps("title1")} <b>✳</b> </span>)}</div></div>

    <section className="section-pad featured-section"><div className="container-page"><div className="section-top"><SectionHeading eyebrow={dishes("title1")} title={dishes("title2")} /><ActionLink href="/menu" variant="text">{hero("buttonY")} ↗</ActionLink></div>
      <div className="dish-grid">{featured.map((dish, index) => <article className="dish-card" key={dish.name}><div className="dish-photo feature-image"><Image src={dish.image} alt={dish.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="dish-copy"><span>0{index + 1} / {String(featured.length).padStart(2,"0")}</span><h3>{dish.name}</h3><p>{dish.description}</p></div></article>)}</div>
    </div></section>

    <section className="story-band"><div className="story-photo feature-image"><Image src="/images/plata_za_troje.jpg" alt="Plata za troje sa roštilja" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="story-copy"><SectionHeading eyebrow="PEULIĆ" title={hero("title3")} description={hero("desc")} /><div className="story-rule" /><p>{site.address}</p><ActionLink href="/about" variant="outline">{about("st")} ↗</ActionLink></div></section>

    <section className="section-pad gallery-preview"><div className="container-page"><div className="section-top"><SectionHeading eyebrow={galleryText("title1")} title={galleryText("title2")} /><ActionLink href="/gallery" variant="text">{galleryText("buttonY")} ↗</ActionLink></div><div className="preview-grid">{gallery.map((image, index) => <div className={`preview-photo preview-photo--${index + 1} feature-image`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw" /></div>)}</div></div></section>

    <section className="section-pad reviews-section"><div className="container-page"><SectionHeading eyebrow={reviews("title1")} title={reviews("title2")} center /><div className="quotes-grid">{quotes.map((quote) => <blockquote key={quote.name}><span aria-hidden="true">“</span><p>{quote.text}</p><cite>{quote.name}</cite></blockquote>)}</div></div></section>

    <section className="visit-section"><div className="container-page visit-grid"><div className="visit-copy"><SectionHeading eyebrow={maps("title1")} title={maps("title2")} description={maps("desc")} /><dl><div><dt>{maps("location")}</dt><dd>{site.address}</dd></div><div><dt>{maps("working_hours")}</dt><dd>{maps("every_day")} {site.hours}</dd></div><div><dt>{maps("phone")}</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div></dl><ActionLink href={site.mapsUrl} external>{maps("buttonY")} ↗</ActionLink></div><RestaurantMap title={maps("location")} /></div></section>

    <section className="final-cta"><Image src="/images/vina_bg.png" alt="" fill sizes="100vw" /><div className="final-cta-shade" /><div className="container-page final-cta-inner"><p className="eyebrow">{final("title1")}</p><h2>{final("title2")}</h2><ActionLink href={site.phoneHref}>{final("buttonY")} ↗</ActionLink></div></section>
  </>;
}
