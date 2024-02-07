const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];
const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];
const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(
    2,
    "Aceite Oliva Virgen Extra 700ml (Caja 30)",
    208.5,
    0
  );
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(
    6,
    "Aceituna Gordal deshuesada 350gr (Caja de 50)",
    205.45,
    1
  );
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(
    8,
    "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)",
    141.35,
    1
  );
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(
    10,
    "Aceituna Negra deshuesada 350gr (Caja de 50)",
    99.35,
    1
  );
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);
}


document.addEventListener("DOMContentLoaded", function() {
  // Carga de datos iniciales
  cargaDatosIniciales();

  // Cargar comerciales en el panel de clientes
  cargarComerciales();

  // Cargar categoria en el panel controles
  cargarCategoria();
});

// Función para cargar comerciales
function cargarComerciales() {
  const comercialesSelect = document.querySelector("select[name='comerciales']");
  


  comerciales.forEach(comercial => {
    const option = document.createElement("option");
    option.value = comercial;
    option.textContent = comercial;
    comercialesSelect.appendChild(option);
  });
}


// Funcion para cargar las categorias
function cargarCategoria(){
  const categoriasSelect = document.querySelector("select[name='categorias']");


  categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    categoriasSelect.appendChild(option);
  });
}

// Funcion para que segun el select de categoria se pongan los productos
function cargarProductos(){
  const productosSelect = document.querySelector("select[name='categorias']");

}









// Ahora categoriasProductos contendrá un objeto donde las claves son las categorías y los valores son arrays de productos correspondientes a cada categoría


// // Funcion para cargar las categorias y los productos al seleccionar una categoría
// function cargarCategoriaYProductos() {
//   const categoriasSelect = document.querySelector("select[name='categorias']");
//   const productosSelect = document.querySelector("select[name='productos']");

//   const categoriasProductos = {
//     "Aceite": ["Aceite Oliva Virgen Extra 1l (Caja 20)", "Aceite Oliva Virgen Extra 700ml (Caja 30)", "Aceite Oliva Virgen Extra 5l (Caja 6)", "Aceite Oliva 1l (Caja 20)"],
//     "Encurtidos": ["Aceituna Gordal 340gr (Caja de 50)", "Aceituna Gordal deshuesada 350gr (Caja de 50)", "Aceituna Manzanilla 250 gr (Caja de 50)", "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)", "Aceituna Negra 350gr (Caja de 50)", "Aceituna Negra deshuesada 350gr (Caja de 50)"],
//     "Salsas": ["Mayonesa 350gr (Caja de 50)", "Mayonesa 1Kg (Caja de 30)", "Salsa Cocktail 350gr (Caja de 50)", "Salsa Gaucha 350gr (Caja de 50)", "Salsa Alioli 350 gr (Caja de 50)", "Salsa Barbacoa 500gr (Caja de 30)"]
//   };

//   categoriasSelect.addEventListener('change', function() {
//     const categoriaSeleccionada = this.value;

//     // Limpiar select de productos
//     productosSelect.innerHTML = '';

//     // Obtener los productos de la categoría seleccionada
//     const productosCategoria = categoriasProductos[categoriaSeleccionada];

//     // Agregar opciones de productos al select
//     productosCategoria.forEach(producto => {
//       const option = document.createElement("option");
//       option.value = producto;
//       option.textContent = producto;
//       productosSelect.appendChild(option);
//     });
//   });


// }

// // Llamar a la función para cargar las categorías y los productos
// cargarCategoriaYProductos();


// // Llamar a la función para cargar las categorías y los productos
// cargarCategoriaYProductos();
