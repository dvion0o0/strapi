/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://secure-escarpment-95804.herokuapp.com",
        // : "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`products`],
      },
    },
  ],
}
