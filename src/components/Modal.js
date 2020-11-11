import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const ModalStyles = styled.div`
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
  overflow: hidden;
  & .modal-inner {
    z-index: 101;
    width: 100%;
    position: relative;
  }
`

function Modal({ open, children }) {
  const modalTransition = useTransition(open, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  if (!open) return null
  return modalTransition.map(({ item, key, props }) => {
    return item ? (
      <animated.div key={key} style={props} aria-modal="true" role="dialog">
        <ModalStyles>
          <animated.div className="modal-inner" style={props} key={key}>
            {children}
          </animated.div>
        </ModalStyles>
      </animated.div>
    ) : null
  })
}

export default Modal
