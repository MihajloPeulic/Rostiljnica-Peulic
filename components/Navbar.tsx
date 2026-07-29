"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <nav className="fixed top-0 left-0 z-50 w-full px-3 md:px-6 xl:px-8">

        <div className="w-full mt-4 md:max-w-[1400px] md:mx-auto">

          <div
            className="
              navbar-pill
              flex
              h-20
              items-center
              justify-between
              gap-4
              px-5
              md:px-8
            "
          >


            {/* LOGO */}

            <Link
              href="/"
              className="shrink-0 flex items-center gap-3"
            >

              <Image
                src="/images/logo_nav.png"
                alt="Roštiljnica Peulić logo"
                width={50}
                height={50}
                className="object-contain -rotate-10"
              />


              <h2
                className="
                  heading
                  whitespace-nowrap
                  hidden
                  min-[460px]:block
                  text-[clamp(1.25rem,2.3vw,2.5rem)]
                  italic
                  tracking-wide
                "
              >
                Roštiljnica Peulić
              </h2>

            </Link>





            {/* DESKTOP LINKS */}

            <div
              className="
                hidden
                xl:flex
                items-center
                gap-10
              "
            >

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    nav-link-underline
                    whitespace-nowrap
                    text-sm
                    uppercase
                    tracking-[0.25em]
                    text-zinc-300
                    transition
                    hover:text-amber-400
                  "
                >
                  {link.name}
                </Link>

              ))}

            </div>





            {/* ACTIONS */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-4
              "
            >


              {/* MOBILE BUTTON */}

              <button
                onClick={() => setIsOpen(true)}
                className="
                  text-3xl
                  xl:hidden
                "
                aria-label="Otvori meni"
              >
                ☰
              </button>




              {/* DESKTOP BUTTON */}

              <Link
                href="/contact"
                className="
                  cursor-pointer
                  btn-primary
                  hidden
                  xl:block
                  whitespace-nowrap
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  transition
                  duration-300
                  hover:scale-105
                  hover:-translate-y-1
                "
              >
                Rezerviši
              </Link>


            </div>


          </div>

        </div>

      </nav>








      {/* MOBILE SIDE MENU OVERLAY */}

      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />






      {/* MOBILE SIDE MENU */}

      <aside
  className={`
    fixed
    top-0
    right-0
    z-[100]
    h-full
    w-[85%]
    max-w-sm
    bg-zinc-950
    border-l
    border-white/10
    px-8
    py-10
    transition-transform
    duration-500
    ease-out
    ${
      isOpen
        ? "translate-x-0"
        : "translate-x-full"
    }
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
      transition
      hover:bg-white
      hover:text-black
    "
  >
    ✕
  </button>




  <div
    className="
      mt-24
      flex
      h-[calc(100%-120px)]
      flex-col
      justify-between
    "
  >


    {/* LINKS */}

    <nav className="space-y-7">

      {links.map((link, index) => (

        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="
            block
            text-lg
            uppercase
            tracking-[0.35em]
            text-zinc-300
            transition
            hover:text-amber-400
            hover:translate-x-2
          "
          style={{
            transitionDelay: `${index * 70}ms`
          }}
        >
          {link.name}
        </Link>

      ))}

    </nav>





    {/* BUTTON */}

    <button
      className="
        cursor-pointer
        btn-primary
        w-full
        text-sm
        uppercase
        tracking-[0.25em]
      "
    >
      Rezerviši sto
    </button>


  </div>


</aside>

    </>
  );
}