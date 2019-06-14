import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageWrapper = styled.div`
  box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  border-radius: 2px;
  overflow: hidden;
  cursor: zoom-in;
  div {
    transition: transform 2s;
  }
  :hover {
    box-shadow: -2px 5px 8px 2px rgba(0, 0, 0, 0.3);
    div {
      transform: scale(1.05);
    }
  }
`

const GatsbyImage = ({ index, onClick, photo, margin }) => (
  <ImageWrapper
    style={{ margin, height: photo.height, width: photo.width }}
    onClick={e => onClick(e, { index, photo })}
  >
    <Img
      fixed={typeof window === 'undefined' ? { src: {} } : undefined}
      fluid={photo.fluid}
    />
  </ImageWrapper>
)

const fileNumber = file =>
  Number(file.node.childImageSharp.fluid.originalName.replace(/[a-z]/gi, ''))

const getImages = imageArray => {
  return [...imageArray]
    .sort((a, b) => fileNumber(b) - fileNumber(a))
    .map(({ node: { childImageSharp: { fluid, original } } }) => ({
      height: original.height,
      width: original.width,
      src: fluid.originalImg,
      srcSet: fluid.srcSet,
      fluid,
    }))
}

const styleFn = styleObj => ({ ...styleObj, zIndex: 100 })

const KnifeGallery = ({ photos, ...rest }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const images = getImages(photos)

  const imageClick = (e, obj) => {
    setCurrent(obj.index)
    setOpen(true)
  }

  return (
    <div style={{ margin: '4rem auto' }}>
      {photos.length > 1 && (
        <Gallery
          photos={images}
          onClick={imageClick}
          renderImage={GatsbyImage}
          targetRowHeight={250}
          margin={5}
          {...rest}
        />
      )}

      <ModalGateway>
        {isOpen ? (
          <Modal
            onClose={() => {
              setCurrent(0)
              setOpen(false)
            }}
            styles={{ blanket: styleFn, positioner: styleFn }}
          >
            <Carousel views={images} currentIndex={current} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default KnifeGallery
