// Alias para las propiedades

const persona = {
    nombre:'Chava' ,
    edad: 26,
    ciudad: 'Zapopan',
}

const { nombre: nombreCompleto } = persona;

console.log(nombreCompleto);