function buscarPokemon() {
    var pokemonNombre = document.getElementById("searchInput").value.trim();

    if (!pokemonNombre) {
        alert("Por favor ingrese el nombre del Pokémon.");
        return;
    }

    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonNombre.toLowerCase();

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se encontró el Pokémon.");
            }
            return response.json();
        })
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            console.error("Error en la búsqueda:", error);
            mostrarError();
        });
}

function mostrarResultado(data) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>ID: ${data.order}</p>
        <p>Altura: ${data.height} cm</p>
        <p>Peso: ${data.weight}</p>
    `;
}

function mostrarError() {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Error en la búsqueda! Espero que no seas del Team Rocket...</p>";
    alert("Error en la búsqueda! Espero que no seas del Team Rocket...");
}
