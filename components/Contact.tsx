import ButtonLink from "./ButtonLink";
import { MapPin, Phone, Clock } from "lucide-react";


export default function Contact(
  {
    maps
  }: Record<string, any>
) {
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
              {maps("title1")}
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
              {maps("title2")}
            </h2>



            <p
              className="
                text-zinc-400
                text-lg
                mt-8
                leading-8
              "
            >
              {maps("desc")}

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
                  <MapPin
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />
                </div>


                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    {maps("location")}
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
                  <Clock
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />
                </div>


                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    {maps("working_hours")}
                  </h3>

                  <p className="text-zinc-400">
                    {maps("every_day")} 07:00 - 20:00
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

                  <Phone
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />

                </div>



                <div className="text-left flex-1">

                  <h3 className="font-semibold text-xl">
                    {maps("phone")}
                  </h3>

                  <p className="text-zinc-400">
                    +387 51 663 456
                  </p>

                </div>


              </div>





              <div className="w-full sm:w-auto">

                <ButtonLink
                  href="https://maps.app.goo.gl/QbZffvpWEfow7RcE8"
                  text={maps("buttonY")}
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
                  icon={""}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.777708559488!2d17.658505876604874!3d44.86681997309765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ddf88a591e9ff%3A0x26644446b63f4989!2zUm_FoXRpbGpuaWNhIFBldWxpxIc!5e0!3m2!1sen!2sba!4v1785747264846!5m2!1sen!2sba"
              loading="lazy"
            />

            

          </div>




        </div>


      </div>


    </section>
  );
}