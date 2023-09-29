// EN JS, SON OBJETOS, REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE AHORA EN EL FUTURO O NUNCA Y 
// SE UTILIZAN PARA MANEJAR OPERACIONES ASINCRONAS

const promesa = new Promise((resolve, reject) => {
    // las promesas contienen 2 metodos:
    resolve()
    reject()
});


// CONOCER LA RESPUESTA DE LA PROMESA
promesa.then(function (response) {
    // codigo...
    console.log(response);
  }).catch(function (error) {
    // codigo
    console.log(error);
  })
