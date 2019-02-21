import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
  box-shadow: -1px 10px 45px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background: whitesmoke;
  transition: all 0.3s ease-out;
  overflow: hidden;
  ${props =>
    props.hover &&
    css`
      box-shadow: -1px 15px 45px 0px rgba(0, 0, 0, 0.3);
      transform: translate3d(0, -10px, 0) scale(1.02);
    `}
`
const CardHeader = styled.div`
  display: flex;
  position: relative;
  border-bottom: 5px solid #c2c2a4;
  img {
    max-height: 200px;
    flex-grow: 1;
    object-fit: cover;
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
  padding: 0 1rem;
  h4,
  h5 {
    display: inline-block;
  }
  h4 {
    padding-right: 1rem;
  }
`

const postsCard = ({
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
            <img src={image} style={{ marginBottom: '0' }} />
            <CardTitle>
              <h2>{title}</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{excerpt}</p>
          </CardContent>
          <CardFooter>
            <h4>{author}</h4>
            <h5>
              <em>{date}</em>
            </h5>
          </CardFooter>
        </div>
      </a>
    </Card>
  )
}

export default postsCard
