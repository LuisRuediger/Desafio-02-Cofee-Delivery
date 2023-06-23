import { useContext } from 'react'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro/index'
import { DivCoffeeListContainer, DivCoffeeList, H2 } from './styles'
import { CounterContext } from '../../contexts/CounterContext'
import { coffeeList } from '../../database/database'

export function Home() {
  const { counter } = useContext(CounterContext)

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  return (
    <>
      <Intro />
      <DivCoffeeListContainer>
        <H2>Nossos cafés</H2>
        <DivCoffeeList>
          {coffeeList.map((card) => {
            return (
              <CoffeeCard
                key={card.id}
                src={card.image}
                tag={card.tag}
                name={card.name}
                description={card.description}
                price={formatPrice.format(card.price)}
                counter={counter}
              />
            )
          })}
        </DivCoffeeList>
      </DivCoffeeListContainer>
    </>
  )
}
