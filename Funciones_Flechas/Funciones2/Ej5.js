const numeroBinario = (valor)=> {
    let entero = ''
    while(valor > 0){
        entero = (valor % 2) + entero;
        valor = Math.floor(valor / 2);
    }
    
    return entero
}
let total = numeroBinario(15);
console.log(total)
