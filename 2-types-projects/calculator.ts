/**
 * Let's make a calculator 🧮
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(type: Command, a: number, b: number): number {
  switch (type) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
  /*if (type === "add") {
    return numbers.reduce((prev, cur) => prev + cur);
  } else if (type === "substract") {
    return numbers.reduce((prev, cur) => prev - cur);
  } else if (type === "multiply") {
    return numbers.reduce((prev, cur) => prev * cur);
  } else if (type === "divide") {
    return numbers.reduce((prev, cur) => prev / cur);
  } else if (type === "remainder") {
    return numbers.reduce((prev, cur) => prev % cur);
  }*/
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
