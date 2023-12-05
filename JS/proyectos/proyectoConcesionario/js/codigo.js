<<<<<<< HEAD
function gestionFormularios(sFormularioVisible) {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario que llega como parámetro
    switch (sFormularioVisible) {
      case "frmAltaCli":
        frmAltaCli.style.display = "block";
        break;
    case "frmAltaVehiculo":
        frmAltaVehiculo.style.display = "block";
        break;
    }
  }

  function mostrarAltaClientes() {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario
    frmAltaCli.style.display = "block";
  }

  function ocultarTodosLosFormularios() {
    let oFormularios = document.querySelectorAll("form");
  
    for (let i = 0; i < oFormularios.length; i++) {
      oFormularios[i].style.display = "none";
    }
  }
  
=======
function gestionFormularios(sFormularioVisible) {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario que llega como parámetro
    switch (sFormularioVisible) {
      case "frmAltaCli":
        frmAltaCli.style.display = "block";
        break;
    case "frmAltaVehiculo":
        frmAltaVehiculo.style.display = "block";
        break;
    }
  }

  function mostrarAltaClientes() {
    ocultarTodosLosFormularios();
  
    // Hacemos visible el formulario
    frmAltaCli.style.display = "block";
  }

  function ocultarTodosLosFormularios() {
    let oFormularios = document.querySelectorAll("form");
  
    for (let i = 0; i < oFormularios.length; i++) {
      oFormularios[i].style.display = "none";
    }
  }
  
>>>>>>> 78d85d1ca2274d885ac1c6559909b76b9b0f05b3
