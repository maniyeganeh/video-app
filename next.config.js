/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["maniyeganeh.ir", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig
