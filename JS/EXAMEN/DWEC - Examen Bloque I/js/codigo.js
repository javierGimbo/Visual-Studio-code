let prueba = new Ordenador();
console.log(prueba);
datosIniciales();

function datosIniciales() {
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
  let marca = frmAltaCatalogo.marca.value.trim();
  let modelo = frmAltaCatalogo.modelo.value.trim();
  let precio = parseInt(frmAltaCatalogo.precio.value.trim());
  let ordenador = frmAltaCatalogo.rbtOrdenador.value;
  let pulgadas = parseInt(frmAltaCatalogo.pulgadas.value.trim());
  let discoSSD = frmAltaCatalogo.rbtDiscoSSD.value;
  let bdiscoSSD = discoSSD == "S" ? true : false;
  let oCatalogo;

  //No me sale dar de alta un catalogo
  /* if (
   isNaN(marca) ||
    modelo.length == 0 ||
   (frmAltaCatalogo.rbtOrdenador.value == "sobremesa" && pulgadas.length == 0)
  ) {
    alert("Faltan datos por rellenar");
  }
    else { 
      if(frmAltaCatalogo.rbtOrdenador.value =="sobremesa"){
       oCatalogo = 
       
          
      

   if(oOrdenador.altaCatalogo(oCatalogo)){
    alert("Registrado OK");
    frmAltaCatalogo.reset();
    frmAltaCatalogo.style.display="none";
   } else {
    alert("Registrado previamente");
   }*/
  } 

function aceptarEntradaStock() {
  // Añadir código
}

function aceptarSalidaStock() {
  // Añadir código
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
  oVentana.document.write("<h1>Listado Stoks</h1>");
  oVentana.document.write(prueba.listadoStock());
  oVentana.document.close();
  oVentana.document.title = "Listado stocks";
}

function mostrarTotales() {
  // Añadir código
}



