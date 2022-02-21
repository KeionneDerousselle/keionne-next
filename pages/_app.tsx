import React from 'react';
import '../styles/global.css';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
