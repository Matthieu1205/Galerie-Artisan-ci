import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://galerie-artisan.ci'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`

export default function SEO({ title, description, keywords, path = '', image }) {
  const fullTitle = title
    ? `${title} | GALERIE-ARTISAN.CI`
    : 'GALERIE-ARTISAN.CI — L\'art de vivre chez soi'
  const url = `${BASE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_CI" />
      <meta property="og:site_name" content="GALERIE-ARTISAN.CI" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
