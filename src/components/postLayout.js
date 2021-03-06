import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from './layout/layout'

const PostContainer = styled.div`
  max-width: 960px;
  margin: auto;
  .gatsby-resp-image-link {
    background: none;
    border: none;
    box-shadow: none;
  }
  figcaption {
    text-align: center;
    font-style: italic;
  }
  ul {
    max-width: 600px;
  }
`

const postLayout = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
  location,
}) => {
  return (
    <Layout
      location={location}
      pageTitle={frontmatter.title}
      tagline={` by ${frontmatter.author}, ${frontmatter.date}`}
      keywords={frontmatter.keywords.split(',')}
    >
      <PostContainer>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </PostContainer>
    </Layout>
  )
}

export default postLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        author
        keywords
      }
    }
  }
`
