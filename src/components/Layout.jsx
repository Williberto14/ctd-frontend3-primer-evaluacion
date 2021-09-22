import React, { Component } from "react";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historial: [],
      ultimaSeleccion: "",
      contadorPregunta: 0,
      parteDeLaHistoria: {
        id: "",
        historia: "",
        opciones: {
          a: "",
          b: "",
        },
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      contadorPregunta: 2,
      parteDeLaHistoria: data[0],
    });
  }

  handleClick(e) {
    let vocal = e.target.id.toLowerCase();
    let auxiliar = this.state.historial;
    auxiliar.push(vocal.toUpperCase());

    if (this.state.contadorPregunta <= 5) {
      this.setState({
        historial: auxiliar,
        ultimaSeleccion: vocal,
        contadorPregunta: this.state.contadorPregunta + 1,
        parteDeLaHistoria:
          data[
            data.findIndex((elemento) => {
              return elemento.id === this.state.contadorPregunta + vocal;
            })
          ],
      });
    } else {
      alert("Fin.");
    }
  }

  render() {
    return (
      <div className="layout">
        <Historia texto={this.state.parteDeLaHistoria.historia} />
        <Opciones
          handleClick={this.handleClick}
          decisionA={this.state.parteDeLaHistoria.opciones.a}
          decisionB={this.state.parteDeLaHistoria.opciones.b}
        />
        <Recordatorio
          arrayHistoria={this.state.historial}
          letra={this.state.ultimaSeleccion.toUpperCase()}
        />
      </div>
    );
  }
}

export default Layout;
