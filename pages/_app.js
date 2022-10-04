/* eslint-disable react/display-name */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';
import { GlobalStyle } from '../components/base';

const name = 'Ian & Claire';
export const siteTitle = 'A Luddy Goode Time';

export default function ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="name" content={name} />
          <meta name="color" content={theme.primary} />
          <meta name="robots" content="noindex"/>
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Cormorant&display=swap" rel="stylesheet"/>
          <meta property="og:image" content="images/favicon/favicon.ico" />
          <link rel="shortcut icon" href="images/favicon/favicon.ico" />
        </Head>
        <Component {...pageProps} siteName={name} />
      </ThemeProvider>
    </>
  );
}
