

let botonSubmit = document.getElementsByName("submit")[0];
botonSubmit.addEventListener("click", procesarFormulario);

function procesarFormulario(event) {

  let hayErrores = false;
  let salida = "";
  let vacíos = [];
  let errores = [];


  let marca = document.getElementsByName("marca")[0].value.trim();
  let modelo = document.getElementsByName("modelo")[0].value.trim();
  let fecha = document.getElementsByName("fechaMatriculacion")[0].value.trim();
  let tipoMatricula = document.getElementsByName("tipoMatricula")[0].value;
  console.log(tipoMatricula);
  let matricula = document.getElementsByName("matricula")[0].value.trim();
  let color = document.getElementsByName("color")[0].value.trim();



  let regExpMarca = /^[A-ZÑÁÉÍÓÚ][a-zA-ZÑñáéíóúÁÉÍÓÚ]*$/;
  let regExpModelo = /^[A-ZÑÁÉÍÓÚ][a-zA-ZÑñáéíóúÁÉÍÓÚ]*$/;
  let regExpFecha = /^\d{4}[-]\d{2}[-]\d{2}$/;
  let regExpColor = /^[a-zA-ZÑÁÉÍÓÚñáéíóú]+$/;


  let regExpMatricula;

  switch (tipoMatricula) {
    case "actual":

      regExpMatricula = /^\d{4}[A-ZÑ]{3}$/;
      break;
    case "antigua":
      regExpMatricula = /^[A-ZÑ]{1,2}[-]\d{4}[-][A-ZÑ]{1,2}$/;
      break;
    case "historica":
      regExpMatricula = /^[H]\d{4}[A-ZÑ]{3}$/;
      break;
  }

  if (marca.length == 0) {
    vacíos.push("Marca");
    hayErrores = true;
  } else if (!regExpMarca.test(marca)) {

    errores.push("Marca");
    hayErrores = true;
  }

  if (modelo.length == 0) {
    vacíos.push("Modelo");
    hayErrores = true;
  } else if (!regExpModelo.test(modelo)) {
    errores.push("Modelo");
    hayErrores = true;
  }

  if (fecha.length == 0) {
    vacíos.push("Fecha Matriculación");
    hayErrores = true;
  } else if (!regExpFecha.test(fecha)) {
    errores.push("Fecha Matriculación");
    hayErrores = true;
  }

  if (matricula.length == 0) {
    vacíos.push("Matricula");
    hayErrores = true;
  } else if (!regExpMatricula.test(matricula)) {
    errores.push("Matricula");
    hayErrores = true;
  }

  if (color.length == 0) {
    vacíos.push("Color");
    hayErrores = true;
  } else if (!regExpColor.test(color)) {
    errores.push("Color");
    hayErrores = true;
  }

  if (hayErrores) {

    event.preventDefault();
    if (vacíos.length > 0) {

      salida += "<h3>CAMPOS VACÍOS: </h3><ul>";
      for (let campo of vacíos) {
        salida += "<li>" + campo + "</li>";
      }
      salida += "</ul>";
    }
    if (errores.length > 0) {
      salida += "<h3>Errores: </h3><ul>";
      for (let campo of errores) {
        salida += "<li>" + campo + "</li>";
      }
      salida += "</ul>";
    }
    document.getElementById("salida").innerHTML = salida;
  }
}