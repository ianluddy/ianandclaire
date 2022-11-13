import styled from 'styled-components';
import theme from '../themes/default';
import Head from 'next/head';
import Image from '../components/image';
import Link from '../components/link';
import Title from '../components/title';
import Wrapper from '../components/wrapper';
import Paragraph from '../components/paragraph';
import { AnchorButton } from '../components/button';

const Invitation = styled.div`
  padding: 1.5rem 0 2rem;
  box-shadow: 2px 2px 12px 2px #ccc;
  margin: 10px auto;
  max-width: 575px;
  text-align: center;
`;

const Text = styled(Paragraph)`
  text-transform: uppercase;
  font-size: 1.2em;
  line-height: 1.5em;
`;

export default function (props) {
  return (
    <>
      <Head>
        <title>
          {props.siteName}
        </title>
        <meta
          name="description"
          content="Ian & Claire"
        />
      </Head>
      <Invitation>
        <Text> With great pleasure </Text>
        <Title>
          <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" hideMobile="true"/>
          <h1> Ian & Claire </h1>
          <Image src="/images/svgs/flowers.svg" alt="Flowers" title="Flowers" width="40px" priority="true" transform="scaleX(-1)" hideMobile="true"/>
        </Title>
        <Text> Invite you to join them <br/> on their Wedding day </Text>
        <Wrapper margin={"2rem auto 1rem auto"} maxWidth={"400px"}>
          <Image src="/images/hall.jpg" alt="City Hall" title="City Hall" priority="true"/>
        </Wrapper>
        <Text> Friday February 3, 2023 <br/> City Hall, Dame St. Dublin </Text>
        <Wrapper>
          <AnchorButton text="RSVP" href="#rsvp"/>
        </Wrapper>
        <Link href="https://ianandclaire.com"> ianandclaire.com </Link>
      </Invitation>
    </>
  );
}
