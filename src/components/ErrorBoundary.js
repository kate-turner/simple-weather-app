import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
