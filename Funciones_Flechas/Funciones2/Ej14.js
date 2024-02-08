const parametros = (precio, IVA) => {
    return precio + (precio * IVA /100);
}

let precio = parseFloat(prompt('Dime un precio'));
let IVA = 21;

const total = parametros(precio, IVA);
console.log(total)