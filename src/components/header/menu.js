import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTrail, useSpring, config, animated } from 'react-spring'
import { Link } from 'gatsby'
import { siteLinks, socialLinks, knifeLinks } from './navLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  height: 100vh;
  background-color: rgba(73, 75, 70, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ul {
    list-style: none;
    margin-top: 2rem;
    li {
      margin: 0.8rem;
    }
  }
  a {
    color: whitesmoke;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
    font-style: italic;
    font-size: 1.7rem;
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
  @media (min-width: 700px) {
    width: 50%;
  }
  justify-content: space-around;
  padding: 2rem;
  margin: auto;
`

const activeStyle = {
  borderBottom: '2px solid whitesmoke',
}

const menu = () => {
  const [open, setOpen] = useState(false)

  const menuSpring = useSpring({
    transform: open ? 'translate3d(0,0,0)' : 'translate3d(100%,-100%,0)',
    opacity: open ? 1 : 0,
  })

  const allLinks = siteLinks.concat(knifeLinks)

  const trail = useTrail(allLinks.length, {
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0,0px,0)' : 'translate3d(0,-40px,0)',
    config: config.stiff,
    delay: 200,
    reset: !open,
    from: {
      transform: 'translate3d(0,-40px,0)',
    },
  })

  const socialSpring = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
    from: {
      opacity: 0,
      transform: 'translate3d(0, 50%, 0)',
    },
    config: config.slow,
    delay: 500,
    reset: !open,
  })

  return (
    <>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <span />
      </MenuButton>
      <animated.div
        style={{
          zIndex: 11,
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          ...menuSpring,
        }}
      >
        <Menu>
          <ul>
            {trail.map((props, index) => (
              <animated.li key={allLinks[index].text} style={props}>
                <Link
                  onClick={() => setOpen(false)}
                  to={allLinks[index].to}
                  activeStyle={activeStyle}
                >
                  {allLinks[index].text}
                </Link>
              </animated.li>
            ))}
          </ul>
          <animated.div style={{ width: '100%', ...socialSpring }}>
            <SocialLinks>
              {socialLinks.map(({ to, icon, color }) => (
                <a
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={to}
                  color={color}
                >
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </SocialLinks>
          </animated.div>
        </Menu>
      </animated.div>
    </>
  )
}

export default menu
