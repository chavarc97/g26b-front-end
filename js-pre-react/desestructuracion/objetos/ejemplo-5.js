// Desestructuracion de objetos como parametros de funciones 

function imprimirInfo({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, edad: ${edad}`);
};


const chava = {
    nombre:'Chava' ,
    edad: 26,
    ciudad: 'Zapopan',
    direccion: {
        calle: '123 calle principal',
        colonia: 'loma bonita',
    },
}

imprimirInfo(chava)

// En este caso, estamos pasando un objeto como argumento a la función imprimirInfo,
// y luego desestructuramos el objeto directamente en los parámetros de la función para 
// acceder a las propiedades dentro de la función.

// La desestructuración de objetos es una característica poderosa de JavaScript que simplifica la manipulación de datos en objetos.