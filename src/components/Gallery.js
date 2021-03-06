import React, { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import styled, { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from 'react-touch-drag-slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'

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
const Button = styled.button`
  font-size: 3rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  opacity: 0.5;
  padding: 3rem 1rem;
  z-index: 10;
  position: fixed;
  height: 100%;
  :hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.right
      ? css`
          right: 0.5rem;
        `
      : css`
          left: 0.5rem;
        `}
`

const GatsbyImageWrapper = ({ index, onClick, photo, margin }) => {
  const image = getImage(photo)
  return (
    <ImageWrapper
      style={{ margin, height: photo.height, width: photo.width }}
      onClick={(e) => onClick(e, { index, photo })}
      key={photo.key}
    >
      <GatsbyImage
        image={image}
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
        alt={photo.name}
      />
    </ImageWrapper>
  )
}
const fileNumber = (file) => Number(file.node.name.replace(/[a-z]/gi, ''))

const getImages = (imageArray) => {
  // sort the images
  // map for react-photo-gallery
  return [...imageArray]
    .sort((a, b) => fileNumber(b) - fileNumber(a))
    .map(
      ({
        node: {
          name,
          childImageSharp: { gatsbyImageData, original },
        },
      }) => ({
        height: original.height,
        width: original.width,
        gatsbyImageData,
        key: name,
        name,
        alt: name,
        src: gatsbyImageData.images.fallback.src,
      })
    )
}

const KnifeGallery = ({ photos, ...rest }) => {
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  // console.log('photos', photos)
  const images = getImages(photos)
  // console.log('mapped images', images)
  const isMobile = useIsMobile()

  const imageClick = (_, obj) => {
    setCurrent(obj.index)
    setOpen(true)
  }

  useEffect(() => {
    const html = document.querySelector('html')
    isOpen
      ? (html.style.overflowY = 'hidden')
      : (html.style.overflowY = 'visible')

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) setOpen(false)
    }
    const removeEvent = () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    if (window && isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return removeEvent
  })

  const increment = () => {
    if (current < images.length - 1) setCurrent(current + 1)
  }

  const decrement = () => {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <>
      <div style={{ margin: '4rem auto' }}>
        {photos.length > 1 && (
          <Gallery
            photos={images}
            onClick={imageClick}
            renderImage={GatsbyImageWrapper}
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
          {current !== 0 && !isMobile ? (
            <Button onClick={decrement}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </Button>
          ) : null}
          {current !== images.length - 1 && !isMobile ? (
            <Button onClick={increment} right>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </Button>
          ) : null}
          <Slider
            activeIndex={current}
            onSlideComplete={setCurrent}
            scaleOnDrag={true}
          >
            {images.map((image) => {
              return (
                <GatsbyImage
                  key={image.key}
                  image={getImage(image)}
                  alt={image.name || 'knife'}
                  role="presentation"
                  objectFit="contain"
                  style={{
                    margin: 0,
                    maxWidth: 1200,
                    maxHeight: image.height,
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                />
              )
            })}
          </Slider>
        </Modal>
      </Portal>
    </>
  )
}

export default KnifeGallery
