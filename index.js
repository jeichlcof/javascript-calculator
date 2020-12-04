const form = document.querySelector("form");
let input = form.querySelector("input");
let calculator = "";
let preval = "";

function output(num) {
  calculator = calculator + num;
  preval = calculator.slice(0, -1);
  const lastNumber = calculator.charAt(calculator.length - 1);
  if (
    lastNumber === "*" ||
    lastNumber === "/" ||
    lastNumber === "+" ||
    lastNumber === "-"
  ) {
    input.value = "";
    input.value = eval(calculator.slice(0, -1));
  }

  if (num !== "*" && num !== "+" && num !== "/" && num !== "-") {
    if (
      preval.charAt(preval.length - 1) === "*" ||
      preval.charAt(preval.length - 1) === "/" ||
      preval.charAt(preval.length - 1) === "+" ||
      preval.charAt(preval.length - 1) === "-"
    ) {
      input.value = "";
    }
    input.value = input.value + num;
  }
}

function equal() {
  input.value = eval(calculator);
}

function reset() {
  input.value = "";
  calculator = "";
}
