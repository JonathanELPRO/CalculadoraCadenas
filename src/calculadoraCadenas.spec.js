import calcularCadena from "./calculadoraCadenas.js"

describe("Calculadora de cadenas", () => {
  it("Deberia retornar cero ya que la cadena que se envio esta vacia", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Deberia retornar cero ya que la cadena que se envio esta vacia", () => {
    expect(calcularCadena("3")).toEqual(3);
  });
});
