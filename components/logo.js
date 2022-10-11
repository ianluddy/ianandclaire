import styled from 'styled-components';
import theme from '../themes/default';

const Wrapper = styled.div`
  max-width: 180px;
  margin: 1rem auto;

  @media (${theme.devices.md}) {
    max-width: 220px;
  }
`;

export default function ({ children }) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}
