const calculoTiempo = (velocidad, distancia) => {
    return distancia/velocidad;
}

    let velocidad = 730000;
    let distancia = 120;

const total = calculoTiempo(velocidad,distancia);
console.log(total);