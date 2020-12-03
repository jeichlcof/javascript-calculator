const number = document.querySelector("button");
const form = document.querySelector("form"),
  input = form.querySelector("input");

function output(num) {
  input.value = input.value + num;
}

function equal() {
  let exp = input.value;
  exp = eval(exp);
  console.log(exp);
  input.value = exp;
}
