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
  it("Deberia retornar 10", () => {
    expect(calcularCadena("3,2,5")).toEqual(10);
  });
  it("Deberia retornar 17 tomando en cuenta el separador guion", () => {
    expect(calcularCadena("3-2,5-7")).toEqual(17);
  });
  it("Deberia retornar 26 tomando en cuenta el separaador del usuario", () => {
    expect(calcularCadena("//[;] 3-2,5-7;9")).toEqual(26);
  });
});
