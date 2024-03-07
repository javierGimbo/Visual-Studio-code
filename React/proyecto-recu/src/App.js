import React, { useState } from 'react';
import Button from '@mui/material/Button';
function App() {

  const [buscado, setBuscado] = useState('');
  const [resultado, setResutado] = useState(null);

  
  const buscarPersonaje = async () => {
    if (buscado.trim() === '') return;
    
    const url = 'https://rickandmortyapi.com/api';

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data && data.data.results && data.data.results.length > 0) {
        const personaje = data.data.results[0];
        setResutado(personaje);

      } else {
        console.log('No se encontraron resultados.');
        console.log(data);        //muestro los datos por la pantalla

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (                    //muestro los resultados en un div
    <div>
      <h1 className='titulo'>Rick and Morty</h1>
      <input
        type="text"
        placeholder="Busca el personaje"
        value={buscado}
        onChange={(e) => setBuscado(e.target.value)}
      />
      <Button variant='contained' onClick={buscarPersonaje}>Buscar</Button>
      {resultado && (
        <div>
          <h1 className='nombre'>{resultado.name}</h1>
          <p>ID: {resultado.id}</p>
          <p>Estatus: {resultado.status}</p>
          <p>Especie: {resultado.species}</p>
          <p>Tipo: {resultado.type}</p>
        </div>
      )}
  
    
  
    </div>
  );
}

export default App;
