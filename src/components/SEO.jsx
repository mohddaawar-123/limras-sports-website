import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.limrassports.com";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/products/eclipse-disc-1127.jpeg",
  structuredData = null,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Limras Sports`
    : "Limras Sports | Premium Trophies, Shields & Corporate Awards";
  const url = `${SITE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Limras Sports" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
