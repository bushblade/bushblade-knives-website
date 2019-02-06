import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'

import KnifeGallery from '../../components/knifeGallery'

const query = graphql`
  query woodloreImages {
    banner: file(relativePath: { eq: "banner02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "woodlore-clone-images" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const WoodloreClone = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout
          banner={data.banner.childImageSharp.fluid}
          pageTitle="Woodlore Clone"
          tagline="The design that inspired it all"
        >
          <KnifeGallery photos={data.allFile.edges} />
        </Layout>
      )}
    />
  )
}

export default WoodloreClone
