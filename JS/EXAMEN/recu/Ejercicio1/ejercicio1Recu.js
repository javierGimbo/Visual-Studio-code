const apiRest = "https://examenclientes-default-rtdb.europe-west1.firebasedatabase.app/";
document.getElementById("recuperarDatos").addEventListener("click", recuperarDatos);
formNuevoVuelo.addEventListener("submit", insertarVuelo);
const ext=".json";

function recuperarDatos() {
  const fichero = "vuelos.json";
  fetch(apiRest + fichero)
    .then((res) => res.json())
    .then((data) => Object.values(data)) 
    .then(mostrarVuelos)
    .catch(console.log);
}

function mostrarVuelos(listaVuelos) {
  const capaSalida = document.getElementById("salida");
  let tabla = document.createElement("table");
  let cabecera = document.createElement("thead");
  let fila, celda;
  cabecera.innerHTML = "<th>Aereolinea</th><th>Destino</th><th>Duracion</th><th>Origen</th>";
  tabla.append(cabecera);
  for (let vuelo of listaVuelos) {
    fila = tabla.insertRow();
    celda = fila.insertCell();
    celda.textContent = vuelo.aerolinea;
    celda = fila.insertCell();
    celda.textContent = vuelo.destino;
    celda = fila.insertCell();
    celda.textContent = vuelo.duracion;
    celda = fila.insertCell();
    celda.textContent = vuelo.origen;
 
  }
  borrarSalida();
  capaSalida.append(tabla);
}

function borrarSalida() {
    document.getElementById("salida").innerHTML = "";
  }

  function insertarVuelo(event) {
    const fichero = "vuelos.json";
    const aereolinea = formNuevoVuelo.aerolinea.value.trim();
    const destino = formNuevoVuelo.destino.value.trim();
    const duracion = formNuevoVuelo.duracion.value.trim();
    const origen = formNuevoVuelo.origen.value.trim();
  
    const nuevoVuelo = {
      aereolinea: aereolinea,
      destino: destino,
      duracion: duracion,
      origen: origen,
    };
    event.preventDefault();
  
    fetch(apiRest + fichero, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(nuevoVuelo),
    }).then((res) => res.json());
    setTimeout(recuperarDatos, 1000); 
  }
  

function borrarVuelo(destino){
    let claveVuelo="";
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
                if (destino == data[key].destino) {
                    claveVuelo=key;
                    console.log(claveVuelo);
                }else{
                    console.error("No se encontró el vuelo. Revisa la aerolinea")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
    setTimeout(()=>{
        if(claveVuelo){
            fetch(url + claveVuelo + ext, {
                method:'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al borrar el vuelo');
                }
                return response.json();
            })
            .then(data => {
                console.log('Vuelo borrado con éxito:', data);
            })
            .catch(error => {
                console.error('Error al borrar el Vuelo:', error);
            });
        };
    },2000);    
};

function editarVuelo(aerolineaVuelo, nuevaAerolinea) {
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
                if (aerolineaVuelo == data[key].aerolinea) {
                    nuevoVuelo((data[key].aerolinea,data[key].destino,data[key].duracion, data[key].origen), nuevaAerolinea);
                    setTimeout(()=>{
                        borrarVuelo(aerolineaVuelo)},2000);
                }else{
                    console.error("No se encontró el vuelo. Revisa la aerolinea")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
}


frmBorrarVuelo.addEventListener('submit', ()=>{
    event.preventDefault();
    borrarVuelo(frmBorrarVuelo[0].value);
});

frmActualizaVuelo.addEventListener('submit', ()=>{
    event.preventDefault();
    editarLibro(frmActualizaVuelo[0].value, frmActualizaVuelo[1].value, frmActualizaVuelo[2].value, frmActualizaVuelo[3].value, );
});