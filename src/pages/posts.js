import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import { NarrowContainer } from '../components/layout/styledComponents'

const postQuery = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            slug
            author
          }
        }
      }
    }
  }
`

const Posts = ({ location }) => (
  <StaticQuery
    query={postQuery}
    render={data => (
      <Layout
        pageTitle="Posts"
        tagline={' latest from Bushblade'}
        keywords={[]}
        location={location}
      >
        <NarrowContainer>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.frontmatter.title}>
                <a href={`/posts${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </a>
              </li>
            ))}
          </ul>
        </NarrowContainer>
      </Layout>
    )}
  />
)

export default Posts
