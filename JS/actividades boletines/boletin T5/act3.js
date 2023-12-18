
formulario.boton.addEventListener("click", mostrarDatos);

function mostrarDatos() {

   for (let valor of formulario.provincias.options){
    if(valor.selected){
        console.log("Provincia: " + valor.value);
    }
   }

      }