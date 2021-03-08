import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout/layout'
import {
  TwoColumnContainer,
  NarrowContainer,
  ReverseContainer,
  ReverseCell,
} from '../components/layout/styledComponents'
import Gallery from '../components/Gallery'

const aboutQuery = graphql`
  query aboutQuery {
    banner: file(relativePath: { eq: "knifemaking-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 75, layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    woodsmoke: file(relativePath: { eq: "woodsmoke2003.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    me: file(relativePath: { eq: "meintree.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    allFile(filter: { relativeDirectory: { eq: "me" } }) {
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

const AboutPage = ({ location }) => {
  const data = useStaticQuery(aboutQuery)
  return (
    <Layout
      banner={data.banner.childImageSharp.gatsbyImageData}
      pageTitle="A little about me"
      tagline=" bushcrafter, climber, developer, dad..."
      keywords={[
        'will adams',
        'knifemaker',
        'profile',
        'climber',
        'bushcrafter',
        'developer',
        'dad',
        'father',
        'woodsmoke',
        'survival',
      ]}
      location={location}
    >
      <TwoColumnContainer>
        <div>
          <blockquote>
            <p>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="xs"
                style={{ marginBottom: '0.3rem', maxWidth: '1.5rem' }}
              />{' '}
              I have always had a passion for wild places and spending time in
              them. Bushcraft for me is a way of being comfortable and feeling
              at home in wild places.{' '}
              <FontAwesomeIcon
                icon={faQuoteRight}
                size="xs"
                style={{ marginBottom: '0.3rem', maxWidth: '1.5rem' }}
              />
            </p>
          </blockquote>
          <p>
            As a child the subject for me and my friends came under the heading
            of 'survival' and books by the likes of <em>Lofty Wiseman </em>
            and <em>Eddie McGee </em>were high on my Christmas list.
          </p>
          <p>
            However, survival implied a sense of 'how to get out of this alive',
            whereas I was in search of 'how can I stay here longer?' When{' '}
            <em>Ray Mears </em>appeared on TV in the early 90's and brought the
            term bushcraft to my attention, that became my subject of study.
          </p>
        </div>
        <div>
          <GatsbyImage
            image={getImage(data.me.childImageSharp.gatsbyImageData)}
            style={{ margin: 'auto' }}
            title="Yep that's me"
            alt="Will Adams"
          />
        </div>
      </TwoColumnContainer>
      <ReverseContainer>
        <ReverseCell area="left">
          <GatsbyImage
            image={data.woodsmoke.childImageSharp.gatsbyImageData}
            title="June 2003"
            alt="Woodsmoke 2003"
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
        </ReverseCell>
        <ReverseCell area="right">
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
            in the Lake District, the course was excellent and I'm happy to say
            I received a distinction.{' '}
          </p>
          <p>
            My learning accelerated from attending the course and later that
            year took a place on their Abo' course. Over the next few years I
            consolidated my learning with time spent in remote areas of England
            and Scotland as well as The Bahamas practicing the skills I had
            learned.
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
        </ReverseCell>
      </ReverseContainer>
      <NarrowContainer>
        <p>
          <strong>I only spend a few days each week making knives </strong>as
          the majority of my time these days is dedicated to my twin girls. I am
          a keen climber and can be often found training at{' '}
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
          I also have a passion for web development which originally came from a
          need to build a website for Bushblade Knives, which you can learn more
          about
          <a
            href="https://github.com/bushblade"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            here.
          </a>{' '}
          For those geeky enough to want to know - this site is built with
          GatsbyJS, ReactJS and styled-components mainly using{' '}
          <span style={{ textDecoration: 'line-through' }}>VS Code</span> Neovim
          on a desktop installation of Manjaro Linux with continuous deployment
          to Netlify through GitHub.
        </p>
      </NarrowContainer>
      <Gallery
        photos={data.allFile.edges}
        columns={(width) => {
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
  )
}

export default AboutPage
