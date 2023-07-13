/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["st2.depositphotos.com"],
  },
};

module.exports = nextConfig
