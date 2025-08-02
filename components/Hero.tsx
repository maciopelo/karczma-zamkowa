import { sections } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Parisienne } from 'next/font/google';
import Image from 'next/image';

// export const metadata = {
//   title: 'Karczma Zamkowa – Tradycyjna Polska Restauracja w Kończycach Małych',
//   description:
//     'Karczma Zamkowa – wyjątkowa kuchnia polska w sercu Kończyc Małych. Zarezerwuj stolik już dziś!',
//   keywords: [
//     'restauracja Kończyce Małe',
//     'kuchnia polska',
//     'Karczma Zamkowa',
//     'tradycyjne jedzenie',
//     'dania dnia Kończyce Małe',
//   ],
//   openGraph: {
//     title: 'Karczma Zamkowa – Polska Restauracja w Kończycach Małych',
//     description: 'Poznaj tradycyjne smaki kuchni polskiej w Karczmie Zamkowej.',
//     url: 'https://karczma-zamkowa.pl',
//     siteName: 'Karczma Zamkowa',
//     images: [
//       {
//         url: 'https://karczma-zamkowa.vercel.app/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Karczma Zamkowa – Tradycyjna Polska Restauracja',
//       },
//     ],
//     locale: 'pl_PL',
//     type: 'website',
//   },
//   metadataBase: new URL('https://karczma-zamkowa.pl'),
// };

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
      className="h-full w-full bg-neutral-600/85 bg-cover bg-center px-4 pt-25 bg-blend-multiply sm:pt-15"
      style={{ backgroundImage: "url('/hero3.webp')" }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-7 pb-10 text-4xl text-white sm:h-screen sm:gap-10 md:py-30">
        <h1
          className={cn(
            parisienne.className,
            'text-center text-3xl sm:text-5xl',
          )}
        >
          Witaj w Karczmie Zamkowej - ucztuj bez końca!
        </h1>
        <p
          className={cn(
            parisienne.className,
            'text-center text-base text-stone-200 sm:text-2xl',
          )}
        >
          Poznaj smaki tradycyjnej kuchni polskiej w Kończycach Małych.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 xl:gap-20">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              aria-label={`Przejdź do sekcji ${item.label}`}
              className="group relative flex h-35 w-50 items-center justify-center rounded-2xl border border-stone-200 bg-neutral-950/85 uppercase transition-colors duration-300 ease-in-out hover:bg-stone-200 md:h-70 md:w-xs xl:h-80"
            >
              <h2 className="px-10 text-center text-4xl text-stone-200 transition-colors duration-300 ease-in-out group-hover:text-neutral-950 md:text-6xl">
                {item.label}
              </h2>

              <Image
                src="/leaf.png"
                alt="Ozdobny liść - element dekoracyjny"
                width={77}
                height={126}
                className="absolute top-0 left-0 w-11 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 md:w-auto"
              />
              <Image
                src="/leaf.png"
                alt="Ozdobny liść - element dekoracyjny"
                width={77}
                height={126}
                className="absolute right-0 bottom-0 w-11 rotate-180 transition-transform duration-300 ease-in-out group-hover:translate-y-1 md:w-auto"
              />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;
