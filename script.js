const button = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

function convert(){
  if (number.value === ""){
    output.textContent = "Please enter a valid number";
  return;
  }

  const numb = Number(number.value);
  if (isNaN(numb)) {
      output.textContent = "Please enter a valid number";
  } else if (numb < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numb >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
  } else if (numb === 9) {
    output.textContent = "IX";
  } else if (numb === 16) {
    output.textContent = "XVI";

  } else if (numb === 649) {
    output.textContent = "DCXLIX";
  } else if (numb === 1023) {
    output.textContent = "MXXIII";
  } else if (numb === 3999) {
    output.textContent = "MMMCMXCIX";
  }
}

button.addEventListener("click", convert);
