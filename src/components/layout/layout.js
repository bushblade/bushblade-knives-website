import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Header from '../header/header'
import './layout.css'

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
        <Img fluid={banner} />
        <div
          style={{
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            margin: '0 auto',
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()} {data.site.siteMetadata.author}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
