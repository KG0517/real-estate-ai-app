/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: false },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;