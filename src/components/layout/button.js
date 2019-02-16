import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const BtnContainer = styled.div`
  margin: 0 1rem 1rem 0;
  @media (max-width: 780px) {
    margin: 0 0.5rem 1rem 0;
  }
  button {
    outline: none;
    border: 2px solid silver;
    border-radius: 0.2rem;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background: transparent;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    transition: background 0.2s ease-in-out;
    :focus {
      outline: none;
    }
    :hover {
      background: rgba(51, 51, 51, 0.07);
    }
  }
`
const Button = ({ children, ...rest }) => {
  const [press, setPress] = useState(false)

  const btnSpring = useSpring({
    transform: press ? 'scale(0.95)' : 'scale(1)',
    boxShadow: press
      ? '0px 1px 3px 3px rgba(0, 0, 0, 0.15)'
      : '-1px 2px 6px 2px rgba(0, 0, 0, 0.1)',
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
      velocity: 20,
      precision: 0.999,
    },
    onRest: () => setPress(false),
  })

  return (
    <BtnContainer>
      <animated.button
        {...rest}
        onMouseDown={() => setPress(true)}
        style={btnSpring}
      >
        {children}
      </animated.button>
    </BtnContainer>
  )
}

export default Button
