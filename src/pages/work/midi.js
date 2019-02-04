import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'

import KnifeGallery from '../../components/knifeGallery'

const query = graphql`
  query midiBanner {
    file(relativePath: { eq: "banner01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
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
          <Layout banner={data.file.childImageSharp.fluid}>
            <h1>The Midi page</h1>
            <KnifeGallery album="5kwDl8j" />
          </Layout>
        )
      }}
    />
  )
}

export default Midi
