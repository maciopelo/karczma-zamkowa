import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Karczma Zamkowa',
  description: 'Karczma Zamkowa - Traditional Polish Cuisine',
};
export default function Home() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}
