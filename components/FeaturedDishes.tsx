import Image from "next/image";

export default function FeaturedDishes() {
  const dishes = [
    {
      name: "Ćevapi",
      description:
        "Domaći ćevapi sa roštilja, savršenog ukusa zahvaljujući pažljivo biranim sastojcima.",
      image:
        "/images/cevapi.png",
    },

    {
      name: "Ćevapi",
      description:
        "Tradicionalni specijalitet sa roštilja pripremljen svakog dana.",
      image:
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80",
    },

    {
      name: "Gourmet Burger",
      description:
        "Sočan burger sa kvalitetnim sastojcima i domaćim sosom.",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    },
  ];


  return (
    <section className="py-32 relative reveal">

      <div className="max-w-7xl mx-auto px-6">


        <div className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-end
          gap-6
          mb-16
        ">


          <div>

            <p className="
              uppercase
              tracking-[0.5em]
              text-amber-400
            ">
              Naši specijaliteti
            </p>


            <h2 className="
              font-heading
              text-5xl
              mt-5
            ">
              Favoriti kuće
            </h2>

          </div>



          <a
            href="#"
            className="
            cursor-pointer
            text-amber-400
            hover:text-amber-300
            transition
            "
          >
            Pogledaj cijeli meni →
          </a>


        </div>




        <div className="
          grid
          md:grid-cols-3
          gap-10
        ">


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

    <div
      className="
      flex
      justify-between
      items-center
      gap-4
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



    </div>


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


      </div>

    </section>
  );
}