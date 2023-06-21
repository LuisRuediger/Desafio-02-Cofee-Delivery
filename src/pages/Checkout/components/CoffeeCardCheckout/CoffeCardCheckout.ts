import styled from 'styled-components'

export const DivCoffeeCardCheckout = styled.div`
  padding: 0.8rem 0.4rem;
  max-height: 8rem;

  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .card {
    display: flex;
    gap: 2rem;

    img {
      width: 6.4rem;
      height: 6.4rem;
    }

    .info {
      max-width: 20rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    span:first-child {
      width: 17rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    a {
      height: 3.8rem;
      padding: 0.8rem;
      text-align: center;
      font-size: 1.2rem;
      text-decoration: none;
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-title']};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
