import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null

const Portal = ({ children, className }) => {
  const mainDivRef = useRef(
    typeof document !== `undefined` ? document.createElement('div') : null
  )

  useEffect(() => {
    const mainDiv = mainDivRef.current
    if (portalRoot && mainDiv) {
      portalRoot.appendChild(mainDiv)
    }
    return () => {
      if (portalRoot && mainDiv) {
        portalRoot.removeChild(mainDiv)
      }
    }
  }, [])

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Portal
