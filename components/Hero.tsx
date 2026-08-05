import Image from "next/image";
import ButtonLink from "./ButtonLink";



export default function Hero(
  {
    hero
  }: Record<string, any>
) {



  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      pt-32
      pb-24
      lg:pt-36
      lg:pb-32
      "
    >

      {/* BACKGROUND IMAGE */}

      <Image
        src="/images/hero_img1.jpg"
        alt="Roštiljnica Peulić"
        fill
        priority
        className="
        hero-bg
        object-cover
        "
      />


      {/* OVERLAY */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/80
        via-black/60
        to-[#09090b]
        "
      />


      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        text-center
        px-6
        w-full
        max-w-5xl
        "
      >

        <p
          className="
          fade-up
          uppercase
          tracking-[0.4em]
          sm:tracking-[0.6em]
          text-amber-400
          mb-5
          text-sm
          sm:text-base
          "
        >
          EST. 2004
        </p>



        <h1
          className="
          fade-up
          delay1
          font-heading
          text-5xl
          sm:text-6xl
          lg:text-7xl
          xl:text-8xl
          leading-[1.05]
          "
        >
          {hero("title1")}

          <span className="text-amber-400">
            {" "}{hero("title2")}
          </span>
          <br></br>

          {" "}{hero("title3")}
          
        </h1>




        <p
          className="
          fade-up
          delay2
          mt-8
          text-zinc-300
          text-base
          sm:text-lg
          xl:text-xl
          max-w-2xl
          mx-auto
          leading-7
          "
        >
          {hero("desc")}
        </p>





        <div
          className="
            fade-up
            delay3
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-5
            justify-center
          "
        >

          <ButtonLink
            href="/menu"
            text={hero("buttonY")}
            className="
              group
              cursor-pointer
              btn-primary
              inline-flex
              items-center
              justify-center
              gap-3
              text-xs
              uppercase
              tracking-[0.25em]
              transition
              duration-300
              hover:scale-105
              hover:-translate-y-1
            "
            icon={""}
          />



            <ButtonLink
              href="/contact"
              text={hero("buttonW")}
              className="
                group
                cursor-pointer
                btn-secondary
                inline-flex
                items-center
                justify-center
                gap-3
                text-xs
                uppercase
                tracking-[0.25em]
                transition
                duration-300
                hover:scale-105
                hover:-translate-y-1
              "
              icon={""}
            />

          </div>




        {/* STATS */}

        <div
          className="
            mt-14
            sm:mt-20
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            md:gap-8
          "
>

          <div className="glass-card p-6 sm:p-8">

            <div
              className="
              text-4xl
              sm:text-5xl
              font-bold
              text-amber-400
              "
            >
              20+
            </div>

            <div className="mt-3 text-zinc-400">
              {hero("exp")}
            </div>

          </div>



          <div className="glass-card p-6 sm:p-8">

            <div
              className="
              text-4xl
              sm:text-5xl
              font-bold
              text-amber-400
              "
            >
              10K+
            </div>

            <div className="mt-3 text-zinc-400">
              {hero("guests")}
            </div>

          </div>



          <div className="glass-card p-6 sm:p-8">

            <div
              className="
              text-4xl
              sm:text-5xl
              font-bold
              text-amber-400
              "
            >
              4.6★
            </div>

            <div className="mt-3 text-zinc-400">
             {hero("google")}
            </div>

          </div>

        </div>


      </div>


      {/* SCROLL INDICATOR */}

      <div
        className="
        hidden
        lg:flex
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex-col
        items-center
        "
      >

        <div
          className="
          mouse
          border
          border-white/30
          rounded-full
          h-12
          w-7
          flex
          justify-center
          "
        >

          <div
            className="
            mt-2
            w-1
            h-3
            rounded-full
            bg-white
            "
          />

        </div>


        <p
          className="
          mt-3
          text-xs
          tracking-[0.4em]
          text-zinc-400
          "
        >
          SCROLL
        </p>


      </div>


    </section>
  );
}