import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  children: "Enviar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("botão clicado!");
  }

  render() {
    return (
      <Fragment>
        <h1>Ciao ragazzi</h1>
        <Button onClick={() => alert("Botão 1")} />
        <Button onClick={this.handleClick}>Clique aqui</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
