import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  h1 {
    @media (${theme.devices.md}) {
      margin: 0 3rem;
    }
  }
  > div {
    display: none;
    @media (${theme.devices.md}) {
      display: block;
    }
  }
`;

export default function () {
  return (
    <Wrapper>
      <Image src="/images/svgs/Asset 8.svg" alt="Flowers" title="Flowers" width="50px" priority="true"/>
      <h1> Ian & Claire </h1>
      <Image src="/images/svgs/Asset 9.svg" alt="Flowers" title="Flowers" width="50px" priority="true"/>
    </Wrapper>
  );
}
