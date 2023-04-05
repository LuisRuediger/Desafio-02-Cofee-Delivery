import styled from 'styled-components'

// eslint-disable-next-line import/no-absolute-path
import background from '/assets/introBackground.svg'

export const IntroContainer = styled.div`
  max-width: 112rem;
  margin-top: 9.4rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${background});

  img {
    width: 476px;
    height: 360px;
  }
`

export const TitleContainer = styled.div`
  max-width: 55.8rem;
`

export const IntroTitle = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-size: 4.8rem;
  line-height: 6.24rem;
  color: ${(props) => props.theme['base-title']};
`

export const IntroSubtitle = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 2.6rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ItemsList = styled.ul`
  list-style: none;
  margin-top: 6.6rem;

  display: flex;
  flex-wrap: wrap;
  flex: 1;
`

export const Items = styled.li`
  margin-right: 4rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
  }
`

export const BaseDiv = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  color: ${(props) => props.theme.background};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivCart = styled(BaseDiv)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const DivTimer = styled(BaseDiv)`
  background: ${(props) => props.theme.yellow};
`
export const DivPackage = styled(BaseDiv)`
  background: ${(props) => props.theme['base-text']};
`
export const DivCoffee = styled(BaseDiv)`
  background: ${(props) => props.theme.purple};
`
