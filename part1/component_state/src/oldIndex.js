import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from "react";

const rootElement = document.getElementById('root');

const Counter = ({ number }) => {
  return <h1>{number}</h1>
};

const App = () => {
  const [state, setState] = useState(0);
  const handleClick = () => { 
    setState(state+1) 
    // setState(prevContador => prevContador + 1)
  }
  
  const isEven = state % 2 === 0;
  const mensaje = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>El valor del contenido es:</p>
      <Counter number={state} />
      <h2>Magia de React</h2>
      <p>{mensaje}</p>
      {/* Dos maneras de cambiar el estado pasando una funcion ya definida o arrow y llamada a setState */}
      <button onClick={ handleClick }>Incrementar</button>
      <button onClick={ () => setState(0) }>Reset</button>
    </div>
  )
};

ReactDOM.render(<App />, rootElement);