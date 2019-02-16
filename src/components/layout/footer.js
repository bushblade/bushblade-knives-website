import React from 'react'
import styled from 'styled-components'
import { siteLinks, socialLinks, knifeLinks } from '../header/navLinks'
import { Link } from 'gatsby'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContainer = styled.footer`
  background-color: rgba(73, 75, 70, 1);
  color: whitesmoke;
  padding: 2rem 1rem 1rem 1rem;
  border-bottom: 5px solid #c2c2a3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas: 'main' 'bottom';
  @media (min-width: 1200px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  @media (min-width: 1600px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const Bottom = styled.div`
  grid-area: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  a {
    color: whitesmoke;
    box-shadow: inset 0 -2px 0px 0px transparent;
    transition: all 0.2s ease-in-out;
    :hover {
      box-shadow: inset 0 -2px 0px 0px #c2c2a3;
      background: none;
    }
  }
`
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 2rem;
  h4 {
    color: whitesmoke;
    font-style: italic;
    margin-bottom: 0.5rem;
    box-shadow: inset 0 -2px 0px 0px #c2c2a3;
    padding: 0 0.5rem 0.2rem 0.5rem;
  }
  a {
    color: whitesmoke;
    font-size: 0.9rem;
    box-shadow: inset 0 -2px 0px 0px transparent;
    transition: all 0.2s ease-in-out;
    :hover {
      box-shadow: inset 0 -2px 0px 0px #c2c2a3;
      background: none;
    }
  }
`

const footer = ({ author }) => {
  return (
    <FooterContainer>
      <Main>
        <ListContainer>
          <h4>Pages</h4>
          {siteLinks.map(({ to, text }) => (
            <Link to={to} key={to}>
              {text}
            </Link>
          ))}
        </ListContainer>
        <ListContainer>
          <h4>Knives</h4>
          {knifeLinks.map(({ to, text }) => (
            <Link to={to} key={to}>
              {text}
            </Link>
          ))}
        </ListContainer>
        <ListContainer>
          <h4>Social Media</h4>
          {socialLinks.map(({ to, text }) => (
            <a href={to} target="_blank" rel="noopener noreferrer" key={to}>
              {text}
            </a>
          ))}
        </ListContainer>
        <ListContainer>
          <a href="mailto:bushblade@gmail.com">
            <FontAwesomeIcon icon={faAt} /> bushblade@gmail.com
          </a>
        </ListContainer>
      </Main>
      <Bottom>
        All content &copy; {new Date().getFullYear()} {author}. Site design and
        development by {author}. All images &copy;
        <a
          href="https://louadamsphotography.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Lou Adams Photography
        </a>
      </Bottom>
    </FooterContainer>
  )
}

export default footer
