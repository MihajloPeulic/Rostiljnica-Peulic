import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "@/app/globals.css";
import "@/app/brand.css";
import PageWrapper from "@/components/PageWrapper";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export async function generateStaticParams() { return [{ locale: "ba" }, { locale: "en" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return pageMetadata((await params).locale);
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (locale !== "ba" && locale !== "en") notFound();
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Restaurant", "@id": `${site.url}/#restaurant`,
    name: site.name, url: site.url, image: `${site.url}/images/hero_img1.jpg`,
    telephone: site.phoneHref.replace("tel:", ""), email: site.email,
    servesCuisine: ["Barbecue", "Bosnian cuisine"],
    address: { "@type": "PostalAddress", streetAddress: "Ulica Doktora Slavka Šuška 54", addressLocality: "Prnjavor", postalCode: "78430", addressCountry: "BA" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "20:00" }],
    sameAs: [site.instagramUrl],
  };
  return <html lang={locale === "ba" ? "bs" : "en"}><body>
    <NextIntlClientProvider messages={messages}><PageWrapper>{children}</PageWrapper></NextIntlClientProvider>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
  </body></html>;
}
