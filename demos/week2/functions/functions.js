//A function is a reusable block of code with a task divided into multiple steps

//Structure of a function
// function theFunctionName(parameters){
// task or action (including multiple steps)
// }

//Example
//I want to say hello to the user
//This is a function declaration --> this is where I state the function and the task I want to perform

function sayHello() {
  console.log("Hello, user!");
}

//This is a function call or invokation
sayHello();
sayHello();
sayHello();

//I want to say hello to each specific user using their name
//In this case, I need to have a dynamic placeholder for the users' names --> a parameter
//A parameter is a variable for a function --> I can store any value in the parameter once I call the function
function greetUser(userName, weather) {
  console.log(`Hello, ${userName}! The weather is ${weather}`);
}

//When we call the function, we need to specify what value we are replacing the parameter with
//The value we add in the function call to replace the parameter is called an argument
//we always match a parameter with an argument
//We can have as many parameters as we need.
//!Make sure you match each parameter with an argument

greetUser("Joe", "sunny");
greetUser("Manny", "rainy");
greetUser("Tim", "cloudy");
greetUser("Sam", "snowy");
greetUser("Frankie", "windy");

//The parameters we declare in a function are not defined outside the function. This is undefined
// console.log(userName);

//What if there is a value inside a function that I need to use outside the function?
//We can use the keyword return to make a value from inside a function available outside the function, for the rest of the code

//I want to add two numbers and reuse that code
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

//In this case, we want to use the values from the function to perform other tasks outside the function (log it in the console, store the value in a variable...)
console.log(addNumbers(2, 4));
let mySum = addNumbers(2, 4);
