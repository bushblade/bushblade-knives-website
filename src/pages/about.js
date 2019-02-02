import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
// import SEO from '../components/layout/seo'

const bannerQuery = graphql`
  query aboutBanner {
    file(relativePath: { eq: "banner04.jpg" }) {
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
        <h1>A little about me</h1>
        <p>
          Since a small boy I have been running away to the woods to build dens
          and rope swings; some may say I've never grown up, but my rope swings
          have got a lot bigger and my 'dens' have become far more habitable, so
          certainly something has changed.
        </p>
        <p>
          I have always had a passion for wild places and spending time in them;
          bushcraft for me is a way of being comfortable and feeling at home in
          wild places.
        </p>
        <p>
          As a child the subject for me and my friends came under the heading of
          'survival' and books by the likes of Lofty Wiseman and Eddie McGee
          were high on my Christmas list. However, survival implied a sense of
          'how to get out of this alive', whereas I was in search of 'how can I
          stay here longer?' When Ray Mears appeared on TV in the early 90's and
          brought the term bushcraft to my attention, that became my subject of
          study.
        </p>
        <p>
          In 2003 I attended a week long bushcraft course called the Woodlander
          which was run by{' '}
          <a
            href="http://www.woodsmoke.uk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Woodsmoke
          </a>{' '}
          in the Lake District, the course was excellent and I'm happy to say I
          received a distinction. My learning accelerated from attending the
          course and later that year took a place on their Abo' course. Over the
          next few years I consolidated my learning with time spent in remote
          area's of England and Scotland as well as the Bahamas practicing the
          skills I had learned. In 2007 and 2008 I assisted the{' '}
          <a
            href="http://www.woodsmoke.uk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Woodsmoke
          </a>{' '}
          team on many on their courses, further learning from a different
          perspective. I have also worked with other UK bushcraft schools
          including Bushtruck and Dryad Bushcraft.{' '}
        </p>
        <p>
          I only spend a few days each week making knives as the majority of my
          time these days is dedicated to my twin girls. I am a keen climber and
          can be often found training at{' '}
          <a
            href="http://www.rokt.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rokt{' '}
          </a>
          my local climbing gym.
        </p>
        <p>
          I also have a passion for web developement, which you can learn more
          about
          <a
            href="http://www.bushbladeprojects.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            here
          </a>
        </p>
      </Layout>
    )}
  />
)

export default IndexPage
