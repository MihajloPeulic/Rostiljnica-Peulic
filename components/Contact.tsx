import ButtonLink from "./ButtonLink";

export default function Contact() {
  return (
    <section className="py-20 md:py-32 reveal overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">


        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >


          {/* LEFT SIDE */}

          <div className="text-center lg:text-left max-w-full">


            <p
              className="
                uppercase
                tracking-[0.5em]
                text-amber-400
              "
            >
              Posjetite nas
            </p>



            <h2
              className="
                font-heading
                text-4xl
                sm:text-5xl
                lg:text-6xl
                mt-6
              "
            >
              Dođite i uvjerite se u kvalitet
            </h2>



            <p
              className="
                text-zinc-400
                text-lg
                mt-8
                leading-8
              "
            >
              Svratite na ručak, večeru ili posebno druženje.
              Očekujemo vas uz dobru hranu i prijatnu atmosferu.
            </p>





            <div
              className="
                mt-12
                space-y-8
                w-full
                max-w-md
                mx-auto
                lg:mx-0
              "
            >


              <div className="flex gap-5 items-center">

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    bg-amber-500
                    text-black
                    flex
                    items-center
                    justify-center
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="black"
                    className="w-7 h-7 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.5-7.5 11-7.5 11s-7.5-3.5-7.5-11a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>


                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    Lokacija
                  </h3>

                  <p className="text-zinc-400">
                    Ulica Doktora Slavka Šuška br.54, Прњавор
                  </p>

                </div>

              </div>





              <div className="flex gap-5 items-center">

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    bg-amber-500
                    text-black
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-7 h-7 shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
                </div>


                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    Radno vrijeme
                  </h3>

                  <p className="text-zinc-400">
                    Svaki dan od 07:00 - 20:00
                  </p>

                </div>

              </div>





              <div className="flex gap-5 items-center">

                <div
                  className="
                    w-14
                    h-14
                    shrink-0
                    rounded-2xl
                    bg-amber-500
                    text-black
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-7 h-7 shrink-0"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.364 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.364-1.21l1.293-.97c.363-.272.53-.735.417-1.173L7.963 3.977A1.125 1.125 0 006.872 3.125H5.5A2.25 2.25 0 003.25 5.375v1.375z"
                    />

                  </svg>

                </div>



                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    Telefon
                  </h3>

                  <p className="text-zinc-400">
                    +387 51 663 456
                  </p>

                </div>


              </div>





              <div className="w-full sm:w-auto">

                <ButtonLink
                  href="https://maps.app.goo.gl/QbZffvpWEfow7RcE8"
                  text="Otvori Google mape"
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
                  external
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="black"
                      className="w-5 h-5 shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.5-7.5 11-7.5 11s-7.5-3.5-7.5-11a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  }
                />

              </div>


            </div>

          </div>







          {/* MAP */}

          <div
            className="
              rounded-[40px]
              overflow-hidden
              h-[350px]
              md:h-[500px]
              lg:h-[600px]
              border
              border-white/10
            "
          >

            <iframe
              className="
                w-full
                h-full
                border-0
              "
              src="https://maps.app.goo.gl/fWBJ9bof9s7ZxCda"
              loading="lazy"
            />

          </div>




        </div>


      </div>


    </section>
  );
}