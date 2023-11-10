class Producto{
    _nombre;
    _precio;
    _unidad;
 
    constructor(nombre, unidad, precio){
        this.nombre=nombre;
        this.precio=precio;
        this.unidad=unidad;
    }


    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }

    get unidad() {
        return this._unidad;
    }
    set unidad(value) {
        this._unidad = value;
    }

     valorEnStocke() {

        return(this._precio*this._unidad);
            
    }

    incrementarStock(num){
        this._unidad+=num;
    }
    

    
    disminuirStock(num){
        this._unidad-=num;
    }

}

const pro1 = new Producto("Agua", 50, 2);    //creo el producto


console.log(pro1);                      //-->
console.log(pro1.valorEnStocke());
pro1.incrementarStock(15);
console.log(pro1._unidad);              //lo muesto por la consola
pro1.disminuirStock(60);
console.log(pro1._unidad);              // <--