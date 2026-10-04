"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLocale } from "next-intl";

export default function GalleryGrid({ images }: { images: { src: string; alt: string }[] }) {
  const locale = useLocale();
  const [selected, setSelected] = useState<number | null>(null);
  const isOpen = selected !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected(index => index === null ? null : (index + 1) % images.length);
      if (e.key === "ArrowLeft") setSelected(index => index === null ? null : (index - 1 + images.length) % images.length);
      if (e.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>(".lightbox button"));
        const index = controls.indexOf(document.activeElement as HTMLButtonElement);
        if (e.shiftKey && index <= 0) { e.preventDefault(); controls[controls.length - 1]?.focus(); }
        else if (!e.shiftKey && index === controls.length - 1) { e.preventDefault(); controls[0]?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; previousFocus.current?.focus(); };
  }, [isOpen, images.length]);
  return <><div className="gallery-grid">{images.map((image,index) => <button className={`gallery-tile gallery-tile--${index % 7}`} key={image.src} type="button" onClick={() => setSelected(index)} aria-label={image.alt}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></button>)}</div>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={images[selected].alt} onClick={() => setSelected(null)}><button ref={closeRef} className="lightbox-close" type="button" aria-label={locale === "en" ? "Close image" : "Zatvori sliku"} onClick={() => setSelected(null)}><X /></button><button className="lightbox-prev" type="button" aria-label={locale === "en" ? "Previous image" : "Prethodna slika"} onClick={e => {e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length);}}><ChevronLeft /></button><div className="lightbox-image" onClick={e => e.stopPropagation()}><Image src={images[selected].src} alt={images[selected].alt} fill sizes="100vw" /></div><button className="lightbox-next" type="button" aria-label={locale === "en" ? "Next image" : "Sljedeća slika"} onClick={e => {e.stopPropagation(); setSelected((selected + 1) % images.length);}}><ChevronRight /></button><p className="lightbox-count">{selected + 1} / {images.length}</p></div>}
  </>;
}
