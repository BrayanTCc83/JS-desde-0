nuevaCadena = new String("Hola");
cadena2 = "Hola, yo me llamo Brayan";
//PROPIEDADES
console.log( "Length" , cadena2.length )

//METODOS
console.log( cadena2.toUpperCase() );
console.log( cadena2.toLowerCase() );

console.log( cadena2.concat( ", tengo 18 años" ) );
console.log( cadena2 + ", tengo 18 años" );
console.log( `${cadena2}, tengo 18 años` );

console.log( cadena2.replace("a", "1") );
console.log( cadena2.replace( /[a]/g , "1") );

console.log( cadena2.split( " " ) );
console.log( cadena2.split( /[,]/g ) );

console.log( cadena2.repeat( 3 ) );

console.log( cadena2.substr( 18, 6 ) );
console.log( cadena2.substring( 18, 24 ) );
console.log( cadena2.search( "yo" ) );
console.log( cadena2.search( /[a]/g ) );

console.log( cadena2.charAt( 0 ) );
console.log( cadena2.match( /Hola/g ) );

console.log( cadena2.indexOf( "H" ) );
console.log( cadena2.lastIndexOf( "a", 18 ) );

console.log( cadena2.includes( "Brayan" ) );
console.log( cadena2.startsWith( "yo", 6 ) );
console.log( cadena2.endsWith( "llamo", 17 ) );

console.log( "ל".codePointAt() )
console.log( "П".codePointAt() )
console.log( "点".codePointAt() )
console.log( "ب".codePointAt() )
console.log( "こ".codePointAt() )
console.log( "💨".codePointAt() )