import Image from "next/image";

const images = [
  "/images/vjesalice.png",
  "/images/gornji_sprat.png",
  "/images/riblji_stapici.png",
  "/images/batak.png",
  "/images/poh_pile.png",
];


export default function Gallery() {
  return (
    <section className="py-32 reveal">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-20">

          <p className="
            uppercase 
            tracking-[0.5em] 
            text-amber-400
          ">
            Galerija
          </p>


          <h2 className="
            font-heading 
            text-5xl 
            mt-5
          ">
            Ukusi i atmosfera
          </h2>

        </div>



        <div className="
          grid 
          grid-cols-2 
          md:grid-cols-4 
          gap-5
        ">


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


      </div>

    </section>
  );
}