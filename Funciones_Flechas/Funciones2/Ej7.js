const calcularMedia = (array) => {
    if (array.length === 0) {
      return 0; 
    }
    
    const suma =array.reduce((total, numero) => total + numero, 0);
    const media = suma / array.length;
    
    return media;
  };
  
 
  const numeros = [10,10];
  const media = calcularMedia(numeros);
  console.log(`La media de los números es: ${media}`);