export const formatearDias = (dia, data) => {
    const materias = data.filter((materia) => {
        if(materia[dia] !== null){
          return materia
        }
      })
      return ({materias, dia})
}

export const fechaDiaria= () => {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${anio}`
  return fechaFormateada;
}

