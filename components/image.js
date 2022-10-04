import theme from '../themes/default';
import styled from 'styled-components';
// import ExportedImage from 'next-image-export-optimizer';
// import Image from "next/image";

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

export default function ({ src, alt, title }) {
  return (
    <Wrapper>
      <img
        src={src}
        alt={alt}
        title={title}
      />
    </Wrapper>
  );
}
