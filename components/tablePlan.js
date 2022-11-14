import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';
import Sheet from './sheet';
import Paragraph from './paragraph';

const TextWrapper = styled(Paragraph)`
  font-size: 1.3em;
  line-height: 1.7em;
  margin: 4rem 0;
`;

export default function ({ name, children, image }) {
  return (
    <>
      <Sheet width={'430px'} height={'608px'}>
        <h1> { name } </h1>
        <TextWrapper>
          { children }
        </TextWrapper>
        <Image margin={"0 auto"} src={image} alt={name} title={name} width="90px" priority="true"/>
      </Sheet>
    </>
  );
}
