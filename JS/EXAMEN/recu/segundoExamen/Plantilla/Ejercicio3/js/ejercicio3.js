formulario.addEventListener("submit", validarFormulario);


function validarFormulario(event) {
const regExpPrecio = /^[0-9]+\.[0-9]{2}$/;
const precio = formulario.precio.value.trim();
const regExpHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const hora = formulario.hora.value.trim();
const regExpFecha = /^\d\d\/\d\d\/\d\d\d\d$/;
const fecha = formulario.fecha.value.trim();
const regExpIp = /^[0-255]+\.[0-255]+\.[0-255]+\.[0-255]$/;
const direccionIp = formulario.direccionIP.value.trim();
const regExpColor = /^@[a-fA-F0-9_]{2}$/;
const color = formulario.color.value.trim();

let errores = [];
let vacios = [];
let hayErrores = false;
let salida = "";




//con los if de abajo compruebo si hay errores o estan vacios
if (precio.length == 0) {
    vacios.push("Precio");
    hayErrores = true;
  } else if (!regExpPrecio.test(precio)) {
    errores.push("Precio");
    hayErrores = true;
  }


if (hora.length == 0) {
    vacios.push("Hora");
    hayErrores = true;
  } else if (!regExpHora.test(hora)) {
    errores.push("Hora");
    hayErrores = true;
  }

if (fecha.length == 0) {
    vacios.push("Fecha");
    hayErrores = true;
  } else if (!regExpFecha.test(fecha)) {
    errores.push("Fecha");
    hayErrores = true;
  }

if (direccionIp.length == 0) {
    vacios.push("direccionIP");
    hayErrores = true;
  } else if (!regExpIp.test(direccionIp)) {
    errores.push("direccionIP");
    hayErrores = true;
  }


if (color.length == 0) {
    vacios.push("Color");
    hayErrores = true;
  } else if (!regExpColor.test(color)) {
    errores.push("Color");
    hayErrores = true;
  }

  
  if (hayErrores) {
    event.preventDefault(); 
    if (vacios.length > 0) {
      salida += "<h3>CAMPOS VACÍOS:</h3><ul>";
      for (let elem of vacios) {
        salida += "<li>" + elem + "</li>";
      }							//con esto creo las tablas de abajo para saber si los campos estan vacios o tienen errores
      salida += "</ul>";
    }
    if (errores.length > 0) {
      salida += "<h3>CAMPOS CON ERRORES:</h3><ul>";
      for (let elem of errores) {
        salida += "<li>" + elem + "</li>";
      }
      salida += "</ul>";
    }
    document.getElementById("salida").innerHTML = salida;
  }
}