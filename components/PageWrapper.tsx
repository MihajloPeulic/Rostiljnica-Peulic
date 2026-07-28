"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">

      <div className="pointer-events-none fixed -top-40 -left-40 h-500px w-500px rounded-full bg-amber-500/20 blur-circle" />

      <div className="pointer-events-none fixed bottom-0 right-0 h-450px w-450px rounded-full bg-red-600/20 blur-circle" />


      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}