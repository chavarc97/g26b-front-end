// crear un arreglo de las longitudes de las palabras de otro arreglo de string

const palabras = ['manzana', 'llanta', 'tarjeta', 'camara']

const longitudes = palabras.map(palabra => {
    return palabra.length
}); 

// [7, 6, 7, 6]
console.log(palabras);
console.log(longitudes);

