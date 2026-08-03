import { ShieldCheck, ChefHat, UsersRound } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">

      <section className="pt-32 pb-32">

        <div className="container-page">


          {/* HERO */}

          <div className="text-center max-w-4xl mx-auto">

            <p
              className="
                fade-up
                uppercase
                tracking-[0.5em]
                text-amber-400
              "
            >
              O nama
            </p>


            <h1
              className="
                fade-up
                delay1
                heading
                text-5xl
                md:text-7xl
                mt-6
              "
            >
              Tradicija ukusa i kvaliteta
            </h1>


            <p
              className="
                fade-up
                delay2
                mt-8
                text-zinc-400
                text-lg
                leading-8
              "
            >
              Roštiljnica Peulić je mjesto gdje se tradicionalna kuhinja,
              kvalitetni sastojci i domaća atmosfera spajaju u jedno.
              Naš cilj je da svaki gost ode zadovoljan i da se uvijek vraća.
            </p>

          </div>





          {/* STORY */}

          <div
            className="
              mt-24
              grid
              lg:grid-cols-2
              gap-12
              items-center
            "
          >


            <div
              className="
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                h-[500px]
              "
            >

              <img
                src="/images/gornji_sprat.png"
                alt="Roštiljnica Peulić"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>





            <div className="text-center lg:text-left">


              <p
                className="
                  uppercase
                  tracking-[0.4em]
                  text-amber-400
                "
              >
                Naša priča
              </p>



              <h2
                className="
                  heading
                  text-4xl
                  mt-5
                "
              >
                Više od običnog restorana
              </h2>



              <p
                className="
                  mt-6
                  text-zinc-400
                  leading-8
                "
              >
                Godinama pripremamo jela po provjerenim receptima,
                sa posebnim fokusom na kvalitet mesa, svježe namirnice
                i pažljivu pripremu svakog obroka.
              </p>



              <p
                className="
                  mt-5
                  text-zinc-400
                  leading-8
                "
              >
                Bilo da dolazite na brz ručak, porodično okupljanje
                ili druženje sa prijateljima, želimo da svaki trenutak
                kod nas bude poseban.
              </p>


            </div>


          </div>








          {/* VALUES */}

          <div
            className="
              mt-32
              grid
              md:grid-cols-3
              gap-8
            "
          >


            {[
              {
                icon: <ShieldCheck
                      className="w-8 h-8"
                      strokeWidth={2}
                />,
                title: "Kvalitet",
                text: "Biramo kvalitetne sastojke i pripremamo svako jelo sa posebnom pažnjom."
              },
              {
                icon: <ChefHat
                  className="w-8 h-8"
                  strokeWidth={2}
                />,
                title: "Tradicija",
                text: "Spoj domaćih ukusa i tradicionalne pripreme koju naši gosti prepoznaju."
              },
              {
                icon: <UsersRound
                      className="w-8 h-8"
                      strokeWidth={2}
                />,
                title: "Gostoprimstvo",
                text: "Važno nam je da se svaki gost osjeća prijatno i poželjno."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  text-center
                  md:text-left
                "
              >

                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    md:mx-0
                    rounded-2xl
                    bg-amber-500
                    text-black
                    flex
                    items-center
                    justify-center
                    text-2xl
                  "
                >
                  {item.icon}
                </div>


                <h3
                  className="
                    mt-6
                    text-2xl
                    font-semibold
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-4
                    text-zinc-400
                    leading-7
                  "
                >
                  {item.text}
                </p>


              </div>

            ))}


          </div>







          {/* FINAL */}

          <div
            className="
              mt-32
              rounded-[40px]
              overflow-hidden
              relative
              h-[450px]
            "
          >


            <img
              src="/images/hero_img1.jpg"
              alt="Roštiljnica"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />


            <div
              className="
                absolute
                inset-0
                bg-black/70
              "
            />


            <div
              className="
                relative
                h-full
                flex
                flex-col
                justify-center
                items-center
                text-center
                px-6
              "
            >


              <h2
                className="
                  heading
                  text-5xl
                "
              >
                Vidimo se za stolom
              </h2>


              <p
                className="
                  mt-5
                  text-zinc-300
                  text-lg
                "
              >
                Dođite i uvjerite se zašto nam se gosti vraćaju.
              </p>


            </div>


          </div>



        </div>

      </section>


    </main>
  );
}