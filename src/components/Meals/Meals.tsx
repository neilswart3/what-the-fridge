import React from 'react'
import MealCard from './MealCard'
import Styled from './styles'

const Meals: React.FC = () => {
  return (
    <Styled.Meals>
      <MealCard />
      <MealCard />
      <MealCard />
    </Styled.Meals>
  )
}

export default Meals
