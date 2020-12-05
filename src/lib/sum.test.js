import { sum, substract } from "./math";

let number;

beforeEach(() => {
  number = 2;
});

//   beforeEach(() => {
//   console.log("hola, estoy en beforeEach afuera");
// });

describe("funcion sum", () => {
  test("la funcion existe", () => {
    number = 4;
    console.log(number);
    expect(sum).toBeDefined();
  });

  test("la funcion suma como corresponde", () => {
    expect(sum(5, 5)).toEqual(10);
  });
});

describe("funcion substract", () => {
  test("la funcion existe", () => {
    console.log(number);
    expect(substract).toBeDefined();
  });

  test("la funcion resta como corresponde", () => {
    expect(substract(10, 5)).toEqual(5);
  });
});
