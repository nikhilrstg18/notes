/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix:"/notes",
  siteMetadata: {
    title: `Interview Notebook by Subject`,
    siteUrl: `https://www.nikhilrstg18.github.io/notes`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};