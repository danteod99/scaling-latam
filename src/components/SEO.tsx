import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, any>;
}

const BASE_URL = "https://www.scalinglatam.site";
const DEFAULT_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/IyQQ2Hg4SlR9ZhHWWSeHaLGQ2xn1/social-images/social-1761402396452-Imagen de WhatsApp 2025-08-13 a las 23.43.21_39da5d24.jpg";

const SEO = ({ title, description, path, image, type = "website", jsonLd }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const img = image || DEFAULT_IMAGE;
  const fullTitle = path === "/" ? title : `${title} | Scaling LATAM`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:site_name" content="Scaling LATAM" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
