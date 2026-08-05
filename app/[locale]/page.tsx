
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Image from "next/image";
import FeaturedDishes from "@/components/FeaturedDishes";
import SignatureDish from "@/components/SignatureDish";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import { getTranslations } from "next-intl/server";





export default async function Home() {

  const hero = await getTranslations("hero");
  const featured_dishes = await getTranslations("favorite_dishes");
  const specialties = await getTranslations("specialties");
  const gallery_comp = await getTranslations("gallery_comp");
  const guests = await getTranslations("guests");
  const maps = await getTranslations("maps");
  const final_cta = await getTranslations("final_cta");





  return (
    <>
      <Hero hero={hero}></Hero>
      <FeaturedDishes featured_dishes={featured_dishes}></FeaturedDishes>
      <SignatureDish specialties={specialties}></SignatureDish>
      <Gallery gallery_comp={gallery_comp}></Gallery>
      <Reviews guests={guests}></Reviews>
      <Contact maps={maps}></Contact>
      <FinalCTA final_cta={final_cta}></FinalCTA>
    </>
  );
}
