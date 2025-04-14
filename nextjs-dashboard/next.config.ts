/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    serverActions: {
      allowedOrigins: ["ideal-space-winner-gvqx7q6wqxw29gwj-3000.app.github.dev", "localhost:3000", process.env.NEXT_PUBLIC_BASE_URL]
    }
  }
}

module.exports = nextConfig




