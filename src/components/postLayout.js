import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from './layout/layout'

const PostContainer = styled.div`
  max-width: 960px;
  margin: auto;
`

const postLayout = ({ data: { markdownRemark }, location }) => {
  console.log(markdownRemark)
  return (
    <Layout
      location={location}
      pageTitle={markdownRemark.frontmatter.title}
      tagline={`by ${markdownRemark.frontmatter.author}`}
    >
      <PostContainer>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <h3>{markdownRemark.frontmatter.date}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
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
      }
    }
  }
`
