import theme from '../themes/default';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from '../components/image';
import Menu from '../components/menu';
import Paragraph from '../components/paragraph';
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
`;

const ImageWrapper = styled.div`
  margin: 0rem 1rem;
  @media (${theme.devices.md}) {
    margin: 2rem 0 1rem 0;
  }
`;

const Title = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  @media (${theme.devices.md}) {
    max-width: 450px;
  }
`;

const Deadline = styled(Paragraph)`
  color: darkgray;
  font-size: 1.1em;
  font-style: italic;
  @media (${theme.devices.md}) {
    font-size: 1.2em;
  }
`;

export default function ({}) {
  return (
    <Wrapper>
      <Title>
        <Image src="/images/header.png" alt="Ian & Claire" title="Ian & Claire" priority="true" />
      </Title>
      <Paragraph hideMobile="true">Friday Feb 3, 2023 • City Hall, Dublin</Paragraph>
      <Paragraph hideDesktop="true" margin={"1rem 0 0 0"}>Friday Feb 3, 2023</Paragraph>
      <Paragraph hideDesktop="true" margin={"0.5rem 0 2rem 0"}>City Hall, Dame St. Dublin</Paragraph>
      <Menu/>
      <ImageWrapper>
        <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
      </ImageWrapper>
      <Deadline padding={"0 2rem"}>We kindly request you to RSVP by January 1st</Deadline>
      <ButtonWrapper>
        <AnchorButton text="RSVP" href="#rsvp"/>
      </ButtonWrapper>
    </Wrapper>
  );
}
