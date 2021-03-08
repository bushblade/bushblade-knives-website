import React from 'react'
import Layout from '../components/layout/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Gallery from '../components/Gallery'
import { TwoColumnContainer } from '../components/layout/styledComponents'
import MidiSVG from '../components/svg/midiSVG'
import MidiSpineSVG from '../components/svg/midiSpineSVG'
import MidiSkeletonSVG from '../components/svg/midiSkeletonSVG'

export const query = graphql`
  query midiImages {
    banner: file(relativePath: { eq: "banner01.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    allFile(filter: { relativeDirectory: { eq: "midi-images" } }) {
      edges {
        node {
          name
          childImageSharp {
            original {
              width
              height
            }
            gatsbyImageData(
              quality: 90
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
              width: 1200
              placeholder: BLURRED
            )
          }
        }
      }
    }
    prices: site {
      siteMetadata {
        prices {
          midi
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
const SVGContainer = styled.div`
  margin: 1rem 0;
`

const Midi = ({ data }) => {
  return (
    <Layout
      banner={data.banner.childImageSharp.gatsbyImageData}
      pageTitle="Model 01 Midi"
      tagline="my design, my choice"
      keywords={[
        'bushblade',
        'knife',
        'midi',
        'model 01',
        'bushcraft',
        'handmade',
        'knife',
        'carving',
      ]}
    >
      <TwoColumnContainer>
        <ImageContainer>
          <div style={{ width: '100%' }}>
            <MidiSVG />
            <SVGContainer>
              <MidiSpineSVG />
            </SVGContainer>
            <MidiSkeletonSVG />
          </div>
        </ImageContainer>
        <article>
          <p>
            This is a scaled down version of my Model 01 which was{' '}
            <strong>originally based on the Mora Clipper.</strong> It is a very
            lightweight and compact, almost full sized bushcraft knife that
            fills the hand well. A knife of this design with a wooden handle{' '}
            <strong> weighs around 118g </strong>(220 with sheath)
          </p>
          <ul>
            <li>Overall length is around 209mm with a blade length of 101mm</li>
            <li>3mm thick O1 tool steel</li>
            <li>Hardened to ~ 59RC and double tempered</li>
            <li>Skeletonised tang for balance and weight reduction</li>
            <li>
              Prices start at £{data.prices.siteMetadata.prices.midi}{' '}
              <Link to="/contact">contact me</Link> for further details
            </li>
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
      <Gallery photos={data.allFile.edges} />
    </Layout>
  )
}

export default Midi
