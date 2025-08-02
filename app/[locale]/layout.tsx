import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import '../../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Karczma Zamkowa',
  description: 'Karczma Zamkowa - najlepsze jedzenie w Kończycach Małych',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<Props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="bg-stone-200">
      <body
        className={`${playfairDisplay.className} text-stone-200 antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <CookieConsent />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
