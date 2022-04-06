import React from 'react';
import classes from './error.module.css';

import SomethingWentWrong from './Error';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    // process the error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <SomethingWentWrong />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
