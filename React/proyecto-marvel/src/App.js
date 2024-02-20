import React, { useState } from 'react';
import md5 from 'md5';
import Button from '@mui/material/Button';

function App() {
  const [buscado, setBuscado] = useState('');
  const [resultado, setResutado] = useState(null);
  const [historial, setHistorial] = useState([]);

  const clavePublica = 'c91f6665b74cd4857a490be0a7c0fd0e';       //las dos claves que me daba para la api
  const clavePrivada = '523206aa42672c9d662024ac26876ea3e73fe257';

  const buscarPersonaje = async () => {     //donde se busca un personaje
    if (buscado.trim() === '') return;

    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);

    const url = `https://gateway.marvel.com/v1/public/characters?name=${buscado}&apikey=${clavePublica}&ts=${timestamp}&hash=${hash}`;

    console.log('URL:', url); // Imprime la URL en la consola

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data && data.data.results && data.data.results.length > 0) {
        setResutado(data.data.results[0]);
        setHistorial([...historial, data.data.results[0]]);
      } else {
        console.log('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const buscarComic = async () => {       //donde se busca un comic
    if (buscado.trim() === '') return;

    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);

    const url = `https://gateway.marvel.com/v1/public/comics?title=${buscado}&apikey=${clavePublica}&ts=${timestamp}&hash=${hash}`;  //aqui en la url le pongo para que busque el titulo del comic

    console.log('URL:', url); // Imprime la URL en la consola

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data && data.data.results && data.data.results.length > 0) {
        setResutado(data.data.results[0]);
        setHistorial([...historial, data.data.results[0]]);
      } else {
        console.log('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateHash = (timestamp) => {
    const preHash = timestamp + clavePrivada + clavePublica;
    return md5(preHash);
  };

  const borrarHistorial = () => {           //funcion para borrar el historial
    setHistorial([]);
  };

  return (
    <div>
      <h1 className='titulo'>Marvel</h1>
      <input
        type="text"
        placeholder="Busca el héroe o el comic que quieras..."
        value={buscado}
        onChange={(e) => setBuscado(e.target.value)}
      />
      <Button variant='contained' onClick={buscarPersonaje}>Buscar personaje</Button>
      <Button variant='contained' onClick={buscarComic}>Buscar comic</Button>
      <Button variant='contained' onClick={borrarHistorial}>Borrar historial</Button>
      {resultado && (     //aqui lo que sale por pantalla. nombre, id, imagen...
        <div>
          <h1 className='nombre'>{resultado.name}</h1>
          <p>ID: {resultado.id}</p>
          <p>Biografía: {resultado.description || 'No tiene'}</p>           
          <p>Habilidad: {resultado.abilities || 'No tiene' }</p>
          <p>Estadisticas claves: {resultado.stats || 'No tiene' }</p>

          <img src={`${resultado.thumbnail.path}.${resultado.thumbnail.extension}`} alt={resultado.name} />
        </div>
      )}
      
      <h2>Historial de busqueda</h2>
      <ul>
        {historial.map((item, index) => (   //muestro en el historial tanto los comic como los personajes buscados
        <li key={index}>                        
          {item.name ? item.name : item.title}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
