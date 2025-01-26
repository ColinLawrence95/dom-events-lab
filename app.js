/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let btnText;
let btnClass;
let firstNum = null;
let secondNum = null;
let operator = null;
let result;
let rdyToGo = false;
let userInput = "";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
//listens everytime a button is clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //gets the text value of the button clicked
    btnText = button.textContent;
    userInput += btnText;
    //displays that value on top of calculator_
    display.textContent = userInput;
    //gets the class of the button clicked
    btnClass = button.getAttribute("class");

    storeValues(btnClass, btnText);
    clear();
  });
});
/*-------------------------------- Functions --------------------------------*/
//function to store values of buttons clicked for calculation
/**
 * fucntion to store clicked values
 * @param btnClass is the class retrived from clicked button
 * @param btnText Is the text value of button pressed
 */
function storeValues(btnClass, btnText) {
  if (btnClass === "button operator") {
    operator = btnText;
    console.log("operator is ", operator);
    display.textContent = operator;
    if (firstNum === null) {
      firstNum = parseFloat(userInput);
      console.log("first num is", firstNum);
      userInput = "";
      console.log("user is clear", userInput);
    }
  }
  if (btnClass === "button equals") {
    secondNum = parseFloat(userInput);
    console.log("2nd num is", secondNum);
    userInput = "";
    console.log("user is clear", userInput);
    calculate();
    console.log(result);
    console.log(operator);
    display.textContent = result;
  }
}
//does the actual math
function calculate() {
  //checks if user is pressing button with class equal and the rdyToGo value is true
  if (btnClass === "button equals") {
    //passes through operatior value to switch staement
    switch (operator) {
      //add
      case "+":
        result = firstNum + secondNum;
        break;
      //subtract
      case "-":
        result = firstNum - secondNum;
        break;
      //multiply
      case "*":
        result = firstNum * secondNum;
        break;
      //divide. Throws error message if divide by 0
      case "/":
        if (secondNum !== 0) {
          result = firstNum / secondNum;
        } else {
          result = "Error divide by 0";
        }
        break;
    }
    additonalCalculate();
  }
}
//function to clear calculator of all values when button with text value "C" is pressed
function clear() {
  if (btnText === "C") {
    userInput = "";
    firstNum = null;
    secondNum = null;
    operator = null;
  }
}
//enables user to continue to calculate based of the result of previous calculation

function additonalCalculate() {
  userInput = "";
  firstNum = result;
  secondNum = null;
  operator = null;
}
