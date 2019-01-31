import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Transition } from 'react-spring'

const MenuButton = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 12;
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s;
  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 0.2rem;
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
  @media (min-width: 800px) {
    display: none;
  }
`

const menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <span />
      </MenuButton>
      <Transition
        items={open}
        from={{ transform: 'translate3d(100%,0,0)' }}
        enter={{ transform: 'translate3d(0,0,0)' }}
        leave={{ transform: 'translate3d(100%,0,0)' }}
      >
        {open =>
          open &&
          (props => (
            <div
              style={{
                position: 'fixed',
                top: '0',
                right: '0',
                zIndex: '11',
                height: '100vh',
                width: '15rem',
                backgroundColor: 'pink',
                ...props,
              }}
            >
              ✌️
            </div>
          ))
        }
      </Transition>
    </>
  )
}

export default menu
