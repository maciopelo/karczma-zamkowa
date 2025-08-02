'use client';

import Error from 'next/error';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

const GlobalNotFound = () => {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />;
      </body>
    </html>
  );
};

export default GlobalNotFound;
