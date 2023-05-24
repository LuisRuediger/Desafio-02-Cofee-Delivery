import { useContext } from 'react'
import { CoffeeCard } from './components/CoffeeCard'
import { Intro } from './components/Intro/index'
import { DivCoffeeListContainer, DivCoffeeList, H2 } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { CounterContext } from '../../contexts/CounterContext'

const coffeeList = [
  {
    id: uuidv4(),
    image: '/assets/coffees/expressoTradicional.svg',
    tag: 'TRADICIONAL',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/expressoAmericano.svg',
    tag: 'TRADICIONAL',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/expressoCremoso.svg',
    tag: 'TRADICIONAL',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/expressoGelado.svg',
    tag: 'TRADICIONAL',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/cafeComLeite.svg',
    tag: 'TRADICIONAL',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/latte.svg',
    tag: 'TRADICIONAL',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/capuccino.svg',
    tag: 'TRADICIONAL',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/macchiato.svg',
    tag: 'TRADICIONAL',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/mocaccino.svg',
    tag: 'TRADICIONAL',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/chocolateQuente.svg',
    tag: 'TRADICIONAL',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/cubano.svg',
    tag: 'TRADICIONAL',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/havaiano.svg',
    tag: 'TRADICIONAL',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/arabe.svg',
    tag: 'TRADICIONAL',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: 'assets/coffees/irlandes.svg',
    tag: 'TRADICIONAL',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

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
