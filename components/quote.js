import styled from 'styled-components';
import theme from '../themes/default';
import Paragraph from './paragraph';

const Quote = styled(Paragraph)`
  color: grey;
  font-weight: 400;
  font-size: 1em;
  font-style: italic;
  font-size: 0.9em;
  @media (${theme.devices.xs}) {
    font-size: 1em;
  }
  @media (${theme.devices.sm}) {
    font-size: 1.1em;
  }
  @media (${theme.devices.md}) {
    font-size: 1.2em;
    font-weight: 300;
  }
`;

export default function ({ children, ...props }) {
  return (
    <Quote {...props}>
      {children}
    </Quote>
  );
}
