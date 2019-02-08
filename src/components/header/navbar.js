import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { siteLinks, socialLinks, knifeLinks } from './navLinks'

import Logo from './logo'
import Menu from './menu'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #c2c2a3;
  z-index: 9;
  width: 100%;
  height: 3rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
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

const PadDiv = styled.div`
  background-color: #c2c2a3;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
  div {
    margin-left: 0.5rem;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`
const SocialLink = styled.a`
  border: none;
  box-shadow: none;
  padding: 0 0.3rem;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  color: rgb(51, 51, 51);
  @media (max-width: 1000px) {
    display: none;
  }
  :hover {
    color: ${props => props.color};
  }
`

const navbar = () => {
  return (
    <>
      <PadDiv>
        <div>
          {socialLinks.map(({ to, icon, color }) => (
            <SocialLink
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              key={to}
              color={color}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </SocialLink>
          ))}
        </div>
      </PadDiv>
      <Nav>
        <Logo />
        <Links>
          {siteLinks.map(({ to, text }) => (
            <Link to={to} key={to}>
              {text}
            </Link>
          ))}
        </Links>
        <Links right>
          {knifeLinks.map(({ to, text }) => (
            <Link to={to} key={to}>
              {text}
            </Link>
          ))}
        </Links>
      </Nav>
      <Menu />
    </>
  )
}

export default navbar
