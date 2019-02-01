import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  background-color: rgba(73, 75, 70, 1);
  min-height: 15rem;
  color: whitesmoke;
  padding: 1rem;
  border-bottom: 5px solid #c2c2a3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 1fr;
  grid-template-areas: 'main' 'bottom';
`
const Main = styled.div``

const Bottom = styled.div`
  grid-area: bottom;
  display: flex;
  justify-content: center;
`

const footer = ({ author }) => {
  return (
    <Footer>
      <Bottom>
        All content © {new Date().getFullYear()} {author}
      </Bottom>
    </Footer>
  )
}

export default footer
