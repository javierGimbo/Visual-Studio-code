import Buscador from "./Buscador";
import Input from "./Input.js";
import BotonBuscar from "./BotonBuscar.js";
import BotonBorrar from "./BotonBorrar.js";
import React from "react";

//Importacion de los componentes que utilizaré en mi componente Formulario, el cual recibirá el nombre o el id de un pokemon y consulta a la API


    class Formulario extends React.Component { //Clase Formulario
        
        constructor(props){
            super(props);

            this.state={nombrePokemon:""}; //Creo un estado para almacenar el nombre de un pokemon, este nombre será pasado a la API
            this.state={arrayPokemon:[]}; //Creo un estado para almacenar la información del pokemon pasado a la API. El estado es un array el cual
                                          //almacenará la información de todos los Pokemon.

            this.handleSubmit=this.handleSubmit.bind(this); 
            this.handleChange=this.handleChange.bind(this);
            this.borrarTodo=this.borrarTodo.bind(this);

            //Creo los tres metodos bind que tendré en mi formulario, para que los metodos almacenen pasen a this el valor que se le entrega.
            
        }

         handleSubmit = () => { //Evento manejador que hará la llamada a la API
            
            let pokemonBuscar = this.state.nombrePokemon.toLowerCase(); //Recupero el valor del input escrito por el usuario y lo pongo en minúscula.

            if(pokemonBuscar.length>0){ //Si el valor del input no es 0...
                    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonBuscar) //Hago la llamada a la API con ese valor
                    .then(res => res.json()) //Obtengo una respuesta del fetch...
                    .then(
                    (result) => { //Y la trato
                        let arrayAux=this.state.arrayPokemon; //Como en mi estado tengo un array, a ese array no puedo hacerle PUSH, por lo que necesito otro array.
                        //Creo un nuevo array con los datos de mi array de estado.
                        arrayAux.unshift(result); //Meto la información obtenida arriba del todo, para que pinte primero el último introducido.
                        this.setState({arrayPokemon:arrayAux}); //Le asigno a mi estado el nuevo array.
                    }
                    
                )
                    
            }
        };

         handleChange = (event) => { //Evento manejador que irá cambiando el valor del input conforme vaya escribiendo. Igual que el visto en clase.
            this.setState(
                {nombrePokemon:event.target.value} //Asigno a mi variable de estado lo que se vaya escribiendo en el input
            );
            
        };

         borrarTodo(){ //Evento que "borra" la pantalla de datos de Pokemon.
            this.setState({arrayPokemon:[]}); //Lo que hago es poner el array de estado a "vacío".
        }

       render(){
        return(
            <div className="row d-flex justify-content-center"> {/*Pongo las cartas en el centro con Bootstrap */}
               
                <form>
                    <Input evento={this.handleChange}/>             
                    <BotonBuscar evento={this.handleSubmit}/> 
                    <br/>
                    <BotonBorrar evento={this.borrarTodo}/>   
                </form>
                
                <Buscador arrayPokemon={this.state.arrayPokemon}/>   


                {/* 

                    Cada boton y el input tienen eventos que se especifican en cada componente. 
                    Al componente Buscador le paso el array de Pokemon del estado para que lo pinte.

                */}       
                
            </div>
           )
        }
    }

export default Formulario; //Exporto el Formulario para que sea usado en App.js







