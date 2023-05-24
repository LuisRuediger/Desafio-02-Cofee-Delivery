import styled from 'styled-components'

export const Cart = styled.li`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme['yellow-dark']};
    display: flex;
    align-items: center;

    &.active:focus {
      outline: 0;
      box-shadow: 0 0 0 0;
    }
  }
`
