import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

type ErrorBoundaryProps = PropsWithChildren<{ fallback?: ReactNode }>;

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // Report error
  }

  public render(): ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
