class Electrodomestico{
    _nombre;
    _precio;

    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }

    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
 
    toHTMLRow() {
        let fila = "<tr>";
        fila += "<td>" + this.nombre + "</td>";
        fila += "<td>" + this.precio + "</td></tr>";
        return fila;
    }
}

class Televisor extends Electrodomestico{
    _pulgadas;
    _fullHD;

    constructor(nombre, precio, pulgadas, fullHD){
        super(nombre, precio);
        this._pulgadas=pulgadas;
        this._fullHD=this.fullHD;
    }

    get fullHD() {
        return this._fullHD;
    }
    set fullHD(value) {
        this._fullHD = value;
    }
    get pulgadas() {
        return this._pulgadas;
    }
    set pulgadas(value) {
        this._pulgadas = value;
    }
    
    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + this.pulgadas + "</td>";
        fila += "<td>" + (this.fullHD ? "SI" : "NO") + "</td></tr>";
        return fila;
      }
    
}

class Lavadora extends Electrodomestico{
    _carga;

    constructor(nombre, precio,carga){
        super(nombre, precio);
        this._carga=carga;
    }
    get carga() {
        return this._carga;
    }
    set carga(value) {
        this._carga = value;
    }
    
    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + this.carga + "</td></tr>";
        return fila;
      }
}

class StockProducto{
    _producto;
    _stock;

    constructor(producto, stock){
        this._producto=producto;
        this._stock=stock
    }

    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    get producto() {
        return this._producto;
    }
    set producto(value) {
        this._producto = value;
    }

    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + this.producto + "</td>";
        fila += "<td>" + this.stock  + "</td></tr>";
        return fila;
      }
}

class Almacen{
    _catalogo;
    _stock;

    constructor(catalogo, stock){
        this._catalogo=[];
        this._stock=[];;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    get catalogo() {
        return this._catalogo;
    }
    set catalogo(value) {
        this._catalogo = value;
    }


    altaCatalogo(Electrodomestico){
        let encontrado=
            this.catalogo.filter((elem) => elem.nombre == Electrodomestico.nombre).length ==1;
        if(!encontrado){
            this.catalogo.push(Electrodomestico);
            return true;
        }
        else{
            return false;
        }
    }

    entradaStock(oStock){
        let mensajeSalida= "";
        if(this._catalogo.filter((elem) => elem.nombre == oStock.nombre).length !=0){
            mensajeSalida ="Entrada previa"
        }
        else{
        this.StockProducto.push(oStock);
        mensajeSalida ="Hay entrada en el stock";
        }
        return mensajeSalida;
    }

    salidaStock(oStock){
        let mensajeSalida = "";
        let contador=0;
        let indice=0;
        for(var i=0; i < this.StockProducto.length; i++){
            if(this.stockOderenadores[i].stock=oStock.nombre){
                indice=i;
                contador++;
            }
        }
        if (contador=0){
          mensajeSalida = "No hay ese electrodomestico";
        }
        else{
            mensajeSalida="YEP";
            this.StockProducto.splice(indice,1);
            console.log(this.StockProducto);
            console.log(indice); 
        }
        return mensajeSalida;
    }

    listadoCatalogo(){
        let salida = "<table border='1'><thead><tr><th>TIPO</th<th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Full HD</th><th>Carga</th></thead><tbody>"; 
        for (let catalogo of this.catalogo){
            salida+= catalogo.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida; 
       }

    listadoStock(){
        let salida = "<table border='1'><thead><tr><th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Full HD</th><th>Stock</th><th>STOCK</th><th>Valor</th></thead><tbody>"; 
        for (let stock of this.stockOderenadores){
            if(stock instanceof ordenador){
            salida+= stock.toHTMLRow();
            } 
         }
         salida += "</tbody></table> <p>Listado stock Lavadoras</p>";
            salida += "<table border='1'><thead><tr><th>Nombre</th><th>Precio</th><th>Carga</th><th>Stock</th><th>Valor</th></thead><tbody>"; 
            for (let stock of this.StockProducto){
                if(stock instanceof Electrodomestico){
                    salida+= stock.toHTMLRow();
                }
                
            }
            salida += "</tbody></table>";
            return salida;
    }

    importeTotalstock(){
        let contador =0;
        for (let producto of this.catalogo){
            contador+= producto.stock
        }
        return contador;
    }
    siguieteNombrePro(){
        if( this.catalogo.length==0){
            return 1;
        } else{
            return this.catalogo[this.catalogo.length -1].nombre +1;
        }
    }
}