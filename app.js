/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let btnText;
let btnClass;
let result;
let firstNum = null;
let secondNum = null;
let operator = null;
let rdyToGo = false;
let userInput = "";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
//listens everytime a button is clicked
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //assigns the text value and the class of the button clicked to varibles
        btnText = button.textContent;
        btnClass = button.getAttribute("class");
        //assigns user input to the sum of btnText to diplay multiple numbers
        userInput += btnText;
        display.textContent = userInput;

        storeValues(btnClass, btnText);
        clear();
    });
});
/*-------------------------------- Functions --------------------------------*/
/**
 * Stores clicked values and display operator value to screen
 * @param btnClass is the class retrived from clicked button
 * @param btnText Is the text value of button pressed
 */
function storeValues(btnClass, btnText) {
    if (btnClass === "button operator") {
        setFirstNum();
        setOperator();
    }
    if (btnClass === "button equals") {
        setSecondNum();
    }
}
/**
 * Does the actual calculations on the values assigned to firstNum and secondNum
 */
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
        console.log("The result of the calculation is: ", result);
    }
}
/**
 * Clears all values when C button is pressed
 */
function clear() {
    if (btnText === "C") {
        clearUserInput();
        firstNum = null;
        secondNum = null;
        operator = null;
        result = null;
        console.log("All values Clear ", firstNum, secondNum, result, operator);
    }
}
/**
 * Enable user to calculate based of the result of the previous calculation
 */
function additonalCalculate() {
    clearUserInput();
    firstNum = result;
    secondNum = null;
    operator = null;
}
/**
 * clears user input value
 */
function clearUserInput() {
    userInput = "";
}
/**
 * Sets the operatior to the value of btnText
 */
function setOperator() {
    operator = btnText;
    display.textContent = operator;
    clearUserInput();
}
/**
 * Sets the value of firstNum to the converted value of user input
 */
function setFirstNum() {
    if (firstNum === null) {
        firstNum = parseFloat(userInput);
        clearUserInput();
    }
}
/**
 * Sets the value of secondNum to the converted value of user input
 */
function setSecondNum() {
    secondNum = parseFloat(userInput);
    clearUserInput();
    calculate();
    display.textContent = result;
}
