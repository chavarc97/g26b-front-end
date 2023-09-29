// convertir un arreglo de nombres a uno de saludos 

const names = ['pedro', 'juan', 'miguel']

const greetings = names.map(name => {
    return `¡Hola!, ${name}!`
});

console.log(greetings);