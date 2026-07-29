import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function SignatureDish() {
  return (
    <section className="relative py-40 overflow-hidden reveal">

      <Image
        src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1800&q=80"
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
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.8"
      stroke="currentColor"
      className="w-5 h-5 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5h6M9 9h6M9 13h6M9 17h3"
      />

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3.75h10.5A1.75 1.75 0 0119 5.5v13a1.75 1.75 0 01-1.75 1.75H6.75A1.75 1.75 0 015 18.5v-13a1.75 1.75 0 011.75-1.75z"
      />
    </svg>
  }
/>


      </div>

    </section>
  );
}