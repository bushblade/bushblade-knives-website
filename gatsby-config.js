module.exports = {
  siteMetadata: {
    title: `Bushblade Knives`,
    description: `Handmade knives by Will Adams`,
    author: `Will Adams`,
    prices: {
      midi: '300',
      woodloreClone: '370',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `woodlore-images`,
        path: `${__dirname}/src/images/woodlore-clone-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `midi-images`,
        path: `${__dirname}/src/images/midi-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `me`,
        path: `${__dirname}/src/images/me`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bilbo`,
          `Philosopher`, // you can also specify font weights and styles
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bushblade-kinves`,
        short_name: `Bushblade`,
        start_url: `/`,
        background_color: `#c2c2a3`,
        theme_color: `#c2c2a3`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
