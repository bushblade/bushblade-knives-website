import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { siteLinks, socialLinks, knifeLinks } from './navLinks'
import Observer from 'react-intersection-observer'

import Logo from './logo'
import Menu from './menu'
import { useIsMobile } from '../hooks'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #c2c2a3;
  z-index: 9;
  max-width: 100vw;
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
  @media (max-width: 1080px) {
    display: none;
  }
`
const LinkBox = styled.span`
  padding: 0 0.5rem;
  height: 3rem;
  display: flex;
  align-items: center;
  border-bottom: ${props =>
    props.active
      ? '4px solid rgba(73, 75, 70, 0.95)'
      : '4px solid transparent'};
  a {
    transition: all 0.2s ease-in-out;
    text-shadow: none;
    background: none;
    @media (min-width: 1200px) {
      margin: 0 0.5rem;
    }
    color: rgb(51, 51, 51);
    font-size: 1.2rem;
    font-style: italic;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    :hover {
      background: none;
      transform: scale(1.1);
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
    }
  }
`

const PadDiv = styled.div`
  background-color: #c2c2a3;
  height: 3rem;
  max-width: 100vw;
  @media (max-width: 780px) {
    display: none;
  }
  align-items: center;
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

const navbar = ({ location }) => {
  const [logoBig, set] = useState(true)
  const mobile = useIsMobile()

  const observerOptions = {
    onChange: event => {
      if (!mobile) {
        event ? set(true) : set(false)
      }
    },
    threshold: 0.7,
    rootMargin: '0% 0% 0%',
  }

  const checkPath = (location, linkTo) => {
    if (location) {
      const path = location.pathname
      return linkTo === '/posts' ? path.includes('/posts') : path === linkTo
    }
  }

  return (
    <>
      <Observer {...observerOptions}>
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
                <FontAwesomeIcon
                  icon={icon}
                  size="lg"
                  style={{ maxWidth: '1.5rem' }}
                />
              </SocialLink>
            ))}
          </div>
        </PadDiv>
      </Observer>
      <Nav>
        <Logo logoBig={logoBig && !mobile} />
        <Links>
          {siteLinks.map(({ to, text }) => (
            <LinkBox key={to} active={checkPath(location, to)}>
              <Link to={to}>{text}</Link>
            </LinkBox>
          ))}
        </Links>
        <Links right>
          {knifeLinks.map(({ to, text }) => (
            <LinkBox key={to} active={checkPath(location, to)}>
              <Link to={to}>{text}</Link>
            </LinkBox>
          ))}
        </Links>
      </Nav>
      <Menu />
    </>
  )
}

export default navbar
