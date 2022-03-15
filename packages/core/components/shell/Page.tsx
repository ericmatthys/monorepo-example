import React, { ReactElement, ReactNode } from 'react';
import ErrorBoundary from 'core/components/error/ErrorBoundary';
import styles from './Page.module.css';

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps): ReactElement {
  return (
    <main className={styles.content}>
      <ErrorBoundary fallback={<div>Error</div>}>{children}</ErrorBoundary>
    </main>
  );
}
