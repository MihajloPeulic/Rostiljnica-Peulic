import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function SignatureDish() {
  return (
    <section className="relative py-40 overflow-hidden reveal">

      <Image
        src="/images/plata.png"
        alt="Specijalitet kuće"
        fill
        className="object-cover"
      />


      <div className="absolute inset-0 bg-black/70" />


      <div
        className="
          relative
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >


        <p
          className="
            uppercase
            tracking-[0.6em]
            text-amber-400
          "
        >
          Specijaliteti kuće
        </p>



        <h2
          className="
            font-heading
            text-5xl
            md:text-6xl
            mt-8
          "
        >
          Ukus koji predstavlja našu kuhinju
        </h2>



        <p
          className="
            text-xl
            text-zinc-300
            mt-8
            max-w-3xl
            mx-auto
            leading-8
          "
        >
          Kvalitetni sastojci, pažljiva priprema i prepoznatljivi ukusi
          koji našu kuhinju čine posebnom. Jela pripremljena za one koji
          uživaju u dobroj hrani.
        </p>




        <ButtonLink
          href="/menu"
          text="Pogledaj meni"
          className="
            group
            cursor-pointer
            inline-flex
            items-center
            justify-center
            gap-3
            mt-12
            rounded-full
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