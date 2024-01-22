var manejadorAgregado = false;

function marcarDesmarcar() {
  formulario.verano.checked = !formulario.verano.checked
}

function addManejador() {
  if (!manejadorAgregado) {
    document.getElementById('botonMarcar').addEventListener('click', marcarDesmarcar);
    manejadorAgregado = true;
  }
}

function deleteManejador() {
  if (manejadorAgregado) {
    document.getElementById('botonMarcar').removeEventListener('click', marcarDesmarcar);
    manejadorAgregado = false;
  }
}