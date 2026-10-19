import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.csfcasalcomba.com'
  const lastModified = new Date()

  return [
    {
      changeFrequency: 'weekly',
      images: [`${baseUrl}/images/home/facade.jpg`],
      lastModified,
      priority: 1.0,
      url: baseUrl,
    },
    {
      changeFrequency: 'monthly',
      images: [`${baseUrl}/images/home/facade.jpg`],
      lastModified,
      priority: 0.8,
      url: `${baseUrl}/instituicao`,
    },
    {
      changeFrequency: 'monthly',
      images: [`${baseUrl}/images/infancia/creche.jpg`],
      lastModified,
      priority: 0.9,
      url: `${baseUrl}/infancia`,
    },
    {
      changeFrequency: 'monthly',
      images: [`${baseUrl}/images/area-senior/erpi.jpg`],
      lastModified,
      priority: 0.9,
      url: `${baseUrl}/area-senior`,
    },
    {
      changeFrequency: 'monthly',
      images: [`${baseUrl}/images/home/facade.jpg`],
      lastModified,
      priority: 0.8,
      url: `${baseUrl}/projectos-parcerias`,
    },
    {
      changeFrequency: 'monthly',
      images: [`${baseUrl}/images/documentos/hero.jpg`],
      lastModified,
      priority: 0.8,
      url: `${baseUrl}/documentos`,
    },
    {
      changeFrequency: 'yearly',
      images: [
        `${baseUrl}/images/organograma/hero.jpg`,
        `${baseUrl}/images/organograma/organograma.svg`,
      ],
      lastModified,
      priority: 0.7,
      url: `${baseUrl}/organograma`,
    },
    {
      changeFrequency: 'yearly',
      images: [`${baseUrl}/images/contato/hero.jpg`],
      lastModified,
      priority: 0.8,
      url: `${baseUrl}/contato`,
    },
  ]
}
