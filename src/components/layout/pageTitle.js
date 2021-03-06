import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  margin: 1rem auto 5rem auto;
  h1 {
    font-family: 'Bilbo', serif;
    font-size: 3rem;
    display: inline-block;
    border-bottom: 3px solid #c2c2a3;
    padding: 0 2rem;
    margin: 0;
    line-height: 0.9;
    text-align: center;
  }
  h1 > span {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: italic;
    display: inline-block;
    font-size: 1.4rem;
    background-color: #f1f1f1;
    padding: 0 0.2rem;
  }
`

const PageTitle = ({ pageTitle, tagline = '' }) => {
  const headingProps = useSpring({
    transform: 'translate3d(0, 0, 0)',
    opacity: 1,
    from: {
      transform: 'translate3d(-10rem, 0, 0)',
      opacity: 0,
    },
  })

  const tagProps = useSpring({
    transform: 'translate3d(0, 1rem, 0)',
    opacity: 1,
    delay: 400,
    config: config.stiff,
    from: {
      transform: 'translate3d(-10rem, 1rem, 0)',
      opacity: 0,
    },
  })

  return (
    <Title>
      <animated.h1 style={headingProps}>
        {pageTitle} <animated.span style={tagProps}> {tagline}</animated.span>
      </animated.h1>
    </Title>
  )
}

export default PageTitle
