import styled from 'styled-components';
import theme from '../themes/default';
import Head from 'next/head';
import Image from '../components/image';
import Invitation from '../sections/invitation';

const Invite = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  a {
    box-shadow: 2px 2px 12px 2px #ccc;
    display: block;
    margin: 10px;
  }
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
          content="The Big Day"
        />
      </Head>
      <Invite>
        <a href="https://ianandclaire.com/">
          <Image src="/images/invite.jpg" alt="A Luddy Goode time" title="A Luddy Goode time" priority="true"/>
        </a>
      </Invite>
    </>
  );
}
