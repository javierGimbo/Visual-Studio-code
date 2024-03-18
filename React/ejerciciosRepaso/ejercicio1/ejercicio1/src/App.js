import { useState } from 'react';
import './App.css';

function App() {
  const numeros = [1, 2, 3, 4, 5];

  const [contador, setContador] = useState(0);

  const subirContador = ()=>{
    setContador(contador+1);
  }

  const [textoInput, setTextoInput] = useState('');

  const CambioInput = (event) => {
    setTextoInput(event.target.value);
  }

  const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#000000"];
  const [colorIndex, setColorIndex] = useState(0);

  const cambiarColorFondo = () => {
    setColorIndex((colorIndex + 1) % colores.length);
  };

  const estiloPagina = {
    backgroundColor: colores[colorIndex],
    minHeight: "100vh",
    padding: "20px",
  };
  return (
    <div className="App"  style={estiloPagina}>
      <h1>(1)¡Hola mundo!</h1>
      <h1>(2)Lista de números del 1 al 5</h1>
      <ul>
        {numeros.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
      <h1>(3)Contador {contador}</h1>
      <button onClick={subirContador}>Boton</button>

      <h1>(4)Mensaje interactivo</h1>
      <input type="text" value={textoInput} onChange={CambioInput}/>
      <p>{textoInput}</p>
      
      <h1>(5)Cambiar Color</h1>
      <button onClick={cambiarColorFondo}>Boton</button>
    </div>
  );
}

export default App;
