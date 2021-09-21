/* eslint-disable @typescript-eslint/no-var-requires */
// const { createFilePath } = require(`gatsby-source-filesystem`);
// const path = require(`path`);
// const fs = require("fs");

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `basepages` });
//     createNodeField({ node, name: `slug`, value: slug });
//   }
// };

// exports.onPreBootstrap = ({ reporter }, themeOptions) => {
//   const contentPath = themeOptions.contentPath || "content";

//   if (!fs.existsSync(contentPath)) {
//     reporter.info(`creating the ${contentPath} directory`);
//     fs.mkdirSync(contentPath);
//   }
//   if (!fs.existsSync(`${contentPath}/blog`)) {
//     reporter.info(`creating the ${contentPath}/blog directory`);
//     fs.mkdirSync(`${contentPath}/blog`);
//   }
//   if (!fs.existsSync(`${contentPath}/portfolio`)) {
//     reporter.info(`creating the ${contentPath}/portfolio directory`);
//     fs.mkdirSync(`${contentPath}/portfolio`);
//   }
//   if (!fs.existsSync(`${contentPath}/basepages`)) {
//     reporter.info(`creating the ${contentPath}/basepages directory`);
//     fs.mkdirSync(`${contentPath}/basepages`);
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      news: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/markdown/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      const newsPosts = result.data.news.edges;

      const newsPerPage = 10;
      const numNewsPages = Math.ceil(newsPosts.length / newsPerPage);

      // Array.from({ length: numNewsPages }).forEach((_, i) => {
      //   createPage({
      //     path: i === 0 ? `/news` : `/news/${i + 1}`,
      //     component: require.resolve("./src/templates/newsListTemplate.tsx"),
      //     context: {
      //       limit: newsPerPage,
      //       skip: i * newsPerPage,
      //       numPages: numNewsPages,
      //       currentPage: i + 1,
      //     },
      //   });
      // });

      // const PortfolioItems = result.data.portfolio.edges;
      // const PortfolioItemsPerPage = result.data.limitPost.siteMetadata.portfolioItemsPerPage;
      // const numPortfolioItems = Math.ceil(PortfolioItems.length / PortfolioItemsPerPage);

      // Array.from({ length: numPortfolioItems }).forEach((_, i) => {
      //   createPage({
      //     path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      //     component: require.resolve("./src/templates/portfolio-list.js"),
      //     context: {
      //       limit: blogPostsPerPage,
      //       skip: i * blogPostsPerPage,
      //       numPages: numPortfolioItems,
      //       currentPage: i + 1,
      //     },
      //   });
      // });

      result.data.news.edges.forEach(({ node }) => {
        // const template = node.frontmatter.template === undefined ? "news" : node.frontmatter.template;
        createPage({
          path: node.frontmatter.slug,
          component: require.resolve("./src/templates/newsTemplate.tsx"),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });

      // result.data.portfolio.edges.forEach(({ node }) => {
      //   const template = node.frontmatter.template == undefined ? "portfolio" : node.frontmatter.template;
      //   createPage({
      //     path: node.frontmatter.slug,
      //     component: require.resolve("./src/templates/" + template + ".js"),
      //     context: {
      //       slug: node.frontmatter.slug,
      //     },
      //   });
      // });

      // result.data.basepages.edges.forEach(({ node }) => {
      //   const template = node.frontmatter.template == undefined ? "basepage" : node.frontmatter.template;
      //   createPage({
      //     path: node.frontmatter.slug,
      //     component: require.resolve("./src/templates/" + template + ".js"),
      //     context: {
      //       slug: node.frontmatter.slug,
      //     },
      //   });
      // });
    })
    .catch((e) => {
      console.error("error in the graphql from gatsby-node", e);
    });
};
