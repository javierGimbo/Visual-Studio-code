// Importa la biblioteca CryptoJS para calcular el hash MD5
const CryptoJS = require('crypto-js');

// Claves de API de Marvel
const publicKey = 'tu_clave_publica';
const privateKey = 'tu_clave_privada';

function searchMarvelCharacter(searchTerm) {
  // Genera el timestamp actual
  const timestamp = new Date().getTime().toString();

  // Calcula el hash MD5 necesario para la autenticación
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

  // Construye la URL de la solicitud a la API de Marvel
  const url = `https://gateway.marvel.com/v1/public/characters?name=${searchTerm}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

  // Realiza la solicitud a la API de Marvel
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta de la API aquí
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Ejemplo de uso de la función searchMarvelCharacter
searchMarvelCharacter('Spider-Man');
