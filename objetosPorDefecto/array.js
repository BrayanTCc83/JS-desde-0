/*
    Indice : Posicion en el arreglo, inicia desde 0 hasta n
    [ "a" ,"b", "c", "d" ]
       0    1    2    3

    0 -> a
    1 -> b
    2 -> c
    3 -> d

*/
//Definicion - Declaracion
var arregloVacio = new Array( 4 );
var arreglo2 = new Array( "a", "b", "c", "d" );
var arreglo = [ "b", "c", "a", "d", "z", "x","e", "f" ];
var numeros = [10, -12, -324, 5, 5, 67, 12, 23, -12, 20, -4, -5, 6]
var palabras = [ "Luis", "Hernesto", "Paulina", "Brayan","Juan","Pepe", "Esteban","Jorge","Pedro","Maria", "Sinai", "Juana", "Paula", "Sol" ]
// Numeros, boolean, string, objetos y otros arreglos
var arregloBidimensional = [ [ "a1", "a2" ] , [ "b1", "b2" ] ];

//Propiedad
console.log( arreglo.length );

//Iterar
for( let index = 0; index < arreglo.length ; index++ ){
    console.log("Arreglo en la posición ",index,arreglo[ index ]);
}
for (const key in arreglo) {
    console.log( "Posición", key, arreglo[ key ] );
}
for (const value of arreglo) {
    console.log( "Valor del arreglo", value );
}
arreglo.forEach( ( value, index ) => {
    //Cuando queremos realizar una acción dentro del callback
    console.log( "Arreglo", index, value );
} );
arreglo.map( ( value )=>{
    return value;
} );

//Metodos
arregloVacio.fill( "letra" );
console.log( arregloVacio )

arreglo.push( "g" );
console.log( arreglo );

arreglo.unshift("a")
console.log( arreglo )

console.log( "Elemento eliminado", arreglo.pop() );
console.log( arreglo )

console.log( "Elemento eliminado", arreglo.shift() );
console.log( arreglo )

console.log( "Elementos eliminados", arreglo.splice( 0, 2 ) );
console.log( arreglo )

var nuevoArreglo1 = arreglo.slice();
console.log( arreglo, nuevoArreglo1 );

console.log( nuevoArreglo1.copyWithin( 0, 3 ) );
console.log( nuevoArreglo1.copyWithin( 2, 3, 4 ) );

var letras = ["g",'h',"i","j"];

var arreglo = arreglo.concat( letras );

console.log( arreglo.toString() );
console.log( arreglo.join( "-->" ) );

var keys = arreglo.keys(); //Indices
var values = arreglo.values() //Valores del arreglo
var entries = arreglo.entries() //Un arreglo de dos posiciones, donde 1 es el indice y el segundo el valor

let index = 0;
while( index < arreglo.length ){
    console.log( "Un elemento del arreglo", values.next().value )
    index = keys.next().value;
}

console.log( entries.next().value )

console.log( arreglo )
console.log( arreglo.reverse() )
console.log( arreglo.find( ( value ) => value === "z" ) )
console.log( arreglo.findIndex( 
    ( value ) => value === "z" ) === -1 
        ? "El elemento no existe": "Encontramos una coincidencia"
)
console.log( arreglo.sort( ( a, b ) =>{
    return a.charCodeAt() - b.charCodeAt()
}) )
console.log( numeros.reduce( ( acum, value, index ) => 
    acum -= value
, 10 ) )
console.log( numeros.reduceRight( ( acum, value, index ) => 
    acum -= value
, 10) )

console.log( numeros.filter( ( value ) => 
    value % 2 === 0 && value > 0
) )
console.log( palabras.filter( ( value ) => 
    value.toUpperCase().includes( "a".toUpperCase() )
) )

console.log( numeros.some( ( value )=>
    value % 2 === 0
) ? "Hay numeros pares" : "No hay numeros pares" )

console.log( arreglo.every( (value) =>
    /[a-z]/i.test( value ) && value.length === 1 
) ? "Todas son letras" : "Hay valores invalidos" ) 
