boton.addEventListener("click", crearTabla);


function crearTabla(){

    tablero.innerHTML="";    

    let par = false;
    let impar = true;

    const arrayLetras = ['A','B','C','D','E','F','G','H']; 

    let tablaNueva = document.createElement('table');
    let contador = 8;

                for(let i=0; i<8; i++){
                    let fila = document.createElement('tr');
                    
                    if(impar){

                        for(let j=0; j<8; j++){

                            let celda = document.createElement('td');
                            let textoCelda = document.createTextNode(arrayLetras[j]+contador);
                            celda.appendChild(textoCelda);
                            fila.appendChild(celda);
                      
                                if(j%2 != 0){
                                    celda.style.backgroundColor='black';
                                    celda.style.color='white';
                                }else{
                                    celda.style.backgroundColor='white';
                                    celda.style.color='black';
                                }

                                impar = false;
                                par = true;

                                tablaNueva.appendChild(fila);
                         }

                         contador--;
        
                    }else{
                       
                        for(let j=0; j<8; j++){

                            let celda = document.createElement('td');
                            let textoCelda = document.createTextNode(arrayLetras[j]+contador);
                            celda.appendChild(textoCelda);
                            fila.appendChild(celda);

                        
                                if(j%2 != 0){
                                    celda.style.backgroundColor='white';
                                    celda.style.color='black';
                                }else{
                                    celda.style.backgroundColor='black';
                                    celda.style.color='white';
                                }

                                    impar = true;
                                    par = false; 
                                   
                                    tablaNueva.appendChild(fila);
                        }
                        contador--;
                    }
                    tablero.appendChild(tablaNueva);
                }


}
