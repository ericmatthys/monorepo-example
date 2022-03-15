import type { AppProps } from 'next/app';
import React, { memo, ReactElement } from 'react';
import styles from './App.module.css';
import 'core/styles/fonts.css';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className={styles.app}>
      <Component {...pageProps} />
    </div>
  );
}

export default memo(App);
