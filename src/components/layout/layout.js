import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import backgroundImage from '../../images/floweroflife.svg'

import Footer from '../layout/footer'
import Navbar from '../header/navbar'
import PageTitle from './pageTitle'

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

const Layout = ({ children, banner, pageTitle, tagline }) => (
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
    render={data => (
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
            {pageTitle && <PageTitle pageTitle={pageTitle} tagline={tagline} />}
            {children}
          </ContentContainer>
          <Footer author={data.site.siteMetadata.author} />
        </LayoutWrapper>
      </>
    )}
  />
)

export default Layout
