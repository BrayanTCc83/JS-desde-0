//
//Variables globales
var a = 5;

if( a > 2 ){
    //Si la redefinimos realmente estamos sobreescribiendo la anterior
    var a = 10;
}
console.log(a);

//Variables locales
let b = 10;

if( b > 8 ){
    //Al redefinir se crean dos variables con mismo nombre,
    //Cada una funciona en su propio bloque
    let b = 5;
    console.log(b);
}
console.log(b);

//Constantes
const c = "No modificable";
console.log(c)

//La función se comporta diferente según el tipo de dato que le pasemos
function suma ( a , b ) {
    return a + b;
}

console.log(
    suma(a, b),
    suma("El valor es : ", "uno muy grande")
);

//El tipado dinámico
a = "Texto";
console.log(a);

a = true;
console.log(a);

a = {
    nombre : "Nombre",
    edad : 18
}
console.log(a);

//