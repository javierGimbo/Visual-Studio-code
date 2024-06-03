const apiRest = "https://ejercicio-1-examen3-default-rtdb.firebaseio.com/coches.json";  //he probado tanto terminando la url con /coches/ como con /coches.json y no me va ninguno y no se bien porque. Tambien he probado la url tal y como viene
document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);
formNuevoCoche.addEventListener("submit", insertarCoche);
const ext=".json";

function recuperarDatos() {
  const fichero = "coches.json";
  fetch(apiRest + fichero)
    .then((res) => res.json())
    .then((data) => Object.values(data)) 
    .then(mostrarCoches)
    .catch(console.log);
}

function mostrarCoches(listaCoches) {
  const capaSalida = document.getElementById("salida");
  let tabla = document.createElement("table");
  let cabecera = document.createElement("thead");
  let fila, celda;
  cabecera.innerHTML = "<th>Marca</th><th>Modelo</th><th>Matricula</th><th>Color</th>";
  tabla.append(cabecera);
  for (let coche of listaCoches) {
    fila = tabla.insertRow();
    celda = fila.insertCell();
    celda.textContent = coche.marca;
    celda = fila.insertCell();
    celda.textContent = coche.modelo;
    celda = fila.insertCell();
    celda.textContent = coche.matricula;
    celda = fila.insertCell();
    celda.textContent = coche.color;
 
  }
  borrarSalida();
  capaSalida.append(tabla);
}

function borrarSalida() {
    document.getElementById("salida").innerHTML = "";
  }

  function insertarCoche(event) {
    const fichero = "coches.json";
    const marca = formNuevoCoche.marca.value.trim();
    const modelo = formNuevoCoche.modelo.value.trim();
    const matricula = formNuevoCoche.matricula.value.trim();
    const color = formNuevoCoche.color.value.trim();
  
    const nuevoCoche= {
        marca: marca,
        modelo: modelo,
        matricula: matricula,
        color: color,
    };
    event.preventDefault();
  
    fetch(apiRest + fichero, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(nuevoCoche),
    }).then((res) => res.json());
    setTimeout(recuperarDatos, 1000); 
  }
  

function borrarCoche(matricula){
    let claveCoche="";
    fetch(url + ext)
    .then(res =>{
        if (!res.ok) {
            throw new Error('Error en la solicitud')
        }
        return res.json();
    })
    .then(data=>{
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (matricula == data[key].matricula) {
                    claveCoche=key;
                    console.log(claveCoche);
                }else{
                    console.error("No se encontró el coche. Revisa la matricula")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
    setTimeout(()=>{
        if(claveCoche){
            fetch(url + claveCoche + ext, {
                method:'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al borrar el coche');
                }
                return response.json();
            })
            .then(data => {
                console.log('coche borrado con éxito:', data);
            })
            .catch(error => {
                console.error('Error al borrar el coche:', error);
            });
        };
    },2000);    
};

function editarCoche(matriculaCoche, nuevaMatricula) {
    fetch(url + ext)
    .then(res =>{
        if (!res.ok) {
            throw new Error('Error en la solicitud')
        }
        return res.json();
    })
    .then(data=>{
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (matriculaCoche == data[key].matricula) {
                    nuevoCoche((data[key].marca,data[key].modelo,data[key].matricula, data[key].color), nuevaMatricula);
                    setTimeout(()=>{
                        borrarCoche(matriculaCoche)},2000);
                }else{
                    console.error("No se encontró el coche. Revisa la matricula")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
}


frmBorrarCoche.addEventListener('submit', ()=>{
    event.preventDefault();
    borrarCoche(frmBorrarCoche[0].value);
});

frmActualizaCoche.addEventListener('submit', ()=>{
    event.preventDefault();
    editarCoche(frmActualizaCoche[0].value, frmActualizaCoche[1].value, frmActualizaCoche[2].value, frmActualizaCoche[3].value, );
});