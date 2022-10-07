import styled from 'styled-components';
import theme from '../themes/default';

const Subtitle = styled.div`
  text-align: center;
  margin: 1rem auto;
  font-family: Cormorant;
  max-width: 400px;
  letter-spacing: 1px;
  font-size: 1.4em;
  font-weight: normal;
  text-transform: none;
  max-width: 90%;
`;

export default function ({ children }) {
  return (
    <Subtitle>
      {children}
    </Subtitle>
  );
}
