import styled from 'styled-components';
import theme from '../themes/default';
import BaseWrapper from './wrapper';

const Wrapper = styled(BaseWrapper)`
  text-align: center;
  margin: 1rem auto;
  max-width: 400px;
  letter-spacing: 1px;
  font-weight: 600;
  font-style: italic;
  font-size: 1.3em;
  line-height: 1.4em;
  @media (${theme.devices.md}) {
    font-size: 1.4em;
    max-width: 90%;
  }
`;

export default function ({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
}
