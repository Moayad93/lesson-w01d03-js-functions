// function that accepts a string argument of a name and returns a string using that name.
const youRock = function (name) {
    return "You rock " + name + "!";
}

// function that accepts a number argument and returns that number multiplied by itself.
const square = function (number) {
    return number * number;
}

// function that accepts a number argument and returns that number raised to the third power.
const cube = function (number) {
    return Math.pow(number, 3);
}

// function that accepts a number argument and returns that number raised to the fourth power.
const toTheFourth = function (number) {
    return Math.pow(number, 4);
}

// function that will add, subtract, multiply or divide two numbers and return the answer
const calculator = function (numberOne, numberTwo, mathOperation) {

    if ((isNaN(numberOne) && isNaN(numberTwo)) || (isNaN(numberOne) || isNaN(numberTwo))) {
        console.log("calculator only accept numbers");
    }

    if (mathOperation === "add" || "subtract" || "divide" || "multiply") {
        if (mathOperation === "add") {
            return numberOne + numberTwo;
        }
        if (mathOperation === "subtract") {
            return numberOne - numberTwo;
        }
        if (mathOperation === "divide") {
            return numberOne / numberTwo;
        }
        if (mathOperation === "multiply") {
            return numberOne * numberTwo;
        } else {
            console.log("calculator can only add, subtract, divide, or multiply");
        }
    }
}