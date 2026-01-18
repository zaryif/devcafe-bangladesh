/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/devcafe-bangladesh',
  assetPrefix: '/devcafe-bangladesh/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
