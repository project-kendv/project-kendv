const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input; // Append the input to the display value
}

function clearDisplay() {
  display.value = ""; // Clear the display value
}

function calculate() {
  try {
    // Validate input to allow only numbers, operators, and decimal points
    if (/^[0-9+\-*/.() ]+$/.test(display.value)) {
      // Evaluate the expression safely
      display.value = new Function(`return ${display.value}`)();
    } else {
      throw new Error("Invalid input");
    }
  } catch (error) {
    display.value = "Error"; // Display error if the input is invalid
  }
}
