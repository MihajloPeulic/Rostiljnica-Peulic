
import ContactForm from "@/components/ContactForm";

import { MapPin, Phone, Clock } from "lucide-react";


export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
 

      <section className="pt-40 pb-32">

        <div className="container-page">


          {/* HEADER */}

          <div className="text-center mb-16">

            <p className="fade-up uppercase tracking-[0.5em] text-amber-400">
              Kontakt
            </p>

            <h1 className="fade-up delay1 heading text-5xl md:text-7xl mt-6">
              Kontaktirajte nas
            </h1>

            <p className="fade-up delay2 mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
              Rezervišite sto ili nam pošaljite poruku.
              Biće nam zadovoljstvo da vas ugostimo.
            </p>

          </div>





          {/* CONTACT CARDS */}

          <div className="grid md:grid-cols-3 gap-6 mb-12">


            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
            ">

              <div className="
                mx-auto
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
                <Phone
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-5 font-semibold text-xl">
                Telefon
              </h3>

              <a
                href="tel:+38751663456"
                className="text-zinc-400 hover:text-amber-400"
              >
                +387 51 663 456
              </a>

            </div>





            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
            ">


              <div className="
                mx-auto
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
                <MapPin
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />
              </div>


              <h3 className="mt-5 font-semibold text-xl">
                Lokacija
              </h3>


              <p className="text-zinc-400">
                Prnjavor
              </p>


            </div>






            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
            ">


              <div className="
                mx-auto
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
                <Clock
                  className="w-7 h-7 shrink-0"
                  strokeWidth={2}
                />
                
              </div>


              <h3 className="mt-5 font-semibold text-xl">
                Radno vrijeme
              </h3>


              <p className="text-zinc-400">
                07:00 - 20:00
              </p>


            </div>


          </div>







          {/* FORM */}


          <div  className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            md:p-12
          ">


            <div className="max-w-3xl mx-auto">


              <h2 className="heading text-4xl text-center">
                Pošaljite poruku
              </h2>



              <ContactForm></ContactForm>


            </div>


          </div>





          {/* MAP */}

          <div className="
            mt-12
            h-[450px]
            rounded-[40px]
            overflow-hidden
            border
            border-white/10
          ">

            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.777708559488!2d17.658505876604874!3d44.86681997309765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ddf88a591e9ff%3A0x26644446b63f4989!2zUm_FoXRpbGpuaWNhIFBldWxpxIc!5e0!3m2!1sen!2sba!4v1785747264846!5m2!1sen!2sba"
              loading="lazy"
            />

          </div>



        </div>

      </section>


    </main>
  );
}




