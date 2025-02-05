import theme from '../themes/default';
import styled from 'styled-components';
import Image from 'next/future/image';
import BaseWrapper from './wrapper';

const Wrapper = styled(BaseWrapper)`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  transform: ${(props) => props.transform || 'none'};
  img {
    position: static !important;
  }
  min-height: ${(props) => props.minHeight ? props.minHeight[0] : 'none'};
  @media (${theme.devices.sm}) {
    min-height: unset;
  }
  @media (${theme.devices.md}) {
    min-height: ${(props) => props.minHeight ? props.minHeight[1] : 'none'};
  }
`;

export default function ({ ...props }) {
  return (
    <Wrapper {...props}>
      <Image src={props.src} alt={props.alt} fill priority={props.priority || false}/>
    </Wrapper>
  );
}
