import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ActionLink from "@/components/ui/ActionLink";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return pageMetadata((await params).locale, "menu"); }
export default async function MenuPage() {
  const t = await getTranslations("menu"); const nav = await getTranslations("navbar");
  const categories = t.raw("categories") as { title: string; items: { name: string; description?: string }[] }[];
  return <><PageIntro eyebrow="ROŠTILJNICA PEULIĆ" title={t("title")} description={t("description")} /><div className="container-page menu-layout"><nav className="menu-index" aria-label={t("title")}>{categories.map((category, index) => <a href={`#category-${index}`} key={category.title}>{String(index + 1).padStart(2,"0")} <span>{category.title}</span></a>)}</nav><div className="menu-categories">{categories.map((category,index) => <section id={`category-${index}`} className="menu-category" key={category.title}><header><span>{String(index + 1).padStart(2,"0")}</span><h2>{category.title}</h2></header><div className="menu-items">{category.items.map(item => <div className="menu-item" key={item.name}><h3>{item.name}</h3>{item.description && <p>{item.description}</p>}</div>)}</div></section>)}<div className="menu-note"><p>{nav("button_phone")}</p><ActionLink href={site.phoneHref}>{site.phone} ↗</ActionLink></div></div></div></>;
}
