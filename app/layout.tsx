import type { Metadata } from "next";
import "./globals.css";

import PageWrapper from "@/components/PageWrapper";
import SmoothScroll from "@/components/SmoothPageScroll";
import RevealObserver from "@/components/SectionUncoverAnimation";


export const metadata: Metadata = {
  title: "Roštiljnica Peulić",
  description: "Tradicionalna roštiljnica sa kvalitetnom hranom i prijatnom atmosferom.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="min-h-screen flex flex-col">
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
      </body>
    </html>
  );
}