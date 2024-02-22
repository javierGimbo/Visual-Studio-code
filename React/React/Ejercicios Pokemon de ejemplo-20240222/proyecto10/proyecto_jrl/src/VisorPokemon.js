import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import ListaPokemon from './ListaPokemon';
import { Grid, Typography } from '@mui/material';
import './VisorPokemon.css';

// Componente VisorPokemon 
function VisorPokemon() {

  // Utilizo useState para crear la variable de estado pokeArray
  // setPokeArray es el método con el que modificar el array
  // pokeArray almacena los datos de los pokemons que se visualizan en el componente
  const [pokeArray, setPokeArray] = useState([]);

  // Referencia a los componentes TextField
  const txtIdPokemon = useRef(null);
  const txtNombrePokemon = useRef(null);

  // Función que inicializa el pokeArray a un array vacío
  function borrarHistorial() {
    setPokeArray([]);
  }

  // A partir del id introducido por el usuario comprueba si ya se ha recuperado
  // la información de ese Pokemon y en otro caso recupera la información del Pokemon con ese id
  async function buscarPokemonPorId() {
    let idPokemon = txtIdPokemon.current.value;
    let arrayResultado = pokeArray.filter(pokemon => idPokemon === pokemon.id.toString());

    if (arrayResultado.length > 0) {
      alert("El Pokemon buscado ya está en la lista.");
    } else if (idPokemon.length === 0) {
      alert("Debe introducir un ID de Pokemon.");
    } else {
      fetchPokemon(idPokemon);
    }
  }

  // A partir del nombre introducido por el usuario comprueba si ya se ha recuperado
  // la información de ese Pokemon y en otro caso recupera la información del Pokemon con ese nombre
  function buscarPokemonPorNombre() {
    let nombrePokemon = txtNombrePokemon.current.value.toLowerCase();
    let arrayResultado = pokeArray.filter(pokemon => nombrePokemon === pokemon.name);

    if (arrayResultado.length > 0) {
      alert("El Pokemon buscado ya está en la lista.");
    } else if (nombrePokemon.length === 0) {
      alert("Debe introducir un nombre de Pokemon.");
    } else {
      fetchPokemon(nombrePokemon);
    }
  }

  // Función que recupera los datos de un Pokemon consultando la API Rest de Pokemon
  async function fetchPokemon(valorBusqueda) {

    // Solicito recuperar en la URL concatenada con el id o el nombre del Pokemon
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + valorBusqueda);

    if (response.ok) {

      //Obtengo los datos del Pokemon en un objeto
      let datosPokemon = await response.json();

      // Establecemos el valor del pokeArray mediante un nuevo array 
      // donde el Pokemon recuperado ocupa el primer lugar y el resto de valores detrás
      setPokeArray([datosPokemon, ...pokeArray]);
    } else {
      // Si la respuesta del servidor es un 404 es que no existe el Pokemon solicitado
      if (response.status === 404) {
        alert("No se ha encontrado el Pokemon buscado.");
      } else {
        alert("Error, no se ha podido comunicar con el servidor.")
      }
    }
  }

  // Se ha utilizado el componente Grid de MUI para ubicar los distintos elementos
  // Hay dos cuadros de búsqueda (TextField de MUI)
  // También hay tres botones: buscar por id, buscar por nombre y borrar historial (Button de MUI)
  // Por último, un componente ListaPokemon para generar la visualización de los Pokemons
  // A ListaPokemon se le pasa como prop el pokeArray con los datos
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Pokepedia
          </Typography>
          <Typography variant="h5">
            Busca y visualiza los datos de tus Pokemons favoritos
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Julia Rodríguez Ligero
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            className='fullWidth'
            id="idPokemon"
            label="ID Pokemon"
            type="text"
            inputRef={txtIdPokemon}
          />
        </Grid>

        <Grid item xs={2}>
          <TextField
            className='fullWidth'
            id="nombrePokemon"
            label="Nombre Pokemon"
            type="text"
            inputRef={txtNombrePokemon}
          />
        </Grid>

        <Grid item xs={8}></Grid>

        <Grid item xs={2}>
          <Button className='fullWidth' variant="contained" size="large" onClick={buscarPokemonPorId}>Buscar por ID</Button>
        </Grid>

        <Grid item xs={2}>
          <Button className='fullWidth' variant="contained" size="large" onClick={buscarPokemonPorNombre}>Buscar por nombre</Button>
        </Grid>

        <Grid item xs={8}></Grid>

        <Grid item xs={2}>
          <Button className='fullWidth' variant="contained" size="large" onClick={borrarHistorial}>Borrar historial</Button>
        </Grid>

        <Grid item xs={10}></Grid>

        <Grid item xs={3}>
          <ListaPokemon
            datos={pokeArray}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default VisorPokemon;