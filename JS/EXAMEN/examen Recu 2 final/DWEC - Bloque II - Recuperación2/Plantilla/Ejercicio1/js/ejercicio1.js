const checkBox = document.querySelector('input');
const divsImagen = document.querySelectorAll('.libro');

if (checkBox.checked) {
    mostrarInfo(divsImagen);
} else {
    quitarClase(divsImagen);
}

checkBox.addEventListener('change', function() {
    if (this.checked) {
        mostrarInfo(divsImagen);
    } else {
        quitarClase(divsImagen);
    }
});

function mostrarInfo(imagenes) {
    for (let i = 0; i < imagenes.length; i++) {
        let imagen = imagenes[i];
        let imgElement = imagen.querySelector('img');
        
        const divNuevo = document.createElement('div');
        divNuevo.classList.add('tooltip');
        divNuevo.textContent = imgElement.getAttribute('data-tip');
        divNuevo.style.visibility = 'hidden';
        imagen.appendChild(divNuevo);

        imagen.addEventListener('mouseover', function() {
            divNuevo.style.visibility = 'visible';
        });
        imagen.addEventListener('mouseout', function() {
            divNuevo.style.visibility = 'hidden';
        });
    }
}

function quitarClase(imagenes) {
    for (let i = 0; i < imagenes.length; i++) {
        let imagen = imagenes[i];
        let divTooltip = imagen.querySelector('.tooltip');
        if (divTooltip) {
            divTooltip.style.visibility = 'hidden';
        }
        imagen.removeEventListener('mouseover', muestraDatos);
        imagen.removeEventListener('mouseout', ocultaDatos);
    }
}
