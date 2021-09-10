import React, { Component } from "react";

class Recordatorio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.letra}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {this.props.arrayHistoria.map((elemento, index) => {
            return <li key={index + 4}>{elemento.toUpperCase()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Recordatorio;
