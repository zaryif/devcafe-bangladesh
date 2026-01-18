/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/devcafe-bangladesh',
    assetPrefix: '/devcafe-bangladesh/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
