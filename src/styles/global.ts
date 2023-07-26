import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    -webkit-font-smoothing: antialiased; 
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.brand.blue};
  }
  
  body, input, button, textarea {
    font: ${(props) => props.theme.fonts.text.md}
  }

  h1, h2, h3 {
    color: ${(props) => props.theme.colors.base.title};
  }

  a { 
    text-decoration: none;
    color: ${(props) => props.theme.colors.brand.blue};
  }
`
