import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';

const Footer = styled.div`
  margin: 0;
  img {
    display: block;
  }
`;

export default function () {
  return (
    <Footer>
      <Image src="images/leaves-footer.webp" alt="Leaves" title="Leaves" />
    </Footer>
  );
}
