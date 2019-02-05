import React, { useState, useEffect } from 'react'
import { Transition, animated } from 'react-spring'

const TagLine = ({ tagline }) => {
  const [index, setIndex] = useState(0)

  const switchText = () => {
    if (index === tagline.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  useEffect(
    () => {
      let interval = setInterval(switchText, 4000)
      return () => clearInterval(interval)
    },
    [index]
  )

  return (
    <Transition
      items={index}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {item => props => (
        <animated.span style={{ props }}>{tagline[index]}</animated.span>
      )}
    </Transition>
  )
}

export default TagLine
