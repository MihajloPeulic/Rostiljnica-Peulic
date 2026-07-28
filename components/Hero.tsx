import Image from "next/image";

export default function Hero() {
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
          Tradicija

          <span className="text-amber-400">
            {" "}ukusa
          </span>

          {" "}na tanjiru

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
          Vrhunsko meso sa roštilja, svježi sastojci i prepoznatljiv ukus
          posluženi u toploj atmosferi za porodicu i prijatelje.
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

          <button className="cursor-pointer btn-primary glow">
            Pogledaj meni
          </button>


          <button className="cursor-pointer btn-secondary">
            Rezerviši sto
          </button>

        </div>




        {/* STATS */}

        <div
          className="
          mt-14
          sm:mt-20
          grid
          grid-cols-1
          sm:grid-cols-3
          gap-5
          sm:gap-8
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
              Godina iskustva
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
              Zadovoljnih gostiju
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
              4.9★
            </div>

            <div className="mt-3 text-zinc-400">
              Google ocjena
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