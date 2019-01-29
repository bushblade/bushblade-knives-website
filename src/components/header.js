import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import styled from 'styled-components'

import NavDropDown from './navDropDown'

const NavBar = styled.nav`
  margin-bottom: 1rem;
  background-color: rgba(73, 75, 70, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  z-index: 11;
  height: 3rem;
  display: flex;
  box-shadow: 0px 4px 31px 0px rgba(0, 0, 0, 0.64);
  a {
    background-image: none;
    margin: 0 0.5rem;
    text-shadow: none;
    color: white;
  }
`
const Links = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  a {
    :hover {
      border-bottom: 1px solid white;
    }
  }
`

const Header = () => {
  return (
    <NavBar>
      <Link to="/">
        <img
          src={logo}
          alt="Bushblade Knives"
          style={{ height: '2rem', margin: '0' }}
        />
      </Link>
      <Links>
        <Link to="/about">About</Link>
        <NavDropDown text={'Knives'} />
        <Link to="/contact">Contact</Link>
      </Links>
    </NavBar>
  )
}

export default Header
