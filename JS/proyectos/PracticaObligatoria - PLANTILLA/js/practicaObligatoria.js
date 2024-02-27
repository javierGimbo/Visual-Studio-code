const selectCategorias = document.querySelector("select[name='categorias']");
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

    // Funcion para cargar los productos
    const productosSelect = document.querySelector("select[name='productos']");
    fetch("https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
        .then(response => response.json())
        .then(productos => {
            productosSelect.innerHTML = ""; // Limpiar el select antes de agregar nuevas opciones
            for (const key in productos) {
                const option = document.createElement("option");
                option.value = key;
                option.textContent = productos[key];
                productosSelect.appendChild(option);
            }
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));

        const selectProductos = frmControles.querySelector('select[name="productos"]');
        document.addEventListener("DOMContentLoaded", atacarAPIProductos);
        selectCategorias.addEventListener("change", atacarAPIProductos);

        function atacarAPIProductos() {
            fetch('https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
              .then((response) => response.json())
              .then(generarComboProductos)
              .catch(console.log);
        }

        function generarComboProductos(productos) {
            const categoriaSeleccionada = selectCategorias.selectedIndex; // Obtengo el índice de la categoría seleccionada
        
            selectProductos.innerHTML = '';
        
            for (let key in productos) {
                const producto = productos[key];
                if (producto.idCategoria === categoriaSeleccionada) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = producto.nombreProducto;
                    selectProductos.add(option);
                }
            }
        }

    // Función para cargar las categorias
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
    const urlAPI = 'https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/';
    const frmBorrarCategoria = document.getElementById('frmBorrarCategoria');
    frmBorrarCategoria.addEventListener("submit", eliminarCategoria);

    function atacarAPICategorias() {
        fetch('https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias.json')
            .then((response) => response.json())
            .then(generarComboCategorias)
            .catch(console.log);
    }

    function generarComboCategorias(categorias) {
        categoriasSelect.innerHTML = '';
        for(let categoria in categorias){
            const option = document.createElement('option');
            option.text = categorias[categoria];
            categoriasSelect.add(option);
        }
    }

    function eliminarCategoria(event) {
        event.preventDefault();

        fetch('https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias.json')
            .then((response) => response.json())
            .then(data => {
                const categoriasRecuperadas = data;
                console.log(categoriasRecuperadas);

                const categoria = frmBorrarCategoria.txtBorrarCategoria.value.trim();       //Para acceder a la categoria, necesito borrarla por la KEY
                const categoriasKeys = Object.keys(categoriasRecuperadas);                  //De esta manera, obtengo todas las KEY de categorías y busco
                let categoriaKey = null;                                                    //por sus valores, cuando coinciden, obtengo dicha KEY
                for (const key of categoriasKeys) {
                    if (categoriasRecuperadas[key] === categoria) {
                        categoriaKey = key;
                        console.log(categoriaKey);
                        break;
                    }
                }

                const fichero = 'categorias/';
                const url = urlAPI + fichero + categoriaKey + '.json';

                fetch(url, {
                    method: 'DELETE',
                })
                .then((res) => res.json())
                .then(() => {
                    atacarAPICategorias(); // Llama a la función para actualizar las categorías después de borrar una
                    frmBorrarCategoria.txtBorrarCategoria.value = '';
                })
                .catch(error => console.error('Error al borrar categoría:', error));
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }

    

   

const frmActualizarCategoria = document.getElementById('frmActualizarCategoria');
frmActualizarCategoria.addEventListener("submit", actualizarCategoria);

function actualizarCategoria(event) {
    event.preventDefault();

    fetch('https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/categorias.json')
        .then((response) => response.json())
        .then(data => {
            const categoriasRecuperadas = data;
            console.log(categoriasRecuperadas);

            const antiguaCategoria = frmActualizarCategoria.txtActualizarCategoria.value.trim();
            let categoriaKey = null;

            // Buscamos la clave de la categoría principal
            for (const key in categoriasRecuperadas) {
                if (categoriasRecuperadas[key] === antiguaCategoria) {
                    categoriaKey = key;
                    break;
                }
            }

            if (!categoriaKey) {
                console.error('No se encontró la categoría:', antiguaCategoria);
                return;
            }

            const nuevaCategoria = frmActualizarCategoria.txtCategoriaActualizada.value.trim();

            console.log(nuevaCategoria);
            console.log(antiguaCategoria);

            const fichero = 'categorias/';
            const url = 'https://proyectocliente-b4fc3-default-rtdb.europe-west1.firebasedatabase.app/' + fichero + categoriaKey + '.json';

            console.log(url);

            fetch(url, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({ [categoriaKey]: nuevaCategoria }),
            })
                .then((res) => res.json())
                .then(() => {
                    setTimeout(atacarAPICategorias, 200);
                    frmActualizarCategoria.txtActualizarCategoria.value = '';
                    frmActualizarCategoria.txtCategoriaActualizada.value = '';
                })
                .catch(error => console.error('Error al actualizar categoría:', error));
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));
}

atacarAPIProductos();

});
