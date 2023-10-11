function compruebaPrimo() {
    const numero = Number(frmNumero.numero.value);
    document.getElementById("salida").innerHTML = esPrimo(numero)
      ? numero + " es mi primillo xico"
      : numero + " no es mi primo xico, es el grande";
  }
  
  function esPrimo(numero) {
    let limiteMaximo = Math.floor(Math.sqrt(numero));
    let primo = true;
    let i = 2;
    while (primo && i <= limiteMaximo) {
      if (numero % i == 0) {
        primo = false;
      } else {
        i++;
      }
    }
    return primo;
  }