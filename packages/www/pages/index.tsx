import Head from 'next/head';
import React, { ReactElement } from 'react';
import Page from 'core/components/shell/Page';
import styles from './index.module.css';

export default function HomePage(): ReactElement {
  return (
    <Page>
      <Head>
        <title>Watch live TV, movies, and TV shows free online</title>
        <meta
          content="Watch movies, TV, sports and more free with no sign up and no credit card."
          name="description"
        />
      </Head>

      <h1>www.plex.tv</h1>
      <div className={styles.text}>This is another home page</div>
    </Page>
  );
}
