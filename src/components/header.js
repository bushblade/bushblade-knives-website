import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import { Spring } from 'react-spring'

const NavBar = styled.nav`
  margin-bottom: 1rem;
  background-color: rgba(73, 75, 70, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  a {
    background-image: none;
    margin: 0;
    padding: 0;
  }
`

const Header = () => {
  const [logoBig, setLogoBig] = useState(true)
  useEffect(
    () => {
      if (window) {
        window.addEventListener('scroll', e => {
          if (window.scrollY > 100 && logoBig) {
            setLogoBig(false)
          } else if (window.scrollY < 100 && !logoBig) {
            setLogoBig(true)
          }
        })
      }
    },
    [logoBig]
  )

  return (
    <NavBar>
      <div
        style={{
          maxWidth: 960,
          padding: `0.5rem`,
        }}
      >
        <Link to="/">
          <Spring
            from={{ height: logoBig ? '2rem' : '3rem' }}
            to={{ height: logoBig ? '3rem' : '2rem' }}
          >
            {props => (
              <img
                src={logo}
                alt="Bushblade Knives"
                style={{ height: '3rem', margin: '0', ...props }}
              />
            )}
          </Spring>
        </Link>
      </div>
    </NavBar>
  )
}

export default Header
