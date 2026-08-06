import { ShieldCheck, ChefHat, UsersRound } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "en" ? "About Us" : "O nama",
    
    description:
      locale === "en"
        ? "Discover the story behind Peulić Grill in Prnjavor. Learn about our commitment to fresh locally sourced meat, traditional recipes, and welcoming atmosphere."
        : "Upoznajte priču iza Roštiljnice Peulić u Prnjavoru. Saznajte više o našoj tradiciji, isključivo svježem domaćem mesu i prijateljskom ambijentu.",
    
    keywords:
      locale === "en"
        ? ["about Peulic Grill", "restaurant history Prnjavor", "traditional barbecue tradition", "best grill Prnjavor story"]
        : ["o nama roštiljnica peulić", "tradicija roštilja Prnjavor", "domaće meso Prnjavor", "restoran sa tradicijom"],
    
    openGraph: {
      title:
        locale === "en"
          ? "About Us | Peulić Grill"
          : "O nama | Roštiljnica Peulić",
      description:
        locale === "en"
          ? "The tradition of authentic barbecue. Learn why our guests keep coming back."
          : "Tradicija pravog roštilja. Saznajte zašto nam se gosti rado iznova vraćaju.",
      // url: "/images/gornji_sprat.png", 
    },
  };
}


export default async function AboutPage() {
  const t = await getTranslations("about");

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
              {t("title1")}
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
              {t("title2")}
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
              {t("desc")}
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
    relative
    rounded-[40px]
    overflow-hidden
    border
    border-white/10
    h-[500px]
  "
>
              <Image
  src="/images/gornji_sprat.jpg"
  alt="Ambijent Roštiljnice Peulić Prnjavor"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  quality={80}
  className="
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
                {t("st")}
              </p>

              <h2
                className="
                  heading
                  text-4xl
                  mt-5
                "
              >
                {t("st2")}
              </h2>

              <p
                className="
                  mt-6
                  text-zinc-400
                  leading-8
                "
              >
               {t("sc1")}
              </p>

              <p
                className="
                  mt-5
                  text-zinc-400
                  leading-8
                "
              >
                {t("sc2")}
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
                icon: <ShieldCheck className="w-8 h-8" strokeWidth={2} />,
                title: t("c1t"),
                text: t("c1c")
              },
              {
                icon: <ChefHat className="w-8 h-8" strokeWidth={2} />,
                title: t("c2t"),
                text: t("c2c")
              },
              {
                icon: <UsersRound className="w-8 h-8" strokeWidth={2} />,
                title: t("c3t"),
                text: t("c3c")
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
                  hover:-translate-y-3
                    transition
                    duration-500
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

          {/* FINAL CTA */}
          <div
            className="
              mt-32
              rounded-[40px]
              overflow-hidden
              relative
              h-[450px]
            "
          >
            <Image
  src="/images/hero_img1.jpg"
  alt="Ukusna hrana i roštilj"
  fill
  sizes="100vw"
  quality={80}
  className="
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
                {t("lt")}
              </h2>

              <p
                className="
                  mt-5
                  text-zinc-300
                  text-lg
                  max-w-2xl
                "
              >
                {t("ld")}
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}