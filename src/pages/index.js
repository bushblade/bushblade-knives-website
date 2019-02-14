import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout/layout'
import Gallery from '../components/Gallery'
import { NarrowContainer } from '../components/layout/styledComponents'

const indexQuery = graphql`
  query indexQuery {
    banner: file(relativePath: { eq: "banner02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile: file(relativePath: { eq: "me-profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "index-images" } }) {
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

const ProfileContainer = styled.div`
  margin: 0 auto 4rem auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 40% 60%;
    grid-gap: 1.5rem;
  }
`

const IndexPage = () => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Layout
        banner={data.banner.childImageSharp.fluid}
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
      >
        <ProfileContainer>
          <Img fluid={data.profile.childImageSharp.fluid} title="Will Adams" />
          <blockquote style={{ maxWidth: '800px', margin: 'auto' }}>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="xs"
              style={{ marginBottom: '0.3rem' }}
            />{' '}
            Having used and acquired many knives over the years, from a variety
            of brand name manufacturers and without sufficient funds to purchase
            my ideal knife I decided to try and make my own. I made my first
            knives in 2001 yielding functional success in replicating the now
            famous Woodlore knives designed by Ray Mears and at the time made by
            Alan Wood. I still own these knives but the quality of my work has
            improved somewhat since the early days.{' '}
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="xs"
              style={{ marginBottom: '0.3rem' }}
            />
          </blockquote>
        </ProfileContainer>

        <NarrowContainer style={{ textAlign: 'center' }}>
          <p>
            <strong>I am a firm believer in form following function.</strong> I
            aim to make a functional tool that will be a pleasure to own and use
            for many years. The overall fit, finish and quality of work are of
            the utmost importance to me when making a knife. Each knife and
            sheath is handmade by me here in the UK, I do not currently
            outsource any part of the process.
          </p>
          <p>
            I only spend a few days each week making knives as the majority of
            my time is dedicated to my twin girls. Please take a look around,
            and feel free to <Link to="/contact">contact me</Link> with any
            comments or enquiries.
          </p>
          <h2 style={{ color: '#a94442' }}>
            You must be over 18 years of age to order a knife.
          </h2>
        </NarrowContainer>
        <Gallery
          columns={width => {
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
    )}
  />
)

export default IndexPage
