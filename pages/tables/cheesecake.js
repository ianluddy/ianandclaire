import styled from 'styled-components';
import theme from '../../themes/default';
import Head from 'next/head';
import Image from '../../components/image';
import Link from '../../components/link';
import Title from '../../components/title';
import Wrapper from '../../components/wrapper';
import Sheet from '../../components/sheet';
import Paragraph from '../../components/paragraph';
import { AnchorButton } from '../../components/button';

const Text = styled(Paragraph)`

  font-size: 1.2em;
  /* font-style: italic; */
  /* line-height: 1.5em; */
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
      <Sheet>
        <h1> Cheesecake </h1>
        <Text> Ian Luddy </Text>
        <Text> Claire Goode </Text>
        <Text> Paddy Goode </Text>
        <Text> Mary Goode </Text>
        <Text> Vanda Luddy </Text>
        <Text> Alice Goode </Text>
        <Text> Mick McMahon </Text>
        <Text> Caomh O'Connell </Text>
        <Text> Aoife O'Connell </Text>
        <Image margin={"0 auto"} src="/images/svgs/Cheesecake.svg" alt="Cheesecake" title="Cheesecake" width="100px" priority="true"/>        
      </Sheet>
    </>
  );
}
