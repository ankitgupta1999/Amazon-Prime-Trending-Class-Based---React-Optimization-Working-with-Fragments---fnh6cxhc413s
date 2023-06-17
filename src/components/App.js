
import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: props.slides,
      index: 0,
    };
  }

  render() {
    
    const { index, slides } = this.state;

    return (
      <></>
    );
  }
}

export default App;

