// Desestructuracion anidada de objetos

const persona = {
    nombre:'Chava' ,
    edad: undefined,
    ciudad: 'Zapopan',
    direccion: {
        calle: '123 calle principal',
        colonia: 'loma bonita',
    },
}

// Desestructuracion anidada
const { nombre, direccion: { calle, colonia } } = persona

console.log(calle);