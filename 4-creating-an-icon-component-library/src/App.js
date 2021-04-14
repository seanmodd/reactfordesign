import React, { Component } from 'react';
import Icon from './Icon';

const color = {
  blue: '#0099FF',
  red: '#FF4D4D',
  green: '#6AED76'
}

function App () {
  return (
    <div>
      <Icon name="check" color={color.green} size={100} />
      <Icon name="add" color={color.blue} size={100} />
      <Icon name="remove" color={color.red} size={100} />
      <Icon name="pin" color="#F04DFF" size={100} />
    </div>
  );
}

export default App;
