"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryGridProps {
  images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* GRID */}
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
            onClick={() => setSelectedIndex(index)}
            className={`
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              cursor-pointer
              group
              aspect-square
              ${
                index === 1
                  ? "lg:row-span-2 lg:h-[870px] lg:aspect-auto"
                  : ""
              }
            `}
          >
            <Image
              src={image}
              alt="Roštiljnica Peulić"
              fill
              sizes={
                index === 1
                  ? "(max-width: 1024px) 100vw, 66vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              quality={index === 1 ? 100 : 85}
              priority={index < 3} // Prve 3 slike učitavamo prioritetno za bolje performanse i SEO
              className="
                object-cover
                group-hover:scale-110
                transition
                duration-700
              "
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
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
          {/* PREVIEW IMAGE CONTAINER */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              max-h-[75vh]
              max-w-[90vw]
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >
            <Image
              src={images[selectedIndex]}
              alt="Preview"
              fill
              sizes="90vw"
              priority
              className="
                rounded-3xl
                object-contain
              "
            />
          </div>

          {/* MOBILE NAVIGATION */}
          <div
            className="
              flex
              min-[830px]:hidden
              absolute
              bottom-6
              items-center
              gap-28
              z-10
            "
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="
                cursor-pointer
                text-white
                text-6xl
                hover:text-amber-400
                transition
              "
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="
                cursor-pointer
                text-white
                text-6xl
                hover:text-amber-400
                transition
              "
            >
              ›
            </button>
          </div>

          {/* DESKTOP LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="
              hidden
              min-[830px]:block
              cursor-pointer
              absolute
              left-4
              xl:left-10
              top-1/2
              -translate-y-1/2
              text-white
              text-6xl
              hover:text-amber-400
              transition
              z-10
            "
          >
            ‹
          </button>

          {/* DESKTOP RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              hidden
              min-[830px]:block
              cursor-pointer
              absolute
              right-4
              xl:right-10
              top-1/2
              -translate-y-1/2
              text-white
              text-6xl
              hover:text-amber-400
              transition
              z-10
            "
          >
            ›
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="
              cursor-pointer
              absolute
              top-6
              right-6
              text-white
              text-5xl
              hover:text-amber-400
              transition
              z-10
            "
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}