import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const DivPaymentContainer = styled(RadioGroup.Root)`
  display: flex;
  gap: 1.2rem;
`

export const PaymentButton = styled(RadioGroup.Item)`
  max-width: 18rem;
  max-height: 5.1rem;
  font-size: 1.2rem;
  padding: 1.6rem;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme['base-button']};
  transition: background-color 100ms linear;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex: 1;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'],
  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    outline: none;
  }
`

export const DivCoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;

  .coffeeContainer {
    padding: 4rem;
    border-radius: 6px 44px;
    background-color: ${(props) => props.theme['base-card']};

    display: flex;
    gap: 2.4rem;
    flex-direction: column;

    .totalPayment {
      display: flex;
      gap: 1.2rem;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
      }

      .total {
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-subtitle']};
      }

      a {
        display: flex;
        text-decoration: none;
      }

      button {
        text-decoration: none;
        border: none;
        border-radius: 6px;
        padding: 1.2rem;
        font-size: 1.4rem;
        line-height: 2.3rem;
        background-color: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
        transition: background-color 100ms linear;
        flex: 1;

        &:hover {
          background-color: ${(props) => props.theme['yellow-dark']};
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      }
    }
  }
`
