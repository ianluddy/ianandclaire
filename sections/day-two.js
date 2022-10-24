import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import Wrapper from '../components/wrapper';
import { LinkButton as Button } from '../components/button';

const Logo = styled.div`
  max-width: 180px;
  margin: 1rem auto;

  @media (${theme.devices.md}) {
    max-width: 240px;
  }
`;

export default function ({}) {
  return (
    <>
      <h2>Day Two</h2>
      <Image src="/images/robertas.webp" alt="Robertas" title="Robertas" minHeight={"380px"}/>
      <Logo>
        <Image src="/images/robertas-logo.svg" alt="Robertas Logo" title="Robertas Logo" minHeight={"60px"}/>
      </Logo>
      <Subtitle>
        1 Essex St East, Temple Bar
      </Subtitle>
      <p>We'll be heading to Roberta's in Temple Bar for beers and nibbles at 7pm on Saturday. We'd love to see you there if you can make it.</p>
      <Wrapper padding={"1.5rem 0 0 0"}>
        <Button large text="Visit Website" href="https://robertas.ie/"/>
      </Wrapper>
    </>
  );
}
