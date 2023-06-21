import styled from 'styled-components'

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.8rem;
`

export const DivContainer = styled.div`
  max-width: 112rem;
  margin-inline: auto;

  display: flex;
  gap: 3.2rem;
`

export const DivFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const DivForm = styled.div`
  padding: 4rem;
  border-radius: 0.6rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const DivInfo = styled.div`
  margin-bottom: 3.2rem;
  display: flex;
  gap: 0.8rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    display: block;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 2.08rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 1.82rem;
  }

  .dolar {
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const DivInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  column-gap: 1.2rem;
  row-gap: 1.6rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 20rem;
  }

  .street {
    grid-column: span 3;
  }

  .number {
    grid-column: span 1;
  }

  .complement {
    grid-column: span 2;
  }

  input {
    height: 4.2rem;
    padding: 1.2rem;
    border-radius: 4px;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};

    &::placeholder {
      font-size: 1.4rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const DivCoffeeSelectedContainer = styled.div`
  display: flex;
`

export const DivPaymentContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    max-width: 18rem;
    max-height: 5.1rem;

    padding: 1.6rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-button']};
    transition: background-color 100ms linear;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    flex: 1;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 1.2rem;
  }
`
