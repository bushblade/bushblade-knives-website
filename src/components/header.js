import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo01-web.svg'
import styled, { css } from 'styled-components'
import { Spring, config } from 'react-spring'

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #c2c2a3;
  z-index: 11;
  width: 100%;
  height: 3rem;
  ${props =>
    props.showShadow &&
    css`
      box-shadow: 0px 4px 31px 0px rgba(0, 0, 0, 0.64);
    `}
`
const HeadingContainer = styled.header`
  height: 6rem;
  background-color: #c2c2a3;
`

const Header = () => {
  const [logoBig, setLogoBig] = useState(true)
  const [showShadow, setShowShadow] = useState(false)
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
          if (scrollPos > 100 && !showShadow) {
            setShowShadow(true)
          } else if (scrollPos < 100 && showShadow) {
            setShowShadow(false)
          }
        })
      }
    },
    [logoBig]
  )
  return (
    <HeadingContainer>
      <Navbar showShadow={showShadow}>
        <Spring
          from={{
            transform: logoBig
              ? 'scale(1) translate3d(0, 0rem, 0)'
              : 'scale(1.2) translate3d(0, 1rem, 0)',
          }}
          to={{
            transform: logoBig
              ? 'scale(1.2) translate3d(0, 1rem, 0)'
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
      </Navbar>
    </HeadingContainer>
  )
}

export default Header
