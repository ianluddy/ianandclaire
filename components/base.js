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
  }
  h1 {
    text-align: center;
    font-size: 2.5em;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    @media (${theme.devices.xs}) {

    }
    @media (${theme.devices.sm}) {

    }
    @media (${theme.devices.md}) {
      font-size: 3.5em;
    }
  }
  h2 {
    font-size: 1.75em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: normal;
    @media (${theme.devices.xs}) {

    }
    @media (${theme.devices.sm}) {

    }
    @media (${theme.devices.md}) {
      font-size: 2.3em;
    }
  }
  h3 {
    font-size: 1.2em;
    letter-spacing: 0.1em;
    font-weight: normal;
    @media (${theme.devices.xs}) {

    }
    @media (${theme.devices.sm}) {

    }
    @media (${theme.devices.md}) {
      font-size: 1.75em;
    }
  }
  p {
    letter-spacing: 0.02em;
    max-width: ${theme.textMaxWidth};
    font-weight: normal;
    margin: 2rem auto;
    font-size: 1.1em;
    @media (${theme.devices.md}) {
      font-size: 1.2em;
    }
  }
`;
