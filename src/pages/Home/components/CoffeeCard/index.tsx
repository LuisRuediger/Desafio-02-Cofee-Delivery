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

interface CoffeeCardProps {
  tag: string
  src: string
  name: string
  description: string
  price: string
}

export function CoffeeCard({
  tag,
  name,
  description,
  price,
  src,
}: CoffeeCardProps) {
  return (
    <>
      <DivCardContainer>
        <img src={src} alt="" />
        <SpanType>{tag}</SpanType>
        <H2CoffeTitle>{name}</H2CoffeTitle>
        <SpanCoffeDescription>{description}</SpanCoffeDescription>

        <DivBuy>
          <PPrice>
            R$ <strong>{price}</strong>
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
