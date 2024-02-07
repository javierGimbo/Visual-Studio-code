
document.querySelector("table").addEventListener("click", pintarAmarillo);

function pintarAmarillo(event){

    let fila = event.target.parentElement;

    let hermano = fila.previousElementSibling;

    if(hermano != null){
        fila.after(hermano);
    }
    

   // event.target.style.backgroundColor='yellow';
}
