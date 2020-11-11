import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  & .modal-inner {
    z-index: 11;
    width: 100%;
    position: relative;
  }
`

function Modal({ open, children }) {
  const modalTransition = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.99 },
    leave: { opacity: 0 },
  })
  return modalTransition.map(({ item, key, props }) => {
    return item ? (
      <animated.div
        key={key}
        style={{ ...props, position: 'fixed', top: 0, zIndex: 10 }}
        aria-modal="true"
        role="dialog"
      >
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
