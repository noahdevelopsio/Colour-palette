import React, { Component } from "react";

class Label extends Component {
  state = {};
  render() {
    var labelStyle = {
      margin: 5,
      padding: 13,
      fontWeight: "bold",
      fontFamily: "monospace",
      fontSize: 23,
      textAlign: "center",
      borderStyle: "groove",
      borderColor: "black",
      borderRadius: 20,
      backgroundColor: this.props.bgColor,
    };
    return <p style={labelStyle}>{this.props.bgColor}</p>;
  }
}
export default Label;
