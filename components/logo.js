import styled from 'styled-components';
import theme from '../themes/default';

const Wrapper = styled.div`
  max-width: 250px;
  margin: 1rem auto;

  @media (${theme.devices.md}) {
    max-width: 320px;
  }
`;

export default function ({ children }) {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  );
}
