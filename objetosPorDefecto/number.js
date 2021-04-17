//CONSTANTES
console.log( "Maximo decimal", Number.MAX_VALUE )
console.log( "Mínimo decimal", Number.MIN_VALUE )
console.log( "Máximo entero", Number.MAX_SAFE_INTEGER )
console.log( "Mínimo entero", Number.MIN_SAFE_INTEGER )
console.log( "Valor más pequeño próximo a 0", Number.EPSILON )
console.log( "Positivo infinito", Number.POSITIVE_INFINITY )
console.log( "Negativo infinito", Number.NEGATIVE_INFINITY )
console.log( "Valores no númericos", Number.NaN )

//VALIDACIONES
//Ningún NaN es igual a un Not a Number
// NaN != NaN
console.log( "Valores no númericos", Number.isNaN( "Hola" ) )
console.log( "Valores infinitos dentro de JS", Number.isFinite( 1999*5 ) )
console.log( "Valores enteros con cotas en MAX_VALUE y MIN_VALUE", Number.isInteger( 9.1*10**309 ) )
console.log( "Valores enteros con cotas en MAX_SAFE_INTEGER y MIN_SAFE_INTEGER", Number.isSafeInteger( -9007199254740991 ) )

//Conversiones
console.log( "Pasa números a cadenas", (15).toString() )
console.log( "Cadena a valor decimal", Number.parseFloat( "4.456" ) )
//Radix va a definir la base de la cadena de texto
console.log( "Cadena a un valor número entero con la base indicada (10 por defecto)", Number.parseInt( "16" ) )