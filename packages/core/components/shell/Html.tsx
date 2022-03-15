// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Main, Html as NextHtml, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default function Html(): ReactElement {
  return (
    <NextHtml>
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/fonts/circular-bold.woff2"
          rel="preload"
          type="font/woff2"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </NextHtml>
  );
}
