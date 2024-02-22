
import Button from '@mui/material/Button';

function BotonBuscar({evento}){

    return(
        
        <div className='App'>
            <Button onClick={evento} type='button' variant="contained" color='success'>Consultar</Button>
             {/*Componente BotonBuscar, le asigno el evento onClick mediante la props que recibe, y modifico su aspecto*/}
        </div>

        )
    
}

export default BotonBuscar; //Exporto el componente