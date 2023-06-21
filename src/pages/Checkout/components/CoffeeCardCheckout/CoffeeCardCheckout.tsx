import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonShoppingCart,
  DivCounter,
  PPrice,
} from '../../../Home/components/CoffeeCard/styles'
import { useContext } from 'react'
import { CounterContext } from '../../../../contexts/CounterContext'

import img from '../../../../public/assets/coffees/arabe.svg'
import { DivCoffeeCardCheckout } from './CoffeCardCheckout'

export function CoffeeCardCheckout() {
  const { counter, handleDecreaseCounter, handleIncreaseCounter } =
    useContext(CounterContext)

  return (
    <DivCoffeeCardCheckout>
      <div className="card">
        <img src={img} alt="" />
        <div className="info">
          <span>Expresso</span>

          <DivCounter>
            <ButtonShoppingCart onClick={handleDecreaseCounter}>
              <Minus size={14} weight="bold" />
            </ButtonShoppingCart>
            {counter}
            <ButtonShoppingCart onClick={handleIncreaseCounter}>
              <Plus size={14} weight="bold" />
            </ButtonShoppingCart>
          </DivCounter>

          <a href="#">
            <Trash size={16} />
            REMOVER
          </a>
        </div>
      </div>

      <PPrice>
        R$ <strong>9.99</strong>
      </PPrice>
    </DivCoffeeCardCheckout>
  )
}
