const {
  siteMetadata: { languages },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("./gatsby-config");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              url
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.url,
      component: require.resolve(`./src/templates/projectTemplate.tsx`),
      context: {
        // additional data can be passed via context
        url: node.frontmatter.url,
      },
    });
  });

  // create projectsList page
  languages.forEach((lang) => {
    const path = `/${lang}/projects`;
    // eslint-disable-next-line no-useless-escape
    const searchPath = `/\/projects\/${lang}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/projectsList.tsx"),
      context: {
        searchPath,
      },
    });
  });
};

const analyzePath = (path) => {
  const newsPath = "/projects/";
  const latestNewsPath = "/projects";
  const pathArray = path.split("/");
  // console.log(path);
  return {
    isLatestNews: path.includes(latestNewsPath),
    isNews: path.includes(newsPath),
    isRepeat: pathArray[1] === pathArray[2],
  };
};

const removeFirstLang = (path) => {
  return `/${path.split("/").splice(2).join("/")}`;
};

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
  const { isLatestNews, isNews, isRepeat } = analyzePath(page.path);

  if (isRepeat) {
    // same local is repeated, just remove the first
    const newPath = removeFirstLang(page.path);
    createPage({ ...page, path: newPath });
    deletePage(page);
  } else if (isNews || isLatestNews) {
    deletePage(page);
  }
};
