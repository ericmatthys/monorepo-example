import NextDocument from 'next/document';
import React, { ReactElement } from 'react';
import Html from 'core/components/shell/Html';

export default class Document extends NextDocument {
  public render(): ReactElement {
    return <Html />;
  }
}
