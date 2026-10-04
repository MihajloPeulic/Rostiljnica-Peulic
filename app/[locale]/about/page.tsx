import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ActionLink from "@/components/ui/ActionLink";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return pageMetadata((await params).locale, "about"); }
export default async function AboutPage() {
  const t = await getTranslations("about"); const nav = await getTranslations("navbar");
  const values = [[t("c1t"),t("c1c")],[t("c2t"),t("c2c")],[t("c3t"),t("c3c")]];
  return <><PageIntro eyebrow={t("title1")} title={t("title2")} description={t("desc")} /><section className="container-page about-story section-pad"><div className="about-image feature-image"><Image src="/images/gornji_sprat.jpg" alt="Ambijent Roštiljnice Peulić" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div className="about-copy"><p className="eyebrow">{t("st")}</p><h2>{t("st2")}</h2><p>{t("sc1")}</p><p>{t("sc2")}</p><ActionLink href={site.phoneHref}>{nav("button_phone")} ↗</ActionLink></div></section><section className="about-values section-pad"><div className="container-page"><div className="values-grid">{values.map(([title,body],index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section><section className="about-end"><div className="container-page"><h2>{t("lt")}</h2><p>{t("ld")}</p><ActionLink href="/contact">{nav("contact")} ↗</ActionLink></div></section></>;
}
