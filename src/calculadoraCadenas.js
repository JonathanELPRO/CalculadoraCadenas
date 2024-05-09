function calcularCadena(cadena) {
  const CERO=0
  let acumulacionSuma=CERO
  const TAMANIOCADENA=cadena.length
  if (TAMANIOCADENA!=0)
    {
      for (let i=0;i<TAMANIOCADENA;i++)
        {
          let caracter=cadena[i]
          let siguienteCaracter=cadena[i+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && i!=TAMANIOCADENA-1
          let caracterEsElUltimoNumero=i==TAMANIOCADENA-1
          if(caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero)
            {
              acumulacionSuma=acumulacionSuma+parseInt(cadena[i])
            }
        }
    }
  return acumulacionSuma
}

export default calcularCadena;
