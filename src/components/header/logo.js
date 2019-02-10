import React from 'react'
import logo from './logo01-web.svg'
import styled from 'styled-components'
import { config, useSpring, animated } from 'react-spring'
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

const Logo = ({ logoBig }) => {
  const logoAnimation = useSpring({
    transform: logoBig
      ? 'scale(1.5) translate3d(0, 1rem, 0)'
      : 'scale(1) translate3d(0, 0rem, 0)',
    config: config.stiff,
  })

  return (
    <LogoContainer>
      <Link to="/">
        <animated.div style={logoAnimation}>
          <img
            src={logo}
            alt="Bushblade Handmade Knives"
            style={{ margin: '0', height: '3rem' }}
          />
        </animated.div>
      </Link>
    </LogoContainer>
  )
}

export default Logo
