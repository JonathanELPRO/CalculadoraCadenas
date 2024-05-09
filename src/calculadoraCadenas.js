function calcularCadena(cadena) {
  const CERO=0
  let acumulacionSuma=CERO
  const TAMANIOCADENA=cadena.length
  if (TAMANIOCADENA!=0)
    {
      for (let iteradorCadena=0;iteradorCadena<TAMANIOCADENA;iteradorCadena++)
        {
          let caracter=cadena[iteradorCadena]
          let siguienteCaracter=cadena[iteradorCadena+1]
          let caracterEsUnNumeroSeparadoPorComa=!isNaN(caracter) && siguienteCaracter=="," && iteradorCadena!=TAMANIOCADENA-1
          let caracterEsElUltimoNumero=iteradorCadena==TAMANIOCADENA-1
          let caracterEsUnNumeroSeparadoPorGuion=!isNaN(caracter) && siguienteCaracter=="-" && iteradorCadena!=TAMANIOCADENA-1
          if(caracterEsUnNumeroSeparadoPorComa || caracterEsElUltimoNumero || caracterEsUnNumeroSeparadoPorGuion)
            {
              acumulacionSuma=acumulacionSuma+parseInt(caracter)
            }
        }
    }
  return acumulacionSuma
}

export default calcularCadena;
