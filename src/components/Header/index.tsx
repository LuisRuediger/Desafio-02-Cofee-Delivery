import { MapPin } from 'phosphor-react'
import { HeaderContainer, Ul, Location } from './styles'
import { NavLink } from 'react-router-dom'

// eslint-disable-next-line import/no-absolute-path
import Logo from '/assets/logo.svg'
import { CounterIconCart } from '../CounterIconCart'

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
          <CounterIconCart />
        </Ul>
      </nav>
    </HeaderContainer>
  )
}
