import React from "react";

class Historia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1 className="historia">{this.props.texto}</h1>;
  }
}

export default Historia;
