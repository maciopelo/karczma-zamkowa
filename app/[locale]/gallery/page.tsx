import { redirect } from 'next/navigation';

export const revalidate = 1200; // 20 minutes

export default function GalleryRootPage() {
  redirect('/gallery/1');
}
