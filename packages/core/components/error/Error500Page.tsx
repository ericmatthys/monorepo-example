import React, { ReactElement } from 'react';
import { ErrorPage } from 'core/components/error/ErrorPage';

export default function Error500Page(): ReactElement {
  return <ErrorPage statusCode={500} />;
}
