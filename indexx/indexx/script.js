let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}