import Image from "next/image";
import ButtonLink from "./ButtonLink";

const images = [
  "/images/vjesalice.png",
  "/images/gornji_sprat.png",
  "/images/riblji_stapici.png",
  "/images/batak.png",
  "/images/poh_pile.png",
  "/images/basta.png",

];


export default function Gallery() {
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
            Galerija
          </p>


          <h2
            className="
              font-heading
              text-5xl
              mt-5
            "
          >
            Ukusi i atmosfera
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
  text="Pogledaj cijelu galeriju"
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
  icon={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-5 h-5 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l3.409 3.409m0 0l1.409-1.409a2.25 2.25 0 013.182 0l2.159 2.159M6.75 21h10.5A2.25 2.25 0 0019.5 18.75v-10.5A2.25 2.25 0 0017.25 6h-10.5a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 006.75 21z"
      />
    </svg>
  }
/>

        </div>


      </div>

    </section>
  );
}