//Condicionales
/*
    Bifurcar los caminos que puede tomar el programa
*/
//IF , IF-ELSE, IF-ELSE IF
var a = 10;
if( a === 5 ){
    //Cuando la condición se cumpla
    console.log("El número es 5");
}else{
    //Cuando no se cumpla
    console.log("El número es distinto de 5");
}

var nombre = "Isabell";
if( nombre === "Laura" ){
    //Validar en primera ocasión
    console.log("Bienvenida Laura");
}else if( nombre === "Pedro" ){
    //Va a revisar si es que el nombre no era Laura y ejecuta si el nombre es Pedro
    console.log("Hola Pedro");
}else if( nombre === "Mario" ){
    //Si no es ni Laura ni Pedro, checa si es Mario
    console.log("Gusto en verte Mario");
}else {
    //Si no es ninguno de los anteriores ejecuta este bloque
    console.log("Usuario desconocido");
}
//Switch
var diaDeLaSemana = 8;
switch( diaDeLaSemana ){
    case 1:
        console.log("El día es Lunes");
        break;
    case 2:
        console.log("El día es Martes");
        break;
    case 3:
        console.log("El día es Miercoles");
        break;
    case 4:
        console.log("El día es Jueves");
        break;
    case 5:
        console.log("El día es Viernes");
        break;
    case 6:
        console.log("El día es Sábado");
        break;
    case 7:
        console.log("El día es Domingo");
        break;
    default:
        console.log("El día "+diaDeLaSemana+" NO ES UN DIA DE LA SEMANA VALIDO");
        break;
}

//Ciclos
/*
    
 */
//for
for ( let CUENTA_DEL_1_AL_100 = 1; CUENTA_DEL_1_AL_100 <= 10 ; CUENTA_DEL_1_AL_100++ ){
    console.log( CUENTA_DEL_1_AL_100 );
}

//while
var gasolina = 100;
while ( gasolina > 0 ){
    console.log("El carro avanza, quedan : "+gasolina+" litros");
    gasolina--;
}
console.log("El carro se quedó sin gasolina");

//do while
var juegoActivo = true;
var tiempo = 50;
do{
    console.log("Realizando procesos internos");
    tiempo --;
    if( tiempo <= 0 ){
        alert('Tu tiempo de juego se ha acabado')
        juegoActivo = false;
    }
}while( juegoActivo );