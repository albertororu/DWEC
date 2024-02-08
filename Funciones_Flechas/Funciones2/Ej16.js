const numeroAleatorio = (min,max) => {
  
    return Math.floor(Math.random()*(max - min +1)+ min)
}
    let min = 1;
    let max = 100;
const total = numeroAleatorio(min,max)
console.log(total);