document.addEventListener("DOMContentLoaded", function() {
    const comercialesSelect = document.querySelector("select[name='comerciales']");
    fetch("https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json")
        .then(response => response.json())
        .then(comerciales => {
            comercialesSelect.innerHTML = ""; // Limpiar el select antes de agregar nuevas opciones
            for (const comercial in comerciales) {
                const option = document.createElement("option");
                option.value = comercial;
                option.textContent = comerciales[comercial];
                comercialesSelect.appendChild(option);
            }
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));
    

    const categoriasSelect = document.querySelector("select[name='categorias']");
    fetch("https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias.json")
        .then(response => response.json())
        .then(categorias => {
            categoriasSelect.innerHTML = ""; // Limpiar el select antes de agregar nuevas opciones
            for (const key in categorias) {
                const option = document.createElement("option");
                option.value = key;
                option.textContent = categorias[key];
                categoriasSelect.appendChild(option);
            }
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));

    
    //CRUD categorís
    const formularioNuevaCategoria = document.getElementById("frmNuevaCategoria");
    // Función para agregar una nueva categoría
    function agregarNuevaCategoria(nombreCategoria) {
        fetch("https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias.json", {
        method: "POST",
        body: JSON.stringify(nombreCategoria),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(() => {
        // Después de agregar la categoría, agregarla al select de categorías
        const option = document.createElement("option");
        option.textContent = nombreCategoria;
        categoriasSelect.appendChild(option);
        
        // Limpia el input y agrega la categoría al select
        document.getElementById("txtNuevaCategoria").value = "";

        // Actualiza las categorías después de 1 segundo
        setTimeout(cargarCategorias, 1000);
    })
    .catch(error => console.error('Error al agregar nueva categoría:', error));
    }

    // Escuchar evento submit del formulario para nueva categoría
    formularioNuevaCategoria.addEventListener("submit", function(event) {
        event.preventDefault();
        const nuevaCategoria = document.getElementById("txtNuevaCategoria").value;
        if (nuevaCategoria.trim() !== "") {
            agregarNuevaCategoria(nuevaCategoria);
            formularioNuevaCategoria.reset();
        }

        
    });

    // Cargar categorías al inicio
    cargarCategorias();
    
});
