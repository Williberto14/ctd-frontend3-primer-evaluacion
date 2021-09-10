import React from "react";

class Opcion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="opcion">
        <button
          id={this.props.letra}
          className="botones"
          onClick={this.props.handleClick}
        >
          {this.props.letra}
        </button>
        <h2>{this.props.texto}</h2>
      </div>
    );
  }
}

export default Opcion;
