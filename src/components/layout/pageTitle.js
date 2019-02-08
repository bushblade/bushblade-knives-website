import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'

import TagLine from './tagLine'

const Title = styled.div`
  text-align: center;
  margin: 1rem auto 3rem auto;
  h1 {
    /* font-style: italic; */
    font-family: 'Bilbo', serif;
    font-size: 2.8rem;
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
    transform: translateY(1rem);
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
    delay: 300,
    config: config.stiff,
    from: {
      transform: 'translate3d(10rem, 1rem, 0)',
      opacity: 0,
    },
  })

  return (
    <Title>
      <h1>
        {pageTitle} <span> {tagline}</span>
      </h1>
    </Title>
  )
}

export default PageTitle
