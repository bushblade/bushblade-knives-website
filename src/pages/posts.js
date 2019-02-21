import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import { NarrowContainer } from '../components/layout/styledComponents'
import PostsCard from '../components/postsCard'

const postQuery = graphql`
  query ListingQuery {
    allMarkdownRemark(
      limit: 20
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
            image
          }
        }
      }
    }
  }
`

const PostListContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto 3rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
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
        <PostListContainer>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostsCard {...node} key={node.frontmatter.title} />
          ))}
        </PostListContainer>
      </Layout>
    )}
  />
)

export default Posts
