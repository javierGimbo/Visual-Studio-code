const url = "https://examen1-ej1-default-rtdb.europe-west1.firebasedatabase.app/libros/"; const ext=".json";


class Libro{
    #autor;
    #editorial;
    #paginas;
    #titulo;
    constructor(autor, editorial, paginas, titulo){
        this.autor = autor;
        this.editorial=editorial;
        this.paginas=paginas;
        this.titulo=titulo;
    }
}

function nuevoLibro(autor, editorial, paginas, titulo) { //* String, String, Number, String
    const libroNuevo = new Libro(autor, editorial, paginas, titulo)
    fetch(url + ext, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(libroNuevo)
    })
    .then(res=>{
        if(!res.ok){
            throw new Error("Error al agregar el libro")
        }
        return res.json();
    })
    .then(data=>{
        console.log("Libro agragado exitosamente: ", data);
    })
    .catch(error=>{
        console.error("Error al agregar el libro: ", error);
    });
};

function borrarLibro(titulo){//* String titulo libro
    let claveLibro="";
    fetch(url + ext)
    .then(res =>{
        if (!res.ok) {
            throw new Error('Error en la solicitud')
        }
        return res.json();
    })
    .then(data=>{
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (titulo == data[key].titulo) {
                    claveLibro=key;
                    console.log(claveLibro);
                }else{
                    console.error("No se encontró el libro. Revisa el titulo")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
    setTimeout(()=>{
        if(claveLibro){
            fetch(url + claveLibro + ext, {
                method:'DELETE'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al borrar el libro');
                }
                return response.json();
            })
            .then(data => {
                console.log('Producto borrado con éxito:', data);
            })
            .catch(error => {
                console.error('Error al borrar el libro:', error);
            });
        };
    },2000);    
};

function editarLibro(tituloLibro, nuevoTitulo) {
    fetch(url + ext)
    .then(res =>{
        if (!res.ok) {
            throw new Error('Error en la solicitud')
        }
        return res.json();
    })
    .then(data=>{
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (tituloLibro == data[key].titulo) {
                    nuevoLibro(data[key].autor,data[key].editorial,Number(data[key].paginas), nuevoTitulo);
                    alert("Tarda 2 segundos aprox en actualizarse")
                    setTimeout(()=>{
                        borrarLibro(tituloLibro)},2000);
                }else{
                    console.error("No se encontró el libro. Revisa el titulo")
                };
            }
        }
    })
    .catch(error=>{
        console.error('Error:', error);
    });
}

frmNuevoLibro.addEventListener('submit', ()=>{
    event.preventDefault();
    nuevoLibro(frmNuevoLibro[0].value.trim(),frmNuevoLibro[1].value.trim(), Number(frmNuevoLibro[2].value), frmNuevoLibro[3].value.trim());
})
frmBorrarLibro.addEventListener('submit', ()=>{
    event.preventDefault();
    borrarLibro(frmBorrarLibro[0].value);
});
frmEditarLibro.addEventListener('submit', ()=>{
    event.preventDefault();
    editarLibro(frmEditarLibro[0].value, frmEditarLibro[1].value);
});