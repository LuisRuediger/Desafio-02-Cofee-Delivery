import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  DivCart,
  DivTimer,
  DivPackage,
  DivCoffee,
  DivContainer,
  Span,
  H2,
  Li,
  Ul,
  DivTitle,
  Background,
} from './styles'

// eslint-disable-next-line import/no-absolute-path
import IntroCoffee from '/assets/introCoffe.svg'

export function Intro() {
  return (
    <Background>
      <DivContainer>
        <DivTitle>
          <H2>Encontre o café perfeito para qualquer hora do dia</H2>
          <Span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Span>

          <Ul>
            <Li>
              <DivCart>
                <ShoppingCart size={16} weight="fill" />
              </DivCart>
              <span>Compra simples e segura</span>
            </Li>
            <Li>
              <DivTimer>
                <Timer size={16} weight="fill" />
              </DivTimer>
              <span>Compra simples e segura</span>
            </Li>
            <Li>
              <DivPackage>
                <Package size={16} weight="fill" />
              </DivPackage>
              <span>Compra simples e segura</span>
            </Li>
            <Li>
              <DivCoffee>
                <Coffee size={16} weight="fill" />
              </DivCoffee>
              <span>Compra simples e segura</span>
            </Li>
          </Ul>
        </DivTitle>

        <img src={IntroCoffee} alt="" />
      </DivContainer>
    </Background>
  )
}
