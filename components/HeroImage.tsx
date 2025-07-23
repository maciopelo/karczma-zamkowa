"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroImage = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .from(
        paragraphRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="hero-image h-screen md:bg-fixed bg-center md:bg-cover flex items-center justify-center bg-blend-overlay bg-black/50">
      <div className="flex flex-col w-full justify-start p-4 md:p-10">
        <h1
          ref={titleRef}
          className="flex flex-col text-3xl sm:text-4xl md:text-6xl font-extrabold mb-2 sm:mb-4"
        >
          Tu zjesz jak król
          <span ref={subtitleRef}>
            prosto, smacznie
            <span className="text-xs sm:text-sm md:text-lg font-extralight">
              i bez zadęcia
            </span>
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-xl max-w-xlfont-bold"
        >
          Zamkowy klimat. Barowe klasyki. Zawsze gościnnie.
        </p>
      </div>
    </section>
  );
};

export default HeroImage;
