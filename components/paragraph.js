import styled from 'styled-components';
import theme from '../themes/default';
import BaseWrapper from './wrapper';

const Wrapper = styled(BaseWrapper)`
  text-align: center;
  letter-spacing: 0.02em;
  font-weight: 500;
  margin: ${(props) => (props.margin || '1rem auto')};
  letter-spacing: 0.02em;
  font-size: 1.1em;
  line-height: ${(props) => (props.lineHeight || 'initial')};
  @media (${theme.devices.xs}) {
    font-size: 1.2em;
  }
  @media (${theme.devices.sm}) {
    font-size: 1.2em;
  }
  @media (${theme.devices.md}) {
    font-size: 1.3em;
    max-width: 450px;
  }
`;

export default function ({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
}
