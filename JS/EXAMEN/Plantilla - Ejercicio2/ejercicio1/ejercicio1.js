const apiRest = "https://primerejercicio-ff728-default-rtdb.firebaseio.com/";
document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);
formNuevoAlumno.addEventListener("submit", insertarAlumno);

function recuperarDatos() {
  const fichero = "modulos.json";
  fetch(apiRest + fichero)
    .then((res) => res.json())
    .then((data) => Object.values(data)) //Devuelve un objeto cuyos índice es el id generado por Firebase. Lo quitamos quedándonos con values
    .then(mostrarAlumnos)
    .catch(console.log);
}

function mostrarAlumnos(listaAlumnos) {
  const capaSalida = document.getElementById("salida");
  let tabla = document.createElement("table");
  let cabecera = document.createElement("thead");
  let fila, celda;
  cabecera.innerHTML = "<th>Alumnos</th><th>Curso</th><th>Nombre</th><th>Profesor</th>";
  tabla.append(cabecera);
  for (let alumno of listaAlumnos) {
    fila = tabla.insertRow();
    celda = fila.insertCell();
    celda.textContent = alumno.alumnos;
    celda = fila.insertCell();
    celda.textContent = alumno.curso;
    celda = fila.insertCell();
    celda.textContent = alumno.nombre;
    celda = fila.insertCell();
    celda.textContent = alumno.profesor;
  }
  borrarSalida();
  capaSalida.append(tabla);
}

function borrarSalida() {
  document.getElementById("salida").innerHTML = "";
}

function insertarAlumno(event) {
  const fichero = "modulos.json";
  const alumnos = formNuevoAlumno.alumnos.value;
  const curso = formNuevoAlumno.curso.value.trim();
  const nombre = formNuevoAlumno.nombre.value.trim();
  const profesor = formNuevoAlumno.profesor.value.trim();

  const nuevoAlumno = {
    curso: curso,
    nombre: nombre,
    alumnos: alumnos,
    profesor: profesor,
  };
  event.preventDefault();

  fetch(apiRest + fichero, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(nuevoAlumno),
  }).then((res) => res.json());
  setTimeout(recuperarDatos, 1000); //Para dar margen a que la actualización del dato se haya hecho en la BD
}


function actualizarAlumno(event) {
    event.preventDefault();
    let datos = { nombre: "" };
    const fichero = "modulos/";
    const nombre = frmActualizaRegistro.nombre.value.trim();
    const nombreFireBase = frmActualizaRegistro.nombreFireBase.value.trim() + ".json";
  
    datos.nombre = nombre;
  
    fetch(apiRest + nombreFireBase, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(datos),
    }).then((res) => res.json());
  
    setTimeout(recuperarDatos, 1000);
  }


  function eliminarAlumno(event) {
    event.preventDefault();
    const fichero = "profesor/";
    const profesor = frmEliminarRegistro.profesorFireBase.value.trim() + ".json";
  
    fetch(apiRest + fichero + profesor, {
      method: "DELETE",
    }).then((res) => res.json());
  
    setTimeout(recuperarDatos, 1000);
  }