import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Transition, Trail, Spring, config } from 'react-spring'
import { Link } from 'gatsby'
import navLinks from './navLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const MenuButton = styled.div`
  position: fixed;
  top: 0.4rem;
  right: 1rem;
  z-index: 12;
  display: block;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s;
  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
  }
  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
    transition: all 0.3s;
  }
  span:before {
    transform: translateY(-0.5rem);
  }
  span:after {
    transform: translateY(0.5rem);
  }
  ${props =>
    props.open &&
    css`
      transform: rotate(45deg);
      span {
        background-color: whitesmoke;
      }
      span:before {
        transform: rotate(90deg);
        background-color: whitesmoke;
      }
      span:after {
        transform: rotate(90deg);
        background-color: whitesmoke;
      }
    `}
  @media (min-width: 1000px) {
    display: none;
  }
`
const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  height: 100vh;
  width: 100%;
  background-color: rgba(73, 75, 70, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    margin-top: 4rem;
    li {
      margin: 1rem;
    }
  }
  a {
    color: whitesmoke;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    font-style: italic;
    font-size: 2rem;
    border: none;
    box-shadow: none;
    :hover {
      background: none;
    }
  }
  @media (min-width: 1000px) {
    display: none;
  }
`
const SocialLinks = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 700px) {
    width: 50%;
  }
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
  padding: 2rem;
`

const menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <span />
      </MenuButton>
      <Transition
        items={open}
        from={{ transform: 'translate3d(100%,-100%,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
        leave={{ transform: 'translate3d(100%,-100%,0)', opacity: 0 }}
      >
        {open =>
          open &&
          (props => (
            <Menu style={props}>
              <ul>
                <Trail
                  items={navLinks}
                  keys={item => item.text}
                  from={{ transform: 'translate3d(0,-40px,0)' }}
                  to={{ transform: 'translate3d(0,0px,0)' }}
                  delay={200}
                >
                  {item => linkprops => (
                    <li key={item.text} style={linkprops}>
                      <Link onClick={() => setOpen(false)} to={item.to}>
                        {item.text}
                      </Link>
                    </li>
                  )}
                </Trail>
              </ul>
              <Spring
                from={{ opacity: 0, transform: 'translate3d(0, 100%, 0)' }}
                to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                reset
                config={config.stiff}
              >
                {props => (
                  <SocialLinks style={props}>
                    <a
                      href="https://www.facebook.com/Bushbladehandmadeknives/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                    </a>
                    <a
                      href="https://www.instagram.com/bushblade/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a
                      href="https://twitter.com/Bushblade?lang=en-gb"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC-A8Y3qftUHT5cYwVlW0ttA"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faYoutube} size="lg" />
                    </a>
                  </SocialLinks>
                )}
              </Spring>
            </Menu>
          ))
        }
      </Transition>
    </>
  )
}

export default menu
