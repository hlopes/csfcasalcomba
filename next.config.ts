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
        ],
        source: '/:path*',
      },
    ]
  },
  optimizeFonts: true,
  poweredByHeader: false,
}

export default nextConfig
