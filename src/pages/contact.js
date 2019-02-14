import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

import Layout from '../components/layout/layout'
import ContactForm from '../components/ContactForm'
import MessageSuccess from '../components/messageSuccess'

const contactQuery = graphql`
  query contactQuery {
    file(relativePath: { eq: "contact-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
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
`

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false)

  const transition = useTransition(messageSent, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  })

  return (
    <StaticQuery
      query={contactQuery}
      render={data => (
        <Layout
          banner={data.file.childImageSharp.fluid}
          pageTitle="Contact Me"
          tagline="bushblade@gmail.com"
        >
          <Container>
            <div style={{ gridArea: 'form' }}>
              {transition.map(({ item, key, props }) =>
                messageSent ? (
                  <animated.div style={props} key={key}>
                    <MessageSuccess />
                  </animated.div>
                ) : (
                  <animated.div style={props} key={key}>
                    <ContactForm setMessageSent={setMessageSent} />
                  </animated.div>
                )
              )}
            </div>

            <div style={{ gridArea: 'article' }}>
              <article>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  similique nesciunt, excepturi rerum numquam velit magni? Est
                  veniam aperiam pariatur, eos quas dolore maxime ad deserunt
                  fugiat iste sed dignissimos nulla! Rerum eligendi corporis
                  dolorum optio? Officia nisi dolores quisquam unde facere
                  maxime, totam explicabo aliquid odit laborum porro quod
                  reprehenderit nemo ducimus a enim ipsum mollitia blanditiis!
                  Facere,
                </p>
              </article>
            </div>
          </Container>
        </Layout>
      )}
    />
  )
}

export default ContactPage
