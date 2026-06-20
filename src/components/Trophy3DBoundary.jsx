import { Component } from "react";

class Trophy3DBoundaryInner extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error) {
    console.warn("3D trophy render failed, showing fallback:", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Trophy3DBoundary({ children, fallback }) {
  return <Trophy3DBoundaryInner fallback={fallback}>{children}</Trophy3DBoundaryInner>;
}
