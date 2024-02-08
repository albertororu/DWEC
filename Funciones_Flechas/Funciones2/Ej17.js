const numeroAleatorio = (min,max) => {
  
    return Math.floor(Math.random()*(max - min +100) + min)
}
    let min = 1;
    let max = 1000;
const total = numeroAleatorio(min,max)
console.log(total);