/**
 * CLASES Y OBJETOS
 * class -> Conjunto lógico de un elemento del sistema
 */
//No existen modificadores de acceso (private, protected, public)
//No podemos crear clases abstractas
//No podemos crear interfaces
//construtor  => Class { Class(){} }

/*
   Figura
   - Rectangulo
     - Cuadrado
   - Circulo
   - Triangulo
*/

function validarTipoDeDato( value, type ){
    if( typeof value === type )
        return true
    else
        throw new Error( `El tipo de dato no es válido, el valor ${value} no es un ${type}` )
}

//PADRE
class Figura { //Abstracta
    static numFiguras = 0
    constructor(){
        Figura.actualizarNumeroDeFiguras()
    }

    static actualizarNumeroDeFiguras(){
        Figura.numFiguras ++
    }

    calcularArea(){
        console.log( "El método calcular área de figura no esta implementado" )
    }

    calcularPerimetro(){
        console.log( "El método calcular perimetro de figura no esta implementado" )
    }
}

//HIJAS
class Rectangulo extends Figura{
    constructor( largo, ancho ){
        super()
        if( validarTipoDeDato( largo, 'number' ) && validarTipoDeDato( ancho, 'number' ) ){
            this.largo = largo
            this.ancho = ancho
        }
    }

    calcularArea(){
        //A = b * h
        console.log( "El área del cuadrilatero es :", this.largo * this.ancho)
    }
    
    calcularPerimetro(){
        //P = 2b + 2h
        console.log( "El perimetro del cuadrilatero es :", this.largo * 2 + this.ancho * 2 )
    }
}

class Cuadrado extends Rectangulo {
    constructor( lado ){
        super( lado, lado )
    }
}

class Circulo extends Figura {
    constructor( radio ){
        super()
        if( validarTipoDeDato( radio, 'number' ) ){
            this.radio = radio
        }
    }

    calcularArea(){
        //A = r^2 * PI
        console.log( "El área del circulo es :", Math.PI * Math.pow( this.radio, 2 ) )
    }

    calcularPerimetro(){
        //P = PI * d = Pi * 2r
        console.log( "El perimetro del circulo es :", Math.PI * 2 * this.radio )
    }
}

class TrianculoEquilatero extends Figura {
    constructor( lado ){
        super()
        if( validarTipoDeDato( lado, 'number' ) ){
            this.lado = lado   
        }
    }

    obtenerAltura(){
        //b = raiz( c^2 - a^2 )
        let ladoMedio = this.lado / 2
        let h = Math.sqrt( this.lado**2 - ladoMedio**2 )
        return h
    }

    calcularArea(){
        //A = b * h
        console.log( "El área del triángulo es :", this.lado * this.obtenerAltura() )
    }

    calcularPerimetro(){
        //P = 3l
        console.log( "El perímetro del triángulo es :", this.lado * 3 )
    }
}

//INSTANCIAS
var rec1 = new Rectangulo( 10, 8 )
rec1.calcularArea()
rec1.calcularPerimetro()

var squ1 = new Cuadrado( 6 )
squ1.calcularArea()
squ1.calcularPerimetro()

var cir1 = new Circulo( 4 )
cir1.calcularArea()
cir1.calcularPerimetro()

var tri1 = new TrianculoEquilatero( 3 )
console.log( "La altura del triangulo es : ",tri1.obtenerAltura() )
tri1.calcularArea()
tri1.calcularPerimetro()

console.log( Figura.numFiguras )

//Typescript
/**
 * abtractas e interfaces
 * niveles de acceso
 * readonly
 */