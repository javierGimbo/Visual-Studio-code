let nota1 = parseInt(prompt("Dime la primera nota: "))
let nota2 = parseInt(prompt("Dime la seguda nota: "))
let nota3 = parseInt(prompt("Dime la tercera nota: "))
let notaFinal = (nota1+nota2+nota3)/3
//let resultado = notaFinal>=4 ? alert("Si") : alert("No")

if (notaFinal >= 4)
    alert("Apto")
else
    alert("Suspenso")
