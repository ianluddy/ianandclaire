import { createGlobalStyle } from 'styled-components';
import theme from '../themes/default';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.body};
    color: ${theme.text};
    font-family: ${theme.fontBody};
    margin: 0;
  }}
  h1, h2, h3, h4, h5 {
    font-family: ${theme.fontHeading};
    letter-spacing: 0.075em;
  }
  h1 {
    text-align: center;
    font-size: 3.8em;
    margin: 1rem 0;
    @media (${theme.devices.md}) {
      font-size: 4em;
      margin: 2rem;
    }
  }
  h2 {
    margin: 0 0 1rem 0;
    font-size: 2.5em;
    @media (${theme.devices.md}) {
      font-size: 3em;
      margin: 2rem 0;
    }
  }
  h3 {
    font-size: 1.8em;
    font-weight: normal;
    font-family: ${theme.fontBody};
    @media (${theme.devices.md}) {
      font-size: 2em;
    }
  }
  p {
    letter-spacing: 0.02em;
    max-width: ${theme.textMaxWidth};
    font-weight: normal;
    margin: 0 auto;
    font-size: 1.2em;
    @media (${theme.devices.md}) {
      font-size: 1.3em;
    }
  }
  // Add to calendar button overrides
  .atcb-checkmark,
  .atcb-button > .atcb-icon {
    display: none !important;
  }
  .atcb-text { 
    font-family: ${theme.fontBody};
  }
  .atcb-button {
    font-family: ${theme.fontBody};
    box-shadow: none;
    border: none;
    background: none;
    color: ${theme.primary};
  }
`;
