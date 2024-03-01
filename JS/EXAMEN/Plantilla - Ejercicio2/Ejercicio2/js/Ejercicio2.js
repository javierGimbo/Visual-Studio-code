const selectCategorias = document.querySelector("select[name='categorias']");
document.addEventListener("DOMContentLoaded", function() {
        //Cargar categorias
        const categoriasSelect = document.querySelector("select[name='categorias']");
        fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/categorias.json")
            .then(response => response.json())
            .then(categorias => {
                const categoriaSeleccionada = selectCategorias.value;
                categoriasSelect.innerHTML = ""; 
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
    fetch("https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/productos.json")
        .then(response => response.json())
        .then(productos => {
            cargarProductosPorCategoria(productos[categoriaSeleccionada]);
        })
        .catch(error => console.error('Error al obtener datos de la API:', error));

        const selectProductos = frmControles.querySelector('select[name="productos"]');
        document.addEventListener("DOMContentLoaded", atacarAPIProductos);
        selectCategorias.addEventListener("change", atacarAPIProductos);

        function atacarAPIProductos() {
            fetch('https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
              .then((response) => response.json())
              .then(comboProductos)
              .catch(console.log);
        }

        function comboProductos(productos) {
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


        atacarAPIProductos();

    
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
        

});