import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import Logo from '../components/logo';
import { LinkButton as Button } from '../components/button';

export default function ({}) {
  return (
    <>
      <h2>Day Two</h2>
      <Logo>
        <Image src="/images/robertas-logo.svg" alt="Robertas Logo" title="Robertas Logo"/>
      </Logo>
      <Image src="/images/robertas1.webp" alt="Robertas" title="Robertas"/>
      <Subtitle>
        1 Essex St East, Temple Bar
      </Subtitle>
      <p>We'll be heading to Roberta's in Temple Bar for beers and nibbles at 7pm on Saturday. We'd love to see you there if you can make it.</p>
      <Button large text="Visit Website" href="https://robertas.ie/"/>
    </>
  );
}