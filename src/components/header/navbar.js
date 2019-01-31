import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
  grid-template-columns: 1fr 1fr;
  font-family: 'Bilbo', cursive;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  a {
    transition: all 0.2s ease-in-out;
    text-shadow: none;
    margin: 0 1rem;
    color: rgb(51, 51, 51);
    background-image: none;
    font-size: 1.7rem;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    :hover {
      transform: scale(1.1);
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
    }
    @media (max-width: 800px) {
      display: none;
    }
  }
`

const navbar = () => {
  return (
    <>
      <Nav>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Links>
        <Links>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </Links>
      </Nav>
      <Menu />
    </>
  )
}

export default navbar
