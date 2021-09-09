import React, { Component } from "react";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pasoHistoria: 5,
    };
  }
  render() {
    return (
      <div className="layout">
        <Historia texto={data[this.state.pasoHistoria].historia} />
        <Opciones
          decisionA={data[this.state.pasoHistoria].opciones.a}
          decisionB={data[this.state.pasoHistoria].opciones.b}
        />
        <Recordatorio />
      </div>
    );
  }
}

export default Layout;
