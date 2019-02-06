import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import backgroundImage from '../../images/floweroflife.svg'
// import { useSpring, animated } from 'react-spring'

import Footer from '../layout/footer'
import Navbar from '../header/navbar'
import TagLine from './tagLine'
import './layout.css'

const LayoutWrapper = styled.header`
  background-color: #f1f1f1;
  ${props =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    `}
`

const ContentContainer = styled.div`
  max-width: 1300px;
  padding: 1rem;
  margin: auto;
`

const PadDiv = styled.div`
  background-color: #c2c2a3;
  height: 3rem;
`

const Title = styled.div`
  text-align: center;
  margin: 1rem auto 3rem auto;
  h1 {
    /* font-style: italic; */
    font-family: 'Bilbo', serif;
    font-size: 2.8rem;
    display: inline-block;
    border-bottom: 3px solid #c2c2a3;
    padding: 0 2rem;
    margin: 0;
    line-height: 0.9;
  }
  h1 > span {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: italic;
    display: inline-block;
    transform: translateY(1rem);
    font-size: 1.4rem;
    background-color: #f1f1f1;
    padding: 0 0.2rem;
  }
`

const Layout = ({ children, banner, pageTitle, tagline = '' }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <PadDiv />
          <Navbar />
          <LayoutWrapper backgroundImage={backgroundImage}>
            <Img
              fixed={typeof window === 'undefined' ? { src: {} } : undefined}
              fluid={banner}
            />
            <br />
            <ContentContainer>
              {pageTitle && (
                <Title>
                  <h1 style={{ textAlign: 'center' }}>
                    {pageTitle}{' '}
                    <span>
                      {' '}
                      {typeof tagline !== 'string' ? (
                        <TagLine tagline={tagline} />
                      ) : (
                        tagline
                      )}
                    </span>
                  </h1>
                </Title>
              )}
              {children}
            </ContentContainer>
            <Footer author={data.site.siteMetadata.author} />
          </LayoutWrapper>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
