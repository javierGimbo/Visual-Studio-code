import React, { useState } from 'react';
import './App.css';

function App() {
  const numeros = [1, 2, 3, 4, 5];

  const [contador, setContador] = useState(0);

  const subirContador = () => {
    setContador(contador + 1);
  };

  const bajarContador = () => {
    setContador(contador - 1);
  };

  const restContador = () => {
    setContador(0);
  };


  const [textoInput, setTextoInput] = useState('');

  const CambioInput = (event) => {
    setTextoInput(event.target.value);
  };

  const colores = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#D37676'];
  const [colorIndex, setColorIndex] = useState(0);

  const cambiarColorFondo = () => {
    setColorIndex((colorIndex + 1) % colores.length);
  };

  const estiloPagina = {
    backgroundColor: colores[colorIndex],
  };

  return (
    <div className="App" style={estiloPagina}>
      <h1>(1)¡Hola mundo!</h1>
      <h1>(2)Lista de números del 1 al 5</h1>
      <ul>
        {numeros.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
      <h1>(3)Contador {contador}</h1>
      <button onClick={subirContador}>Boton mas</button>
      <button onClick={bajarContador}>Boton menos</button>
      <button onClick={restContador}>Boton rest</button>

      <h1>(4)Mensaje interactivo</h1>
      <input type="text" value={textoInput} onChange={CambioInput} />
      <p>{textoInput}</p>

      <h1>(5)Cambiar Color</h1>
      <button onClick={cambiarColorFondo}>Boton</button>
    </div>
  );
}

export default App;
