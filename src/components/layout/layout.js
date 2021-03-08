import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { css } from 'styled-components'
import backgroundImage from '../../images/floweroflife.svg'
import Seo from './seo'

import './global.css'
import Footer from '../layout/footer'
import Navbar from '../header/navbar'
import PageTitle from './pageTitle'

const LayoutWrapper = styled.section`
  background-color: #f1f1f1;
  ${(props) =>
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

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

const Layout = ({
  children,
  banner,
  pageTitle,
  tagline,
  keywords,
  location,
  twitterCardImage,
}) => {
  const data = useStaticQuery(layoutQuery)
  return <>
    <Seo
      title={pageTitle}
      keywords={keywords}
      twitterCardImage={twitterCardImage}
    />
    <Navbar location={location} />
    <LayoutWrapper backgroundImage={backgroundImage}>
      {banner && <GatsbyImage image={banner} />}
      <br />
      <ContentContainer>
        {pageTitle && <PageTitle pageTitle={pageTitle} tagline={tagline} />}
        {children}
      </ContentContainer>
      <Footer author={data.site.siteMetadata.author} />
    </LayoutWrapper>
  </>;
}

export default Layout
