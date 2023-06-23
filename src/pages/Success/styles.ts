import styled from 'styled-components'

export const DivContainer = styled.div`
  max-width: 112rem;
  padding-top: 9.4rem;
  margin-inline: auto;

  display: flex;
  gap: 10.2rem;
`

export const DivOrderInfoContainer = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  .title {
    font-size: 3.2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  .subtitle {
    font-size: 20px;
    font-family: Roboto;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DivOrderInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    margin: -6px;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  div {
    display: flex;
    gap: 1.2rem;
  }
`

export const BaseItem = styled.div`
  width: clamp(2rem, 1.5vw, 3.2rem);
  height: clamp(2rem, 1.5vw, 3.2rem);
  color: ${(props) => props.theme.background};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivLocation = styled(BaseItem)`
  background: ${(props) => props.theme.purple};
`
export const DivTimer = styled(BaseItem)`
  background: ${(props) => props.theme.yellow};
`
export const DivMoney = styled(BaseItem)`
  background: ${(props) => props.theme['yellow-dark']};
`
