document.getElementById('contenedor').addEventListener('click', moverAlumno);
document.getElementById('btnCrearTablas').addEventListener('click', crearTablas);
document.getElementById('btnBorrarTablas').addEventListener('click', borrarTablas);


function borrarTablas(){
   document.getElementById('tablas').innerHTML="";
}

function crearTablas(){

    let div= document.getElementById('tablas');

    let ul1 = document.getElementById('aprobados').children;
    let tabla1 = document.createElement('table');
    
    for(let elem of ul1){
        let fila = document.createElement('tr');
        let columna = document.createElement('td');
        columna.append(elem.textContent);
        fila.append(columna);
        tabla1.append(fila);

    }


    let ul2 = document.getElementById('recuperacion').children;
    let tabla2 = document.createElement('table');
    
    for(let elem of ul2){
        let fila = document.createElement('tr');
        let columna = document.createElement('td');
        columna.append(elem.textContent);
        fila.append(columna);
        tabla2.append(fila);

    }


    let ul3 = document.getElementById('repetir').children;
    let tabla3 = document.createElement('table');
    
    for(let elem of ul3){
        let fila = document.createElement('tr');
        let columna = document.createElement('td');
        columna.append(elem.textContent);
        fila.append(columna);
        tabla3.append(fila);

    }




    div.append(tabla1);
    div.append(tabla2);
    div.append(tabla3);



}


function moverAlumno(event){

    if(event.target.tagName == 'LI' && event.target.parentElement.previousSibling.previousSibling.tagName == 'SPAN'){
        
        let select = document.getElementById('controles').children;
        
        let valorSelect = '';

        for(let elem of select){
            if(elem.checked){
                valorSelect = elem.value;
            }
        }

        let combo = document.getElementById('combo').value;
        
        if(valorSelect == 'aprob'){
            if(combo == 'primero'){
                document.getElementById('aprobados').prepend(event.target);
            }else{
                document.getElementById('aprobados').append(event.target);
            }
        }else if(valorSelect == 'recup'){
            if(combo =='primero'){
                document.getElementById('recuperacion').prepend(event.target);
            }else{
                document.getElementById('recuperacion').append(event.target);
            }
        }else{
            if(combo =='primero'){
                document.getElementById('repetir').prepend(event.target);
            }else{
                document.getElementById('repetir').append(event.target);
            }
        }
    
    }

}


