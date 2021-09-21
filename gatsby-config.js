require("ts-node").register({ files: true });

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaultLanguage, languages, languageConfig } = require("./src/globalVariables");

const siteMetadata = {
  mainName: "Riquest",
  logo: "/images/logo.png",
  logoDark: "/images/logo-dark-250px.png",
  icon: "/images/logo-250px.png",
  authorTwitter: "@",
  portfolioItemsPerPage: 10,
  defaultColorMode: "dark", // "light" or "dark"
  defaultLanguage,
  languages,
  languageConfig,
  darkMode: false,
  switchTheme: true,
};

/** @type { import("gatsby").GatsbyConfig } */
module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/pages/news`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: "./src/pages",
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        strictMath: true,
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // test: /\.tsx?$/,
        stages: ["develop", "build-javascript"],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          localIdentName: "[emoji]",
        },
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-react-intl",
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages,
        // language file path
        defaultLanguage,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
  ],
};
