import theme from '../themes/default';
import styled from 'styled-components';
import Image from '../components/image';
import { AnchorButton } from '../components/button';

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;

  @media (${theme.devices.md}) {
    margin-top: 3rem;
  }
`;

export default function ({}) {
  return (
    <>
      <ImageWrapper>
        <Image src="/images/hall-plain.jpg" alt="City Hall" title="City Hall"/>
      </ImageWrapper>
      <ButtonWrapper>
        <AnchorButton large text="RSVP" href="#rsvp"/>
      </ButtonWrapper>
    </>
  );
}
