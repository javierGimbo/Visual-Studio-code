const url = "https://ejercicio-2-examen3-default-rtdb.europe-west1.firebasedatabase.app/"; const ext = ".json";
const comboCat = formulario[0];
const comboProd = formulario[1];
const divMostrarDatos = document.getElementById('datos');


function extraerApi() {
    return fetch(url + ext)
    .then(res =>{
        if (!res.ok) {
            throw new Error('Error en la solicitud')
        }
        return res.json();
    })
    .catch(error=>{
        console.error('Error:', error);
    });
};

extraerApi()
.then(data=>{
    console.log(data.categorias);
    console.log(data.productos);
    console.log("Llamada AJAX correcta")
    cargarCombos(data.categorias, data.productos);
    for (const key in data.productos) {
        if (Object.hasOwnProperty.call(data.productos, key)) {
            if(data.productos[key].nombreProducto == comboProd[comboProd.selectedIndex].textContent){
                mostrarDatos(data.productos[key].idProducto, data.productos[key].precioUnidad);
            }
        }
    }
})

function cargarCombos(data_categ, data_prod) {
    for (const key in data_categ) {
        if (Object.hasOwnProperty.call(data_categ, key)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data_categ[key];
            comboCat.appendChild(option);
        }
    }
    for(const key in data_prod){
        if (Object.hasOwnProperty.call(data_prod, key)) {
            if(data_prod[key].idCategoria == comboCat.selectedIndex){
                const option = document.createElement('option');
                option.value = key;
                option.textContent = data_prod[key].nombreProducto;
                comboProd.appendChild(option);
            };
        };
    };
}

function categoriaCambiada() {
    comboProd.innerHTML="";
    extraerApi().then(data=>{
        for(const key in data.productos){
            if (Object.hasOwnProperty.call(data.productos, key)) {
                if(data.productos[key].idCategoria == comboCat.selectedIndex){
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = data.productos[key].nombreProducto;
                    comboProd.appendChild(option);
                };
            };
        };
    })
}

function prdouctoCambiado() {
    extraerApi().then(data=>{
        for (const key in data.productos) {
            if (Object.hasOwnProperty.call(data.productos, key)) {
                if(data.productos[key].nombreProducto == comboProd[comboProd.selectedIndex].textContent){
                    mostrarDatos(data.productos[key].idProducto, data.productos[key].precioUnidad);
                }
            }
        }
    });
}

function mostrarDatos(idProducto, precioUnidad) {
    divMostrarDatos.innerHTML="";
    let salida = "<h4> ID Producto </h4>";
    salida += "<p>"+idProducto+"</p>";
    salida += "<h4> Precio Unidad </h4>";
    salida += "<p>"+precioUnidad+"</p>";

    divMostrarDatos.innerHTML=salida;
}

comboCat.addEventListener('change', ()=>{
    categoriaCambiada();
    prdouctoCambiado();
});

comboProd.addEventListener('change', ()=>{
    prdouctoCambiado();
})