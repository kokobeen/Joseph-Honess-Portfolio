module.exports = {
  siteMetadata: {
    title: 'JH',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `f52751b3f6c9c7bdea32856af60f09`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
  ]
}