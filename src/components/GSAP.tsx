"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef, ReactNode } from "react";

export const GSAP = ({ children }: { children: ReactNode }) => {
  const comp = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".text",
        {
          x: -1000,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out", stagger: 0.5, delay: 1 }
      );

      gsap.fromTo(
        "#mask",
        {
          x: 1000,
          opacity: 0,
        },
        { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        ".nav",
        {
          y: -200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.5,
          delay: 2,
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);
  return <div ref={comp}>{children}</div>;
};
