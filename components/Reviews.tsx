const reviews = [
  {
    name: "Lilly Žunić",
    initial: "L",
    text: "Najbolji ćevapi u Prnjavoru! Usluga je veoma brza i ljubazna, a enterijer je predivan.",
  },
  {
    name: "David Blanc",
    initial: "D",
    text: "Одлична храна i љубазно особље. Лако је доћи до објекта и погодан је паркинг испред. Топло препоручујем!",
  },
  {
    name: "Mišo Mitrić",
    initial: "M",
    text: "Odlična hrana, sjajan ambijent, nije previše skupo, odlična usluga. Samo pohvale!",
  },
];


export default function Reviews(
  {
    guests
  }: Record<string, any>
) {

  const reviews = guests.raw("reviews") as {name: string; text: string; initial: number;}[]

  
  return (
    <section className="py-32 relative reveal">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-20">


          <p className="
            uppercase 
            tracking-[0.5em] 
            text-amber-400
          ">
            {guests("title1")}
          </p>


          <h2 className="
            font-heading 
            text-5xl 
            mt-5
          ">
            {guests("title2")}
          </h2>


          <div className="
            mt-8 
            text-6xl 
            font-bold 
            text-amber-400
          ">
            4.6
            <span className="text-white">
              ★
            </span>
          </div>


          <p className="
            text-zinc-400 
            mt-3
          ">
            200+ {guests("google_rew")}
          </p>


        </div>



        <div className="
          grid 
          md:grid-cols-3 
          gap-8
        ">


          {reviews.map((review) => (

            <div
              key={review.name}
              className="
                bg-zinc-900/80
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:-translate-y-3
                transition
                duration-500
              "
            >


              <div className="
                text-amber-400
                text-2xl
                tracking-widest
              ">
                ★★★★★
              </div>



              <p className="
                mt-6
                text-zinc-300
                leading-7
              ">
                "{review.text}"
              </p>



              <div className="
                mt-8
                flex
                items-center
                gap-4
              ">


                <div className="
                  w-12
                  h-12
                  rounded-full
                  bg-amber-500
                  flex
                  items-center
                  justify-center
                  text-black
                  font-bold
                ">
                  {review.initial}
                </div>



                <div>

                  <h4 className="font-semibold">
                    {review.name}
                  </h4>


                  <p className="
                    text-sm
                    text-zinc-500
                  ">
                    Google Review
                  </p>


                </div>


              </div>


            </div>

          ))} 


        </div>


      </div>


    </section>
  );
}