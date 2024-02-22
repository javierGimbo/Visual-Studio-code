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

    
    // Función para cargar las categorías
    function cargarCategorias() {
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
    }

    //CRUD categorías
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

    // Función para borrar una categoría
    function borrarCategoria(nombreCategoria) 
        fetch(`https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias/${nombreCategoria}.json`, {
            method: "DELETE"
            
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo eliminar la categoría.");
            }
            // Si la respuesta es exitosa, cargar las categorías nuevamente
            cargarCategorias();
        })
        .catch(error => console.error('Error al borrar categoría:', error));
    }

    // Escuchar evento submit del formulario para borrar categoría
    const formularioBorrarCategoria = document.getElementById("frmBorrarCategoria");
    formularioBorrarCategoria.addEventListener("submit", function(event) {
        event.preventDefault();
        const eliminarCategoria = document.getElementById("txtBorrarCategoria").value; // Obtener el valor del campo
        const nombreCategoria = eliminarCategoria.trim(); // Eliminar espacios en blanco
        if (nombreCategoria !== "") { // Verificar si el valor no está vacío
            borrarCategoria(nombreCategoria); // Llamar a la función borrarCategoria con el nombre de la categoría
            formularioBorrarCategoria.reset();
        }
    });
});

