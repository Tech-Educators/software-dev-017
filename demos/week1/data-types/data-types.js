//I want to test if my JS is connected by logging a message in the console
console.log("Test");

//I want to store different types of data
//We use variables to store data
//keywords: let and const

//string
let myName = "Manny";
// let myOtherName = 'Joe';
// let myOtherOtherName = `Sam`;

//number
let year = 2024;

//this type is a string
let fakeNumber = "2024";

//boolean --> true or false
let isCold = true;
let isSunny = false;

//I want to see myName and year together in the console
//We can concatenate more than one variable or value
console.log(myName + " " + year);

//Another way of concatenating values
//template literals --> we can use backticks to concatenate values a bit more easily
console.log(`My name is ${myName} and the year is ${year}`);

//I want to see what data type is stored in a variable
//the typeof operator will tell me what data type is inside this variable
let myLocation = "Norwich";

console.log(typeof myLocation);

//when a variable has not being assigned a value, the data type is undefined
let myJob;
console.log(typeof myJob);

//type coercion
//this is a number
let myNumber = 3;
//this is a string
let myOtherNumber = "7";
let sum = myNumber + myOtherNumber;
//if you want to do a maths operation, make sure your values are numbers to avoid JS turning them into strings

console.log(sum);
//37
//10
//something else?

//I want to compare different values
let a = 8;
let b = 10;

//I want to write: a is greater than b
let compare = a > b;

//in the console, we see false because a is not greater than b
console.log(compare);

//I want to write: a is less than b
let compareAgain = a < b;

//in the console, we see true because a is less than b
console.log(compareAgain);

let x = 12;
let y = "12";
//I want to write: x is equal to y
//with == we are comparing the value
let equalComparison = x == y;
//this operation is truthy because BOTH values are 12
console.log(equalComparison);
let superEqualComparison = x === y;
//this operation is falsey because the types are not equal
console.log(superEqualComparison);

//I want to store the value of NOTHING in a variable
let myEmptyVariable = null;
console.log(myEmptyVariable);

//this variable doesn't exist; it is undefined
console.log(myCountry);

//if I don't want my variable to be empty (null), I can always assign it a new value
myEmptyVariable = 89;

//you can use the value null when you don't want to show the user anything on the screen
//an example of null I can provide, is in games. An inventory system for example. Nothing is there, and they pick up an item and fill a slot, so now it has a new value (credits to Jackie!)
