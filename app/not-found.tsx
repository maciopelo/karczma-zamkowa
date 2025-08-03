// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.
import '../globals.css';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
});

const GlobalNotFound = () => {
  return (
    <html lang="pl">
      <body
        className={`${playfairDisplay.className} bg-stone-200 text-stone-700 antialiased`}
      >
        <div className="flex h-screen w-full flex-col items-center justify-center text-center">
          <h1 className="py-4 text-3xl font-bold md:text-4xl">
            Ups, nie znaleziono strony!
          </h1>
          <Link href="/">
            <span className="mr-2 text-xl text-stone-900">&#8592;</span>
            <span className="hover:underline"> Wróć do strony głównej</span>
          </Link>
        </div>
      </body>
    </html>
  );
};

export default GlobalNotFound;
