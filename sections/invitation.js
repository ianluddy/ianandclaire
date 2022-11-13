import theme from '../themes/default';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from '../components/image';
import Menu from '../components/menu';
import BaseWrapper from '../components/wrapper';
import Quote from '../components/quote';
import { AnchorButton } from '../components/button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  display: block;
  padding: 0;
  box-shadow: 2px 2px 12px 2px #ccc;
  display: block;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
`;

const ImageWrapper = styled.div`
  margin: 2rem auto 1rem auto;
  width: 450px;
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

const Paragraph = styled.div`
  text-align: center;
  letter-spacing: 0.02em;
  font-weight: 500;
  margin: ${(props) => (props.margin || '1rem auto')};
  letter-spacing: 0.02em;
  font-size: 1.2em;
  line-height: 1.6em;
  @media (${theme.devices.xs}) {
    font-size: 1.2em;
  }
  @media (${theme.devices.sm}) {
    font-size: 1.2em;
  }
  @media (${theme.devices.md}) {
    font-weight: 400;
    font-size: 1.15em;
    max-width: 450px;
    letter-spacing: 0.025em;
  }
`;

export default function ({}) {
  return (
    <Wrapper>
      <Paragraph> With great pleasure </Paragraph>
      <Title>
        <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" hideMobile="true"/>
        <h1> Ian & Claire </h1>
        <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" transform="scaleX(-1)" hideMobile="true"/>
      </Title>
      <Paragraph> Invite you to join them <br/> on their Wedding day </Paragraph>
      <ImageWrapper>
        <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
      </ImageWrapper>
      <Paragraph>Friday February 3, 2023 <br/> City Hall, Dame St. Dublin</Paragraph>
      <ButtonWrapper>
        <AnchorButton text="RSVP" href="#rsvp"/>
      </ButtonWrapper>
    </Wrapper>
  );
}
