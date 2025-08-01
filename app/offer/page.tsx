import { sections } from '@/constants';
import { get } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export interface IOffer {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
}

export interface IOfferResponse {
  id: number;
  slug: string;
  acf: {
    name: string;
    description: string;
    price: number;
  };
}

// export const metadata = {
//   title: 'Karczma Zamkowa – Nasza Oferta',
//   description: 'Sprawdź naszą ofertę organizacji przyjęć i wydarzeń.',
// };

export const revalidate = 21600;

const fetchOfferIdsAndNames = async (): Promise<IOffer[]> => {
  const offers = await get('/offer', {
    _fields: 'id,slug,acf.name',
  });

  return offers.map((offer: IOfferResponse) => ({
    id: offer.id,
    slug: offer.slug,
    ...offer.acf,
  }));
};

const Offer = async () => {
  const offers = await fetchOfferIdsAndNames();

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="w-full max-w-5xl text-stone-700">
        <h1 className="mb-6 text-2xl font-bold uppercase">Nasza Oferta</h1>
        <p className="mb-10 text-lg">
          Organizujemy wyjątkowe wydarzenia – od urodzin i komunii, po przyjęcia
          firmowe i spotkania rodzinne. Nasza sala i menu dostosują się do
          Twoich potrzeb. Sprawdź sam!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              href={`/${sections.offer}/${offer.slug}`}
              className="flex basis-full items-center justify-center rounded-xl border-2 border-stone-900 bg-stone-200 px-6 py-4 text-center text-xl font-semibold text-stone-900 uppercase transition-all duration-300 hover:border-stone-200 hover:bg-stone-950 hover:text-stone-200 sm:basis-[48%] lg:basis-[31%]"
            >
              {offer.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 w-full">
          <Image
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Sala przyjęć"
            width={800}
            height={533}
            className="mx-auto w-full max-w-3xl rounded-xl object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
