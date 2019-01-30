import React, { useState, useEffect } from 'react'
import logo from '../images/logo01-web.svg'
import styled from 'styled-components'
import { Spring, config } from 'react-spring'

import Navbar from './navbar'

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 11;
  width: 10rem;
  margin-left: -5rem;
  height: 3rem;
`

const Header = () => {
  const [logoBig, setLogoBig] = useState(true)
  useEffect(
    () => {
      if (window) {
        window.addEventListener('scroll', () => {
          let scrollPos = window.scrollY
          if (scrollPos > 15 && logoBig) {
            setLogoBig(false)
          } else if (scrollPos < 15 && !logoBig) {
            setLogoBig(true)
          }
        })
      }
    },
    [logoBig]
  )
  return (
    <>
      <LogoContainer>
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
      </LogoContainer>
      <div style={{ height: '3rem' }} />
      <Navbar />
    </>
  )
}

export default Header
