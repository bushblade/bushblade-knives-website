import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
    text-shadow: none;
    margin: 0 1rem;
    color: rgb(51, 51, 51);
    background-image: none;
    font-size: 1.5rem;
  }
`

const navbar = () => {
  return (
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
  )
}

export default navbar
