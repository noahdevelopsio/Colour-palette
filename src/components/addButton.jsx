import React from 'react';

function AddButton({ addColor }) {
  const handleClick = () => {
    const color = prompt('Enter a color:');
    if (color) {
      addColor(color);
    }
  };

  return (
    <div>
      <button style={addButtonStyle} onClick={handleClick}>
        Add Color
      </button>
    </div>
  );
}

var addButtonStyle = {
  height: 150,
  width: 150,
  padding: 10,
  margin: 20,
  backgroundColor: 'white',
  display: 'inline-block',
  borderRadius: 10,
};

export default AddButton;
