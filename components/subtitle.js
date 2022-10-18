import styled from 'styled-components';
import theme from '../themes/default';

const Subtitle = styled.div`
  text-align: center;
  margin: 1rem auto;
  max-width: 400px;
  letter-spacing: 1px;
  font-weight: normal;
  font-style: italic;
  font-size: 1.3em;
  @media (${theme.devices.md}) {
    font-size: 1.4em;
    max-width: 90%;
  }
`;

export default function ({ children }) {
  return (
    <Subtitle>
      {children}
    </Subtitle>
  );
}
