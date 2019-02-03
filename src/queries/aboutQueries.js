import { graphql } from 'gatsby'

export const aboutQuery = graphql`
  query aboutQuery {
    file(relativePath: { eq: "banner04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
