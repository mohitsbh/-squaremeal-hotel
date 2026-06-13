export const SITE_DESCRIPTION =
  "For almost 30 years, SquareMeal has been the UK's leading independent restaurant guide with reviews of over 7,500 restaurants. Discover the best restaurants in London and the UK, private dining rooms and event venues."

interface SEOProps {
  title?: string
  description?: string
}

export function SEO({ title, description }: SEOProps) {
  const defaultTitle = 'SquareMeal | The UK\'s Leading Restaurant Guide'
  const defaultDescription = SITE_DESCRIPTION

  const pageTitle = title ? `${title} | SquareMeal` : defaultTitle

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </>
  )
}
