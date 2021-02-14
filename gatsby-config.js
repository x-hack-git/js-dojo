require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `X-HACK`,
    siteTitleAlt: `X-HACK - あらゆるものをHACKする`,
    siteHeadline: `JavaScript道場`,
    siteUrl: 'https://js-dojo.com/',
    siteDescription: `作りながら学ぶJavaScript.`,
    siteLanguage: `jp`,
    siteImage: `/banner.png`,
    author: `松田 信介`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `JavaScript基礎`,
            slug: `/javascript_basics`,
          },
          {
            title: `開発塾`,
            slug: `/developer_program`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JS-DOJO`,
        short_name: `js-dojo blog`,
        description: `JavaScript道場`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
