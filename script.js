let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Discard the actual result and only display "I Love You"
    display.value = "I Love You";
  } catch {
    display.value = "Error";
  }
}
