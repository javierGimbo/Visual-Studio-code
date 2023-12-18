
function agregarProvincia(){
    let codigo = frmEntrada.txtCodigo.value.trim();
    let provincia = frmEntrada.txtProvincia.value.trim();

    if(!existeProvincia(codigo)){
        let opcion = '<option value="' + codigo + '" >' + provincia + "</option>";
        frmEntrada.lstProvincias.innerHTML += opcion;
    }


}




function pasarIzquierda(){
    for (let provincia of frmEntrada.lstProvincias.options){
        if(provincia.selected){
            frmEntrada.lstProvincias.append(provincia);
        }
    }
}