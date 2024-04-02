/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  trailingSlash:"never",
  pathPrefix: "/notes",
  siteMetadata: {
    title: `Notes`,
    welcome: `Welcome Learner`,
    description: "Subject by experience",
    siteUrl: `https://www.nikhilrstg18.github.io/notes`,
    author: `Nikhil Rustagi`,
    copyright: "© 2024",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo_192.png",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 70,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "books",
        path: "./books",
      },
      __key: "books",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-markmap",
          "gatsby-remark-gifs",
          {
            resolve: "gatsby-remark-highlight-code",
            options: {
              lineNumbers: true,
              terminal: "carbon",
              theme: "dracula",
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              withWebp: true,
              showCaptions: true,
              quality: 70,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/books" }],
        excludePaths: ["/"],
        height: 3,
        prependToBody: false,
        color: `lightcoral`,
        footerHeight: 500,
        headerHeight: 0,
      },
    }
  ],
};
