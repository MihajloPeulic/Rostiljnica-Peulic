
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {  

  const t = await getTranslations("navbar");


  const links = [
    { name: t("home"), href: "/" },
    { name: t("menu"), href: "/menu" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  const bb = t("button")
  const bbp = t("button_phone")



  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      <div className="pointer-events-none fixed -top-40 -left-40 h-500px w-500px rounded-full bg-amber-500/20 blur-circle" />

      <div className="pointer-events-none fixed bottom-0 right-0 h-450px w-450px rounded-full bg-red-600/20 blur-circle" />


      <Navbar links={links} bb={bb} bbp={bbp}/>

      <main className="flex-1">
        {children}
      </main>

      <Footer links={links} kk={t("contact")} nn={t("navigation")} fu={t("fu")} desc={t("desc")} rights={t("rights")} />

    </div>
  );
}