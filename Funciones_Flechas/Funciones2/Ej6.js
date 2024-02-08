const contarParametros = (parametros) => {
    return parametros.length;
  };
  
  const cantidad = contarParametros([1, 2, 3, 'a', 'b']);
  console.log(`Se pasaron ${cantidad} parámetros.`);
  