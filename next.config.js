/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  typescript: {
    // Strict type checking
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    // Run ESLint during builds
    dirs: ['app', 'components'],
  },
  // Optimize for Vercel deployments
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

module.exports = nextConfig;
