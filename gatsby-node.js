// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const portfolioTemplate = resolve('./src/templates/portfolio-item.tsx');
  const response = await graphql(`
    query {
      allContentfulPortfolioItem {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  response.data.allContentfulPortfolioItem.edges.forEach((edge) => {
    createPage({
      component: portfolioTemplate,
      path: `/portfolio/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
