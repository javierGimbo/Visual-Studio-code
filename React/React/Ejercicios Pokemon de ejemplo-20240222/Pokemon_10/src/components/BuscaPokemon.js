import * as React from 'react';
import Button from '@mui/material/Button';
import MuestraPokemon from './MuestraPokemon';
import TextField from '@mui/material/TextField';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import DeleteIcon from '@mui/icons-material/Delete';
import './BuscaPokemon.css';

class BuscaPokemon extends React.Component
{
    constructor(props) // Constructor en el cual se establece el estado
    {
        super(props);
        this.state = {valor:''}; // Aquí se almacena el nombre o el ID del pokemon
        this.state = {tablaPokemon:[]}; // Aquí se almacenan todos los pokemon buscados antes de limpiar el historial
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit()
    {
        // Lo que se debe de hacer con la información
        fetch("https://pokeapi.co/api/v2/pokemon/"+this.state.valor) // Buscamos en la API el pokemon
        .then(response => response.json())
        .then(data => {
            // Creamos una tabla auxiliar que guarda el pokemon buscado
            let tablaAux = this.state.tablaPokemon; 
            // Los guardamos ordenados de forma inversa para que se vea primero el último buscado.
            tablaAux.unshift(data); 
            // Ponemos en la tabla del estado, la auxiliar
            this.setState({tablaPokemon:tablaAux});
        })

        
    }

    handleChange(event)
    {
        // Ponemos en el estado el nombre o ID del pokemon buscado
        this.setState({valor:event.target.value.trim().toLowerCase()});
    }

    handleReset()
    {
        // Para limpiar el historial, vaciamos la tabla de búsqueda
        this.setState({tablaPokemon:[]});
    }
    
    render () {
        return (

            // Cada botón tiene su evento
            // El campo de texto tiene un evento onChange para guardar el nombre o ID del pokemon.
            <div>
                <div class="formulario">
                    <form>
                        <div class='txtField'>
                            <TextField id="txtPoke" label="Nombre o ID" type="search" variant="filled" size="small" onChange={this.handleChange}/>
                        </div>
                        <Button id='botonBuscar' endIcon={<CatchingPokemonIcon />} color='success' variant="contained" size="small" onClick={this.handleSubmit}>Buscar Pokemon</Button>
                        <Button id='botonEliminar' endIcon={<DeleteIcon />} color='error' variant="contained" size="small" onClick={this.handleReset}>Eliminar historial</Button>
                    </form>
                </div>
                <div class="cartas">
                    <MuestraPokemon recorrer={this.state.tablaPokemon} />
                </div>
            </div>
        )
    }
}

export default BuscaPokemon;