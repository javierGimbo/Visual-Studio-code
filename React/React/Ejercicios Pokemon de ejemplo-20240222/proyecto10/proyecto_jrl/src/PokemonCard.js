import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import './PokemonCard.css';
import ListaTipos from './ListaTipos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Componente PokemonCard que recibe el prop datos con los datos de un Pokemon
function PokemonCard({ datos }) {

    // Para el PokemonCard se ha utilizado el componente Card de MUI 
    // Incluye el componente CardHeader con el nombre del Pokemon, un divisor (Divider de MUI)
    // Dos componentes CardMedia para la foto por delante y por detrás, contenidos en divs para el efecto de flip-card
    // Un CardContent para mostrar el id, el peso y la altura del Pokemon 
    // Por último, un Accordion con el componente ListaTipos 
    // A los componentes MUI se les añade estilo con el prop sx y un objeto JS con las propiedades CSS 
    return (
        <>
            <Card sx={{ maxWidth: 300 }}>
                <CardHeader
                    title={datos.name}
                    align="center"
                    sx={{ backgroundColor: 'honeydew' }}
                />
                <Divider />

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <CardMedia
                                component="img"
                                height="194"
                                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + datos.id + ".png"}
                                alt={datos.name}
                            />
                        </div>
                        <div className="flip-card-back">
                            <CardMedia
                                component="img"
                                height="194"
                                image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + datos.id + ".png"}
                                alt={datos.name}
                            />
                        </div>
                    </div>
                </div>

                <Divider />
                <CardContent sx={{ backgroundColor: 'honeydew' }}>
                    <Typography variant="body1" color="black">
                        ID: {datos.id}
                    </Typography>
                    <Typography variant="body1" color="black">
                        Altura: {datos.height}
                    </Typography>
                    <Typography variant="body1" color="black">
                        Peso: {datos.weight}
                    </Typography>
                </CardContent>
                <Divider />
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="body1" color="black">
                            Tipos:
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <ListaTipos tipos={datos.types} />
                    </AccordionDetails>
                </Accordion>
            </Card>
        </>
    );
}

export default PokemonCard;