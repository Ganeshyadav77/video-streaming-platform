// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-bucket.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig