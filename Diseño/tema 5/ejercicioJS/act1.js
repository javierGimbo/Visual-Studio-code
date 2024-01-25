var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numero=(prompt("Dime tu numero del dni:"));
let letra=(prompt("Dime tu letra del dni:"));


if (numero < 0 || numero > 99999999){

    alert("Numero no valido");

} else{

    let resto=numero % 23;
    let letraDNI= letras[resto];
    if (letraDNI == letra) {

        alert(numero + letraDNI )
    } else {
        
        alert('A tu casa primo')
    }
}
    
