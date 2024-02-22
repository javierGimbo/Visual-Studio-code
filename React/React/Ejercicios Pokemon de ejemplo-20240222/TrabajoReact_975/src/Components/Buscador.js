import React from "react";
import Carta from "./Carta";
import Divider from '@mui/material/Divider';

//Importo el componente Carta

class Buscador extends React.Component{

    render(){
        return (
            <div>
            {this.props.arrayPokemon.map(elem => (   //Recorro el array de pokemon pasado como props a este componente, 
                                                    //uso map porque se especifica en el enunciado.
            
                <div className="cartas row mt-5 mb-3 d-flex justify-content-center" >
                    <br/>

                        <Carta  pokemon={elem}/> {/* Le paso al componente Carta cada elemento individual para que lo pinte, este elemento sigue
                                                    siendo un objeto. */}
                        <Divider/>
                    <br/>
                </div>
                
            ))}
        
        </div>
        )

	}
}

export default Buscador; //Exporto el Buscador para que sea usado en Formulario.js
