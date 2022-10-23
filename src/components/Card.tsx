import React from 'react'
import { StyledCard } from './styles/Card.styled'

interface Props {
  item: {
    id: number
    title: string
    body: string
    image: string
  }
}

const Card = ({ item: { id, body, title, image } }: Props) => {
  return (
    <StyledCard layout={id % 2 === 0 ? 'row-reverse' : undefined}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  )
}

export default Card
