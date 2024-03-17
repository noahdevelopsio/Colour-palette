import React, { Component } from 'react';
class Color extends Component {
  state = {};
  render() {
    var colorStyle = {
      height: 150,
      borderRadius: 10,

      backgroundColor: this.props.bgColor,
    };
    return <div style={colorStyle}></div>;
  }
}

export default Color;
