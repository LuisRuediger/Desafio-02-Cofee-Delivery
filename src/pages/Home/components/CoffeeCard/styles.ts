import styled from 'styled-components'

export const DivCardContainer = styled.div`
  max-width: 25.6rem;
  height: 31rem;
  padding-inline: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 0.6rem 3.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 12rem;
    width: 12rem;
    overflow: hidden;
    margin-top: -2rem;
  }
`

export const SpanType = styled.span`
  display: block;
  margin-top: 1.2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 10rem;
  font-weight: 700;
  font-size: 10px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const H2CoffeTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 2rem;
  margin-top: 1.6rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SpanCoffeDescription = styled.span`
  margin-top: 0.8rem;
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const DivBuy = styled.div`
  margin-top: 3.3rem;
  width: 20.8rem;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const PPrice = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2.4rem;
  }
`

export const DivCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`

export const DivCounter = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  padding: 0.8rem;
  text-align: center;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
`

export const DivShoppingCart = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
