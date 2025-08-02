import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/**'),
      new URL('http://localhost:10008/wp-content/**'),
      new URL('http://serwer371352.lh.pl/public/wp-content/**'),
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
