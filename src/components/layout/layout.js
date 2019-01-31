import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import backgroundImage from '../../images/floweroflife.svg'

import Header from '../header/header'
import Footer from '../layout/footer'
import './layout.css'

const LayoutWrapper = styled.div`
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
  max-width: 960px;
  padding: 1rem;
  margin: auto;
`

const Layout = ({ children, banner }) => (
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
        <Header />
        <LayoutWrapper backgroundImage={backgroundImage}>
          <Img fluid={banner} />
          <ContentContainer>{children}</ContentContainer>
          <Footer author={data.site.siteMetadata.author} />
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
