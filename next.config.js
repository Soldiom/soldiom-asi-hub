/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    HF_API_KEY: process.env.HF_API_KEY,
    N8N_USAGE_WEBHOOK: process.env.N8N_USAGE_WEBHOOK,
    N8N_LEAD_WEBHOOK: process.env.N8N_LEAD_WEBHOOK,
  },
}

module.exports = nextConfig
