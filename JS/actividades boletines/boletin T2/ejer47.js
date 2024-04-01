function eventoHora() {
    const hora1 = Number(formulario.hora1.value)
    const minuto1 = Number(formulario.minuto1.value)
    const hora2 = Number(formulario.hora2.value)
    const minuto2 = Number(formulario.minuto2.value)
    
    let totalDiferenciaMinutos = hora1 * 60 + minuto1 - (hora2 * 60 + minuto2);
    let salida = "";
    let difMinutos, difHoras;
    if (totalDiferenciaMinutos < 0) {
      salida = "la hora 1 es antes a la hora 2. La diferencia es ";
      totalDiferenciaMinutos = totalDiferenciaMinutos ;
    } else if (totalDiferenciaMinutos > 0) {
      salida = "La hora 1 es despues a la hora 2. La diferencia es ";
    }
    if (totalDiferenciaMinutos == 0) {
      salida = "Son la misma hora";
    } else {
      difHoras = Math.floor(totalDiferenciaMinutos / 60); 
      difMinutos = totalDiferenciaMinutos % 60;
      salida += String(difHoras) + " horas y " + String(difMinutos) + " minutos";
    }
    document.getElementById("salida").innerHTML = salida;
}