import theme from '../themes/default';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${(props) => props.hideMobile ? 'none' : 'block'};
  padding: ${(props) => props.padding || 'unset'};
  @media (${theme.devices.md}) {
    display: ${(props) => props.hideDesktop ? 'none' : 'block'};
  }
`;

export default function (props) {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
}
