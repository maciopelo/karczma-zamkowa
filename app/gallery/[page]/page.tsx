import Gallery from '@/components/Gallery';
import { notFound, redirect } from 'next/navigation';

const ITEMS_PER_PAGE = 12;

export const revalidate = 21600; // 6 hours

export async function generateStaticParams() {
  const offersResponse = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/media`,
  );
  const total = Number(offersResponse.headers.get('X-WP-Total')) || 0;

  return Array.from({ length: Math.ceil(total / ITEMS_PER_PAGE) }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

const fetchGallery = async (page: number) => {
  const params = `?_fields=id,source_url&per_page=${ITEMS_PER_PAGE}&page=${page}`;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_URL}/media${params}`,
  );

  if (!response.ok) {
    return redirect('/gallery/1');
  }

  const media = await response.json();

  return media;
};

interface Props {
  params: Promise<{ page: string }>;
}

const GalleryPage = async ({ params }: Props) => {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  if (isNaN(currentPage) || currentPage < 1) return notFound();

  const images = await fetchGallery(currentPage);

  return <Gallery images={images} page={currentPage} />;
};

export default GalleryPage;
