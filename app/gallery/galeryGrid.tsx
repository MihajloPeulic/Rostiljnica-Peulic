"use client";

import { useState } from "react";


interface GalleryGridProps {
  images: string[];
}


export default function GalleryGrid({ images }: GalleryGridProps) {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`
              reveal
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              cursor-pointer
              group
              ${
                index === 1
                ? "lg:row-span-2 h-[870px]"
                : "h-[420px]"
              }
            `}
          >

            <img
              src={image}
              alt="Roštiljnica Peulić"
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-700
              "
            />

          </button>

        ))}

      </div>



      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed
            inset-0
            z-[100]
            bg-black/90
            flex
            items-center
            justify-center
            p-6
          "
        >

          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-3xl
              object-contain
            "
          />


          <button
            onClick={() => setSelectedImage(null)}
            className="
                cursor-pointer
              absolute
              top-8
              right-8
              text-white
              text-5xl
              hover:text-amber-400
              transition
            "
          >
            ×
          </button>


        </div>

      )}

    </>
  );
}