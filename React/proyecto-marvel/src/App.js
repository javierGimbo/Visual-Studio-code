import React, { useState } from 'react';
import md5 from 'md5';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const publicKey = 'c91f6665b74cd4857a490be0a7c0fd0e';
  const privateKey = '523206aa42672c9d662024ac26876ea3e73fe257';

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return;

    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp);

    const url = `https://gateway.marvel.com/v1/public/characters?name=${searchTerm}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    console.log('URL:', url); // Imprime la URL en la consola

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.data && data.data.results && data.data.results.length > 0) {
        setSearchResult(data.data.results[0]);
        setSearchHistory([...searchHistory, data.data.results[0]]);
      } else {
        console.log('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const generateHash = (timestamp) => {
    const preHash = timestamp + privateKey + publicKey;
    return md5(preHash);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div>
      <h1>Marvel</h1>
      <input
        type="text"
        placeholder="Search for a character or comic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleClearHistory}>Borrar historial</button>
      {searchResult && (
        <div>
          <h1>{searchResult.name}</h1>
          <p>ID: {searchResult.id}</p>
          <p>Biografía: {searchResult.description || 'N/A'}</p>
          <img src={`${searchResult.thumbnail.path}.${searchResult.thumbnail.extension}`} alt={searchResult.name} />
        </div>
      )}
      <h2>Historial de busqueda</h2>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
