import { sections } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Parisienne } from 'next/font/google';
import Image from 'next/image';

const parisienne = Parisienne({ weight: '400', subsets: ['latin'] });

const nav = [
  {
    link: `/${sections.menu}`,
    label: 'Menu',
  },
  {
    link: `/${sections.dailyMeals}`,
    label: 'Dania dnia',
  },
  {
    link: `/${sections.offer}`,
    label: 'Oferta',
  },
];

const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-neutral-600/85 bg-cover bg-center px-4 pt-20 bg-blend-multiply"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 pb-10 text-4xl text-white sm:gap-20 md:py-40">
        <h1
          className={cn(
            parisienne.className,
            'text-center text-4xl sm:text-5xl',
          )}
        >
          Witaj w karczmie - ucztuj bez końca!
        </h1>
        <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 xl:gap-20">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="relative flex h-35 w-50 items-center justify-center rounded-2xl border border-stone-200 bg-neutral-950/85 md:h-70 md:w-xs xl:h-80"
            >
              <h2 className="px-10 text-center text-4xl text-stone-200 uppercase md:text-6xl">
                {item.label}
              </h2>
              <Image
                src="/leaf.png"
                alt="Gałązka"
                width={77}
                height={126}
                className="absolute top-0 left-0 w-11 md:w-auto"
              />
              <Image
                src="/leaf.png"
                alt="Gałązka"
                width={77}
                height={126}
                className="absolute right-0 bottom-0 w-11 rotate-180 md:w-auto"
              />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;
