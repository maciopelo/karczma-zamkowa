import { redirect } from 'next/navigation';

export const revalidate = 21600; // 6 hours

export default function GalleryRootPage() {
  redirect('/gallery/1');
}
