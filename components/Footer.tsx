import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
export default async function Footer() {
  const t = await getTranslations("navbar");
  const locale = await getLocale();
  const links = [{ href: "/", key: "home" }, { href: "/menu", key: "menu" }, { href: "/gallery", key: "gallery" }, { href: "/about", key: "about" }, { href: "/contact", key: "contact" }] as const;
  return <footer className="site-footer"><div className="container-page"><div className="footer-grid">
    <div className="footer-brand"><Image src="/images/logo_nav.png" width={60} height={60} alt="" /><p className="footer-title">Roštiljnica Peulić</p><p>{t("desc")}</p></div>
    <div><h2>{t("navigation")}</h2><nav className="footer-links" aria-label={t("navigation")}>{links.map(({ href, key }) => <Link key={key} href={href}>{t(key)}</Link>)}</nav></div>
    <div><h2>{t("contact")}</h2><div className="footer-links"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">{site.address}</a></div></div>
    <div><h2>{t("fu")}</h2><div className="footer-links"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a><span>{locale === "en" ? "Every day" : "Svaki dan"} · {site.hours}</span></div></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Roštiljnica Peulić. {t("rights")}</span><span>Website by <a href="https://mihajlopeulic.com" target="_blank" rel="noopener noreferrer">Mihajlo Peulić</a></span></div></div></footer>;
}
