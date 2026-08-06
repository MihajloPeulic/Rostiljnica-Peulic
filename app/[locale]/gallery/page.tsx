
import GalleryGrid from "./galeryGrid";

const images = [
  "/images/batak.jpg",
  "/images/vina.jpg",
  "/images/hero_img1.jpg",
  "/images/gornji_sprat.jpg",
  "/images/cevapi.jpg",
  "/images/plata_za_troje.jpg",
  "/images/basta.jpg",
  "/images/poh_pile.jpg",
  "/images/riblji_stapici.jpg",
  "/images/unutra1.jpg",
  "/images/knedla_sa_sljivama.jpg",
  "/images/vjesalice.jpg",
  "/images/ros1.jpg",
  "/images/koljenica.jpg",
  "/images/plata.jpg",
  "/images/unutra2.jpg",
  "/images/ros2.jpg",
];

import { getTranslations } from "next-intl/server";


import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "en" ? "Gallery" : "Galerija",
    
    description:
      locale === "en"
        ? "Browse the gallery of Peulić Grill in Prnjavor. See our welcoming restaurant interior, pleasant atmosphere, and deliciously prepared grilled specialties."
        : "Pogledajte galeriju Roštiljnice Peulić. Zavirite u naš prijatan ambijent i pogledajte fotografije naših autentičnih specijaliteta sa roštilja.",
    
    keywords:
      locale === "en"
        ? ["Peulic Grill photos", "restaurant gallery Prnjavor", "food pictures", "restaurant interior", "barbecue images Prnjavor"]
        : ["slike roštiljnica Prnjavor", "galerija restorana Prnjavor", "fotografije hrane", "ambijent Roštiljnica Peulić", "slike ćevapa"],
    
    openGraph: {
      title:
        locale === "en"
          ? "Gallery | Peulić Grill"
          : "Galerija | Roštiljnica Peulić",
      description:
        locale === "en"
          ? "Take a visual tour of our restaurant and see the mouth-watering dishes we prepare every day."
          : "Uvjerite se u kvalitet naše hrane i prijatnu atmosferu kroz fotografije iz našeg restorana.",
      // url: "/images/galerija_naslovna.jpg", // Opciono: stavi neku najljepšu sliku ambijenta ili hrane
    },
  };
}


export default async function GalleryPage() {

  const t = await getTranslations("gallery");

 

  return (
    <main className="min-h-screen bg-[#09090b] text-white">


      <section className="pt-40 pb-32">

        <div className="container-page">


          <div className="text-center mb-20">

  <p
    className="
      fade-up
      uppercase
      tracking-[0.5em]
      text-amber-400
    "
  >
    {t("eyebrow")}
  </p>


  <h1
    className="
      fade-up
      delay1
      heading
      text-5xl
      md:text-7xl
      mt-6
    "
  >
    {t("title")}
  </h1>


  <p
    className="
      fade-up
      delay2
      mt-6
      max-w-2xl
      mx-auto
      text-zinc-400
      text-lg
    "
  >
    {t("description")}
  </p>

</div>



          <GalleryGrid images={images}/>


        </div>

      </section>

    </main>
  );
}