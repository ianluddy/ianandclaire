import styled from 'styled-components';
import theme from '../themes/default';
import Head from 'next/head';
import Image from '../components/image';
import Invitation from '../sections/invitation';

const Invite = styled.div`
  max-width: 500px;
  margin: 1rem auto 0 auto;
  text-align: center;
  @media (${theme.devices.md}) {
    margin: 3rem auto 0 auto;
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
