// App.js
import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const publicKey = 'c91f6665b74cd4857a490be0a7c0fd0e';
  const privateKey = '523206aa42672c9d662024ac26876ea3e73fe257';

  const handleSearch = async () => {
    if (searchTerm.trim() === '') return;

    const timestamp = new Date().getTime().toString();
    // eslint-disable-next-line no-undef
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    const url = `https://gateway.marvel.com/v1/public/characters?name=${searchTerm}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    console.log('URL:', url); // Imprime la URL en la consola

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResult(data.data.results[0]);
      setSearchHistory([...searchHistory, data.data.results[0]]);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div>
      <h1>Marvel Explorer</h1>
      <input
        type="text"
        placeholder="Search for a character or comic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClearHistory}>Clear History</button>
      {searchResult && (
        <div>
          <h2>{searchResult.name}</h2>
          <p>ID: {searchResult.id}</p>
          <p>Biography: {searchResult.description || 'N/A'}</p>
        </div>
      )}
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
