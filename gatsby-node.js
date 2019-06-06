const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(results => {
    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/posts${node.frontmatter.slug}`,
        component: path.resolve('./src/components/postLayout.js'),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
