import React, { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Slider from '@farbenmeer/react-spring-slider'
import Portal from './Portal'
import Modal from '../components/Modal'
import { useIsMobile } from './hooks'

const CloseModalButton = styled.div`
  position: fixed;
  top: 0.4rem;
  right: 1rem;
  z-index: 102;
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin: 0 auto;
  transform: rotate(45deg);
  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: whitesmoke;
    border-radius: 3px;
  }
  span:after {
    position: absolute;
    // top: 50%;
    display: block;
    content: '';
    transform: rotate(90deg);
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    border-radius: 3px;
  }
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

const KnifeGallery = ({ photos, ...rest }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const images = getImages(photos)
  const isMobile = useIsMobile()

  const imageClick = (e, obj) => {
    setCurrent(obj.index)
    setOpen(true)
  }

  useEffect(() => {
    const html = document.querySelector('html')
    // isOpen
    //   ? (html.style.overflowY = 'hidden')
    //   : (html.style.overflowY = 'visible')

    const handleKeyDown = (e) => {
      switch (e.keyCode) {
        case 27:
          setOpen(false)
          break
        case 39:
          setCurrent(current + 1 < images.length ? current + 1 : 0)
          break
        case 37:
          setCurrent(current - 1 >= 0 ? current - 1 : images.length - 1)
      }
    }
    const removeEvent = () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    if (window && isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return removeEvent
  })

  return (
    <>
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
      </div>
      <Portal>
        <Modal open={isOpen}>
          <CloseModalButton onClick={() => setOpen(false)}>
            <span></span>
          </CloseModalButton>
          <Slider hasArrows={!isMobile} hasBullets activeIndex={current}>
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
      </Portal>
    </>
  )
}

export default KnifeGallery
