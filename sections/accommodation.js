import theme from '../themes/default';
import styled from 'styled-components';
import Subtitle from '../components/subtitle';
import Image from '../components/image';
import { LinkButton as Button } from '../components/button';

const Logo = styled.div`
  max-width: 240px;
  margin: 1rem auto;

  @media (${theme.devices.md}) {
    max-width: 280px;
    margin: 1.5rem auto;
  }
`;

export default function ({}) {
  return (
    <>
      <h2>Accommodation</h2>
      <Image src="/images/clarence.jpg" alt="The Clarence" title="The Clarence"/>
      <Logo>
        <Image src="/images/clarence-logo.svg" alt="The Clarence Logo" title="The Clarence Logo"/>
      </Logo>
      <Subtitle>
        6-8 Wellington Quay, Temple Bar
      </Subtitle>
      <p>We'll be staying at the Clarence in Temple Bar, you can avail of a special rate if you quote 'Claire Goode Wedding'.</p>
      <Button large text="Visit Website" href="https://theclarence.ie/"/>
    </>
  );
}
