import React, { useState } from 'react'
import styled from 'styled-components'

const A = styled.a`
  background-image: none;
  margin: 0 0.5rem;
  text-shadow: none;
  color: white;
  cursor: pointer;
`

const DropLinks = styled.div`
  position: absolute;
  top: 2.5rem;
  left: -60%;
  background-color: rgba(73, 75, 70, 0.9);
  color: white;
  ul {
    list-style: none;
    margin: 0;
    padding: 1rem;
    li {
      margin: 0;
      white-space: nowrap;
    }
  }
`

const navDropDown = ({ text, links }) => {
  const [dropOpen, setDropOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }}>
      <A onClick={() => setDropOpen(!dropOpen)}>{text}</A>
      {dropOpen && (
        <DropLinks>
          <ul>
            <li>01 Midi</li>
            <li>Woodlore Clone</li>
            <li>Construction</li>
          </ul>
        </DropLinks>
      )}
    </div>
  )
}

export default navDropDown
