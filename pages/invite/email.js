import styled from 'styled-components';
import theme from '../../themes/default';
import Head from 'next/head';
import Image from '../../components/image';

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
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
      <Wrapper>
        <a href="https://ianandclaire.com/">
          <Image src="/images/ian-and-claire-invite.jpg" alt="A Luddy Goode time" title="A Luddy Goode time" priority="true"/>
        </a>
      </Wrapper>
    </>
  );
}
