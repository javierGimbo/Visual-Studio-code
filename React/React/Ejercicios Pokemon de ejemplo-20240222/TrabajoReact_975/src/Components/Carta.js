import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


//Importo todo lo relacionado con la carta de MUI


function Carta(props){

  //Como no tengo estados decido crear una funcion en vez de clases. Se podría haber hecho con clases tambien

  return (
    <Card sx={{ maxWidth: 200 }} item xs={6} md={8}>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="200"
          image={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
        <hr></hr>
        {/* En esta parte muestro la imagen del Pokemon pasado como props*/}



        <CardMedia
          component="img"
          height="200"
          image={props.pokemon.sprites.back_default}
          alt={props.pokemon.name}

         //En esta parte muestro la imagen del Pokemon pasado como props
          
        />
        <hr></hr>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
          <b>Nombre:</b> {props.pokemon.name}

          {/* Asigno el nombre del pokemon a la carta*/}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            <b>Id:</b> {props.pokemon.id}
            {/* Asigno el id del pokemon a la carta*/}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            <b>Altura:</b> {props.pokemon.height}
            {/* Asigno la altura del pokemon a la carta*/}
          </Typography >
          <Typography variant="body2" component="div" >
          <b>Tipo/s: </b>
            {props.pokemon.types.map((item)=>(item.type.name+"\n"))} 
            {/* Recorro el pokemon para encontrar los tipos, lo hago con map, como se especifica en la práctica*/}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Carta; //Exporto el componente Carta para utilizarlo en Buscador.js