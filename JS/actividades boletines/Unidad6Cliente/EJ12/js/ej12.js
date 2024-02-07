document.getElementById("cont1").addEventListener("click",bordearElemento);
document.getElementById("cont2").addEventListener("click",bordearElemento);
document.getElementById("cont3").addEventListener("click",bordearElemento);

document.getElementById("btnAplicar").addEventListener("click", moverElementos);
document.getElementById("btnBorrar").addEventListener("click", borrarElementos);

let arrayOpciones=[];



function bordearElemento(event){

        if(event.target.tagName=='IMG'){
            if(event.target.classList.contains('seleccionado')){
                event.target.classList.remove('seleccionado');
                arrayOpciones.pop(event.target);
            }else{
                event.target.classList.add('seleccionado');
                arrayOpciones.push(event.target);
            }
        }

        
}


function moverElementos(){

    radio = document.getElementsByName("sitio");
    let sitio;
    for(const elemento of radio){
        if(elemento.checked)
            sitio = elemento.value;
    }

    check = document.getElementsByName("lugar");
    let lugar;
    for(const elemento of check){
        if(elemento.checked)
            lugar = elemento.value;
    }

    check = document.getElementsByName("clonar");
    let clonar;
    for(const elemento of check){
        if(elemento.checked)
            clonar = elemento.value;
    }

    if(sitio == 'cont1'){
        if(lugar == 'first'){
            
            if(clonar != 'on'){
               
                for(elementos of arrayOpciones){
                    document.getElementById("cont1").children[0].after(elementos);  
                }

            }else{

                for(elementos of arrayOpciones){

                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont1").children[0].after(clone);
                    clone.classList.remove('seleccionado');

                }
            }
        }else{

            if(clonar != 'on'){
            
                for(elementos of arrayOpciones){
                    document.getElementById("cont1").append(elementos);
                }
            
            }else{
            
                for(elementos of arrayOpciones){
                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont1").append(clone);
                    clone.classList.remove('seleccionado');
                }
                
            
            }


           
        
        }
    }else if(sitio == 'cont2'){
        if(lugar == 'first'){
            if(clonar != 'on'){
                for(elementos of arrayOpciones){
                        document.getElementById("cont2").children[0].after(elementos);    
                }
            }else{

                for(elementos of arrayOpciones){

                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont2").children[0].after(clone);
                    clone.classList.remove('seleccionado');

                }
                
            }
        }else{


            if(clonar != 'on'){
            
                for(elementos of arrayOpciones){
                    document.getElementById("cont2").append(elementos);
                }
            
            }else{
            
                for(elementos of arrayOpciones){
                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont2").append(clone);
                    clone.classList.remove('seleccionado');
                }
                
            }
        }
    
    }else{
    
        if(lugar == 'first'){
            if(clonar != 'on'){
                for(elementos of arrayOpciones){
                    document.getElementById("cont3").children[0].after(elementos);  
                }
            }else{
                
                for(elementos of arrayOpciones){

                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont3").children[0].after(clone);
                    clone.classList.remove('seleccionado');

                }
            }
        }else{
            
            if(clonar != 'on'){
            
                for(elementos of arrayOpciones){
                    document.getElementById("cont3").append(elementos);
                }
            
            }else{
            
                for(elementos of arrayOpciones){
                    let clone = elementos.cloneNode(true);
                    document.getElementById("cont3").append(clone);
                    clone.classList.remove('seleccionado');
                }
                
            
            }


        
        }
     
    }

    for(elementos of arrayOpciones){
        elementos.classList.remove('seleccionado');
        
    }

    arrayOpciones=[];


}


function borrarElementos(){

    for (const elemento of arrayOpciones) {
        elemento.remove();
    }
    arrayOpciones=[];

}




