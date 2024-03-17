import React, { useState } from 'react';
import './App.css';
import Colorpalette from './components/colorpalette';
import AddButton from './components/addButton';

function App() {
  const [colors, setColors] = useState([
    'Blue',
    'Red',
    'Green',
    'Grey',
    'Yellow',
    'Gold',
    'Pink',
    'Purple',
  ]);

  // Function to add a new color
  const addColor = (color) => {
    setColors([...colors, color]);
  };

  var renderData = [];
  for (let i = 0; i < colors.length; i++) {
    renderData.push(<Colorpalette key={i + colors} bgColor={colors[i]} />);
  }
  return (
    <div id="App">
      <h1>Simple Color Palette in REACT!!🎇🎉😁</h1>
      {renderData}

      <AddButton addColor={addColor} />
    </div>
  );
}

export default App;
