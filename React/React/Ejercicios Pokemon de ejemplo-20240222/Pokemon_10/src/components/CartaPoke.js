import * as React from 'react';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import './CartaPoke.css';

class CartaPoke extends React.Component
{
    render ()
    {
        return (

            // Se ha utilizado una tabla para mostrar los datos. Las imagenes se muestran antes de la tabla.

            // Dentro del prop está toda la información obtenida del pokemon. Según lo que necesitemos, así invocaremos
            // el dato.

            <div>
                <div className='carta'>
                <img class="img" src={this.props.pokemon.sprites.front_default} alt="frontal del pokemon" />
                <img class="img" src={this.props.pokemon.sprites.back_default} alt="espalda del pokemon" />
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="medium" aria-label="caption table">
                <TableHead>
                    <TableRow class="header">
                        <TableCell align="center" colSpan={2}><b>{this.props.pokemon.name}</b></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow class="impar">
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">{this.props.pokemon.id}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Tipos</TableCell>
                        <TableCell align="center">{this.props.pokemon.types.map((tipo) => tipo.type.name + "\n")}</TableCell>
                    </TableRow>
                    <TableRow class="impar">
                        <TableCell align="center">Altura</TableCell>
                        <TableCell align="center">{this.props.pokemon.height}</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                </TableContainer>
                <br/>
                <Divider><CatchingPokemonIcon /></Divider>
                <br/>
            </div>
           </div>
        )
    }
    
    

}

export default CartaPoke;