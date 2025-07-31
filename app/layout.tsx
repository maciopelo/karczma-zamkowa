import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Karczma Zamkowa',
  description: 'Karczma Zamkowa - najlepsze jedzenie w Kończycach Małych',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="bg-stone-200">
      <body
        className={`${playfairDisplay.className} text-stone-200 antialiased`}
      >
        <Header />
        <main>{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
