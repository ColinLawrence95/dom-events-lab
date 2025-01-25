/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");
const mathButtons = "+-/*".split("");
/*-------------------------------- Variables --------------------------------*/
let btnText;
let btnClass;
let firstNum = null;
let secondNum = null;
let operator = null;
let result;
let rdyToGo = false;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
//listens everytime a button is clicked
buttons.forEach(button =>
{
    button.addEventListener("click" , () =>
    {
        //gets the text value of the button clicked
        btnText = button.textContent;
        //displays that value on top of calculator
        display.textContent = btnText;
        //gets the class of the button clicked
        btnClass = button.getAttribute("class");

        //runs functions on button click
        storeValues(btnClass, btnText);
        checkIfReady();
        calculate();
        clear();
    })
});

/*-------------------------------- Functions --------------------------------*/
//function to store values of buttons clicked for calculation
function storeValues(btnClass, btnText)
{
    //checks if class of button clicked is button operator and if theres no first num
    if (btnClass === "button operator" && firstNum !== null)
    {
        //assigns the value to operator
        operator = btnText;
        console.log("operator is ", operator);
    }
    //checks if class of button clicked is button number
    else if (btnClass === "button number")
    {
        //asigns value to first num if first num is empty
        if (firstNum === null)
        {
            //converts string to float
            firstNum = parseFloat(btnText);
            console.log("first num is", firstNum);
        }
        //if first number isn't empty then assign second num
        else
        {   
            //converts string to float
            secondNum = parseFloat(btnText);
            console.log("second num is", secondNum);
        }
    }
} 
//does the actual math
function calculate()
{
    //checks if user is pressing button with class equal and the rdyToGo value is true
    if (btnClass === "button equals" && (rdyToGo))
    {
        //passes through operatior value to switch staement
        switch (operator) 
        {
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
                if (secondNum !==0)
                {
                    result = firstNum / secondNum;
                }
                else
                {
                    result = "Error divide by 0";
                }
                break;
        }

        console.log("Result:", result);
        //displays result to calculator
        display.textContent = result;
        //runs function if user wants to continue to calculate based of the result
        additonalCalculate();
    }
}
//fuction to check if all varibles are populated and calculator is ready to calculate
function checkIfReady()
{
    if (firstNum !== null && secondNum !== null && operator !== null)
    {
        rdyToGo = true;
    }
    else
    {
        rdyToGo = false;
    }
}
//function to clear calculator of all values when button with text value "C" is pressed
function clear()
{
    if (btnText === "C")
        {
            firstNum = null;
            secondNum = null;
            operator = null;
        }
}
//enables user to continue to calculate based of the result of previous calculation
function additonalCalculate()
{
    firstNum = result;
    secondNum = null;
    operator = null;
}