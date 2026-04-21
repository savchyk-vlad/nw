import * as React from "react";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_TEL,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  PRIMARY_SERVICE_AREAS,
  SERVICE_AREA_SUMMARY,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "../lib/site-metadata";

type JsonLd = Record<string, unknown>;

type SeoHeadProps = {
  title: string;
  description?: string;
  pathname?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noindex?: boolean;
  schema?: JsonLd | JsonLd[];
};

const normalizePathname = (pathname = "/") => {
  const basePath = pathname.split("#")[0]?.split("?")[0] ?? "/";
  if (!basePath || basePath === "/") {
    return "/";
  }

  return basePath.endsWith("/") ? basePath : `${basePath}/`;
};

export const toAbsoluteUrl = (value = "/") => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

export const buildCanonicalUrl = (pathname = "/") =>
  toAbsoluteUrl(normalizePathname(pathname));

export const buildLocalBusinessReference = (): JsonLd => ({
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_TEL,
});

export const buildOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE_TEL,
  image: toAbsoluteUrl(DEFAULT_OG_IMAGE),
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: "Seattle",
    addressRegion: "WA",
  },
  areaServed: PRIMARY_SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  serviceArea: PRIMARY_SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      areaServed: SERVICE_AREA_SUMMARY,
      availableLanguage: ["English"],
      contactType: "customer service",
      email: BUSINESS_EMAIL,
      telephone: BUSINESS_PHONE_TEL,
    },
  ],
  knowsAbout: [
    "Deck building",
    "Fence installation",
    "Deck repairs",
    "Fence repairs",
    "Railings",
    "Outdoor renovation",
  ],
});

export const buildWebPageSchema = (
  title: string,
  description: string,
  canonicalUrl: string,
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  inLanguage: "en-US",
  url: canonicalUrl,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
});

const toSchemaArray = (schema?: JsonLd | JsonLd[]) => {
  if (!schema) {
    return [];
  }

  return Array.isArray(schema) ? schema : [schema];
};

const SeoHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  pathname = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} deck and fence project`,
  keywords,
  ogType = "website",
  noindex = false,
  schema,
}: SeoHeadProps) => {
  const canonicalUrl = buildCanonicalUrl(pathname);
  const imageUrl = toAbsoluteUrl(image);
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";
  const schemaItems = [
    buildOrganizationSchema(),
    buildWebPageSchema(title, description, canonicalUrl),
    ...toSchemaArray(schema),
  ];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <meta name="theme-color" content="#595f39" />
      {keywords?.length ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={canonicalUrl} />

      {schemaItems.map((item, index) => (
        <script
          key={`seo-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

export default SeoHead;
