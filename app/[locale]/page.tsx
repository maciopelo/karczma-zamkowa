import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: 'Karczma Zamkowa',
    description: t('heroDescription'),
  };
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
