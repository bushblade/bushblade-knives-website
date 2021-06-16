import React, { useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

import Layout from '../components/layout/layout'
import ContactForm from '../components/ContactForm'
import MessageSuccess from '../components/messageSuccess'

export const query = graphql`
  query contactQuery {
    file(relativePath: { eq: "contact-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    prices: site {
      siteMetadata {
        prices {
          midi
          woodloreClone
        }
      }
    }
  }
`

const Container = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'article article' 'form form';
  margin: 2rem auto;
  @media (min-width: 800px) {
    grid-template-areas: 'form article';
    grid-gap: 1rem;
  }
  div {
    margin-bottom: 2rem;
  }
`

const ContactPage = ({ data }) => {
  const [messageSent, setMessageSent] = useState(false)

  const sentTransition = useTransition(messageSent, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, 10rem, 0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 10rem, 0)' },
    config: config.stiff,
  })

  return (
    <Layout
      banner={data.file.childImageSharp.gatsbyImageData}
      pageTitle="Contact Me"
      tagline="bushblade@gmail.com"
      keywords={['contact', 'email', 'social media', 'phone']}
    >
      <Container>
        <div style={{ gridArea: 'form', position: 'relative' }}>
          {messageSent ? (
            sentTransition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div style={props} key={key}>
                    <MessageSuccess />
                  </animated.div>
                )
            )
          ) : (
            <ContactForm setMessageSent={setMessageSent} />
          )}
        </div>

        <div style={{ gridArea: 'article', padding: '0 1rem' }}>
          <h2>A few things I get asked often...</h2>
          <hr />
          <h3>How much does a knife cost?</h3>
          <p>
            Each knife is custom made and as such price can vary depending on
            materials, sheath options and etching etc. As a rough guide a Midi
            in 3mm stock starts at £{data.prices.siteMetadata.prices.midi} and a
            Woodlore Clone in 4mm stock with a tapered tang starts at £
            {data.prices.siteMetadata.prices.woodloreClone}.
          </p>
          <h3>Can you make a knife to my design?</h3>
          <p>At the moment I do not take on commissioned designs.</p>
          <h3>What's your waiting list like?</h3>
          <p>
            I have moved away from commissioned work for the foreseeable future.
            Any knives I have available will be listed on the{' '}
            <a
              href="https://www.facebook.com/Bushbladehandmadeknives/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook page.
            </a>{' '}
            Please follow me on social media for latest availability.
          </p>
          {/* <h3>Who built your website?</h3> */}
          {/* <p>
                I built the site myself. I am not a developer by profession but
                if you have a project you think I would be intersted in then
                please get in touch.
              </p> */}
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
