import styled, { createGlobalStyle } from 'styled-components'

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
export const ReverseCell = styled.div`
  margin: 1rem 0;
  grid-area: ${props => props.area};
`

export const ReverseContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'right right' 'left left';
  @media (min-width: 800px) {
    grid-template-areas: 'left right';
  }
`
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #c2c2a3;
  }

  blockquote, article {
    border-radius: 5px;
    padding: 1rem;
    background: #f1f1f1;
    font-style: italic;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.05);
  }

  blockquote {
    border-left: 5px solid #c2c2a3;
  }
  
  article {
    border-top: 5px solid #c2c2a3;
  }
`
