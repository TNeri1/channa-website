/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com'], // Add any external domains you might use
  },
  // If your repo name is "my-website", use this:
  basePath: '/my-website',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig; 