import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";

//Componentes
const WarningNotUsed = () => <h3>El componente no se ha usado aun</h3>;
const ListOfClicks = ({clicks}) => <p>{clicks.join(", ")}</p>;
const INITIAL_COUNTER_STATE = {
    right: 0,
    left: 0,
    mensaje: "Hola mundo"
};

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    // HOOKS - ESTADOS
    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        setCounters({ 
            //spread para indicar: tiene todos los atributos de la clase, 
            //y va a sobreescribir los siguientes
            ...counters,
            left: counters.left + 1
        })
        setClicks( prevClicks => [...prevClicks,"L"]);//Es una forma de push
    }

    const handleClickRight = () => {
        const newCounterState = {
            ...counters,
            right: counters.right + 1
        }
        setCounters(newCounterState);
        setClicks( prevClicks => [...prevClicks,"R"]);//Es una forma de push        
    }
    //Resetea estados
    const handleClickReset = () => {
        setCounters(INITIAL_COUNTER_STATE);
        setClicks([]);     
    }
    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>
          left
        </button>
        <button onClick={handleClickRight}>
          right
        </button>
        {counters.right}
        <p>Total de clicks: {clicks.length}</p>
        {clicks.length === 0 ? (
            <WarningNotUsed/> 
            ) : (
            <ListOfClicks clicks={clicks}/>
        )}
        <p>{counters.mensaje}</p>
        <button onClick={handleClickReset}>Reset</button>
      </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);