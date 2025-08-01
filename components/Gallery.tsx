'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface IImage {
  id: number;
  source_url: string;
}

interface Props {
  page: number;
  pages?: number;
  images: IImage[];
}

const Gallery = ({ images, page, pages }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col items-center bg-stone-200 px-4 pt-24 md:pt-30">
      <div className="w-full max-w-6xl text-stone-700">
        <h1 className="mb-6 text-2xl font-bold uppercase">Galeria</h1>
        <p className="mb-6 text-lg">
          Zobacz nasze wnętrza, potrawy i chwile z naszych wydarzeń.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image, idx) => (
            <Image
              key={image.id}
              src={image.source_url}
              width={300}
              height={300}
              alt={`Galeria ${idx + 1}`}
              onClick={() => setSelectedImage(image.source_url)}
              className="h-64 w-full cursor-pointer rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        <div className="my-4 flex justify-center gap-4">
          <Link
            href={`/gallery/${page === 1 ? 1 : page - 1}`}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-stone-700 text-xl text-stone-200 shadow hover:bg-stone-400 disabled:opacity-50"
            aria-label="Poprzedni"
          >
            <span className="mb-1">&#8592;</span>
          </Link>
          <Link
            href={`/gallery/${pages && page < pages ? page + 1 : 1}`}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-stone-700 text-xl text-stone-200 shadow hover:bg-stone-400 disabled:opacity-50"
            aria-label="Następny"
          >
            <span className="mb-1"> &#8594;</span>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="animate-fadeIn relative w-[90%] max-w-3xl scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside image
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 h-10 w-10 cursor-pointer rounded-full bg-stone-200 p-2 text-black shadow hover:bg-stone-400"
              aria-label="Zamknij"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              width={300}
              height={300}
              alt=""
              className="max-h-[80vh] w-full rounded-xl object-contain shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
