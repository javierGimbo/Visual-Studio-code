document.getElementById('boton').addEventListener('click', pintarTabla);
let contador = 1;

function pintarTabla(){
    let tBody = document.getElementById('tbody');
    let tarea = document.getElementsByName('tarea')[0].value;
    let prioridad = document.getElementsByName('prioridad')[0].value;

    let fila = document.createElement('tr');
    let order=0;
    
    switch (prioridad){
        case 'Muy alta':
            order = 1;
            break;
        case 'Alta':
            order = 2;
            break;
        case 'Media':
            order = 3;
            break;
        case 'Baja':
            order = 4;
            break;
        case 'Muy baja':
            order = 5;
            break;
    }

    fila.setAttribute('id', order);
    

    let columna1 = document.createElement("td");
    let columna2 = document.createElement("td");
    let columna3 = document.createElement("td");
    let boton = document.createElement('input');
    boton.setAttribute('value','BORRAR');
    boton.setAttribute('type','button');

    columna1.append(contador);
    columna2.append(tarea);
    columna3.append(prioridad);
    boton.addEventListener('click', borrar);
  
    contador++;

    fila.append(columna1);
    fila.append(columna2);
    fila.append(columna3);
    fila.append(boton);

    if(tBody.children.length == 0){
        tBody.append(fila);

    }else{
        
        for(let tr of tBody.children){

            if(tr.id == fila.id){
                tr.before(fila);
            }
            
            if(tr.id < fila.id){
                tr.after(fila);
            }
        }

    }

    document.querySelector('table').append(tBody);

}

function borrar(event){
    event.target.parentElement.remove();    
}