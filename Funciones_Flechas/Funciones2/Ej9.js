const numeroPares = () => {
    let numero = [];
    let numeroPar = 2;

    while(numero.length <20){
        numero.push(numeroPar);
        numeroPar += 2;
    }
    return numero;
}

const numero = numeroPares();
console.log(numero)