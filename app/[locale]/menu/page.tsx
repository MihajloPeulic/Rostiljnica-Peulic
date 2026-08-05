import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "en" ? "Menu" : "Jelovnik",
    
    description:
      locale === "en"
        ? "Explore the Peulić Grill menu. Enjoy authentic ćevapi, juicy pork knuckle, grilled specialties, homemade cooked meals, and fresh salads."
        : "Pogledajte jelovnik Roštiljnice Peulić. Uživajte u domaćim ćevapima, sočnoj koljenici, specijalitetima sa roštilja i svježim kuvanim jelima.",
    
    // Dodajemo i specifične ključne riječi za jelovnik koje Google voli
    keywords:
      locale === "en"
        ? ["restaurant menu Prnjavor", "cevapi Prnjavor", "grilled meat", "pork knuckle", "traditional food menu"]
        : ["jelovnik roštilj Prnjavor", "ćevapi Prnjavor", "meni restoran", "kuvana jela Prnjavor", "koljenica", "cijene hrane Prnjavor"],
    
    openGraph: {
      title:
        locale === "en"
          ? "Menu | Peulić Grill"
          : "Jelovnik | Roštiljnica Peulić",
      description:
        locale === "en"
          ? "Take a look at our carefully crafted menu featuring traditional barbecue and homemade dishes."
          : "Zavirite u naš meni prepun tradicionalnih specijaliteta sa roštilja i domaćih kuhanih jela.",
      // Ovdje možeš staviti specifičnu sliku hrane za OG karticu ako želiš (npr. sliku plata ili ćevapa)
      // url: "/images/plata.png", 
    },
  };
}


import { getTranslations } from "next-intl/server";

export default async function MenuPage() {
  const t = await getTranslations("menu");

  const categories = t.raw("categories") as {
    title: string;
    items: {
      name: string;
      description?: string;
    }[];
  }[];

  return (
    <>
      <main className="min-h-screen bg-[#09090b] pt-36 pb-24">
        <div className="container-page max-w-6xl">

          <div className="mb-20 text-center">

            <p
              className="
                fade-up
                uppercase
                tracking-[0.5em]
                text-amber-400
              "
            >
              Roštiljnica Peulić
            </p>


            <h1
              className="
                fade-up
                delay1
                heading
                mt-6
                text-5xl
                md:text-6xl
              "
            >
              {t("title")}
            </h1>


            <p
              className="
                fade-up
                delay2
                mx-auto
                mt-6
                max-w-2xl
                text-zinc-400
              "
            >
              {t("description")}
            </p>

          </div>


          <div className="space-y-12">
            {categories.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-xl"
              >

                <h2 className="heading mb-8 text-3xl text-amber-400">
                  {section.title}
                </h2>


                <div className="divide-y divide-white/10">

                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-6 py-5"
                    >

                      <div>

                        <h3 className="text-lg font-medium text-white">
                          {item.name}
                        </h3>


                        {item.description && (
                          <p className="mt-1 text-sm text-zinc-400">
                            {item.description}
                          </p>
                        )}

                      </div>

                    </div>
                  ))}

                </div>

              </section>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}