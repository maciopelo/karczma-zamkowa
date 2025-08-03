import Gallery from '@/components/Gallery';
import { GALLERY_ITEMS_PER_PAGE } from '@/constants';
import { authHeaders } from '@/utils';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

const fetchGallery = async (page: number) => {
  const offersResponse = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/media?per_page=${GALLERY_ITEMS_PER_PAGE}&page=${page}&_fields=id,source_url`,
    {
      method: 'GET',
      headers: authHeaders,
    },
  );

  const total = Number(offersResponse.headers.get('X-WP-Total')) || 0;

  const images = await offersResponse.json();

  return {
    images,
    pages: Math.ceil(total / GALLERY_ITEMS_PER_PAGE),
  };
};

export const revalidate = 1200; // 20 minutes

export async function generateStaticParams() {
  const offersResponse = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/media`,
    {
      method: 'GET',
      headers: authHeaders,
    },
  );
  const total = Number(offersResponse.headers.get('X-WP-Total')) || 0;

  return Array.from(
    { length: Math.ceil(total / GALLERY_ITEMS_PER_PAGE) },
    (_, i) => ({
      page: (i + 1).toString(),
    }),
  );
}

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: `Karczma Zamkowa - ${t('gallery')}`,
    description: t('galleryDescription'),
  };
};

interface Props {
  params: Promise<{ page: string }>;
}

const GalleryPage = async ({ params }: Props) => {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  if (isNaN(currentPage) || currentPage < 1) return notFound();

  const { images, pages } = await fetchGallery(currentPage);

  if (pages && currentPage > pages) return notFound();

  return <Gallery images={images} page={currentPage} pages={pages} />;
};

export default GalleryPage;
