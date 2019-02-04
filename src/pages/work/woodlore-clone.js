import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'

import KnifeGallery from '../../components/knifeGallery'

const query = graphql`
  query woodloreBanner {
    file(relativePath: { eq: "banner02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
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
        <Layout banner={data.file.childImageSharp.fluid}>
          <h1>The woodlore clone page</h1>
          <KnifeGallery album="tykr6P0" />
        </Layout>
      )}
    />
  )
}

export default WoodloreClone
