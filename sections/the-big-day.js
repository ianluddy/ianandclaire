import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import Wrapper from '../components/wrapper';

const Timeline = styled(Wrapper)`
  @media (${theme.devices.md}) {
    margin: 2rem 0;
    display: flex;
    flex-grow: 1;
  }
`;

const Node = styled.div`
  display: none;
  @media (${theme.devices.md}) {
    display: block;
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: ${theme.text};
    border-top: 4px solid white;
    border-bottom: 4px solid white;
    left: ${(props) => props.left || 'unset'};
    right: ${(props) => props.right || 'unset'};
    top: calc(50% - 4px);
    z-index: 1;
  }
`;

const Border = styled.div`
  display: none;
  @media (${theme.devices.md}) {
    display: block;
    position: absolute;
    width: 2px;
    background-color: ${theme.text};
    top: ${(props) => props.top || 'unset'};
    bottom: ${(props) => props.bottom || 'unset'};
    left: ${(props) => props.left || 'unset'};
    right: ${(props) => props.right || 'unset'};
  }
`;

const Events = styled.div`
  flex: 1;
  :first-of-type {
    padding-top: 140px;
  }
`;

const Event = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  @media (${theme.devices.md}) {
    padding: 3rem 0;
    :first-of-type {
      padding-top: 0;
    }
    :last-of-type {
      padding-bottom: 0;
    }
  }
`;

const Time  = styled.div`
  font-size: 1.75em;
  padding: 0.5rem;
  width: 100%;
  position: relative;
`;

const Title  = styled.div`
  font-size: 1.5em;
  padding: 0.5rem;
`;

const ImageWrapper  = styled.div`
  height: 75px;
  display: flex;
  align-items: end;
`;

const Location  = styled.div`
  padding: 0 2rem;
`;

const WeDrink = function() {
  return (
    <Event>
      <ImageWrapper>
        <Image src="/images/svgs/glasses.svg" alt="We Drink" title="We Drink" width="70px"/>
      </ImageWrapper>
      <Time>
        16:30
        <Node right={"-1px"}/>
      </Time>
      <Title>We Drink</Title>
      <Location>The Stag's Head, 1 Dame Court, Dublin</Location>
      <Border top={"calc(50% - 2rem)"} bottom={"0"} right={"-2px"}/>
    </Event>
  );
}

const WeDance = function() {
  return (
    <Event>
      <ImageWrapper>
        <Image src="/images/svgs/music.svg" alt="We Dance" title="We Dance" width="50px"/>
      </ImageWrapper>
      <Time>
        21:30
        <Node right={"-1px"}/>
      </Time>
      <Title>We Dance</Title>
      <Location>Fallon & Byrne, 17 Exchequer Street, Dublin</Location>
      <Border top={"0"} bottom={"calc(50% - 1rem)"} right={"-2px"}/>
    </Event>
  );
}

const WeDo = function() {
  return (
    <Event>
      <ImageWrapper>
        <Image src="/images/svgs/rings.svg" alt="We Do" title="We Do" width="50px"/>
      </ImageWrapper>
      <Time>
        15:30
        <Node left={"1px"}/>
      </Time>
      <Title>We Do</Title>
      <Location>City Hall, Dame Street, Dublin</Location>
      <Border top={"calc(50% + 2px - 1rem)"} bottom={"0"} left={"0"}/>
    </Event>
  );
}

const WeDine = function() {
  return (
    <Event>
      <ImageWrapper>
        <Image src="/images/svgs/cutlery.svg" alt="We Dine" title="We Dine" width="40px"/>
      </ImageWrapper>
      <Time>
        18:30
        <Node left={"1px"}/>
      </Time>
      <Title>We Dine</Title>
      <Location>Fallon & Byrne, 17 Exchequer Street, Dublin</Location>
    </Event>
  );
}

export default function ({ children, hide, padding }) {
  return (
    <>
      <h2>The Big Day</h2>
      <Subtitle>Friday Feb 3, 2023</Subtitle>
      <Timeline hideMobile={"true"}>
        <Events>
          <WeDrink/>
          <WeDance/>
        </Events>
        <Events>
          <WeDo/>
          <WeDine/>
        </Events>
      </Timeline>
      <Wrapper hideDesktop={"true"}>
        <WeDo/>
        <WeDrink/>
        <WeDine/>
        <WeDance/>
      </Wrapper>
    </>
  );
}
