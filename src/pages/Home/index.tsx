import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro/index'
import { DivCoffeListContainer, H2 } from './styles'

export function Home() {
  return (
    <>
      <Intro />
      <DivCoffeListContainer>
        <H2>Nossos cafés</H2>
        <CoffeeCard />
      </DivCoffeListContainer>
    </>
  )
}
