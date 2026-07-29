
import ContactForm from "@/components/ContactForm";


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
                ☎
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
                📍
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
                🕒
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
              src="https://maps.app.goo.gl/fWBJ9bof9s7ZzXCdA"
              loading="lazy"
            />

          </div>



        </div>

      </section>


    </main>
  );
}




