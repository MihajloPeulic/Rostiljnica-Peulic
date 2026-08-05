import Image from "next/image";
import ButtonLink from "./ButtonLink";

const images = [
  "/images/vjesalice.png",
  "/images/gornji_sprat.png",
  "/images/riblji_stapici.png",
  "/images/batak.png",
  "/images/poh_pile.png",
  "/images/basta.jpeg",

];


export default function Gallery({
    gallery_comp
  }: Record<string, any>) {
  return (
    <section className="py-32 reveal">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-20">

          <p
            className="
              uppercase
              tracking-[0.5em]
              text-amber-400
            "
          >
            {gallery_comp("title1")}
          </p>


          <h2
            className="
              font-heading
              text-5xl
              mt-5
            "
          >
            {gallery_comp("title2")}
          </h2>

        </div>





        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
          "
        >

          {images.map((image, index) => (

            <div
              key={index}
              className={`
                overflow-hidden
                rounded-3xl
                aspect-square
                ${
                  index === 1
                    ? "md:row-span-2 md:aspect-auto"
                    : ""
                }
              `}
            >

              <Image
                src={image}
                alt={`Galerija slika ${index + 1}`}
                width={700}
                height={700}
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-700
                "
              />

            </div>

          ))}

        </div>





        <div className="mt-16 flex justify-center">

          <ButtonLink
            href="/gallery"
            text={gallery_comp("buttonY")}
            className="
              group
              cursor-pointer
              flex
              items-center
              justify-center
              gap-3
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


      </div>

    </section>
  );
}