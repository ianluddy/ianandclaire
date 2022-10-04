import styled from 'styled-components';
import theme from '../themes/default';
import Image from './image';

const Header = styled.div`
  margin: 0 0 3rem 0;
  @media (${theme.devices.md}) {
    margin: 0 0 5rem 0;
  }
`;

export default function () {
  return (
    <Header>
      <Image src="images/leaves-header.webp" alt="Leaves" title="Leaves" />
    </Header>
  );
}
