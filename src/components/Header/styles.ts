import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 144rem;
  margin: 3.2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    margin: 1rem;
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.2rem;

  li {
    display: flex;
    align-items: center;
  }
`

export const Location = styled.li`
  width: 14.3rem;
  height: 3.8rem;
  padding: 0.8rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Cart = styled.li`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;

  justify-content: center;
  align-items: center;
`
