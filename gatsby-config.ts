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
      },
    },
  ],
}

export default config
