import App, { AppContext, AppProps } from 'next/app';
import React from 'react';
import { SwitchTransition } from 'react-transition-group';

import Header from 'components/header';

// Styles
import 'styles/fonts.scss';
import 'styles/main.scss';

type Props = {} & AppProps;

const PlatypusApp = ({ Component, pageProps, router }: Props) => {
  return (
    <>
      <Header />
      <SwitchTransition>
        <Component {...pageProps} key={router.route} />
      </SwitchTransition>
    </>
  );
};

PlatypusApp.getInitialProps = async (context: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(context);
  return { ...appProps };
};

export default PlatypusApp;
