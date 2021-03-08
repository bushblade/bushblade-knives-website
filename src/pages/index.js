import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import Gallery from '../components/Gallery'
import {
  NarrowContainer,
  ReverseContainer,
  ReverseCell,
} from '../components/layout/styledComponents'

export const query = graphql`
  query indexQuery {
    banner: file(relativePath: { eq: "banner02.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    profile: file(relativePath: { eq: "me-allerthorpe.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    allFile(filter: { relativeDirectory: { eq: "index-images" } }) {
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
  }
`

const IndexPage = ({ location, data }) => {
  return (
    <Layout
      banner={data.banner.childImageSharp.gatsbyImageData}
      pageTitle="Welcome to Bushblade"
      tagline={' handmade knives by Will Adams'}
      keywords={[
        'ray mears',
        'alan wood',
        'bushcraft',
        'handmade',
        'knife',
        'uk',
      ]}
      location={location}
    >
      <ReverseContainer narrow>
        <ReverseCell area="right">
          <GatsbyImage
            image={data.profile.childImageSharp.gatsbyImageData}
            title="Will Adams"
            alt="Will Adams"
          />
          <br />
        </ReverseCell>
        <ReverseCell area="left">
          <blockquote style={{ maxWidth: '800px', margin: 'auto' }}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="xs"
              style={{ marginBottom: '0.3rem', maxWidth: '1.5rem' }}
            />{' '}
            Having used and acquired many knives over the years, from a variety
            of brand name manufacturers and without sufficient funds to purchase
            my ideal knife I decided to try and make my own.{' '}
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="xs"
              style={{ marginBottom: '0.3rem', maxWidth: '1.5rem' }}
            />
          </blockquote>
          <br />
          <p>
            <strong>I made my first knives in 2001</strong> yielding functional
            success in replicating the now famous Woodlore knives designed by
            Ray Mears and at the time made by Alan Wood. I still own these
            knives but the quality of my work has improved somewhat since the
            early days.
          </p>
          <p>
            <strong>I am a firm believer in form following function.</strong> I
            aim to make a functional tool that will be a pleasure to own and use
            for many years. The overall fit, finish and quality of work are of
            the utmost importance to me when making a knife. Each knife and
            sheath is handmade by me here in the UK, I do not currently
            outsource any part of the process.
          </p>
        </ReverseCell>
      </ReverseContainer>

      <NarrowContainer style={{ textAlign: 'center' }}>
        <p>
          I only spend a few days each week making knives as the majority of my
          time is dedicated to my twin girls. Please take a look around, and
          feel free to <Link to="/contact">contact me</Link> with any comments
          or enquiries.
        </p>
        <h2 style={{ color: '#a94442' }}>
          You must be over 18 years of age to order a knife.
        </h2>
      </NarrowContainer>
      <Gallery
        columns={(width) => {
          if (width < 700) {
            return 2
          } else if (width < 1000) {
            return 3
          } else {
            return 6
          }
        }}
        photos={data.allFile.edges}
      />
    </Layout>
  )
}

export default IndexPage
