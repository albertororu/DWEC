const numeroBinario = valor => {
    let num = valor;
    let entero
    while(num > 0){
        entero = (num % 2) + entero;
        num = Math.floor(num / 2);
    }
}
numeroBinario(15)