import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
font-size: 62.5%;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple}
  }

body {
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}
`
