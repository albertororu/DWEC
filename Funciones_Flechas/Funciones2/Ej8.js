const encontrarEmpleadoMejorPagado = (empleados) => {
    let mejorPagado = empleados[0]; // Suponemos que el primer empleado es el mejor pagado
    
    for (let i = 1; i < empleados.length; i++) {
      if (empleados[i].sueldo > mejorPagado.sueldo) {
        mejorPagado = empleados[i];
      }
    }
    
    return mejorPagado;
  };
  
  // Ejemplo de uso:
  const empleados = [
    { nombre: 'Juan', sueldo: 3000 },
    { nombre: 'María', sueldo: 3500 },
    { nombre: 'Pedro', sueldo: 3200 },
    { nombre: 'Ana', sueldo: 4000 },
    { nombre: 'Luis', sueldo: 3800 },
    { nombre: 'Sara', sueldo: 3700 },
    { nombre: 'Diego', sueldo: 3900 },
    { nombre: 'Lucía', sueldo: 3600 }
  ];
  
  const empleadoMejorPagado = encontrarEmpleadoMejorPagado(empleados);
  console.log(`El empleado mejor pagado es ${empleadoMejorPagado.nombre} con un sueldo de ${empleadoMejorPagado.sueldo}.`);
  