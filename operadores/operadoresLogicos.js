/*
    Operadores lógicos
    && and
    || or
    ! not

    XOR

    ? ternario
 */
//AND &&
var a = 10
var b = 17
var c = 12
if( a > b && a > c ){
    console.log("A es el número mayor "+a)
}else if( a < b && b > c ){
    console.log("B es el número mayor "+b)
}else if( c > b && a < c ){
    console.log("C es el número mayor "+c)
}else{
    console.log(`Los tres números son iguales ${a} ${b} ${c}`)
}
// Usuario y contraseña de un formulario esten ingresados
// Usuario y contraseña corresponden

//OR ||
var n1 = 10
var n2 = -5
if( n1 >= 0 || n2 >= 0 ){
    console.log("Alguno de los valores es positivo")
}
if( n1 < 0 || n2 < 0 ){
    console.log("Alguno de los valores es negativo")
}
if( Number.isInteger(n1) || Number.isInteger(n2) ){
    console.log("Alguno de los números es entero")
}
//Publicacion ( tieneTexto, tieneImagen, tieneVideo )

//NOT ! 
var palabra = "hola"
for( let i = 0; i < palabra.length ; i++ ){
    let letra = palabra[i]
    if( ! (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ) ){
        console.log("La letra '"+letra+"' es CONSONANTE")
    }else {
        console.log("La letra '"+letra+"' es VOCAL")
    }
}

//Negar una condición que validada sería muy larga

//TERNARIO ?
let x = 10
let y = 5
let mayor = x >= y ? x : y
/*
if ( x >= y ){
    mayor = x
}else {
    mayor = y
}
*/
console.log("El número mayor es "+mayor)
//Asignaciones cuando una condición puede dar dos valores
//Validaciones simples rápidas

//XOR o OR excluyente
// Ambas son verdaderas o falsas = false
// Una y solo una de las condiciones es verdadera = true
// ( a && !b ) || ( !a && b )
// ( a || b ) && !( a && b )
// a ? !b : b
var m = 8
var n = 1
var conB = n > 0
if ( m === 0 || n === 0 ){
    console.log("El producto es cero "+m*n)
} else if ( m > 0 ? !conB : conB ){
    console.log("El producto es negativo "+m*n)
} else {
    console.log("El producto es positivo "+m*n)
}
//Principalmente matemáticas