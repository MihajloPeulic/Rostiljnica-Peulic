import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";

import PageWrapper from "@/components/PageWrapper";
import SmoothScroll from "@/components/SmoothPageScroll";
import RevealObserver from "@/components/SectionUncoverAnimation";

const locales = ["ba", "en"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default:
        locale === "en"
          ? "Peulić Grill | Authentic Barbecue in Prnjavor"
          : "Roštiljnica Peulić | Najbolji roštilj u Prnjavoru",
      template:
        locale === "en" 
          ? "%s | Peulić Grill" 
          : "%s | Roštiljnica Peulić",
    },
    description:
      locale === "en"
        ? "Authentic barbecue in Prnjavor. Peulić Grill offers top-quality traditional dishes, fresh locally sourced meat, and a warm, welcoming atmosphere."
        : "Restoran u Prnjavoru gdje se spajaju tradicija i pravi ukus. Uživajte u vrhunskom roštilju, svježem domaćem mesu i prijatnoj atmosferi.",
        keywords:
      locale === "en"
        ? ["barbecue Prnjavor", "grill Prnjavor", "cevapi Prnjavor", "traditional food", "Peulic Grill", "restaurant Prnjavor"]
        : ["roštilj Prnjavor", "ćevapi Prnjavor", "restoran Prnjavor", "najbolja hrana Prnjavor", "domaća kuhinja", "Roštiljnica Peulić"],
    openGraph: {
      title:
        locale === "en"
          ? "Peulić Grill Prnjavor"
          : "Roštiljnica Peulić Prnjavor",
      description:
        locale === "en"
          ? "The tradition of authentic barbecue."
          : "Tradicija pravog domaćeg roštilja.",
      url: "https://rostiljnicapeulic.com", // Ne zaboravi zamijeniti sa pravom domenom kad je budeš imao
      siteName:
        locale === "en"
          ? "Peulić Grill"
          : "Roštiljnica Peulić",
      images: [
        {
          url: "/images/hero_img1.jpg", 
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Peulić Grill Ambiance" : "Roštiljnica Peulić Ambijent",
        },
      ],
      locale: locale === "en" ? "en_US" : "bs_BA",
      type: "website",
    },
  };
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;


  if (!locales.includes(locale)) {
    notFound();
  }


  const messages = await getMessages();



  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Roštiljnica Peulić",
    "image": "/images/logo_nav.png",
    "url": "https://rostiljnicapeulic.com",
    "telephone": "+38751663456",
    "servesCuisine": "Barbecue",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "78430",
      "streetAddress": "Ulica Doktora Slavka Šuška 54",
      "addressLocality": "Prnjavor",
      "addressRegion": "RS",
      "addressCountry": "BA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "20:00"
      }
    ]
  };


  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">

        <NextIntlClientProvider messages={messages}>

          <SmoothScroll />

          <PageWrapper>

            {/* BACKGROUND BLOBS */}

            <div
              className="
                fixed
                -top-40
                -left-40
                w-[500px]
                h-[500px]
                rounded-full
                bg-amber-500/20
                blur-[120px]
                pointer-events-none
              "
            />

            <div
              className="
                fixed
                bottom-0
                right-0
                w-[450px]
                h-[450px]
                rounded-full
                bg-red-600/20
                blur-[120px]
                pointer-events-none
              "
            />


            {children}


            <RevealObserver />

          </PageWrapper>

        </NextIntlClientProvider>


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

      </body>
    </html>
  );
}