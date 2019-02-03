import { graphql } from 'gatsby'

export const indexQuery = graphql`
  query indexImages {
    banner: file(relativePath: { eq: "banner02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(
      relativePath: { eq: "bushblade-knives-antler-woodlore-clone.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "bushblade-knives-black-G10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(
      relativePath: { eq: "bushblade-knives-green-micarta-woodlore-clones.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
