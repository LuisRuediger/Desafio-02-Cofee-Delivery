import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  DivCart,
  DivTimer,
  DivPackage,
  DivCoffee,
  IntroContainer,
  IntroSubtitle,
  IntroTitle,
  Items,
  ItemsList,
  TitleContainer,
} from './styles'

// eslint-disable-next-line import/no-absolute-path
import IntroCoffee from '/assets/introCoffe.svg'

export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <IntroTitle>
          Encontre o café perfeito para qualquer hora do dia
        </IntroTitle>
        <IntroSubtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </IntroSubtitle>

        <ItemsList>
          <Items>
            <DivCart>
              <ShoppingCart size={16} weight="fill" />
            </DivCart>
            <span>Compra simples e segura</span>
          </Items>
          <Items>
            <DivTimer>
              <Timer size={16} weight="fill" />
            </DivTimer>
            <span>Compra simples e segura</span>
          </Items>
          <Items>
            <DivPackage>
              <Package size={16} weight="fill" />
            </DivPackage>
            <span>Compra simples e segura</span>
          </Items>
          <Items>
            <DivCoffee>
              <Coffee size={16} weight="fill" />
            </DivCoffee>
            <span>Compra simples e segura</span>
          </Items>
        </ItemsList>
      </TitleContainer>

      <img src={IntroCoffee} alt="" />
    </IntroContainer>
  )
}
