import styled from 'styled-components'

// eslint-disable-next-line import/no-absolute-path
import background from '/assets/introBackground.svg'

export const Background = styled.div`
  background-image: url(${background});
  height: 54.4rem;

  @media only screen and (max-width: 980px) {
    height: 40rem;
  }
`

export const DivContainer = styled.div`
  max-width: 112rem;
  padding-top: 9.4rem;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 476px;
    height: 360px;
    overflow: hidden;
  }

  @media only screen and (max-width: 1140px) {
    margin-inline: 1rem;
  }
  @media only screen and (max-width: 980px) {
    margin-inline: 1rem;
    justify-content: center;
    padding-top: 4rem;

    img {
      display: none;
    }
  }
`

export const DivTitle = styled.div`
  max-width: 55.8rem;
`

export const H2 = styled.h2`
  max-width: 55.8rem;
  font-family: 'Baloo 2', cursive;
  font-size: clamp(3.4rem, 3.6vw, 4.8rem);
  line-height: 6.24rem;
  color: ${(props) => props.theme['base-title']};
`

export const Span = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: clamp(1.5rem, 1.5vw, 2rem);
  line-height: 2.6rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Ul = styled.ul`
  list-style: none;
  margin-top: clamp(2rem, 1.5vw, 6.6rem);

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
`

export const Li = styled.li`
  margin-right: 4rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: clamp(1.3rem, 1.5vw, 1.6rem);
  }

  @media only screen and (max-width: 980px) {
    margin-right: 1rem;
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

export const DivCart = styled(BaseItem)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const DivTimer = styled(BaseItem)`
  background: ${(props) => props.theme.yellow};
`
export const DivPackage = styled(BaseItem)`
  background: ${(props) => props.theme['base-text']};
`
export const DivCoffee = styled(BaseItem)`
  background: ${(props) => props.theme.purple};
`
