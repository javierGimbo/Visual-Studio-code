class Ordenador{
    _marca;
    _modelo;
    _precio;

    constructor(marca, modelo, precio){
        this._marca=marca;
        this._modelo=modelo;
        this._precio=precio;
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
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }

    toHTMLRow() {
        let fila = "<tr>";
        let atributos = Object.values(this);
        let entradas = Object.entries(this);
        console.log(this);
        console.log(atributos);
        console.log(entradas);
    
        for (let atributo in atributos) {
          console.log(atributo);
          fila += "<td>" + atributo + "</td>";
        }
        return fila + "</tr>";
      }

}

class Portatil extends Ordenador{
    _discoSSD;
    _pulgadas;
  

    constructor(marca, modelo, precio, discoSSD, pulgadas){
        super(marca, modelo, precio)
        this._discoSSD=discoSSD;
        this._pulgadas=pulgadas;
    }

    get discoSSD() {
        return this._discoSSD;
    }
    set discoSSD(value) {
        this._discoSSD = value;
    }
    get pulgadas() {
        return this._pulgadas;
    }
    set pulgadas(value) {
        this._pulgadas = value;
    }

    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.replace("</tr>", ""); //Quita el cierre de la etiqueta del padre
        fila += "<td>" + this.discoSSD + "</td>"
        fila += "<td>" + this.pulgadas + "</td></tr>";
        return fila;
      }
}

class Sobremesa extends Ordenador{
    _tarjetaGrafica;

    constructor(marca, modelo, precio, tarjetaGrafica){
        super(marca, modelo, precio)
        this._tarjetaGrafica=tarjetaGrafica;
    }

    toHTMLRow() {
        let fila = super.toHTMLRow();
        fila = fila.slice(0, fila.length - 5); // Para quitar el </tr>
        fila += "<td>" + this.tarjetaGrafica + "</td></tr>";
        return fila;
      }
}

class StockOrdenadores{
    _ordenador;
    _stock;
   
    constructor(Ordenador, stock){
        this.Ordenador=Ordenador;
        this._stock=stock;
    }

    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
}

class Tienda{
    _catalogo;
   
    _stockOderenadores;
  

    constructor(catalogo, stockOrdenadores){
        this.catalogo=[];
        this.stockOrdenadores=[];
    }

    get catalogo() {
        return this._catalogo;
    }
    set catalogo(Ordenador) {
        this._catalogo = Ordenador;
    }
    get stockOderenadores() {
        return this._stockOderenadores;
    }
    set stockOderenadores(value) {
        this._stockOderenadores = value;
    }


    altaCatalogo(ordenador){
        let mensajeSalida = "";
        if (this.catalogo.filter((elem) => elem.marca == ordenador.marca).length != 0) {
          mensajeSalida = "Ordenador registrado previamente";
        } else {
          this.clientes.push(cliente);
          mensajeSalida = "Alta catalogo OK";
        }
        return mensajeSalida;

    }

    entradaStock(oStock){
        let mensajeSalida = "";
        this.stockOderenadores.push(oStock);
        mensajeSalida = "Hay entradas en el stock";

    }

    salidastock(oStock){
        let mensajeSalida = "";
        let contador=0;
        let indice=0;
        for(var i=0; i < this.stockOderenadores.length; i++){
            if(this.stockOderenadores[i].stock=oreserva.stock){
                indice=i;
                contador++;
            }
        }
        if (contador=0){
          mensajeSalida = "No hay ese material";
        }
        else{
            mensajeSalida="YEP";
            this.stockOderenadores.splice(indice,1);
            console.log(this.stockOderenadores);
            console.log(indice); 
        }
        return mensajeSalida;

    }

    listadoCatalogo(){
        let salida = "<table border='1'><thead><tr><th>TIPO</th<th>MARCA</th><th>MODELO</th><th>PRECIO</th><th>PUKGADAS</th><th>DISCO SSD</th<th>MODELO</th<th>TARKETA GRAFICA</th</thead><tbody>"; 
        for (let catalogo of this.catalogo){
             salida+= catalogo.toHTMLRow(); 
         }
         salida += "</tbody></table>";
         return salida;


    }

    listadoStock(){
        let salida = "<table border='1'><thead><tr><th>MARCA</th><th>MODELO</th><th>PRECIO</th><th>PULGADAS</th><th>DISCO SSD</th><th>STOCK</th><th>VALOR</th></thead><tbody>"; 
	 for (let stock of this.stockOderenadores){
		 if(stock instanceof ordenador){
		 salida+= stock.toHTMLRow();
		 } 
	  }
	  salida += "</tbody></table> <p>Listado stock Sobremesa</p>";
	   salida += "<table border='1'><thead><tr><th>MARCA</th><th>MODEL0</th><th>PRECIO</th><th>TARJETA GRAFICA</th><th>STOCK</th><th>VALOR</th></thead><tbody>"; 
	 for (let stock of this.stockOderenadores){
		 if(stock instanceof ordenador){
		 salida+= stock.toHTMLRow();
		 } 
	  }
	  salida += "</tbody></table>";
	  return salida;

    }

    numPortatilesStock(){

    }

    numSobremesaStock(){

    }

    importeTotalStock(){

    }
}