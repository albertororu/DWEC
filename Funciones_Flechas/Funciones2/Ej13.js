const letraDni = (dni) => {
    const dniRegex = /^\d{8}$/;
    if (!dniRegex.test(dni)) {
        return "DNI Erróneo";
    }

    let letrasDelDni = "ABCDEFGHIJKLMNOPQRSTUWYZ"

    let letra = letrasDelDni.charAt(dni % 23)
   
    return letra;
}

const dni = prompt('Escribe el DNI');
const letraDNI = letraDni(dni);
console.log(letraDNI);