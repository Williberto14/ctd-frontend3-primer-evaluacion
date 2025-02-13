import React, { Component } from "react";
import Opcion from "./Opcion";

class Opciones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="opciones">
        <Opcion
          handleClick={this.props.handleClick}
          key="A"
          letra="A"
          texto={this.props.decisionA}
        />
        <Opcion
          handleClick={this.props.handleClick}
          key="B"
          letra="B"
          texto={this.props.decisionB}
        />
      </div>
    );
  }
}

export default Opciones;
