import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.js hace el papel de programa principal
// Se encarga de renderizar el componente App en el nodo root de public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
