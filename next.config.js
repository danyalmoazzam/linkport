/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
