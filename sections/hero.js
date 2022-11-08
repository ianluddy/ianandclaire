import theme from '../themes/default';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from '../components/image';
import Menu from '../components/menu';
import Subtitle from '../components/subtitle';
import { AnchorButton } from '../components/button';

const Wrapper = styled.div`
  margin: 0 0 3rem 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  @media (${theme.devices.md}) {
    display: block;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  margin: 1rem 0;
  @media (${theme.devices.md}) {

  }
`;

const ImageWrapper = styled.div`
  margin: 0rem 1rem;
  @media (${theme.devices.md}) {
    margin: 2rem 0 1rem 0;
  }
`;

const Title = styled.div`
  margin: 0 auto;
  max-width: 450px;
`;

export default function ({}) {
  return (
    <Wrapper>
      <Title>
        <Image src="/images/header.png" alt="Ian & Claire" title="Ian & Claire" priority="true" />
      </Title>
      <Subtitle hideMobile="true">Friday Feb 3, 2023 • City Hall, Dublin</Subtitle>
      <Subtitle hideDesktop="true">Friday Feb 3, 2023</Subtitle>
      <Menu/>
      <ImageWrapper>
        <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
      </ImageWrapper>
      <Subtitle hideDesktop="true">City Hall, Dame St. Dublin</Subtitle>
      <ButtonWrapper>
        <AnchorButton text="RSVP" href="#rsvp"/>
      </ButtonWrapper>
    </Wrapper>
  );
}
