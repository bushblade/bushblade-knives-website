import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { indexQuery } from '../queries/indexQueries'

import Layout from '../components/layout/layout'
import RowGallery from '../components/rowGallery'
import { NarrowContainer } from '../components/layout/styledComponents'

const IndexPage = () => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <Layout
        banner={data.banner.childImageSharp.fluid}
        pageTitle="Welcome to Bushblade knives"
      >
        <NarrowContainer style={{ textAlign: 'center' }}>
          <blockquote
            style={{
              boxShadow: '0 3px 6px 1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="xs"
              style={{ marginBottom: '0.3rem' }}
            />{' '}
            I have used and acquired many knives over the years, from a variety
            of brand name manufacturers. Without sufficient funds to purchase my
            ideal knife I decided to try and make my own, and made my first
            knife in 2001. The first attempts yielded functional success in
            replicating the now famous Woodlore knives designed by Ray Mears and
            at the time made by Alan Wood. I still own these knives but the
            quality of my work has improved somewhat since the early days.{' '}
            <FontAwesomeIcon
              icon={faQuoteRight}
              size="xs"
              style={{ marginBottom: '0.3rem' }}
            />
          </blockquote>
        </NarrowContainer>
        <RowGallery
          images={[
            data.image1.childImageSharp.fluid,
            data.image2.childImageSharp.fluid,
            data.image3.childImageSharp.fluid,
          ]}
        />
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
      </Layout>
    )}
  />
)

export default IndexPage
