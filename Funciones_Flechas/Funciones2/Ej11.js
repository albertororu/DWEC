const fibonacci = () => {
    let numero = [0,1];
    for(let i = 2; i<10; i++){
        numero.push(numero[i-1] + numero[i-2]);
    }
    return numero;
}

const prueba = fibonacci();
console.log(prueba)