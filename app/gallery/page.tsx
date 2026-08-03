
import GalleryGrid from "./galeryGrid";


const images = [
  "/images/batak.png",
  "/images/vina.png",
  "/images/hero_img1.jpg",
  "/images/gornji_sprat.png",
  "/images/cevapi.png",
  "/images/plata_za_troje.png",
  "/images/basta.png",
  "/images/poh_pile.png",
  "/images/riblji_stapici.png",
   "/images/unutra1.png",
  "/images/vjesalice.png",
  "/images/koljenica.png",
  "/images/plata.png",
  "/images/unutra2.jpeg",
  
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">


      <section className="pt-40 pb-32">

        <div className="container-page">


          <div className="text-center mb-20">

  <p
    className="
      fade-up
      uppercase
      tracking-[0.5em]
      text-amber-400
    "
  >
    Galerija
  </p>


  <h1
    className="
      fade-up
      delay1
      heading
      text-5xl
      md:text-7xl
      mt-6
    "
  >
    Ukusi i atmosfera
  </h1>


  <p
    className="
      fade-up
      delay2
      mt-6
      max-w-2xl
      mx-auto
      text-zinc-400
      text-lg
    "
  >
    Pogledajte djelić naše kuhinje, specijaliteta i ambijenta
    u kojem nastaju nezaboravni trenuci.
  </p>

</div>



          <GalleryGrid images={images}/>


        </div>

      </section>

    </main>
  );
}