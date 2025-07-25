'use client';
import Slider from './Slider';

const HeroImage = () => {
  return (
    <section
      className="h-screen w-full bg-neutral-600/85 bg-cover bg-center bg-blend-multiply"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      <div className="flex h-full w-full items-center justify-center text-4xl text-white">
        <Slider />
      </div>
    </section>
  );
};

export default HeroImage;
