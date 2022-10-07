import theme from '../themes/default';
import styled from 'styled-components';
import Image from "next/future/image";

const Wrapper = styled.div`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  img {
    position: static !important;
  }
`;

export default function ({ src, alt, width, height }) {
  return (
    <Wrapper width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        fill
      />
    </Wrapper>
  );
}