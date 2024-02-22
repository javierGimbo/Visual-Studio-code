import * as React from 'react';
import CartaPoke from './CartaPoke';

class MuestraPokemon extends React.Component
{
    
    render() {

        return(
            // Recorremos el array de pokemon y mandamos cada uno de ellos al componente carta,
            // que es el que va a dividir los datos recibidos y a crear la ficha informativa
            this.props.recorrer.map((elemento) => (<CartaPoke pokemon={elemento}/>))
        )

    }

}

export default MuestraPokemon;