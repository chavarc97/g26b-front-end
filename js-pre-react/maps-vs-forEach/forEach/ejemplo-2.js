// 2. mdificando el arreglo

const numbers = [1, 2, 3, 4, 5, 6];

// Cada forEach, en la función que pide como parametro, a su vez, es
// funcion pide 3 parametros: elemento, indice y arreglo completo 

numbers.forEach((number, index, fullArray) => {
    console.log(`${index}, - ${number} ////// ${fullArray}`);
    //fullArray[index] = number * 2
});

//console.log(numbers);