import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.csfcasalcomba.com'

  return {
    rules: {
      allow: '/',
      userAgent: '*',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
