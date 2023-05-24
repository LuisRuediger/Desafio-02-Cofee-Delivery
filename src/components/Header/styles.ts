import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 112rem;
  margin-inline: auto;
  padding-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a.active:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  @media only screen and (max-width: 1140px) {
    margin-inline: 1rem;
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
