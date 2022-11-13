import theme from '../themes/default';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${(props) => props.hideMobile ? 'none' : props.display || 'block'};
  padding: ${(props) => props.padding || 'unset'};
  margin: ${(props) => props.margin || 'unset'};
  max-width: ${(props) => props.maxWidth || 'unset'};
  @media (${theme.devices.md}) {
    display: ${(props) => props.hideDesktop ? 'none' : props.display || 'block'};
  }
`;

export default function (props) {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  );
}
