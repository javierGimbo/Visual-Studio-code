let mayores =0;
let menores =0;
function procesarFormulario(){
    const n1 = Number(notasAlum.nota1.value);
    const n2 = Number(notasAlum.nota2.value);
    const n3 = Number(notasAlum.nota3.value);
    const n4 = Number(notasAlum.nota4.value);
    const n5 = Number(notasAlum.nota5.value);
    
   procesarNota(n1);
   procesarNota(n2);
   procesarNota(n3);
   procesarNota(n4);
   procesarNota(n5);
   document.getElementById("salida").innerHTML = "Mayores de 7: " + mayores + "<br>" + "Menores de 7: " + menores;

}

function procesarNota(nota){
    return (nota>=7)?mayores++:menores++;
}