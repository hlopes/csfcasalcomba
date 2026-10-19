export default function JsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.csfcasalcomba.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': `${baseUrl}/#organization`,
        '@type': 'NGO',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PT',
          addressLocality: 'Casal Comba',
          addressRegion: 'Mealhada',
          postalCode: '3050-151',
          streetAddress: 'Rua da Portela, nº 16',
        },
        alternateName: 'Centro Social e Paroquial de Casal Comba',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            availableLanguage: ['Portuguese'],
            contactType: 'technical office',
            telephone: '+351231201400',
          },
          {
            '@type': 'ContactPoint',
            availableLanguage: ['Portuguese'],
            contactType: 'nursery and day care',
            telephone: '+351231201401',
          },
          {
            '@type': 'ContactPoint',
            availableLanguage: ['Portuguese'],
            contactType: 'youth and leisure centre (CATL)',
            telephone: '+351934580002',
          },
        ],
        description:
          'O Centro Social da Freguesia de Casal Comba é uma Instituição Particular de Solidariedade Social (IPSS), com respostas sociais dedicadas à infância, terceira idade e apoio à comunidade.',
        email: 'csfcasalcomba@gmail.com',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.366273,
          longitude: -8.467437,
        },
        image: `${baseUrl}/images/home/facade.jpg`,
        legalName: 'Centro Social da Freguesia de Casal Comba',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/logo/logo.png`,
        },
        name: 'Centro Social da Freguesia de Casal Comba',
        sameAs: ['https://www.facebook.com/csfcasalcomba/'],
        taxID: '503247367',
        telephone: '+351231201400',
        url: baseUrl,
      },
      {
        '@id': `${baseUrl}/#website`,
        '@type': 'WebSite',
        description: 'Ao serviço da comunidade',
        inLanguage: 'pt-PT',
        name: 'Centro Social da Freguesia de Casal Comba',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        url: baseUrl,
      },
    ],
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  )
}
