const textoReves = (texto) => {
    let separar = texto.split("");

    let invertir = separar.reverse()

    let unir = invertir.join("")

    return unir;
}

console.log(textoReves(prompt("Introduce una cadena")))