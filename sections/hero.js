import theme from '../themes/default';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from '../components/image';
import Menu from '../components/menu';
import FadeIn from 'react-fade-in';
import BaseWrapper from '../components/wrapper';
import Paragraph from '../components/paragraph';
import Quote from '../components/quote';
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

const Title = styled(BaseWrapper)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  img {
    width: 20px !important;
    @media (${theme.devices.xs}) {
      width: 28px !important;
    }
    @media (${theme.devices.sm}) {
      width: 35px !important;
    }
    @media (${theme.devices.md}) {
      width: 40px !important;
    }
  }
  @media (${theme.devices.md}) {
    max-width: 450px;
  }
`;

export default function ({}) {
  return (
    <Wrapper>
      <FadeIn delay="70">
        <Title>
          <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" priority="true"/>
          <h1> Ian & Claire </h1>
          <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" priority="true" transform="scaleX(-1)"/>
        </Title>
        <Paragraph hideMobile="true">Friday Feb 3, 2023 • City Hall, Dublin</Paragraph>
        <Paragraph margin={"0rem auto 1.5rem auto"} lineHeight={"1.5em"} hideDesktop="true">Friday Feb 3, 2023 <br/> City Hall, Dame St. Dublin</Paragraph>
        <Menu/>
        <ImageWrapper>
          <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
        </ImageWrapper>
        <Quote margin={"0.5rem auto 1rem auto"} padding={"0 0.75rem"}>We kindly request you to RSVP by January 1st</Quote>
        <ButtonWrapper>
          <AnchorButton text="RSVP" href="#rsvp"/>
        </ButtonWrapper>
      </FadeIn>
    </Wrapper>
  );
}