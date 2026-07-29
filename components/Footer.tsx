import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-10 pb-6">

      <div className="container-page">

        <div className="grid gap-8 md:grid-cols-4">


          {/* BRAND */}

<div>

  <Image
    src="/images/logo_nav.png"
    alt="Roštiljnica Peulić logo"
    width={70}
    height={70}
    className="
      object-contain
      -rotate-10
      mb-4
    "
  />


  <h2 className="heading text-4xl">
    Roštiljnica Peulić
  </h2>


  <p className="mt-5 text-zinc-500">
    Mjesto za dobru hranu i prijatno druženje.
  </p>

</div>



          {/* NAVIGATION */}

          <div>

            <h3 className="mb-5 font-semibold">
              Navigacija
            </h3>

            <div className="space-y-3 text-zinc-400">

              <Link
                href="/"
                className="block hover:text-amber-400 transition"
              >
                Početna
              </Link>

              <Link
                href="/menu"
                className="block hover:text-amber-400 transition"
              >
                Meni
              </Link>

              <Link
                href="/gallery"
                className="block hover:text-amber-400 transition"
              >
                Galerija
              </Link>

              <Link
                href="/contact"
                className="block hover:text-amber-400 transition"
              >
                Kontakt
              </Link>

            </div>

          </div>




          {/* CONTACT */}

          <div>

            <h3 className="mb-5 font-semibold">
              Kontakt
            </h3>


            <div className="space-y-3 text-zinc-400">

              <p>
                +387 51 663 456
              </p>

              <p>
                info@rostiljnicapeulic.com
              </p>

              <p>
                Prnjavor
              </p>

            </div>

          </div>





          {/* SOCIAL */}

          <div>

            <h3 className="mb-5 font-semibold">
              Pronađite nas:
            </h3>


            <div className="flex gap-4">


              {/* Instagram */}

              <Link
                href="https://www.instagram.com/rostiljnica.peulic/"
                target="_blank"
                aria-label="Instagram"
                className="social-circle"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/>
                </svg>

              </Link>




              
{/* 
              <Link
                href="#"
                aria-label="Facebook"
                className="social-circle"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M13.5 22v-8h2.5l.5-3h-3V9.1c0-.9.3-1.5 1.6-1.5H17V5a25 25 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2H8v3h2.8v8h2.7Z"/>
                </svg>

              </Link>
 */}

            </div>

          </div>


        </div>





        {/* COPYRIGHT */}

<div className="
  mt-10
  border-t
  border-white/10
  pt-6
  text-center
  text-sm
  text-zinc-500
">

  © 2026 Roštiljnica Peulić. Sva prava zadržana.

</div>


      </div>

    </footer>
  );
}