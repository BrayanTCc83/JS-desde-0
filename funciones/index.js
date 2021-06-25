/**
 * FUNCIONES
 * 
 * console.log( "Bienvenido" )
 * 
 * function nombre(){
 *  //Codigo
 * }
 * 
 * const nombre = () => {
 *  //Codigo
 * }
 */
// String, booleans, arrays, objects, numbers, class
function bienvenida( usuario ){
    if( typeof usuario === 'string' )
        console.log( `Bienvenido usuario : ${ usuario }` )
    else
        console.log( "El dato que estas enviando no es válido" )
}
//Return -> regresar un valor
//Los valores retornados, pueden ser string, number, array, object, boolean, class
function numeroAleatorio( raiz ){
    return Math.random() * 100 + raiz
}

var persona = {
    nombre : "Luis",
    edad : 17,
    caminar : () => {
        console.log( "Estoy caminando" )
    }
}

//Funcion de busqueda
function buscarCoincidencia( array, coincidence, callback ){
    if( Array.isArray( array ) && typeof coincidence === 'string' ){
        let resultado = array.filter( ( value ) => {
            if( typeof value === 'string' ){
                return value.toLowerCase().includes( coincidence.toLowerCase() )
            }
            else
                console.log( "Este arreglo no tiene strings" )
                return null
        } )
        callback ? callback( resultado ) : console.log( resultado )
    }
    else
        console.log( "No has mandado un arreglo, o el segundo valor no es un string" )
}

let palabras = [
    "Manzana","Piña","Frambuesa",
    "Platano","Melón","Fresa",
    "Uva","Guayaba","Guanabana",
    "Sandia","Pera","Mora azul"
]
buscarCoincidencia( palabras, "a", ( arreglo ) => {
    arreglo.forEach( ( palabra ) =>{
        console.log( "Palabra", palabra, "Numero de letras", palabra.length )
    } )
} )