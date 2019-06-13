import React, { useState } from 'react'
import { useSpring, config } from 'react-spring'
import Observer from '@researchgate/react-intersection-observer'
import PropTypes from 'prop-types'

const PathAnimation = ({ children }) => {
  const [inview, set] = useState(false)

  const pathSpring = useSpring({
    opacity: inview ? 1 : 0,
    strokeDashoffset: inview ? 0 : 100,
    from: { strokeDashoffset: 100, opacity: 0, strokeDasharray: 100 },
    config: config.molasses,
    delay: 200,
  })

  const options = {
    onChange: event => (event.isIntersecting ? set(true) : null),
    threshold: 1,
    rootMargin: '0% 0% 0%',
  }

  return <Observer {...options}>{children(pathSpring)}</Observer>
}

PathAnimation.propTypes = {
  children: PropTypes.func.isRequired,
}

export default PathAnimation
