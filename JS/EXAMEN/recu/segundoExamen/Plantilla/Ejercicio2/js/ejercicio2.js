document.getElementById("botonRestaurar").addEventListener("click", () => location.reload());
const botonEjecutar = document.getElementById("botonEjecutar");

botonEjecutar.addEventListener("click", ejecutar);
botonRestaurar.addEventListener("click", restaurar);

function ejecutar() {
  const checkboxes = document.querySelectorAll('input[name="seleccionImagen"]:checked');
  const radioSeleccionado = document.querySelector('input[name="aplicarFuncion"]:checked');
  const radioClonarSeleccionado = document.querySelector('input[name="clonarImagen"]:checked');
  const radioDestinoSeleccionado = document.querySelector('input[name="destinos"]:checked');

  const valorOperacion = radioSeleccionado.value;
  const valorClonar = radioClonarSeleccionado.value === "si"; 
  const valorDestino = radioDestinoSeleccionado.parentNode;

  checkboxes.forEach(checkbox => {
    const imagen = checkbox.parentNode.querySelector("img");
    const contenedorImagen = checkbox.parentNode; 

    if (imagen) {
      const imagenClonada = imagen.cloneNode(true);
      const contenedorClonado = contenedorImagen.cloneNode(true); 

      if (valorClonar) {
        switch (valorOperacion) {
          case "append":
            valorDestino.appendChild(contenedorClonado); 
            break;
          case "prepend":
            valorDestino.insertBefore(contenedorClonado, valorDestino.firstChild); 
            break;
          case "before":
            valorDestino.parentNode.insertBefore(contenedorClonado, valorDestino); 
            break;
          case "after":
            valorDestino.parentNode.insertBefore(contenedorClonado, valorDestino.nextSibling); 
            break;
          default:
            console.log("Operación no válida.");
            break;
        }
      } else {
        switch (valorOperacion) {   
          case "append":
            valorDestino.appendChild(contenedorImagen); 
            break;
          case "prepend":
            valorDestino.insertBefore(contenedorImagen, valorDestino.firstChild); 
            break;
          case "before":
            valorDestino.parentNode.insertBefore(contenedorImagen, valorDestino); 
            break;
          case "after":
            valorDestino.parentNode.insertBefore(contenedorImagen, valorDestino.nextSibling); 
            break;
          default:
            console.log("Operación no válida.");
            break;
        }
      }
    }
  });
}

function restaurar() {
  const contenedorOrigen = document.getElementById('origen');
  const contenedorDestinos = document.querySelectorAll('.capasDestino');

  contenedorDestinos.forEach(destino => {
    const imagenes = destino.querySelectorAll('img');

    imagenes.forEach(imagen => {
      contenedorOrigen.appendChild(imagen.parentNode);
    });
  });
}



