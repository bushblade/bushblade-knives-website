import styled, { css } from 'styled-components'

export const NarrowContainer = styled.section`
  margin: auto;
  max-width: 960px;
`
export const TwoColumnContainer = styled.div`
  ${props =>
    props.narrow &&
    css`
      max-width: 960px;
    `}
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`
