import Image from 'next/image';
import React from 'react';
import { IOffer } from '../page';
import Link from 'next/link';
import { sections } from '@/constants';
import { get } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 21600; // 6 hours

export async function generateStaticParams() {
  const offers = await get('/offer', {
    _fields: 'slug',
  });

  return offers.map((offer: IOffer) => ({
    slug: offer.slug,
  }));
}

const fetchOffer = async (slug: string) => {
  const [offer] = await get('/offer', {
    slug,
    _fields: 'id,acf',
  });

  const imageUrl = await get(`/media/${offer.acf.image}`, {
    _fields: 'source_url',
  });

  return { ...offer.acf, image: imageUrl.source_url };
};

export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = await fetchOffer(slug);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-stone-100 px-4 py-16 pt-30 md:pt-10">
      <h1 className="mb-10 self-start text-left text-4xl font-bold text-stone-700 uppercase sm:self-auto">
        {offer.name}
      </h1>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row md:items-start">
        <Link
          href={`/${sections.offer}`}
          className="absolute top-[-75px] right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-stone-700 text-xl text-stone-200 shadow hover:bg-stone-400 disabled:opacity-50 sm:top-[-80px] md:h-10 md:w-10"
          aria-label="Poprzedni"
        >
          <span className="mb-1">&#8592;</span>
        </Link>
        <div className="w-full md:w-1/2">
          <p className="text-lg leading-relaxed whitespace-pre-wrap text-stone-700">
            {offer.description}
          </p>
          <span className="text-xl font-medium text-stone-700">
            {offer.price ? `${offer.price} zł` : ''}
          </span>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={offer.image}
            alt={offer.name}
            width={400}
            height={400}
            className="w-full rounded-xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
