import styled from 'styled-components';
import theme from '../themes/default';
import Page from './page';

const Layout = styled.div`
  max-width: 600px;
  margin: 2.5rem auto 0 auto;
  @media (${theme.devices.xs}) {
    margin: 3rem auto 0 auto;
  }
  @media (${theme.devices.sm}) {
    margin: 4rem auto 0 auto;
  }
  @media (${theme.devices.md}) {
    margin: 5rem auto 0 auto;
  }

`;

export default function ({ children }) {
  return (
    <>
      <Layout>
        <Page>{children}</Page>
      </Layout>
    </>
  );
}
