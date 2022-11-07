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

  p {
    font-size: 1.2em;
    text-transform: uppercase;
    line-height: 30px;
  }
`;

const SubtitleWrapper = styled.div`
  order: 3;
  @media (${theme.devices.md}) {
    order: unset;
  }
`;

const ButtonWrapper = styled.div`
  order: 4;
  margin: 2rem 0;
  @media (${theme.devices.md}) {
    order: unset;
  }
`;

const ImageWrapper = styled.div`
  order: 2;
  margin: 1rem;
  @media (${theme.devices.md}) {
    order: unset;
    margin: 2rem auto 2rem auto;
    width: 370px;
  }
`;

const Title = styled.div`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (${theme.devices.md}) {
    flex-direction: row;
  }
`;

export default function ({}) {
  return (
    <Wrapper>
      <p> Together with their families </p>
      <Title>
        <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" hideMobile="true"/>
        <h1> Ian & Claire </h1>
        <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" transform="scaleX(-1)" hideMobile="true"/>
      </Title>
      <p> Invite you to join them <br/> at their Wedding </p>
      <ImageWrapper>
        <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
      </ImageWrapper>
      <p>Friday Feb 3, 2023 <br/> City Hall, Dame St. Dublin</p>
      <ButtonWrapper>
        <AnchorButton text="RSVP" href="#rsvp"/>
      </ButtonWrapper>
    </Wrapper>
  );
}
