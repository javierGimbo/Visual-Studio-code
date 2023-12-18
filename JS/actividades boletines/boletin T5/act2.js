
formulario.boton.addEventListener("click", mostrarDatos);

function mostrarDatos() {
   let valor = formulario.provincias.options[formulario.provincias.selectedIndex].value;
    console.log("Provincia: " + valor);
      }