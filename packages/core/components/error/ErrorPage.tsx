import Head from 'next/head';
import React, { ReactElement, ReactNode } from 'react';
import Page from 'core/components/shell/Page';

interface ErrorPageProps {
  children?: ReactNode;
  statusCode: number | string;
}

export function ErrorPage({
  children,
  statusCode,
}: ErrorPageProps): ReactElement {
  return (
    <Page>
      <Head>
        <title>{`Error ${statusCode}`}</title>
      </Head>

      <main>{children ?? `Uh oh, there was an error (${statusCode})`}</main>
    </Page>
  );
}
