import styled from 'styled-components'

export const DivCoffeeListContainer = styled.div`
  max-width: 112rem;
  margin-inline: auto;
`

export const H2 = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: clamp(2rem, 1.5vw, 3.2rem);
  margin-bottom: 5.4rem;

  @media only screen and (max-width: 980px) {
    margin-inline: 1rem;
  }
`

export const DivCoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media only screen and (max-width: 980px) {
    justify-content: center;
  }
`
