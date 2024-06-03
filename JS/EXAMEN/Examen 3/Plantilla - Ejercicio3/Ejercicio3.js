const divSalida = document.getElementById('capaSalida');
function extraerDatos() {
    fetch('partidos.json')
    .then(res=>{
        if(!res.ok){
            throw new Error("Error al extraer los datos");
        }
        return res.json();
    })
    .then(data=>{
        console.log(data.partidos);
        mostrarTabla(data.partidos);
    })
    .catch(error=>{
        console.error("Error ", error);
    })
}

function mostrarTabla(data) {
    let salida = "<h4> Resultado de los partidos </h4>";
    salida += "<table><th>Local</th><th>Marcador</th><th>Vencedor</th>";
    salida += "<tbody>"
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            salida+= "<tr><td>"+data[key].equipoLocal+"</td>";
            salida+= "<td>"+data[key].golesLocal + " - " + data[key].golesVisitante + "</td>";
            salida += "<td>" + data[key].equipoVisitante + "</td>";
            salida += "</tr>";
        }
    }
    salida +="</tbody>";
    salida+="</table>";


    divSalida.innerHTML=salida;
}

extraerDatos();