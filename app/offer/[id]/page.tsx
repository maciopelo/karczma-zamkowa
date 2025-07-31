import Image from 'next/image';
import React from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const fetchOffer = async (id: string) => {
  const offerResponse = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/offer/${id}?_fields=id,acf`,
  );

  const offer = await offerResponse.json();

  const imageResponse = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/media/${offer.acf.image}?_fields=source_url`,
  );

  const imageUrl = await imageResponse.json();

  return { ...offer.acf, image: imageUrl.source_url };
};

export default async function OfferPage({ params }: Props) {
  const { id } = await params;
  const offer = await fetchOffer(id);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-stone-100 px-4 py-16 pt-30 md:pt-10">
      <h1 className="mb-10 text-left text-4xl font-bold text-stone-700 uppercase">
        {offer.name}
      </h1>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 md:flex-row md:items-start">
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
