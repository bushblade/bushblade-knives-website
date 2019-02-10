import React from 'react'
import Layout from '../../components/layout/layout'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import midiSVG from '../../images/midi-website.svg'
import midiSpine from '../../images/midi-spine.svg'

import KnifeGallery from '../../components/knifeGallery'
import { TwoColumnContainer } from '../../components/layout/styledComponents'
import MidiSVG from './midiSVG'

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

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`

const Midi = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout
            banner={data.banner.childImageSharp.fluid}
            pageTitle="Model 01 Midi"
            tagline="my design, my choice"
          >
            <TwoColumnContainer>
              <ImageContainer>
                <div>
                  <MidiSVG />
                  <img src={midiSpine} alt="Model 01 Midi" />
                </div>
              </ImageContainer>
              <article>
                <p>
                  This is a scaled down version of my Model 01 which was{' '}
                  <strong>originally based on the Mora Clipper.</strong> It is a
                  very lightweight and compact, almost full sized bushcraft
                  knife that fills the hand well. A knife of this design with a
                  wooden handle <strong> weighs around 118g </strong>(220 with
                  sheath)
                </p>
                <ul>
                  <li>Overall length is around 209mm</li>
                  <li>Blade length of 101mm</li>
                </ul>
                <p>
                  Browse the gallery below or check out even more images in the{' '}
                  <a
                    href="https://goo.gl/photos/bA7zFLfduB66WumU6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Photos
                  </a>{' '}
                  album.
                </p>
              </article>
            </TwoColumnContainer>
            <KnifeGallery photos={data.allFile.edges} />
          </Layout>
        )
      }}
    />
  )
}

export default Midi
