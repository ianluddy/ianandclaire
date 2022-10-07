import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import { LinkButton as Button } from '../components/button';

export default function ({}) {
  return (
    <>
      <h2>Accommodation</h2>
      <h3> The Clarence Hotel </h3>
      <Image src="/images/clarence.webp" alt="The Clarence" title="The Clarence"/>
      <Subtitle>
        6-8 Wellington Quay, Temple Bar
      </Subtitle>
      <p>We'll be staying at the Clarence in Temple Bar, you can avail of a special rate if you quote 'Claire Goode Wedding'.</p>
      <Button large text="Visit Website" href="https://theclarence.ie/"/>
    </>
  );
}
