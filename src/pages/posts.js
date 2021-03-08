import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { useTrail, animated, config } from 'react-spring'

import Layout from '../components/layout/layout'
import PostsCard from '../components/postsCard'

const postQuery = graphql`query ListingQuery {
  allMarkdownRemark(limit: 20, sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        excerpt
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          author
          slug
          image {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
            }
          }
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

const PostList = ({ posts }) => {
  const trail = useTrail(posts.length, {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0, 100px, 0)',
    },
    config: config.stiff,
  })
  return (
    <PostListContainer>
      {trail.map((props, index) => (
        <animated.div key={posts[index].node.frontmatter.title} style={props}>
          <PostsCard {...posts[index].node} />
        </animated.div>
      ))}
    </PostListContainer>
  )
}

const Posts = ({ location }) => {
  const data = useStaticQuery(postQuery)
  return (
    <Layout
      pageTitle="Posts"
      tagline={' articles and info'}
      keywords={[]}
      location={location}
    >
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
  )
}
export default Posts
