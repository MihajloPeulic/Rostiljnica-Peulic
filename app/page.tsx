
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

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedDishes></FeaturedDishes>
      <SignatureDish></SignatureDish>
      <Gallery></Gallery>
      <Reviews></Reviews>
      <Contact></Contact>
      <FinalCTA></FinalCTA>
    </>
  );
}
