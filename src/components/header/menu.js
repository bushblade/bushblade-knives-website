import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const MenuButton = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 12;
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  /* to center */
  margin: 0 auto;
  transition: all 0.3s;
  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 0.2rem;
    /* margin-top: -0.2rem; */
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
  }
  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
    transition: all 0.3s;
  }
  span:before {
    transform: translateY(-0.5rem);
  }
  span:after {
    transform: translateY(0.5rem);
  }
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg);
      span:before {
        transform: rotate(90deg);
      }
      span:after {
        transform: rotate(90deg);
      }
    `}
`

const menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <span />
      </MenuButton>
    </>
  )
}

export default menu
