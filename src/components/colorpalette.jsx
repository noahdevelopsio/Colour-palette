import React, { Component } from 'react';
import Color from './color';
import Label from './label';

class Colorpalette extends Component {
  state = {};
  render() {
    var paletteStyle = {
      height: 210,
      width: 150,
      padding: 10,
      margin: 20,
      backgroundColor: 'white',
      display: 'inline-block',
      borderRadius: 10,

      WebkitFilter: 'drop-shadow(0px 0px 5px #666)',
      filter: 'drop-shadow(0px 0px 5px #666)',
    };
    return (
      <div style={paletteStyle}>
        <Color bgColor={this.props.bgColor} />
        <Label bgColor={this.props.bgColor} />
      </div>
    );
  }
}

export default Colorpalette;
