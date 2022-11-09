import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import Wrapper from '../components/wrapper';
import { LinkButton as Button } from '../components/button';

const Logo = styled.div`
  max-width: 240px;
  margin: 1rem auto;

  @media (${theme.devices.md}) {
    max-width: 280px;
  }
`;

export default function ({}) {
  return (
    <>
      <h2>Accommodation</h2>
      <Image src="/images/clarence.webp" alt="The Clarence" title="The Clarence" minHeight={"300px"}/>
      <Logo>
        <Image src="/images/clarence-logo.svg" alt="The Clarence Logo" title="The Clarence Logo" minHeight={"55px"}/>
      </Logo>
      <Subtitle>
        6-8 Wellington Quay, Temple Bar
      </Subtitle>
      <p>We'll be staying at The Clarence in Temple Bar, you can avail of a special rate if you quote 'Claire Goode Wedding'.</p>
      <Wrapper padding={"1.5rem 0 0 0"}>
        <Button large text="Visit Website" href="https://theclarence.ie/"/>
      </Wrapper>
    </>
  );
}
