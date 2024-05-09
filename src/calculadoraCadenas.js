function calcularCadena(cadena) {
  const CERO=0
  const TAMANIOCADENA=cadena.length
  if (TAMANIOCADENA==1)
    {
      return parseInt(cadena[0]);
    }
  if(TAMANIOCADENA==3){
    return parseInt(cadena[0])+parseInt(cadena[2])
  }
  return CERO
}

export default calcularCadena;
