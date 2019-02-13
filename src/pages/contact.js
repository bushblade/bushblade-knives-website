import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout/layout'
import { NarrowContainer } from '../components/layout/styledComponents'
import ContactForm from '../components/ContactForm'

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

const ContactPage = () => (
  <StaticQuery
    query={contactQuery}
    render={data => (
      <Layout
        banner={data.file.childImageSharp.fluid}
        pageTitle="Contact Me:"
        tagline="bushblade@gmail.com"
      >
        <NarrowContainer>
          <ContactForm />
        </NarrowContainer>
      </Layout>
    )}
  />
)

export default ContactPage
