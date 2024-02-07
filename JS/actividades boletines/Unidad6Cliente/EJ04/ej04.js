boton.addEventListener("click", crearTabla);


function crearTabla(){

    tabla.innerHTML="";    

    let filas = formulario.filas.value;
    let columnas = formulario.columnas.value;

    let tablaNueva = document.createElement('table');
    

    let contador = 1;

    for(let i=0; i<filas; i++){
        let fila = document.createElement('tr');

    
        for(let j=0; j<columnas; j++){
            let celda = document.createElement('td');
            let textoCelda = document.createTextNode(contador);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            contador++;
        }

        tablaNueva.appendChild(fila);

    }

    tabla.appendChild(tablaNueva);
    tablaNueva.style.border='2';
   

}
