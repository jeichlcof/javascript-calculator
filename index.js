const number = document.querySelector("button");
const form = document.querySelector("form");
let input = form.querySelector("input");

function output(num) {
  input.value = input.value + num;
}

function equal() {
  let exp = input.value;
  exp = eval(exp);
  input.value = exp;
}

function reset() {
  input.value = "";
}
