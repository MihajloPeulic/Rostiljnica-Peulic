import Image from "next/image";

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


      <div className="
        relative 
        max-w-5xl 
        mx-auto 
        px-6 
        text-center
      ">


        <p className="
          uppercase 
          tracking-[0.6em] 
          text-amber-400
        ">
          Specijaliteti kuće
        </p>



        <h2 className="
          font-heading 
          text-5xl 
          md:text-6xl 
          mt-8
        ">
          Ukus koji predstavlja našu kuhinju
        </h2>



        <p className="
          text-xl 
          text-zinc-300 
          mt-8 
          max-w-3xl 
          mx-auto
          leading-8
        ">
          Kvalitetni sastojci, pažljiva priprema i prepoznatljivi ukusi
          koji našu kuhinju čine posebnom. Jela pripremljena za one koji
          uživaju u dobroj hrani.
        </p>



        <button
          className="
            mt-12 
            bg-amber-500 
            text-black 
            px-10 
            py-5 
            rounded-full 
            font-semibold 
            hover:scale-110 
            transition
          "
        >
          Pogledajte specijalitete
        </button>


      </div>

    </section>
  );
}