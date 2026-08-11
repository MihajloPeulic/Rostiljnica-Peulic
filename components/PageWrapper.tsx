import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
 
export default async function PageWrapper({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {  

  const t = await getTranslations("navbar");

  // Prevodi za navigaciju restorana
  const links = [
    { name: t("home"), href: "/" },
    { name: t("menu"), href: "/menu" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/contact" },
  ];

  const bb = t("button");
  const bbp = t("button_phone");

  return (
      <div className="relative min-h-screen overflow-hidden text-white">

        

        <Navbar links={links} bb={bb} bbp={bbp}/>

        <main className="flex-1">
          {children}
        </main>

        <Footer 
          links={links} 
          kk={t("contact")} 
          nn={t("navigation")} 
          fu={t("fu")} 
          desc={t("desc")} 
          rights={t("rights")} 
        />

      </div>
  );
}