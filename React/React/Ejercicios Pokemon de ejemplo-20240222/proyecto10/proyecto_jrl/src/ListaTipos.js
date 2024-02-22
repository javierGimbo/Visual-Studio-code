import { Divider, List, ListItem, ListItemText, Stack} from "@mui/material";

// Componentes ListaTipos que muestra una lista con los tipos de Pokemon recibidos por el prop tipos
function ListaTipos({ tipos }) {

    // Devuelve un componente List de MUI que contiene a su vez un componente Stack
    // para apilar los componentes ListItem, ListItemText
    // y un Divider entre cada tipo
    return (
        <List>
            {tipos.map(tipo =>
                <Stack key={tipo.type.name}>
                    <ListItem >
                            <ListItemText primary={tipo.type.name} />
                    </ListItem>
                    <Divider />
                </Stack>
            )}
        </List>
    );
}

export default ListaTipos;