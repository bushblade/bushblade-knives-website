import React from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const ModalStyles = styled.div`
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  & .modal-inner {
    width: 100%;
    position: relative;
  }
  a {
    border: none;
    background-image: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    &:hover {
      background: none;
    }
  }
  i {
    margin-right: 1.8rem;
    color: whitesmoke;
    height: 2rem;
    width: 2rem;
    border: solid whitesmoke;
    border-width: 0 5px 5px 0;
    border-radius: 3px;
    opacity: 0.5;
  }
`

function Modal({ open, children }) {
  const modalTransition = useTransition(open, null, {
    from: { opacity: 0, transform: 'scale(0.7)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.7)' },
    config: { mass: 1, tension: 170, friction: 20 },
  })
  return modalTransition.map(({ item, key, props }) => {
    return item ? (
      <animated.div
        key={key}
        style={{ ...props, position: 'fixed', top: 0, zIndex: 100 }}
      >
        <ModalStyles>
          <div className="modal-inner">{children}</div>
        </ModalStyles>
      </animated.div>
    ) : null
  })
}

export default Modal
