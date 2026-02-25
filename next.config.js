/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.drycoolchillers.com'],
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
