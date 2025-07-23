'use client';

import Image from 'next/image';

const HeroImage = () => {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/hero.webp"
        role="presentation"
        alt="" // No need for alt, presentation element
        width={1440}
        height={1080}
        className="h-full w-full object-cover object-center"
        priority
      />
      <div className="absolute top-0 h-full w-full bg-neutral-950/60" />
      <div className="absolute inset-0 hidden flex-col items-center justify-center px-4 md:flex lg:px-10"></div>
    </section>
  );
};

export default HeroImage;
