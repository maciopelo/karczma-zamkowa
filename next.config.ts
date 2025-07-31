import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      new URL('https://images.unsplash.com/**'),
      new URL('http://localhost:10008/wp-content/**'),
    ],
  },
};

export default nextConfig;
