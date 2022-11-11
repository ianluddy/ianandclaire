import styled from 'styled-components';
import theme from '../themes/default';
import Paragraph from './paragraph';

const Quote = styled(Paragraph)`
  font-weight: 300;
  font-size: 1em;
  font-style: italic;
  @media (${theme.devices.md}) {
    font-size: 1.2em;
  }
`;

export default function ({ children, ...props }) {
  return (
    <Quote {...props}>
      {children}
    </Quote>
  );
}
