/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "9x4f9c9qopbs",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "nbjzFb5vYvWBtT671hCLWixrnJ84R48fwVknmOI-uJs",
      },
    },
  ],
}
