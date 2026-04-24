import type { GatsbyConfig } from "gatsby"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./src/lib/site-metadata"
import { cityServicePages } from "./src/data/city-service-pages"

const servicePagePaths = new Set([
  `/custom-deck/`,
  `/wood-deck/`,
  `/composite-deck/`,
  `/covered-deck/`,
  `/outdoor-deck/`,
  `/cedar-wood-fence/`,
  `/chain-link-fence/`,
]);

const cityPathMetadata = new Map(
  cityServicePages.map((city) => [`/cities/${city.slug}/`, city]),
);

const getCitySitemapPriority = (path: string) => {
  const city = cityPathMetadata.get(path);
  if (!city) return 0.3;
  if (city.slug === `everett-wa`) return 1.0;
  if (city.tier === 1) return 0.8;
  if (city.tier === 2) return 0.6;
  if (city.tier === 3) return 0.4;
  return 0.3;
};

const getCitySitemapChangefreq = (path: string) => {
  const city = cityPathMetadata.get(path);
  if (!city) return `yearly`;
  if (city.slug === `everett-wa` || city.tier === 1) return `monthly`;
  return `yearly`;
};

const config: GatsbyConfig = {
  siteMetadata: {
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    siteUrl: SITE_URL,
    title: DEFAULT_TITLE,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404`, `/404.html`, `/dev-404-page`, `/offline-plugin-app-shell-fallback`, `/thank-you/`],
        serialize: (page: { path: string }, { resolvePagePath }: { resolvePagePath: (page: { path: string }) => string }) => {
          const path = resolvePagePath(page);

          if (path === `/`) {
            return {
              url: path,
              changefreq: `weekly`,
              priority: 1.0,
            };
          }

          if (path === `/cities/`) {
            return {
              url: path,
              changefreq: `weekly`,
              priority: 0.9,
            };
          }

          if (path.startsWith(`/cities/`)) {
            return {
              url: path,
              changefreq: getCitySitemapChangefreq(path),
              priority: getCitySitemapPriority(path),
            };
          }

          if (
            path === `/decking/` ||
            path === `/fencing/` ||
            servicePagePaths.has(path)
          ) {
            return {
              url: path,
              changefreq: `monthly`,
              priority: 0.8,
            };
          }

          if (path === `/privacy-policy/` || path === `/terms-of-service/`) {
            return {
              url: path,
              changefreq: `yearly`,
              priority: 0.2,
            };
          }

          return {
            url: path,
            changefreq: `monthly`,
            priority: 0.6,
          };
        },
      },
    },
  ],
}

export default config
