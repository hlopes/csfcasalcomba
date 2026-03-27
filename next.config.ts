import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  headers: async () => {
    return [
      {
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://*.google.com https://*.googleapis.com https://*.gstatic.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com; img-src 'self' data: blob: https://*.gstatic.com https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.google.com https://*.googleapis.com https://vitals.vercel-insights.com https://vitals.vercel-analytics.com; frame-src 'self' https://*.google.com https://www.google.com https://*.googleapis.com;",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
        source: '/:path*',
      },
    ]
  },
  poweredByHeader: false,
}

export default nextConfig
