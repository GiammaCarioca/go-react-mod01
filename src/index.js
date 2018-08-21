import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  // Montagem/atualização
  static getDerivedStateFromProps(nextProps, prevState) {
    return { counter: nextProps.initialCounter };
  }

  // Montagem
  componentDidMount() {}

  // Atualizações
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState.counter;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState, snapshot);
  }

  // Desmontagem
  componentWillUnmount() {}

  // Error

  componentDidCatch(error, info) {
    console.log("ERRO", error);
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Ciao ragazzi</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App initialCounter={3} />, document.getElementById("app"));
