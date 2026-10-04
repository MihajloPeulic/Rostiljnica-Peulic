"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/lib/site";

const links = [{ href: "/", key: "home" }, { href: "/menu", key: "menu" }, { href: "/gallery", key: "gallery" }, { href: "/about", key: "about" }, { href: "/contact", key: "contact" }] as const;
export default function Navbar() {
  const t = useTranslations("navbar"); const locale = useLocale(); const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!open) return; const onEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onEscape); return () => window.removeEventListener("keydown", onEscape); }, [open]);
  return <header className="site-header"><div className="header-inner container-page">
    <Link href="/" className="brand" aria-label={locale === "en" ? "Peulić Grill – home" : "Roštiljnica Peulić – početna"}><Image src="/images/logo_nav.png" alt="" width={48} height={48} priority /><span>PEULIĆ<small>{locale === "en" ? "GRILL · PRNJAVOR" : "ROŠTILJNICA · PRNJAVOR"}</small></span></Link>
    <nav className="desktop-nav" aria-label={t("navigation")}>{links.map(({ href, key }) => <Link key={key} href={href} aria-current={pathname === href ? "page" : undefined}>{t(key)}</Link>)}</nav>
    <div className="header-actions"><Link className="language-link" href={pathname} locale={locale === "ba" ? "en" : "ba"} aria-label={locale === "ba" ? "English" : "Bosanski"}>{locale === "ba" ? "EN" : "BA"}</Link><a className="header-call" href={site.phoneHref}>{t("button")} <ArrowUpRight size={16} aria-hidden="true" /></a><button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button></div>
  </div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label={t("navigation")}>{links.map(({ href, key }) => <Link key={key} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? "page" : undefined}>{t(key)}</Link>)}<a href={site.phoneHref} className="mobile-call">{t("button_phone")} · {site.phone}</a></nav>}</header>;
}
