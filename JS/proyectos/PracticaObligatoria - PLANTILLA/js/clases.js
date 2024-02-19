class Producto{

    constructor (idProducto, nombreProducto, precioUnidad, idCategoria){
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCategoria = idCategoria;
    }

    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }

    get nombreProducto() {
        return this._nombreProducto;
    }
    set nombreProducto(value) {
        this._nombreProducto = value;
    }

    get precioUnidad() {
        return this._precioUnidad;
    }
    set precioUnidad(value) {
        this._precioUnidad = value;
    }

    get idCategoria() {
        return this._idCategoria;
    }
    set idCategoria(value) {
        this._idCategoria = value;
    }
}


class Catalogo{

    constructor() {
      this.productos = [];
    }
  
    addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
      const nuevoProducto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
      this.productos.push(nuevoProducto);
    }

    obtenerProductos(){
        return this.productos;      //Me traigo todos mis productos de vuelta
    }
}


class LineaPedido{

    constructor(unidades, idProducto){
        this._unidades = unidades;
        this._idProducto = idProducto;
    }

    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        this._unidades = value;
    }

    get idProducto() {
        return this._idProducto;
    }
    set idProducto(value) {
        this._idProducto = value;
    }
}


class Cliente{

    constructor(nombre, cuentaAbierta){
        this._nombre = nombre;
        this._cuentaAbierta = cuentaAbierta;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get cuentaAbierta() {
        return this._cuentaAbierta;
    }
    set cuentaAbierta(value) {
        this._cuentaAbierta = value;
    }
}


class Gestor{

    constructor(comercialActual, clienteActual){
        this._categorias = [];
        this._comerciales = [];
        this._clientes = [[]];
        this._comercialActual = comercialActual;
        this._clienteActual = clienteActual;
        this._pedidos = [];
    }

    get comercialActual() {
        return this._comercialActual;
    }
    set comercialActual(value) {
        this._comercialActual = value;
    }

    get clienteActual() {
        return this._clienteActual;
    }
    set clienteActual(value) {
        this._clienteActual = value;
    }
}