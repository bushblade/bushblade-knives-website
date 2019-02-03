import React, { useState } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const Thumbnail = styled.div`
  cursor: pointer;
  box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.01);
    box-shadow: -2px 5px 8px 2px rgba(0, 0, 0, 0.3);
  }
`

const RowGallery = ({ images }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  return (
    <div style={{ marginBottom: '2rem', marginTop: '2rem' }}>
      <Container>
        {images.map((image, indx) => (
          <Thumbnail
            onClick={() => {
              setCurrent(indx)
              setOpen(true)
            }}
            key={`row-gallery-img${indx}`}
          >
            <Img fluid={image} />
          </Thumbnail>
        ))}
      </Container>
      <Lightbox
        images={images}
        onClose={() => {
          setOpen(false)
          setCurrent(0)
        }}
        onClickPrev={() => setCurrent(current - 1)}
        onClickNext={() => setCurrent(current + 1)}
        currentImage={current}
        isOpen={isOpen}
        backdropClosesModal
      />
    </div>
  )
}

export default RowGallery
