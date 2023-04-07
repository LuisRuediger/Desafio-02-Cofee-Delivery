import { ShoppingCartSimple } from 'phosphor-react'
import {
  DivCardContainer,
  H2CoffeTitle,
  SpanType,
  SpanCoffeDescription,
  DivBuy,
  PPrice,
  DivCounterContainer,
  DivCounter,
  DivShoppingCart,
} from './styles'

// eslint-disable-next-line import/no-absolute-path
import Coffe from '/assets/coffe.svg'

export function CoffeeCard() {
  return (
    <>
      <DivCardContainer>
        <img src={Coffe} alt="" />
        <SpanType>TRADICIONAL</SpanType>
        <H2CoffeTitle>Expresso Tradicional</H2CoffeTitle>
        <SpanCoffeDescription>
          O tradicional café feito com água quente e grãos moídos
        </SpanCoffeDescription>

        <DivBuy>
          <PPrice>
            R$ <strong>9,90</strong>
          </PPrice>

          <DivCounterContainer>
            <DivCounter>-1+</DivCounter>
            <DivShoppingCart>
              <ShoppingCartSimple size={22} weight="fill" />
            </DivShoppingCart>
          </DivCounterContainer>
        </DivBuy>
      </DivCardContainer>
    </>
  )
}
