import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { siteLinks, socialLinks } from './navLinks'

import Menu from './menu'

const Nav = styled.nav`
  position: sticky;
  top: 0px;
  background-color: #c2c2a3;
  z-index: 9;
  width: 100%;
  height: 3rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas: 'llinks logo rlinks';
  a {
    border: none;
    box-shadow: none;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  grid-area: ${props => (props.right ? 'rlinks' : 'llinks')};
  a {
    transition: all 0.2s ease-in-out;
    text-shadow: none;
    margin: 0 0.5rem;
    @media (min-width: 1100px) {
      margin: 0 1rem;
    }
    color: rgb(51, 51, 51);
    font-size: 1.2rem;
    font-style: italic;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    :hover {
      transform: scale(1.1);
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`

const navbar = () => {
  return (
    <>
      <Nav>
        <Links>
          {siteLinks.map(({ to, text }) => (
            <Link to={to} key={to}>
              {text}
            </Link>
          ))}
        </Links>
        <Links right>
          {socialLinks.map(({ to, icon }) => (
            <a href={to} target="_blank" key={to}>
              <FontAwesomeIcon icon={icon} size="lg" />
            </a>
          ))}
        </Links>
      </Nav>
      <Menu />
    </>
  )
}

export default navbar
