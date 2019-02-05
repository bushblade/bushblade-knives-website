import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'

import KnifeGallery from '../../components/knifeGallery'

const query = graphql`
  query midiImages {
    banner: file(relativePath: { eq: "banner01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "midi-images" } }) {
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

const Midi = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout banner={data.banner.childImageSharp.fluid}>
            <h1>The Midi page</h1>
            <KnifeGallery photos={data.allFile.edges} />
          </Layout>
        )
      }}
    />
  )
}

export default Midi
