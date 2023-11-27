class Clente{
    _dni;
    _nombre;
    _apellidos;
    _usuario;

    constructor(dni, nombre, apellidos, uauario){
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._usuario = usuario;
    }

    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }

    get usuario() {
        return this._usuario;
    }
    set usuario(value) {
        this._usuario = value;
    }
}

class Vehiculo{
    _matricula;
    _marca;
    _modelo;

    constructor(matricula, marca, modelo){
        this._matricula=matricula;
        this._marca=marca;
        this._modelo=marca;
    }

    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        this._matricula = value;
    }

    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }

    get modelo() {
        return this._modelo;
    }
    set modelo(value) {
        this._modelo = value;
    }

}


class Moto extends Vehiculo{
    _ciclomotor;
  
    constructor(matricula, marca, modelo, ciclomotor){
        super(matricula, marca, modelo);
        this._ciclomotor=ciclomotor;
    }

    get ciclomotor() {
        return this._ciclomotor;
    }
    set ciclomotor(value) {
        this._ciclomotor = value;
    }
    
    
}

class Coche extends Vehiculo{
    _combustible;
    _plazas;
  

    constructor(matricula, marca, modelo, combustible, plazas){
        super(matricula, marca, modelo);
        this._combustible=combustible;
        this._plazas=plazas;
    }

    get combustible() {
        return this._combustible;
    }
    set combustible(value) {
        this._combustible = value;
    }

    get plazas() {
        return this._plazas;
    }
    set plazas(value) {
        this._plazas = value;
    }

}

class Alquiler{
    _idAlquiler;
    _clente;
    _vehiculo
    _fechaInicio;
    _fechaFin;
  

    constructor(idAlquiler, Clente, Vehiculo, fechaInicio, fechaFin){
        this._idAlquiler=idAlquiler;
        this.Clente= Clente;
        this.Vehiculo=[];
        this._fechaInicio=fechaInicio;
        this._fechaFin=fechaFin
    }

    get idAlquiler() {
        return this._idAlquiler;
    }
    set idAlquiler(value) {
        this._idAlquiler = value;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(value) {
        this._fechaFin = value;
    }
}


class Agencia{
    _clientes;
    _alquileres;
    _vehiculos;

    constructor(clientes, alquileres, vehiculos){
        this._clientes= [];
        this._alquileres=[];
        this._vehiculos=[];
    }

    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }

    get alquileres() {
        return this._alquileres;
    }
    set alquileres(value) {
        this._alquileres = value;
    }
    get vehiculos() {
        return this._vehiculos;
    }
    set vehiculos(value) {
        this._vehiculos = value;
    }


    altaCliente(clente){
        let encontrado = this._clientes.filter((elem) => elem.dni == clente.dni).length == 1;
        if (!encontrado) {
            this._clientes.push(clente);
            return true;
        } else {
            return false;
        }
    }

    altaVehiculo(){

    }

    altaAlquiler(){

    }

    bajaAlquiler(){

    }

    listadoClientes(){

    }

    listadoVehiculo(){

    }

    listadoAlquileres(fechaInicio, fechaFin){

    }

    listadoAlquileresClientes(dni){

    }

    listadoCochesElectricos(){
        
    }
}
