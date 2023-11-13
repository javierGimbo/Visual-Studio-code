class Figura{
    #color;

    constructor(color){
        this.#color=color;

    }

    get color() {
        return this.#color;
    }
    set color(value) {
        this.#color = value;
    }

//metodo imprimir
    imprimir(){
        return "Soy una figura de color " + this.#color;
    }

}


class Rectangulo extends Figura{
    #base;
    #altura;
  
    constructor(color, base, altura){
        super(color);
        this.#base=base;
        this.#altura=altura;
    }


    get base() {
        return this.#base;
    }
    set base(value) {
        this.#base = value;
    }


    get altura() {
        return this.#altura;
    }
    set altura(value) {
        this.#altura = value;
    }
    

    //metodo calcularArea e imprimir

    calcularArea(){
        return this.#base * this.#altura;

    }

    imprimir(){
        return "Soy una figura de color " + this.color + " y de area tengo " +this.calcularArea();
    }

}

class Ciruculo extends Figura{
    #radio;
    constructor(color, radio){
        super(color);
        this.#radio=radio;
      
    }

    get radio() {
        return this.#radio;
    }
    set radio(value) {
        this.#radio = value;
    }


    //metodo calcularArea e imprimir

    calcularArea(){
        return 3.14 * (this.#radio *this.#radio);

    }
    imprimir(){
        return "Soy una figura de color " + this.color + " y de area tengo " +this.calcularArea();
    }

}



const rectangulo1 = new Rectangulo("rojo como el fuego", 10, 5);
const circulo1 = new Ciruculo("blanco roto", 6);

console.log(rectangulo1);  
console.log(rectangulo1.imprimir());
console.log(circulo1);
console.log(circulo1.imprimir());

