import type { GatsbyConfig } from "gatsby"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./src/lib/site-metadata"

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
        excludes: [`/404`, `/404.html`, `/dev-404-page`, `/offline-plugin-app-shell-fallback`],
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
              changefreq: `monthly`,
              priority: 0.9,
            };
          }

          if (path.startsWith(`/deck/`) || path.startsWith(`/fence/`)) {
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
