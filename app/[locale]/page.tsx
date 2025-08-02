import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import { setRequestLocale } from 'next-intl/server';

export const metadata = {
  title: 'Karczma Zamkowa',
  description: 'Karczma Zamkowa - Traditional Polish Cuisine',
};

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Readonly<Props>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}
