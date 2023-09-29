// PUEDES USAR EL SPREAD OPERATOR PARA COPIAR PROPIEDADES DE UN OBJETO 
// EN OTROS Y AGREGAR MAS.

const objeto1 = {
    nombre: 'Chava',
    edad: 26,
    ciudad: 'Gdl'
}

const objeto2 = {...objeto1, trabajo: 'Arquitectura'}

console.log('Objeto original: ', objeto1);
console.log('Copia Objeto: ', objeto2);
