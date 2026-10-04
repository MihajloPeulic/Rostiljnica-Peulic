import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import GalleryGrid from "./galeryGrid";
import PageIntro from "@/components/ui/PageIntro";
import { pageMetadata } from "@/lib/seo";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return pageMetadata((await params).locale, "gallery"); }
const images = [
  ["/images/batak.jpg","Pileći batak sa roštilja"],["/images/vina.jpg","Vina u restoranu"],["/images/hero_img1.jpg","Specijaliteti Roštiljnice Peulić"],["/images/gornji_sprat.jpg","Gornji sprat restorana"],["/images/cevapi.jpg","Ćevapi"],["/images/plata_za_troje.jpg","Plata za troje"],["/images/basta.jpg","Bašta restorana"],["/images/poh_pile.jpg","Pohovana piletina"],["/images/riblji_stapici.jpg","Riblji štapići"],["/images/unutra1.jpg","Unutrašnjost restorana"],["/images/knedla_sa_sljivama.jpg","Knedle sa šljivama"],["/images/vjesalice.jpg","Vješalice sa roštilja"],["/images/ros1.jpg","Roštilj"],["/images/koljenica.jpg","Koljenica"],["/images/plata.jpg","Plata sa roštilja"],["/images/unutra2.jpg","Enterijer restorana"],["/images/ros2.jpg","Jela sa roštilja"]
].map(([src,alt]) => ({src,alt}));
export default async function GalleryPage() { const t = await getTranslations("gallery"); return <><PageIntro eyebrow={t("eyebrow")} title={t("title")} description={t("description")} /><section className="container-page gallery-page section-pad"><GalleryGrid images={images} /></section></>; }
