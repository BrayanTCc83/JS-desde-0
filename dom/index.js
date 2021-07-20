/**
 * Todo el contenido dentro de el cuerpo del documento
 * document
 *      tag ( Etiqueta )
 *      name ( Nombre de grupo en formulario )
 *      class ( Todos los elementos con una misma clase )
 *      id ( Por clave única )
 */
const divs = document.getElementsByTagName( 'div' )
console.log( divs )

const divNewClass = document.getElementsByClassName( 'newClass' )
console.log( divNewClass )

const sexRadio = document.getElementsByName( 'sexo' )
console.log( sexRadio )

const div1 = document.getElementById( 'div1' )
console.log( div1 )

/**
 * ClassList
 *      Clases de las etiquetas
 * 
 * Attributes
 *      Cambian valores de la etiqueta
 * 
 * Eventos
 *      Añadir o remover un escuchador de evento
 * 
 * Modificar contenido
 *      Cambia el contenido de una etiqueta
 */

const callback = ( clickEvent ) => {
    const div = clickEvent.target
    div.setAttribute( 'title', 'click' )
    div.classList.toggle( 'newClass' )
}

for( let index = 0; index < divs.length; index++ ){
    divs[ index ].addEventListener( 'click', callback )
}

for( let i = 0 ; i < 10; i++ ){
    const newChild = document.createElement( 'aside' )
    newChild.setAttribute( 'id', i )
    newChild.innerText = 'Este aside es el número '+i
    div1.appendChild( newChild )
} 

const addNewAsideInDiv = ( clickEvent ) => {
    const newChild = document.createElement( 'aside' )
    div1.appendChild( newChild )
}

const addAside = document.getElementById( 'addAside' )
addAside.addEventListener( 'click', addNewAsideInDiv )