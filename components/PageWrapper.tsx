import Navbar from "./Navbar";
import Footer from "./Footer";
import { getLocale } from "next-intl/server";
export default async function PageWrapper({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return <><a className="skip-link" href="#main-content">{locale === "en" ? "Skip to content" : "Preskoči na sadržaj"}</a><Navbar /><div className="scroll-progress" aria-hidden="true" /><main id="main-content">{children}</main><Footer /></>;
}
