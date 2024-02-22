import Button from '@mui/material/Button';
function BotonBorrar({evento}){
      return(
        
        <div className='App'>
            <Button onClick={evento} type='button' variant="contained" color='success'>Borrar</Button>
            {/*Componente BotonBorrar, le asigno el evento onClick mediante la props que recibe, y modifico su aspecto*/}
        </div>

        )   
}

export default BotonBorrar; //Exporto el componente