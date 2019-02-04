import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { options } from '../config'
import styled from 'styled-components'

const Img = styled.img`
  box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.01) translate3d(0, -2px, 0);
    box-shadow: -2px 5px 8px 2px rgba(0, 0, 0, 0.3);
  }
`

const ImageComponent = ({ index, onClick, photo, margin }) => (
  <Img
    {...photo}
    style={{ margin, height: photo.height, width: photo.width }}
    onClick={e => onClick(e, { index, photo })}
  />
)

const KnifeGallery = ({ album }) => {
  const [images, setImages] = useState([])
  const [isOpen, setOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(
    () => {
      if (images.length === 0) {
        axios
          .get(`https://api.imgur.com/3/album/${album}`, options)
          .then(res => {
            setImages(
              res.data.data.images.map(({ id, height, width, link }) => ({
                id,
                height,
                width,
                src: link,
              }))
            )
          })
      }
    },
    [images]
  )
  return (
    <>
      {images.length > 1 && (
        <Gallery
          photos={images}
          onClick={(event, obj) => {
            setCurrent(obj.index)
            setOpen(true)
          }}
          ImageComponent={ImageComponent}
          margin={5}
        />
      )}
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
    </>
  )
}

export default KnifeGallery
