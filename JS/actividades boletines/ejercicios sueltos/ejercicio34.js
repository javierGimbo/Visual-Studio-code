let suma = 0;
let numero = parseInt(prompt("Ingrese un valor (9999 para finalizar)"));

while (numero !== 9999) {
    suma = suma + numero;
    numero = parseInt(prompt("Ingrese un valor (9999 para finalizar)"));
}

if (suma > 0) {
    alert("El valor acumulado es mayor a cero");
} else if (suma === 0) {
    alert("El valor acumulado es cero");
} else {
    alert("El valor acumulado es menor a cero");
}

alert("Valor acumulado total: " + suma);
