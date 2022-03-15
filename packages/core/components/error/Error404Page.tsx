import React, { ReactElement } from 'react';
import { ErrorPage } from './ErrorPage';

export default function Error404Page(): ReactElement {
  return (
    <ErrorPage statusCode={404}>
      You may have mistyped the address or the page may have moved.
    </ErrorPage>
  );
}
