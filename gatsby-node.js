const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const portfolioTemplate = path.resolve('./src/templates/portfolio-item.js');
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
