// Se utiliza para crear un nuevo arreglo a partir de otro, aplicando una función a cada elemento 
// del arreglo original 


// recibir un arreglo, crear una compia de este y duplicar cada uno de los valores en el 
// nuevo arreglo 
const numbers = [1, 2, 3, 4, 5]

const duplicates = numbers.map(number => {
    return number * 2
});

console.log(duplicates);
console.log(numbers);