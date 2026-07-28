"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Početna", href: "/" },
    { name: "Meni", href: "/menu" },
    { name: "Galerija", href: "/gallery" },
    { name: "O nama", href: "/about" },
    { name: "Kontakt", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-4">

        <div className="container-page mt-4">

          <div
            className="
              navbar-pill
              mx-2
              flex
              h-20
              items-center
              justify-between
              gap-4
              px-5
              md:mx-6
              md:px-8
            "
          >


            {/* LOGO */}

            <Link href="/" className="shrink-0">

              <h2
                className="
                  heading
                  whitespace-nowrap
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  italic
                  tracking-wide
                "
              >
                Roštiljnica Peulić
              </h2>

            </Link>





            {/* DESKTOP LINKS */}

            <div className="hidden items-center gap-10 md:flex">

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-underline whitespace-nowrap"
                >
                  {link.name}
                </Link>

              ))}

            </div>





            {/* ACTIONS */}

            <div className="flex shrink-0 items-center gap-4">


              <button
                onClick={() => setIsOpen(true)}
                className="
                  text-3xl
                  md:hidden
                "
                aria-label="Otvori meni"
              >
                ☰
              </button>



              <button
                className="
                  cursor-pointer
                  btn-primary
                  hidden
                  md:block
                  whitespace-nowrap
                "
              >
                Rezerviši
              </button>


            </div>


          </div>

        </div>

      </nav>







      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          ${isOpen ? "flex" : "hidden"}
          flex-col
          items-center
          justify-center
          bg-zinc-950
        `}
      >


        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute
            top-6
            right-6
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-3
            font-medium
            hover:bg-white
            hover:text-black
          "
        >
          ✕ Zatvori
        </button>





        <div className="space-y-8 text-center text-3xl">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                hover:text-amber-400
              "
            >
              {link.name}
            </Link>

          ))}



          <button
            className="
              cursor-pointer
              btn-primary
              text-xl
            "
          >
            Rezerviši sto
          </button>


        </div>


      </div>

    </>
  );
}