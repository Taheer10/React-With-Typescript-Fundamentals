import React, { Component } from "react";

class LifecycleExample extends Component {
  constructor(props: number) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  render() {
    return <div>Component Lifecycle Example</div>;
  }
}

export default LifecycleExample;
