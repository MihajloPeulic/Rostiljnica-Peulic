import Link from "next/link";
import ButtonLink from "./ButtonLink";

export default function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden reveal">
      <img
        src="/images/vina_bg.png"
        alt="Restaurant food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />


      <div className="relative max-w-4xl mx-auto text-center px-6">

        <p className="uppercase tracking-[0.5em] text-amber-400">
          Rezerviši danas
        </p>


        <h2 className="font-heading text-7xl mt-8">
          Vidimo se za stolom
        </h2>


       <ButtonLink
  href="/contact"
  text="Rezerviši sto"
  className="
    group
    cursor-pointer
    mt-12
    inline-flex
    items-center
    justify-center
    gap-4
    rounded-full
    border
    border-amber-400/40
    bg-amber-500
    px-10
    py-5
    text-xs
    uppercase
    tracking-[0.25em]
    font-semibold
    text-black
    transition
    duration-300
    hover:bg-amber-400
    hover:scale-105
    hover:-translate-y-1
  "
  icon={""}
/>


      </div>
    </section>
  );
}