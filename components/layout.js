import styled from 'styled-components';

import theme from '../themes/default';
import Footer from './footer';
import Header from './header';
import Page from './page';

const Layout = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default function ({ children }) {
  return (
    <>
      <Header />
      <Layout>
        <Page>{children}</Page>
      </Layout>
      <Footer />
    </>
  );
}
