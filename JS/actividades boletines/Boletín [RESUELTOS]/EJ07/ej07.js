document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);

function recuperarDatos() {
  const url = "https://api-ejercicios-default-rtdb.europe-west1.firebasedatabase.app/alumnos.json";
  fetch(url)
    .then((res) => res.json())
    .then((objRespuesta) => Object.values(objRespuesta))
    .then(mostrarAlumnos);
}

function mostrarAlumnos(listaAlumnos) {
  const capaSalida = document.getElementById("salida");
  let salida = "";
  for (let alumno of listaAlumnos) {
    salida += JSON.stringify(alumno) + "<br>";
  }
  capaSalida.innerHTML = salida;
}

const selectCategorias = document.querySelector("select[name='categorias']");
const selectProductos = document.querySelector("select[name='productos']");
const datosProductoDiv = document.getElementById("datosProducto");

document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar las categorías
    fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/categorias.json")
        .then(response => response.json())
        .then(categorias => {
            cargarSelectCategorias(categorias);
            const categoriaSeleccionada = selectCategorias.value;
            fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
                .then(response => response.json())
                .then(productos => {
                    cargarProductosPorCategoria(productos[categoriaSeleccionada]);
                })
                .catch(error => console.error('Error al obtener datos de la API:', error));
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));

    selectCategorias.addEventListener("change", function() {
        const categoriaSeleccionada = selectCategorias.value;
        fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
            .then(response => response.json())
            .then(productos => {
                cargarProductosPorCategoria(productos[categoriaSeleccionada]);
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    });

    selectProductos.addEventListener("change", function() {
        const productoSeleccionado = selectProductos.value;
        fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
            .then(response => response.json())
            .then(productos => {
                const datosProducto = productos[productoSeleccionado];
                mostrarDatosProducto(datosProducto);
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    });
});

function cargarSelectCategorias(categorias) {
    selectCategorias.innerHTML = "";
    for (const key in categorias) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = categorias[key];
        selectCategorias.appendChild(option);
    }
}

function cargarProductosPorCategoria(productosCategoria) {
    selectProductos.innerHTML = "";
    if (productosCategoria) { // Verificar si productosCategoria está definido y no es null
        for (const key in productosCategoria) {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = productosCategoria[key].nombreProducto;
            selectProductos.appendChild(option);
        }
        const primerProducto = Object.keys(productosCategoria)[0]; // Obtener la clave del primer producto
        const datosPrimerProducto = productosCategoria[primerProducto];
        mostrarDatosProducto(datosPrimerProducto);
    } else {
        console.error('No se han encontrado productos para esta categoría.');
    }
}

function mostrarDatosProducto(datosProducto) {
    datosProductoDiv.innerHTML = `
        <p><strong>Id Producto:</strong> ${datosProducto.idProducto}</p>
        <p><strong>Precio Unidad:</strong> ${datosProducto.precioUnidad}</p>
    `;
}
