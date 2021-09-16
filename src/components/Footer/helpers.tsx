import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import KitchenIcon from '@material-ui/icons/Kitchen'
import ListAltIcon from '@material-ui/icons/ListAlt'
import FastfoodIcon from '@material-ui/icons/Fastfood'

export const navItems = {
  home: {
    label: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  meals: {
    label: 'Meals',
    path: '/meals',
    icon: <FastfoodIcon />,
  },
  inventory: {
    label: 'Inventory',
    path: '/inventory',
    icon: <KitchenIcon />,
  },
  shopping: {
    label: 'Shopping',
    path: '/shopping',
    icon: <ListAltIcon />,
  },
}
