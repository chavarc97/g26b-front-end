// concatenar arreglos

// EL SPREAD OPERATOR, TAMBIEN PUEDE SERVIR PARA COMBINAR VARIOS ARREGLOS EN UNO SOLO

const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

// expected output: [1, 2, 3, 4, 5]

const arregloConcatenado = [...arreglo1, ...arreglo2]

console.log('arreglo Concatenado: ', arregloConcatenado);
