import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout/layout'
import { NarrowContainer } from '../components/layout/styledComponents'

// import SEO from '../components/layout/seo'

const contactQuery = graphql`
  query contactQuery {
    file(relativePath: { eq: "banner03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => (
  <StaticQuery
    query={contactQuery}
    render={data => (
      <Layout banner={data.file.childImageSharp.fluid} pageTitle="Contact Me">
        <NarrowContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            commodi possimus officia incidunt est, repellendus minus pariatur
            expedita quidem ipsum corrupti labore! Dolorum dolore voluptatum qui
            numquam ipsa voluptatem! Quis quibusdam tempora, vel dolores
            repellendus eius placeat dolore excepturi unde commodi, doloribus
            adipisci error dolorem distinctio alias perferendis accusamus
            officiis dolorum cum, iste odit. Aspernatur, eos? Iste ad esse,
            quibusdam minima eveniet, optio quas fugit magnam officiis in nam,
            obcaecati ea. Asperiores fuga qui delectus possimus laudantium
            facere id officia. Est molestias quo quas sit nostrum similique
            alias obcaecati, id culpa? Blanditiis accusamus quibusdam laboriosam
            ipsam culpa commodi quos labore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            commodi possimus officia incidunt est, repellendus minus pariatur
            expedita quidem ipsum corrupti labore! Dolorum dolore voluptatum qui
            numquam ipsa voluptatem! Quis quibusdam tempora, vel dolores
            repellendus eius placeat dolore excepturi unde commodi, doloribus
            adipisci error dolorem distinctio alias perferendis accusamus
            officiis dolorum cum, iste odit. Aspernatur, eos? Iste ad esse,
            quibusdam minima eveniet, optio quas fugit magnam officiis in nam,
            obcaecati ea. Asperiores fuga qui delectus possimus laudantium
            facere id officia. Est molestias quo quas sit nostrum similique
            alias obcaecati, id culpa? Blanditiis accusamus quibusdam laboriosam
            ipsam culpa commodi quos labore?
          </p>
        </NarrowContainer>
      </Layout>
    )}
  />
)

export default IndexPage
