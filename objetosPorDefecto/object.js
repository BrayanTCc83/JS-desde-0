/*
    String
    Boolean
    number
    Array
    - Object -
    var objeto = {
        "clave" : "valor",
        propiedad : "valor"
        metodos : funcion
    }
    let x = "clave"
    objeto[ x ]
    objeto.propiedad
 */
var usuario = {
    nombre : "Brayan",
    edad : 18,
    sexo : "H",
    estaVivo : true,
    caminar : ()=>{ console.log( "Estoy caminando" ) },
    comer : ()=>{ console.log( "Estoy comiendo" ) }
}
var copia = usuario
console.log( Object.is( usuario, copia ) )
console.log( "Es extrensible : ", Object.isExtensible( usuario ) )
console.log( "No es alterable en su estructura", Object.isSealed( usuario ) )
console.log( "Esta congelado", Object.isFrozen( usuario ) )
usuario.correr = () => { console.log( "Estoy corriendo" ) }
Object.preventExtensions( usuario )
usuario.bailar = () => { console.log( "BAILANDO" ) }
console.log( usuario, Object.isExtensible( usuario ) )
Object.seal( usuario )
delete usuario.nombre
console.log( usuario, Object.isSealed( usuario ) )
Object.freeze( usuario )
usuario.nombre = "Pablo"
console.log( usuario, Object.isFrozen( usuario ) )

var keys = Object.keys( usuario )
console.log( keys )
var values = Object.values( usuario )
console.log( values )
var entries = Object.entries( usuario )
console.log( entries )

for (const key in usuario) {
    const element = usuario[key];
    console.log( key + " : "+element )
}
for( let i = 0; i< keys.length; i++ ){
    console.log( keys[i]+" : "+usuario[ keys[i] ] )
}