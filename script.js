const display = document.getElementById("display");

function add(symbol) {
  if (display.value === "Błąd") {
    display.value = "";
  }

  display.value += symbol;
}

function calculate() {
  const text = display.value.trim();

  for (const symbol of text) {
    if (!"0123456789.+-*/".includes(symbol)) {
      display.value = "Błąd";
      return;
    }
  }

  const numbers = text.split(/[+\-*/]/);

  for (const number of numbers) {
    if (number !== "" && !Number.isFinite(Number(number))) {
      display.value = "Błąd";
      return;
    }
  }

  try {
    const result = eval(text);

    if (Number.isFinite(result)) {
      display.value = result;
    } else {
      display.value = "Błąd";
    }
  } catch {
    display.value = "Błąd";
  }
}