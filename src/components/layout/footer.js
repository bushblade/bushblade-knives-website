import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: rgba(73, 75, 70, 1);
  min-height: 15rem;
  color: whitesmoke;
  padding: 1rem;
`

const footer = ({ author }) => {
  return (
    <Footer>
      © {new Date().getFullYear()} {author}
    </Footer>
  )
}

export default footer
