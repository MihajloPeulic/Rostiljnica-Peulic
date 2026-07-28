export default function Contact() {
  return (
    <section className="py-32 reveal">

      <div className="max-w-7xl mx-auto px-6">


        <div className="
          grid 
          lg:grid-cols-2 
          gap-16 
          items-center
        ">


          <div>


            <p className="
              uppercase 
              tracking-[0.5em] 
              text-amber-400
            ">
              Posjetite nas
            </p>



            <h2 className="
              font-heading 
              text-5xl
              lg:text-6xl 
              mt-6
            ">
              Dođite i uvjerite se u kvalitet
            </h2>



            <p className="
              text-zinc-400 
              text-lg 
              mt-8 
              leading-8
            ">
              Svratite na ručak, večeru ili posebno druženje.
              Očekujemo vas uz dobru hranu i prijatnu atmosferu.
            </p>




            <div className="
              mt-12 
              space-y-8
            ">


              <div className="
                flex 
                gap-5 
                items-center
              ">

                <div className="
                  w-14 
                  h-14 
                  rounded-2xl 
                  bg-amber-500 
                  text-black 
                  flex 
                  items-center 
                  justify-center 
                  text-2xl
                ">
                  📍
                </div>


                <div>
                  <h3 className="font-semibold text-xl">
                    Lokacija
                  </h3>

                  <p className="text-zinc-400">
                    Ulica Doktora Slavka Šuška br.54, Прњавор
                  </p>
                </div>


              </div>





              <div className="
                flex 
                gap-5 
                items-center
              ">

                <div className="
                  w-14 
                  h-14 
                  rounded-2xl 
                  bg-amber-500 
                  text-black 
                  flex 
                  items-center 
                  justify-center 
                  text-2xl
                ">
                  🕒
                </div>


                <div>
                  <h3 className="font-semibold text-xl">
                    Radno vrijeme
                  </h3>

                  <p className="text-zinc-400">
                    Svaki dan od 07:00 - 20:00
                  </p>
                </div>


              </div>





              <div className="
                flex 
                gap-5 
                items-center
              ">


                <div className="
                  w-14 
                  h-14 
                  rounded-2xl 
                  bg-amber-500 
                  text-black 
                  flex 
                  items-center 
                  justify-center 
                  text-2xl
                ">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.364 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.364-1.21l1.293-.97c.363-.272.53-.735.417-1.173L7.963 3.977A1.125 1.125 0 006.872 3.125H5.5A2.25 2.25 0 003.25 5.375v1.375z"
                    />

                  </svg>

                </div>



                <div>

                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-zinc-400">
                    +387 51 663 456
                  </p>

                </div>


              </div>



            </div>




            <button
              className="
                mt-12 
                bg-amber-500 
                text-black 
                px-10 
                py-5 
                rounded-full 
                font-semibold 
                hover:scale-105 
                transition
              "
            >
              Otvori Google mape
            </button>



          </div>





          <div className="
            rounded-[40px]
            overflow-hidden
            h-[600px]
            border
            border-white/10
          ">


            <iframe
              className="
                w-full
                h-full
                border-0
              "
              src="https://maps.app.goo.gl/fWBJ9bof9s7ZzXCdA"
              loading="lazy"
            />


          </div>



        </div>


      </div>


    </section>
  );
}