import calcularCadena from "./calculadoraCadenas.js"

describe("Calculadora de cadenas", () => {
  it("Deberia retornar cero ya que la cadena que se envio esta vacia", () => {
    expect(calcularCadena("")).toEqual(0);
  });
  it("Deberia retornar cero ya que la cadena que se envio esta vacia", () => {
    expect(calcularCadena("3")).toEqual(3);
  });
  it("Deberia retornar 5 ya que la cadena que se envio tiene dos elementos", () => {
    expect(calcularCadena("3,2")).toEqual(5);
  });
  it("Deberia retornar 5 ya que la cadena que se envio tiene dos elementos", () => {
    expect(calcularCadena("3,2,5")).toEqual(10);
  });
});
