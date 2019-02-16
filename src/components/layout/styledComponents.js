import styled from 'styled-components'

export const NarrowContainer = styled.section`
  margin: auto;
  max-width: 960px;
`
export const TwoColumnContainer = styled.div`
  max-width: ${props => props.narrow && '960px'};
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
  grid-gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`
