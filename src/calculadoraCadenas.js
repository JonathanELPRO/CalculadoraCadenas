function calcularCadena(cadena) {
  const CERO=0
  let acumulacionSuma=CERO
  const TAMANIOCADENA=cadena.length
  if (TAMANIOCADENA!=0)
    {
      for (let i=0;i<TAMANIOCADENA;i++)
        {
          if(!isNaN(cadena[i]) && cadena[i+1]=="," && i!=TAMANIOCADENA-1)
            {
              acumulacionSuma=acumulacionSuma+parseInt(cadena[i])
            }
          if(i==TAMANIOCADENA-1)
            {
              acumulacionSuma=acumulacionSuma+parseInt(cadena[i])
            }
        }
    }
  return acumulacionSuma
}

export default calcularCadena;
