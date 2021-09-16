import { BottomNavigationAction } from '@material-ui/core'
import React from 'react'
import { navItems } from './helpers'
import Styled from './styles'

type Value = keyof typeof navItems

const Footer: React.FC = () => {
  const [value, setValue] = React.useState<Value>('home')

  const handleChange = (e: React.ChangeEvent<{}>, newVal: Value): void => {
    setValue(newVal)
  }

  return (
    <Styled.Footer value={value} onChange={handleChange}>
      {Object.entries(navItems).map(([value, { label, icon }]) => (
        <BottomNavigationAction
          key={value}
          value={value}
          label={label}
          icon={icon}
        />
      ))}
    </Styled.Footer>
  )
}

export default Footer
