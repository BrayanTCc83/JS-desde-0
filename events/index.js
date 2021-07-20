/**
 *Toda acción que suceda en la vista HTML
 */
//TECLADO
/**
 * presionar tecla
 * dejar de presionar
 */
//MOUSE
/**
 * Click
 * Doble click
 * Scroll rueda
 * cambiar puntero
 */
//DRAG AND DROP
/**
 * Iniciar arrastre
 * Soltar item
 * Mover el elemento
 */
//DOCUMENTO
/**
 * Iniciar carga de datos
 * Mostrar elementos
 * Encontrar errores
 */
//OTROS
/**
 * Cargar metadata
 * Reproducir
 * Progreso
 * Parar
 */
/**
    function nombre( ev ){
        Cualquier tipo de validación
        Modificar la vista en HTML
        Obtener valores de los elementos de la vista (disparador)
    }
    EVENTO DESDE JS
    var div = document.getElementById( 'div' )
    div.addEventListener( 'click', () => {
        console.log( "DIV PULSADO" )
    } )
*/
function onClick( ev ){
    let target = ev.target
    console.log( "EL DIV CON ID "+ev.target.id+" HA SIDO PULSADO" )
    target.innerHTML = "UN DIV QUE HA SIDO PULSADO"
}
function onChange( ev ){
    let value = ev.target.value
    let target = ev.target
    if( value.length > 20 ){
        alert( "El valor contenido en el input supera los 20 caracteres" )
        target.classList.add( "invalid" )
    }else{
        target.classList.remove( "invalid" )
    }
}
function onSubmit( ev ){
    return false
}