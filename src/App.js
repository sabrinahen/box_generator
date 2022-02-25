import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  const [ boxArray, setBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>This Better Work</h1>
      <Form boxArray={ boxArray } setBoxArray={ setBoxArray } />
      <Display boxArray={ boxArray } />
    </div>
  );
}

export default App;
