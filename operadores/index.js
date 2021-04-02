//Operadores aritméticos
/*
    =
    +
    -
    *
    /
    %
    ++
    --
    +=
    -=
    *=
    /=
 */
// = Asignación
var numero1 = 10;
var numero2 = 15;
// + Suma / Concatención
var suma = numero1 + numero2;
var texto = "El número "+numero1+" es par"
console.log(suma)
console.log(texto)
// - Resta
console.log( "Diferencia entre números : "+ ( numero2 - numero1 ) )
console.log( "Diferencia entre números : "+ ( numero1 - numero2 ) )
// * Multiplicación
console.log( "Producto entre números : "+ ( numero2 * numero1 ) )
// / División
console.log( "Cociente entre números : "+ ( numero2 / numero1 ) )
// % Modulo   10 / 15 = 1  => 5
console.log( "Modulo de dos números : "+ ( numero2 % numero1 ) )
// 2 / 2 = 1 => 0
for(let i = 1; i<=10 ; i++ ){
    if( (i % 2) === 0 ){
        console.log('El número '+i+" es par")
    }
}
// ** Potencia
console.log( "2 elevado al cubo es : "+ (2**3) )
console.log( "2 elevado al cubo es : "+ Math.pow(2,3) )
console.log( "Raiz cuadrada de 9 : "+ Math.sqrt(9) )

//Incremental ++
numero1++;
console.log(numero1)
numero1++;
console.log(numero1)
numero1++;
console.log(numero1)

//Decremental --
numero1--;
console.log(numero1)
numero1--;
console.log(numero1)
numero1--;
console.log(numero1)

// += Suma y asignación
for( let i = 0; i<1 ; i+=0.1 ){
    console.log(i)
}
// -= Resta y asignación y asignación
for( let i = 1; i>0 ; i-=0.1 ){
    console.log(i)
}
// *= Multiplicación y asignación
while( numero1 <= 1000000 ){
    console.log(numero1)
    numero1*=10;
}
// /= División y asignación
while( numero1 >= 0.0000001 ){
    console.log(numero1)
    numero1/=10;
}
