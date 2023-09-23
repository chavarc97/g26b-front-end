// Valores por defecto 

const persona = {
    nombre:'Chava' ,
    edad: undefined,
    ciudad: 'Zapopan',
}

const { edad = 26 } = persona

console.log(edad);