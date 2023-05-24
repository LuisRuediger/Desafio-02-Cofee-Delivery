import { ShoppingCart } from 'phosphor-react'
import { Cart } from './styles'
import { NavLink } from 'react-router-dom'
import { Badge } from '@mui/material'

export function BShoppingCart() {
  const badgeStyle = {
    '& .MuiBadge-badge': {
      color: '#FFF',
      backgroundColor: '#C47F17',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '12px',
    },
  }
  return (
    <Badge badgeContent={4} sx={badgeStyle}>
      <Cart>
        <NavLink to="/checkout" title="checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </Cart>
    </Badge>
  )
}
