let numero = parseInt(prompt("Dime un numero: "))

if(numero <=999 && numero>99)
    alert("Tu numero tiene 3 cifras")
else if(numero<100 && numero >9)
    alert("Tu numero tiene 2 cifras")
else if (numero <=9)
    alert("Tu numero tiene 1 cifra")
else
    alert("Numero no valido")