/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['images.unsplash.com', 'firebasestorage.googleapis.com', 'localhost'],
  },
}

module.exports = nextConfig
