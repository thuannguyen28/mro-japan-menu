import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import MainNav from '../components/layout/MainNav';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
 Component,
 pageProps,
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
      <div>
        <Head>
          <title>MRO Japan</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MainNav mainPage={<Component {...pageProps} />}/>
        </ThemeProvider>
      </div>
  );
}
