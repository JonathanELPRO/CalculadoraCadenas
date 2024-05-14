function obtenerSeparadores(cadena){
  let expresionRegular = /\[(.*?)\]/g;
  let separadores = [];
  let coincidencias;
  let grupoDeCaptura
  while ((coincidencias = expresionRegular.exec(cadena)) !== null) {
    grupoDeCaptura=coincidencias[1]
    separadores.push(grupoDeCaptura);
  }
  return separadores
}

function calcularCadena(cadena) {
  const CERO = 0;
  let acumulacionSuma = CERO;
  const TAMANIOCADENA = cadena.length;
  let cadenaEstaVacia = TAMANIOCADENA != 0;
  let cadenaNumeros = [];
  let separadores =obtenerSeparadores(cadena)
  if (cadenaEstaVacia) {
    for (
      let iteradorCadena = 0;
      iteradorCadena < TAMANIOCADENA;
      iteradorCadena++
    ) {
      let caracter = cadena[iteradorCadena];
      let siguienteCaracter = cadena[iteradorCadena + 1];
      let caracterEsUnNumeroSeparadoPorComa =
        !isNaN(caracter) &&
        siguienteCaracter == "," &&
        iteradorCadena != TAMANIOCADENA - 1;
      let caracterEsElUltimoNumero = iteradorCadena == TAMANIOCADENA - 1;
      let caracterEsUnNumeroSeparadoPorGuion =
        !isNaN(caracter) &&
        siguienteCaracter == "-" &&
        iteradorCadena != TAMANIOCADENA - 1;
      let caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario =
        !isNaN(caracter) &&
        separadores.some((separador) => {
          let porcionSiguiente = cadena.substring(
            iteradorCadena + 1,
            iteradorCadena + 1 + separador.length
          );
          return porcionSiguiente === separador;
        }) &&
        iteradorCadena != TAMANIOCADENA - 1;
      if (!isNaN(caracter)) {
        cadenaNumeros.push(caracter);
      }
      console.log(
        caracterEsUnNumeroSeparadoPorComa,
        caracterEsElUltimoNumero,
        caracterEsUnNumeroSeparadoPorGuion,
        caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario
      );
      if (
        (caracterEsUnNumeroSeparadoPorComa ||
          caracterEsElUltimoNumero ||
          caracterEsUnNumeroSeparadoPorGuion ||
          caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario) &&
        parseInt(cadenaNumeros.join("")) <= 1000
      ) {
        console.log(parseInt(cadenaNumeros.join("")));
        acumulacionSuma = acumulacionSuma + parseInt(cadenaNumeros.join(""));
        cadenaNumeros = [];
      }
      if (
        (caracterEsUnNumeroSeparadoPorComa ||
          caracterEsElUltimoNumero ||
          caracterEsUnNumeroSeparadoPorGuion ||
          caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario) &&
        parseInt(cadenaNumeros.join("")) > 1000
      ) {
        cadenaNumeros = [];
      }
    }
  }
  return acumulacionSuma;
}

export default calcularCadena;
