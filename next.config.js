/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['www.drycoolchillers.com'],
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
