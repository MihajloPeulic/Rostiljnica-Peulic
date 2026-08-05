import Image from "next/image";
import Link from "next/link";

import ButtonLink from "./ButtonLink";

export default function FeaturedDishes(
  {
    featured_dishes
  }: Record<string, any>
) {
  const dishes = featured_dishes.raw("dishes") as {name:string; description: string, image: string}[]



  return (
    <section className="py-32 relative reveal">

      <div className="max-w-7xl mx-auto px-6">


        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-6
            mb-16
          "
        >

          <p
            className="
              uppercase
              tracking-[0.5em]
              text-amber-400
            "
          >
            {featured_dishes("title1")}
          </p>


          <h2
            className="
              font-heading
              text-5xl
              mt-2
            "
          >
            {featured_dishes("title2")}
          </h2>

        </div>





        {/* DISHES */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-10
          "
        >

          {dishes.map((dish) => (

            <div
              key={dish.name}
              className="
                group
                relative
                h-[420px]
                rounded-3xl
                overflow-hidden
                bg-zinc-900
              "
            >

              <Image
                src={dish.image}
                alt={dish.name}
                fill
               
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />



              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/30
                  to-transparent
                "
              />



              <div
                className="
                  absolute
                  bottom-0
                  p-8
                "
              >

                <h3
                  className="
                    font-heading
                    text-3xl
                  "
                >
                  {dish.name}
                </h3>



                <p
                  className="
                    text-zinc-300
                    mt-3
                  "
                >
                  {dish.description}
                </p>


              </div>


            </div>

          ))}


        </div>





        {/* MENU BUTTON */}

        <div
          className="
            mt-16
            flex
            justify-center
          "
        >

          <ButtonLink
            href="/menu"
            text="Pogledaj meni"
            className="
              group
              cursor-pointer
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
            icon={""} />


        </div>


      </div>


    </section>
  );
}