import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
// import SEO from '../components/layout/seo'

const bannerQuery = graphql`
  query indexBanner {
    file(relativePath: { eq: "banner02.jpg" }) {
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
    query={bannerQuery}
    render={data => (
      <Layout banner={data.file.childImageSharp.fluid}>
        <h1>Welcome to Bushblade knives</h1>
        <p>
          I have used and acquired many knives over the years, from a variety of
          brand name manufacturers. Without sufficient funds to purchase my
          ideal knife I decided to try and make my own, and made my first knife
          in 2001.
        </p>
        <p>
          The first attempts yielded functional success in replicating the now
          famous Woodlore knives designed by Ray Mears and at the time made by
          Alan Wood. I still own these knives but the quality of my work has
          improved somewhat since the early days.
        </p>
        <p>
          I am a firm believer in form following function; I aim to make a
          functional tool that will be a pleasure to own and use for many years.
          The overall fit, finish and quality of work are of the utmost
          importance to me when making a knife. Each knife and sheath is
          handmade by me here in the UK, I do not currently outsource any part
          of the process.
        </p>
        <p>
          I only spend a few days each week making knives as the majority of my
          time these days is dedicated to my twin girls. Please take a look
          around, and feel free to contact me with any comments or enquiries.
        </p>
        <h2>You must be over 18 years of age to order a knife.</h2>
      </Layout>
    )}
  />
)

export default IndexPage
