
import TextField from '@mui/material/TextField';


    function Input({evento}){
        
        
        return(
            <div className='App'>
                
                <TextField
                    
                    label="Pokemon"
                    helperText="Nombre o Id de un Pokemon"
                    variant="standard"
                    onChange={evento}

                    /*Componente Input, le asigno el evento onChange mediante la props que recibe, y modifico su aspecto*/
                   
                />
                
                <div className='botones'>
                    
                </div>
                
            </div>
                
        )

    }

    

export default Input  //Exporto el componente