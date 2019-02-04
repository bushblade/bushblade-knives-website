import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { options } from '../config'

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
