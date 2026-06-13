export const SITE_DESCRIPTION =
  "For almost 30 years, SquareMeal has been the UK's leading independent restaurant guide with reviews of over 7,500 restaurants. Discover the best restaurants in London and the UK, private dining rooms and event venues."

interface SEOProps {
  title?: string
  description?: string
  image?: string
  type?: string
  schema?: Record<string, unknown>
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SquareMeal',
  url: 'https://www.squaremeal.co.uk',
  logo: 'https://www.squaremeal.co.uk/favicon.ico',
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '250 Kennington Lane',
    addressLocality: 'London',
    postalCode: 'SE11 5RD',
    addressCountry: 'GB',
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+44-20-7582-0222', contactType: 'general' },
    { '@type': 'ContactPoint', telephone: '+44-20-7840-5222', contactType: 'concierge' },
  ],
  sameAs: [
    'https://www.facebook.com/squaremeal.uk',
    'https://www.instagram.com/squaremeal.co.uk/',
    'https://www.youtube.com/@SquareMeal',
    'https://www.tiktok.com/@squaremealuk',
    'https://uk.pinterest.com/squaremeal/',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '150000',
  },
}

export function SEO({ title, description, image, type, schema }: SEOProps) {
  const defaultTitle = "SquareMeal | The UK's Leading Restaurant Guide"
  const defaultDescription = SITE_DESCRIPTION
  const defaultImage = image || 'https://www.squaremeal.co.uk/apple-touch-icon.png'

  const pageTitle = title ? `${title} | SquareMeal` : defaultTitle

  const mergedSchema = schema
    ? { '@context': 'https://schema.org', ...schema }
    : organizationSchema

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content="restaurants, fine dining, Michelin, private dining, UK restaurants, London restaurants, restaurant guide, restaurant reviews, best restaurants London, top 100 restaurants" />
      <meta name="author" content="SquareMeal" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:width" content="180" />
      <meta property="og:image:height" content="180" />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:site_name" content="SquareMeal" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:site" content="@squaremeal" />

      <link rel="canonical" href={`https://www.squaremeal.co.uk${window.location.pathname}`} />

      <script type="application/ld+json">
        {JSON.stringify(mergedSchema)}
      </script>
    </>
  )
}
