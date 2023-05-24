import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
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
  ButtonShoppingCart,
} from './styles'
import { useContext } from 'react'
import { CounterContext } from '../../../../contexts/CounterContext'

interface CoffeeCardProps {
  tag: string
  src: string
  name: string
  description: string
  price: string
  counter: number
}

export function CoffeeCard({
  tag,
  name,
  description,
  price,
  src,
  counter,
}: CoffeeCardProps) {
  const { handleDecreaseCounter, handleIncreaseCounter } =
    useContext(CounterContext)
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
            <DivCounter>
              <ButtonShoppingCart onClick={handleDecreaseCounter}>
                <Minus size={14} weight="bold" />
              </ButtonShoppingCart>
              {counter}
              <ButtonShoppingCart onClick={handleIncreaseCounter}>
                <Plus size={14} weight="bold" />
              </ButtonShoppingCart>
            </DivCounter>
            <DivShoppingCart>
              <ShoppingCartSimple size={22} weight="fill" />
            </DivShoppingCart>
          </DivCounterContainer>
        </DivBuy>
      </DivCardContainer>
    </>
  )
}
