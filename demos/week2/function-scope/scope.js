//scope --> how available a value is depending if it's part of a block of code or if it's part of the general code

//this value stored in a variable is available to every element in our code
//global scope
let myLocation = "Norwich";

//what if a value is inside a block of code?
//when the value of a variable is only available inside a block of code, we say this is function or local scope
function sayLocation(location) {
  console.log(`Hello! You are in ${location}. Are you in the right website?`);
}

sayLocation("UK");
//this gives us an error because location is only available locally, inside the function
// console.log(location);

//we can use global scope values anywhere in the code
function sayAnotherLocation() {
  //global scope
  myLocation = "Leicester";
  //local scope
  let username = "Joe";
  console.log(`Hello! You are in ${myLocation}`);
}

sayAnotherLocation();

function sayLastLocation() {
  //local scope
  let username = "Sam";
  console.log(
    `Just to be sure. You are ${username} and you are in ${myLocation}`
  );
}
//myLocation is still Leicester in here because the previous functions changed the value to a global variable, which is the new value moving forward
sayLastLocation();

//pure functions are functions that only rely on local scope to work
//pure functions only perform ONE task
//pure functions are consistent; they always give you the same result for the same values (avoiding side effects --> unexpected results)
//Example of pure function
function add(a, b) {
  return a + b;
}
