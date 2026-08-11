import Image from "next/image";
import {getTranslations} from "next-intl/server";
import ButtonLink from "./ButtonLink";

export default async function SignatureDish({locale}: {locale: string}) {
  const specialties_translations = await getTranslations("specialties");

  return (
    <section className="relative py-40 overflow-hidden reveal">

      <Image
        src="/images/plata.jpg"
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
          {specialties_translations("title1")}
        </p>



        <h2
          className="
            font-heading
            text-5xl
            md:text-6xl
            mt-8
          "
        >
          {specialties_translations("title2")}
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
          {specialties_translations("desc")}
        </p>




        <ButtonLink
          href={`/${locale}/menu`}
          text={specialties_translations("buttonY")}
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