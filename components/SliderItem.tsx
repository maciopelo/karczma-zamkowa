import Link from 'next/link';
import { Parisienne } from 'next/font/google';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const parisienne = Parisienne({ weight: '400', subsets: ['latin'] });

interface Props {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
  buttonText: string;
  buttonLink: string;
}

export default function SliderItem({
  title,
  subtitle,
  image,
  imageAlt,
  isReversed = false,
  buttonLink,
  buttonText,
}: Props) {
  return (
    <div className="flex h-[70vh] items-center justify-center px-4 sm:h-screen sm:px-14">
      <div className="flex items-center justify-center md:gap-10 lg:gap-30 xl:gap-40">
        <div
          className={cn(
            'flex max-w-xl flex-1 flex-col items-center',
            isReversed ? 'order-2' : 'order1',
          )}
        >
          <h1
            className={cn(
              parisienne.className,
              'text-center text-4xl sm:text-5xl',
            )}
          >
            {title}
          </h1>
          <Link
            href={buttonLink}
            className="my-10 rounded-full border-2 border-stone-950 bg-stone-200 px-10 py-6 text-center text-4xl text-stone-950 uppercase sm:text-6xl"
          >
            {buttonText}
          </Link>
          <p className="text-center text-base sm:text-xl">{subtitle}</p>
        </div>
        <div
          className={cn(
            'hidden flex-1 items-center justify-center lg:flex',
            isReversed ? 'order-1' : 'order2',
          )}
        >
          <Image
            src={image}
            width={450}
            height={450}
            alt={imageAlt}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
