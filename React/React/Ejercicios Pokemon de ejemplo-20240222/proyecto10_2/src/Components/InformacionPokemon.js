
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

class InformacionPokemon extends React.Component {

    render(){
        return (
            <div>
                {/**Recibo el array de props y le hago un mapeo donde recorro el la informacion de pokemon */}
            {this.props.arrayInfo.map((pokemon)=>(
            <div>
                <Divider class="divider"/>
                <Card class="carta">       
                        <CardMedia
                        class="imagen"
                        component="img"
                        image={pokemon.sprites.front_default}
                        alt={pokemon.name}/>
                        
                        <CardMedia
                        class="imagen"
                        component="img"
                        image={pokemon.sprites.back_default}
                        alt={pokemon.name}/>
                    <CardContent>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow><TableCell><Typography variant="h4">
                                    {pokemon.name}
                                </Typography></TableCell></TableRow>
                                <TableRow><TableCell><b>ID: </b>{pokemon.id}</TableCell></TableRow>
                                                                                {/** Hago un mapeo de los tipos que tiene el pokemon para mostrarlos */}
                                <TableRow><TableCell><b>TIPOS: </b>{pokemon.types.map((type) => ("- " + type.type.name + "\n"))}</TableCell></TableRow>
                                <TableRow><TableCell><b>ALTURA: </b>{pokemon.height}</TableCell></TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    </CardContent>
                </Card>
                
            </div>))}
            </div>
        )
    }
}

export default InformacionPokemon;