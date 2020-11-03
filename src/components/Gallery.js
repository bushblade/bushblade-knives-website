import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
// import Carousel from 'react-images'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Slider from '@farbenmeer/react-spring-slider'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`
const SliderImageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

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
    onClick={(e) => onClick(e, { index, photo })}
    key={photo.key}
  >
    <Img
      style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      fixed={typeof window === 'undefined' ? { src: {} } : undefined}
      fluid={photo.fluid}
    />
  </ImageWrapper>
)

const fileNumber = (file) =>
  Number(file.node.childImageSharp.fluid.originalName.replace(/[a-z]/gi, ''))

const getImages = (imageArray) => {
  return [...imageArray]
    .sort((a, b) => fileNumber(b) - fileNumber(a))
    .map(({ node: { childImageSharp: { fluid, original } } }) => ({
      height: original.height,
      width: original.width,
      src: fluid.originalImg,
      srcSet: fluid.srcSet,
      fluid,
      key: fluid.originalName,
    }))
}

const styleFn = (styleObj) => ({ ...styleObj, zIndex: 100 })

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

      {isOpen ? (
        <Modal>
          <Slider hasArrows hasBullets activeIndex={current}>
            {images.map((image) => (
              <div
                key={image.key}
                style={{
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${image.src})`,
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            ))}
          </Slider>
        </Modal>
      ) : null}
    </div>
  )
}

export default KnifeGallery
