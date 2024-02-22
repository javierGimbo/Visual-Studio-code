import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import InformacionPokemon from './InformacionPokemon';
import Typography from '@mui/material/Typography';


class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "" //nombre del pokemon
        };
        this.state = {
            arrayPokemon: [] //array de pokemones buscados
        };

        //usar bind el método para establecer el valor de this, que será igual a la instancia de clase actual
        //Crear función enlazada que tiene el mismo cuerpo que la funcion original
        this.buscarNombrePokemon = this.buscarNombrePokemon.bind(this);
        this.crearBusqueda = this.crearBusqueda.bind(this);
    }
    //al escribir en el textfield se va cambiando el estado del nombre
    buscarNombrePokemon(event) {
        this.setState({
            nombre: event.target.value
        });
    }
    crearBusqueda() {
        //si el estado del nombre no esta vacio:
        if(this.state.nombre.length>0)
        {  
            let nombrePokemon = this.state.nombre.trim().toLocaleLowerCase();
            //nombre actual del pokemon buscado
            

            //url de la api
            let url = "https://pokeapi.co/api/v2/pokemon/";

            fetch(url+nombrePokemon) //hago el fetch con el nombre del pokemon
            .then((response) => response.json()) //obtengo un json de la información
            .then((result) => {let arrayPokemonAuxiliar = this.state.arrayPokemon; //creo un array auxiliar para meter los pokemones uno a uno 

            /*El método unshift agrega el nuevo elemento pasado como parámetro al comienzo del arreglo cambiando por tanto su longitud y luego devuelve la misma. */
                arrayPokemonAuxiliar.unshift(result);

            //cambio el state de mi arrayPokemon al array auxiliar directamente 
            this.setState({arrayPokemon:arrayPokemonAuxiliar})})
            .catch(console.log);
            //console.log(url+nombrePokemon);
        }  
    }
    borrar() {
        //dejo el array vacio cuando se elimina el historial
        this.setState({arrayPokemon:[]})
    }
    render() {
        return (
            <div>
                <div class="container">
                <Typography variant="h3">BUSCADOR POKEMON</Typography>
                <TextField id="outlined-basic" label="ID o nombre Pokémon" variant="outlined" size="small" onChange={(event) => this.buscarNombrePokemon(event)}/>
                <Button variant="outlined" color="success" onClick={()=>this.crearBusqueda()}>Buscar</Button>
                <Button variant="outlined" color="error" onClick={()=>this.borrar()}>Borrar Búsqueda</Button>
                
                </div>
                <div>
                {/**le envio por props el array de los pokemoes a mi otro componente llamado InformacionPokemon**/}
                <InformacionPokemon arrayInfo={this.state.arrayPokemon}/>
                </div>
            </div>
        )
    }
}

export default Formulario;