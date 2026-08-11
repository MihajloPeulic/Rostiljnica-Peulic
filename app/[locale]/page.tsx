
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import SignatureDish from "@/components/SignatureDish";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import { getLocale } from "next-intl/server";





export default async function Home() {


  const locale = await getLocale();



  return (
    <>
      <Hero locale={locale}></Hero>
      <FeaturedDishes locale={locale} ></FeaturedDishes>
      <SignatureDish locale={locale}></SignatureDish>
      <Gallery locale={locale} ></Gallery>
      <Reviews locale={locale} ></Reviews>
      <Contact locale={locale} ></Contact>
      <FinalCTA locale={locale} ></FinalCTA>
    </>
  );
}
