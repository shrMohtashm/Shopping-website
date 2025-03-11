import React, { Component } from "react";
import ErrorPage from "components/error/ErrorPage";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMassage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMassage: error.message };
  }

  componentDidCatch(error) {
    console.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.errorMassage} />;
    }

    return this.props.children;
  }
}
