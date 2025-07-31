import { redirect } from 'next/navigation';

export const revalidate = 21600;

export default function GalleryRootPage() {
  redirect('/gallery/1');
}
