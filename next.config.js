/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports
  images: {
    unoptimized: false,
  },
  outputFileTracing: false,
};

module.exports = nextConfig;
