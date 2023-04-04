import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Ul, Location, Cart } from './styles'

// eslint-disable-next-line import/no-absolute-path
import Logo from '/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <Ul>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto alegre
          </Location>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Ul>
      </nav>
    </HeaderContainer>
  )
}
