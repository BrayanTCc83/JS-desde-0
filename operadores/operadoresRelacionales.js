/*
    Operadores relacionales
    >
    <
    >=
    <=
    ==
    ===
    !=
    !==
 */
var a = 10;
var b = 8;
var c = 15;
// > Mayor que 
if( a > b ){
    console.log('El número '+a+' es mayor que el '+b)
}
if( c > b ){
    console.log('El número '+c+' es mayor que el '+b)
}
// < Menor que
if( a < c ){
    console.log('El número '+a+' es menor que el '+c)
}
if( b < c ){
    console.log('El número '+b+' es menor que el '+c)
}
// >= Mayor o igual a 
if( a >= 10 ){
    console.log('El número '+a+' es mayor o igual que 10')
}
if( a >= 5 ){
    console.log('El número '+a+' es mayor o igual que 5')
}
// <= Menor o igual a 
if( a <= 10 ){
    console.log('El número '+a+' es mayor o igual que 10')
}
if( a <= 12 ){
    console.log('El número '+a+' es mayor o igual que 12')
}
// == Igual que --> Comparar valores 
// === (Igualdad estricta) Identico a --> Comparar valores y tipo de dato
if( a == "10" ){
    console.log("El número a ("+a+")  es igual a la cadena '10'")
}
if( a === 10 ){
    console.log("El número a es igual al número "+a)
}
// != Diferente de --> Comparar valores 
// !== (Desigualdad estricta) Distinto de --> Comparar valores y tipo de dato
if( a != "15" ){
    console.log("El número a ("+a+")  es distinto de '15'")
}
if( a !== "10" ){
    console.log("El número a ("+a+") es de tipo distinto a '10'")
}
var numero = 0;
if( numero > 0 ){
    console.log('El número '+numero+' es positivo')
}else if( numero === 0 ){
    console.log('El número '+numero+' es cero')
}else if( numero < 0 ){
    console.log('El número '+numero+' es negativo')
}else{
    console.log('El valor ingresado no es un tipo de dato válido')
}