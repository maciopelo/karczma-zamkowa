import { sections } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Offer = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="max-w-4xl text-stone-900">
        <h1 className="mb-6 text-2xl font-bold uppercase">Nasza Oferta</h1>
        <p className="text-lg">
          Organizujemy wyjątkowe wydarzenia – od urodzin i komunii, po przyjęcia
          firmowe i spotkania rodzinne. Nasza sala i menu dostosują się do
          Twoich potrzeb. Sprawdź sam!
        </p>

        <div className="flex flex-col justify-between md:flex-row">
          {['Catering', 'Sale', 'Imprezy'].map((offer) => (
            <Link
              key={offer}
              href={`/${sections.catering}`}
              className="my-5 rounded-full border-2 border-stone-900 bg-stone-200 px-10 py-6 text-center text-4xl text-stone-900 uppercase hover:border-stone-200 hover:bg-stone-950 hover:text-stone-200 md:my-7"
            >
              {offer}
            </Link>
          ))}
        </div>

        <Image
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Sala przyjęć"
          width={800}
          height={533} // Use the natural aspect ratio or a close estimate
          className="mb-6 h-auto w-full rounded-2xl object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Offer;
