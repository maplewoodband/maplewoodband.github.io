/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/maplewoodband-website' : '',
  reactStrictMode: true,
  output: "export",
  swcMinify: true,
  // images: {
  //   disableStaticImages: true
  // }
  images: {
    disableStaticImages: true,
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
}

module.exports = withImages(nextConfig)
