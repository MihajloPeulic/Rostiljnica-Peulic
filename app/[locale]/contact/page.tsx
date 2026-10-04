import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import RestaurantMap from "@/components/ui/RestaurantMap";
import ContactForm from "@/components/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return pageMetadata((await params).locale, "contact"); }
export default async function ContactPage() {
  const t = await getTranslations("contact");
  return <><PageIntro eyebrow={t("eyebrow")} title={t("title")} description={t("description")} /><section className="container-page contact-layout section-pad"><div className="contact-info"><div><p className="eyebrow">01 / {t("phone")}</p><a href={site.phoneHref}>{site.phone}</a></div><div><p className="eyebrow">02 / {t("location")}</p><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">{site.address} ↗</a></div><div><p className="eyebrow">03 / {t("working_hours")}</p><p>{site.hours}</p></div></div><div className="contact-form-wrap"><h2>{t("send_a_message")}</h2><ContactForm button={t("button")} name={t("name")} your_message={t("your_message")} /></div></section><section className="container-page contact-map"><RestaurantMap title={t("location")} /></section></>;
}
