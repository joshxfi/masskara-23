"use client";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef, ReactNode } from "react";

export const GSAP = ({ children }: { children: ReactNode }) => {
  const comp = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const lenis = new Lenis();

      lenis.on("scroll", (e: any) => {
        console.log(e);
      });

      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      gsap.from(".nav", {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        delay: 2,
      });

      gsap.from("#mask", {
        x: 1000,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.to("#mask", {
        scrollTrigger: {
          trigger: "#mask",
          markers: process.env.NODE_ENV === "development",
          start: "center center",
          scrub: 0.7,
        },
        y: 300,
        duration: 3,
        ease: "power4.out",
      });

      gsap.from(".anim-tr", {
        x: -1000,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 1,
      });

      gsap.from(".anim-tt", {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.5,
        delay: 4,
      });

      gsap.from(".bounce", {
        y: 5,
        duration: 1.5,
        yoyoEase: "power2.out",
        repeat: -1,
      });

      gsap.from(".trig-tr", {
        scrollTrigger: {
          trigger: ".trig-tr",
          markers: process.env.NODE_ENV === "development",
          start: "top bottom",
          scrub: 0.7,
        },
        x: -500,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        ease: "power2.out",
      });

      gsap.to(".trig-tl", {
        scrollTrigger: {
          trigger: ".trig-tl",
          markers: process.env.NODE_ENV === "development",
          start: "top top",
          scrub: 0.7,
        },
        x: 500,
        opacity: 0,
        duration: 2,
        stagger: 0.5,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);
  return <div ref={comp}>{children}</div>;
};
