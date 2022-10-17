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
`;

export default function ({ src, alt, width, height, priority, transform, hideMobile, hideDesktop }) {
  return (
    <Wrapper width={width} height={height} transform={transform} hideMobile={hideMobile} hideDesktop={hideDesktop}>
      <Image src={src} alt={alt} fill priority={priority || false} unoptimized={true}/>
    </Wrapper>
  );
}
