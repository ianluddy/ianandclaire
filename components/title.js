import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (${theme.devices.md}) {
    flex-direction: row;
  }
`;

export default function () {
  return (
    <Wrapper>
      <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" hideMobile="true"/>
      <h1> Ian & Claire </h1>
      <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" transform="scaleX(-1)" hideMobile="true"/>
    </Wrapper>
  );
}
