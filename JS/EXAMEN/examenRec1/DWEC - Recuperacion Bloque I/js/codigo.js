let oStock = new Almacen();
datosIniciales();

function datosIniciales() {
  oStock.altaCatalogo(
    new Televisor(oStock.siguieteNombrePro(), 57, "Si")
  )
  console.log(oStock);
}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaCatalogo() {
  // Añadir código
  let sNombre = frmAltaCatalogo.txtNombre.value.trim();
  let iPrecio = parseInt(frmAltaCatalogo.txtPrecio.value.trim());
  let iPulgadas = parseInt(frmAltaCatalogo.txtPulgadas.value.trim());
  let fullHD = frmAltaCatalogo.rbtFullHD.value;
  let bFullHD = fullHD == "S" ? true :false;
  let iCarga = parseInt(frmAltaCatalogo.txtCarga.value.trim());
  let oElectrodomestico;
}

function aceptarEntradaStock() {
  // Añadir código
  let sNombre = frmEntradaStock.value.trim();
  let iUnidades = parseInt(frmEntradaStock.value.trim());

  if (isNaN(iUnidades) || sNombre.length==0){
    alert("Faltan datos por rellenar");
  } else("")   
}

function aceptarSalidaStock() {
  // Añadir código
  let sNombre = frmSalidaStock.value.trim();
  let iUnidades = parseInt(frmSalidaStock.value.trim());

  if (isNaN(iUnidades) || sNombre.length==0){
    alert("Faltan datos por rellenar");
  } else("")   
}

function mostrarListadoCatalogo() {
  // Añadir código
  let oVentana = open("", "_blank", "");
  oVentana.document.open();
  oVentana.document.write("<h1>Listado Catalogo</h1>");
  oVentana.document.write(prueba.listadoCatalogo());
  oVentana.document.close();
  oVentana.document.title = "Listado Catalogo";
}

function mostrarListadoStock() {
  // Añadir código
  let oVentana = open("", "_blank", "");
  oVentana.document.open();
  oVentana.document.write("<h1>Listado Stocks</h1>");
  oVentana.document.write(prueba.listadoStock());
  oVentana.document.close();
  oVentana.document.title = "Listado stocks";
}

function mostrarTotales() {
  // Añadir código
  let oVentana = open("", "_blank", "");
  oVentana.document.open();
  oVentana.document.write("<h1>Listado Total Stocks</h1>");
  oVentana.document.write(prueba.importeTotalstock());
  oVentana.document.close();
  oVentana.document.title = "Listado stocks";
}
