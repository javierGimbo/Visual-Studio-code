document.getElementById('cuadrado').addEventListener('mouseover', entradaRaton);
document.getElementById('cuadrado').addEventListener('mouseleave',eliminarEfecto);
document.getElementById('txtEntrada').addEventListener('keypress',teclaPulsada);


function entradaRaton(event){

    document.getElementById('cuadrado').classList.add('amarillo');
    document.getElementById('salida').innerHTML = "";
    document.getElementById('salida').innerHTML += event;
    document.getElementById('salida').innerHTML += event.target;
    document.getElementById('salida').innerHTML += event.x;
    document.getElementById('salida').innerHTML += event.y;
    
}

function eliminarEfecto(){
    document.getElementById('cuadrado').classList.remove('amarillo');
    document.getElementById('salida').innerHTML = ""
    
}

function teclaPulsada(event){
    document.getElementById('salida').innerHTML += event.key; 

}
