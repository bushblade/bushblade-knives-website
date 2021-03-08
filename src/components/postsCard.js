import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage } from 'gatsby-plugin-image'

const Card = styled.div`
  box-shadow: -1px 10px 45px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background: whitesmoke;
  transition: all 0.3s ease-out;
  overflow: hidden;
  ${(props) =>
    props.hover &&
    css`
      box-shadow: -1px 15px 45px 0px rgba(0, 0, 0, 0.3);
      transform: translate3d(0, -10px, 0) scale(1.02);
    `}
`
const CardHeader = styled.div`
  position: relative;
  border-bottom: 5px solid #c2c2a4;
  ::after {
    content: '';
    border-right: 8px solid #c2c2a4;
    border-bottom: 8px solid #c2c2a4;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    border-radius: 2px;
    position: absolute;
    bottom: -12px;
    left: 50%;
    margin-left: -8px;
    transform: rotate(45deg);
  }
`

const CardTitle = styled.div`
  padding: 0 1rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  h2 {
    margin: 0;
    color: white;
  }
`

const CardContent = styled.div`
  padding: 1rem;
`

const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
  margin-bottom: 1rem;
  color: dimgrey;
  font-style: italic;
  font-size: 0.9rem;
`

const PostsCard = ({
  excerpt,
  frontmatter: { date, title, slug, author, image },
}) => {
  const [hover, setHover] = useState(false)
  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <a href={`/posts${slug}`}>
        <div>
          <CardHeader>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              style={{ maxHeight: '200px' }}
              alt={image.name}
            />
            <CardTitle>
              <h2>{title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{excerpt}</p>
          </CardContent>
          <CardFooter>
            <div>
              <FontAwesomeIcon icon={faUserCircle} /> {author}
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} /> {date}
            </div>
          </CardFooter>
        </div>
      </a>
    </Card>
  )
}

export default PostsCard
