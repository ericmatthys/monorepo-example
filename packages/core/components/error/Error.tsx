import { NextPageContext } from 'next';
import React, { ReactElement } from 'react';
import { ErrorPage } from './ErrorPage';
import Error404Page from './Error404Page';

interface ErrorProps {
  statusCode: number;
}

export default function Error({ statusCode }: ErrorProps): ReactElement {
  return statusCode === 404 ? (
    <Error404Page />
  ) : (
    <ErrorPage statusCode={statusCode} />
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  return { statusCode: res?.statusCode ?? err?.statusCode ?? 500 };
};
