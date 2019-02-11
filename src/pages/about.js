import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import SEO from '../components/layout/seo'

import Layout from '../components/layout/layout'
import {
  TwoColumnContainer,
  NarrowContainer,
} from '../components/layout/styledComponents'
import Gallery from '../components/Gallery'

const aboutQuery = graphql`
  query aboutQuery {
    file(relativePath: { eq: "banner04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    woodsmoke: file(relativePath: { eq: "woodsmoke2003.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    me: file(relativePath: { eq: "meintree.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "me" } }) {
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

const Cell = styled.div`
  margin: 1rem 0;
`

const IndexPage = () => (
  <StaticQuery
    query={aboutQuery}
    render={data => (
      <Layout
        banner={data.file.childImageSharp.fluid}
        pageTitle="A little about me"
        tagline=" bushcrafter, climber, developer, dad..."
      >
        <TwoColumnContainer>
          <Cell>
            <blockquote>
              <p>
                <strong>I have always had a passion for wild places</strong> and
                spending time in them; bushcraft for me is a way of being
                comfortable and feeling at home in wild places.{' '}
              </p>
              <p>
                As a child the subject for me and my friends came under the
                heading of 'survival' and books by the likes of{' '}
                <em>Lofty Wiseman </em>
                and <em>Eddie McGee </em>were high on my Christmas list.
                However, survival implied a sense of 'how to get out of this
                alive', whereas I was in search of 'how can I stay here longer?'
                When <em>Ray Mears </em>appeared on TV in the early 90's and
                brought the term bushcraft to my attention, that became my
                subject of study.
              </p>
            </blockquote>
          </Cell>
          <Cell>
            <Img
              fixed={typeof window === 'undefined' ? { src: {} } : undefined}
              fluid={data.me.childImageSharp.fluid}
              style={{ margin: 'auto' }}
              title="Yep that's me"
            />
          </Cell>
        </TwoColumnContainer>
        <TwoColumnContainer>
          <Cell>
            <Img
              fixed={typeof window === 'undefined' ? { src: {} } : undefined}
              fluid={data.woodsmoke.childImageSharp.fluid}
              title="June 2003"
            />
            <h4
              style={{
                textAlign: 'center',
                fontStyle: 'italic',
                margin: '0.5rem',
              }}
            >
              Woodsmoke - June 2003
            </h4>
          </Cell>
          <Cell>
            <blockquote>
              <p>
                In 2003 I attended a week long bushcraft course called the
                Woodlander which was run by{' '}
                <a
                  href="http://www.woodsmoke.uk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Woodsmoke
                </a>{' '}
                in the Lake District, the course was excellent and I'm happy to
                say I received a distinction.{' '}
              </p>
              <p>
                My learning accelerated from attending the course and later that
                year took a place on their Abo' course. Over the next few years
                I consolidated my learning with time spent in remote areas of
                England and Scotland as well as The Bahamas practicing the
                skills I had learned.
              </p>{' '}
              <p>
                In 2007 and 2008 I assisted the{' '}
                <a
                  href="http://www.woodsmoke.uk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Woodsmoke
                </a>{' '}
                team on many of their courses, further learning from a different
                perspective. I have also worked with other UK bushcraft schools
                including Bushtruck and{' '}
                <a
                  href="https://www.dryadbushcraft.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dryad Bushcraft.
                </a>{' '}
              </p>
            </blockquote>
          </Cell>
        </TwoColumnContainer>
        <NarrowContainer>
          <p>
            <strong>I only spend a few days each week making knives </strong>as
            the majority of my time these days is dedicated to my twin girls. I
            am a keen climber and can be often found training at{' '}
            <a
              href="http://www.rokt.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rokt{' '}
            </a>
            , my local climbing gym.
          </p>
          <p>
            I also have a passion for web development which originaly came from
            a need to build a website for Bushblade Knives, which you can learn
            more about
            <a
              href="http://www.bushbladeprojects.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              here.
            </a>{' '}
            For those geeky enough to want to know - this site is built with
            GatsbyJS, ReactJS and styled-components mainly using VS Code on a
            desktop instalation of Manjaro Linux with continuous deployment to
            Netlify through GitHub.
          </p>
        </NarrowContainer>
        <Gallery
          photos={data.allFile.edges}
          columns={width => {
            if (width < 700) {
              return 1
            } else if (width < 1000) {
              return 2
            } else {
              return 7
            }
          }}
        />
      </Layout>
    )}
  />
)

export default IndexPage
