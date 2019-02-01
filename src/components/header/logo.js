import React, { useState, useLayoutEffect } from 'react'
import logo from './logo01-web.svg'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'
import { Link } from 'gatsby'

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  width: 10rem;
  margin-left: -5rem;
  height: 3rem;
  grid-area: logo;
  a {
    border: none;
    box-shadow: none;
  }
`

const Logo = () => {
  const [logoBig, setLogoBig] = useState(true)

  const handleScroll = () => {
    let scrollPos = window.scrollY
    if (scrollPos > 15 && logoBig) {
      setLogoBig(false)
    } else if (scrollPos < 15 && !logoBig) {
      setLogoBig(true)
    }
  }

  useLayoutEffect(
    () => {
      if (window) {
        window.addEventListener('scroll', handleScroll)
      }
      return () => window.removeEventListener('scroll', handleScroll)
    },
    [logoBig]
  )

  return (
    <LogoContainer>
      <Link to="/">
        <Spring
          from={{
            transform: logoBig
              ? 'scale(1) translate3d(0, 0rem, 0)'
              : 'scale(1.5) translate3d(0, 1rem, 0)',
          }}
          to={{
            transform: logoBig
              ? 'scale(1.5) translate3d(0, 1rem, 0)'
              : 'scale(1) translate3d(0, 0rem, 0)',
          }}
          config={config.stiff}
        >
          {props => (
            <img
              src={logo}
              alt="Bushblade Handmade Knives"
              style={{ margin: '0', height: '3rem', ...props }}
            />
          )}
        </Spring>
      </Link>
    </LogoContainer>
  )
}

export default Logo