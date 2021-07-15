/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "hasura",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "hasura",
        // Url to query from
        url: `https://political-parties.hasura.app/v1/graphql`,
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          "X-Hasura-Admin-Secret": `ljMq2zegzOlT4FpWbWP3kXQWOYgeE8XCz5JPCZweaEyqkrmB30nYrc8ODBYwJfem`,
        },
      },
    },
  ],
}
