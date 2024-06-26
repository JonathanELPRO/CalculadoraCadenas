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

function obtenerNumerosASumar(separadores,cadena)
{
  const TAMANIOCADENA = cadena.length;
  let cadenaEstaVacia = TAMANIOCADENA != 0;
  let cadenaNumeros = [];
  let numerosASumar=[]
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
      if (
        (caracterEsUnNumeroSeparadoPorComa ||
          caracterEsElUltimoNumero ||
          caracterEsUnNumeroSeparadoPorGuion ||
          caracterEsUnNumeroSeparadoPorCaracterEspecificadoPorUsuario) &&
        parseInt(cadenaNumeros.join("")) <= 1000
      ) {
        numerosASumar.push(parseInt(cadenaNumeros.join("")))
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
  return numerosASumar
}
function sumarCadena(separadores,cadena){

  let numerosASumar=obtenerNumerosASumar(separadores,cadena)
  let acumulacionSuma = numerosASumar.reduce((acumulador, numero) => acumulador + numero, 0);
  return acumulacionSuma;
}
function calcularCadena(cadena) {
  let separadores =obtenerSeparadores(cadena)
  return sumarCadena(separadores, cadena)
}

export default calcularCadena;
