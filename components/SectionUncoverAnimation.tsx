"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {

  const pathname = usePathname();


  useEffect(() => {

    const elements = document.querySelectorAll(".reveal");


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.15,
      }
    );


    elements.forEach((el) => {
      observer.observe(el);
    });


    return () => {
      observer.disconnect();
    };


  }, [pathname]);


  return null;
}