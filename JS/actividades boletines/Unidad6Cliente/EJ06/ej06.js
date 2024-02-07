
document.querySelector("table").addEventListener("click", pintarAmarillo);
const array = document.querySelectorAll("td"); 
function pintarAmarillo(event){

    array.forEach(td => {
        td.classList.remove("seleccionada");
    });

    event.target.classList.add("seleccionada");
   // event.target.style.backgroundColor='yellow';


   

}