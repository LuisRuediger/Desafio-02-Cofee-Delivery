import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Ul, Location, Cart } from './styles'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line import/no-absolute-path
import Logo from '/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <Ul>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto alegre
          </Location>
          <Cart>
            <NavLink to="/checkout" title="checkout">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </Cart>
        </Ul>
      </nav>
    </HeaderContainer>
  )
}
