// EL REST 'OPERATOR' ... SE UTILIZA PARA RECOGER LOS ARGUMENTOS RESTANTES EN UNA FUNCION

function sumaNumeros(...numeros) {
    let suma = 0;

    for (const numero of numeros) {
        suma += numero
    }

    return suma
}

console.log(sumaNumeros(10,20,30,40,50));