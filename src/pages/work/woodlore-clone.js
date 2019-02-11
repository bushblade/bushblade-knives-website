import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Gallery from '../../components/Gallery'
import { TwoColumnContainer } from '../../components/layout/styledComponents'
import WoodloreSVG from './woodloreSVG'
import WoodloreSpineSVG from './woodloreSpineSVG'

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

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: '100%';
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
          <TwoColumnContainer>
            <ImageContainer>
              <div style={{ width: '100%' }}>
                <WoodloreSVG />
                <WoodloreSpineSVG />
              </div>
            </ImageContainer>
            <article>
              <p>
                <strong>My version of the bushcraft classic.</strong> A great
                all round practical design and the knife that most inspired me
                to become a maker.
              </p>
              <ul>
                <li>222mm overall length with a blade length of 112mm</li>
                <li>
                  4mm or 3mm thick O1 tool steel with or without a tapered tang.
                </li>
              </ul>
              <p>
                Browse the gallery below or check out even more images in the{' '}
                <a
                  href="https://goo.gl/photos/3RDcLyQUAMJwYTtQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Photos
                </a>{' '}
                album.
              </p>
            </article>
          </TwoColumnContainer>
          <Gallery photos={data.allFile.edges} />
        </Layout>
      )}
    />
  )
}

export default WoodloreClone
