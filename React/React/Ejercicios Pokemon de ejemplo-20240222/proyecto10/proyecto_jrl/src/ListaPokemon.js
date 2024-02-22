import PokemonCard from "./PokemonCard";
import { Stack } from "@mui/system";
import { Divider } from "@mui/material";

// Componente ListaPokemon que construye una lista apilada de componentes PokemonCard
// Cada PokemonCard representa la información de un Pokemon
function ListaPokemon({ datos }) {

    // A partir del prop datos y utilizando la función map generamos la lista de PokemonCard 
    let lista = datos.map((pokemon) => {
        return (
            <PokemonCard key={pokemon.id} datos={pokemon} />
        );
    })

    // Devolvemos un componente Stack de MUI que incluye un divisor (Divider de MUI) y la lista de PokemonCard
    return (
        <Stack
            divider={<Divider flexItem />}
            spacing={2}
        >
            {lista}
        </Stack>
    );
}

export default ListaPokemon;