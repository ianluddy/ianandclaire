import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import { LinkButton as Button } from '../components/button';

export default function ({}) {
  return (
    <>
      <h2>Day Two</h2>
      <h3> Roberta's </h3>
      <Subtitle>Saturday Feb 4, 2023</Subtitle>
      <Image src="/images/robertas.jpeg" alt="Robertas" title="Robertas"/>
      <Subtitle>
        1 Essex St East, Temple Bar
      </Subtitle>
      <p>We'll be heading to Roberta's in Temple Bar for beers and nibbles at 7pm on Saturday. We'd love to see you there if you can make it.</p>
      <Button large text="Visit Website" href="https://robertas.ie/"/>
    </>
  );
}
