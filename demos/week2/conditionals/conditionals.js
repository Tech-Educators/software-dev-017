//We use conditionals to set up different actions or tasks that will happen if a condition is truthy

//Structure
//Keyword --> if
// if (condition) {
//     action or task
// }

//the condition ALWAYS needs to give us a truthy or falsey value, so we need to use a comparison (==, ===, <=, >=, <, >)
let weather = "cloudy";

// == the value is equal (loose)
// === the value and the data type is equal (strict)

//this condition is truthy, so our action will happen
if (weather == "cloudy") {
  console.log("Today it's cloudy. Grab a jacket!");
}

//this condition is falsey, so our action won't happen
if (weather == "sunny") {
  console.log("Today it's sunny. Enjoy!");
}

if (weather == "rainy") {
  console.log("Today it's rainy. Umbrella time!");
}

//To combine multiple conditions in one block of code, we can use other keywords --> else if, else
if (weather == "cloudy") {
  console.log("Today it's cloudy. Grab a jacket!");
} else if (weather == "sunny") {
  console.log("Today it's sunny. Enjoy!");
} else if (weather == "rainy") {
  console.log("Today it's rainy. Umbrella time!");
} else {
  //the else statement does NOT need a condition. It will trigger by default when the rest of conditions are falsey.
  //by having an else statement we always guarantee that the user gets a responsex
  console.log("Check the forecast!");
}

//What if we want to check more than one condition at once?
//We have the AND operator (&&), the OR operator (||)
if (weather == "cloudy" && weather == "sunny") {
  //when we use the && operator here, BOTH conditions need to be truthy
  console.log("Today it's cloudy. Grab a jacket!");
}

if (weather == "sunny" || weather == "cloudy") {
  //when we use the || operator here, we will check if the first condition is truthy first. If the first is truthy, we DON'T check the second condition. If the first condition is falsey, we WILL check the second condition
  console.log("Today it's cloudy. Grab a jacket!");
}

//What if I want the opposite value of the current value?
//You can use the NOT operator (!)

//For example, if the current value is true, here I am checking if the user is logged in

let loggedIn = true;

// loggedIn !== true --> !loggedIn
// loggedIn == true --> loggedIn
if (!loggedIn) {
  console.log("Please, log in!");
}

//If the weather is NOT cloudy (loose)
if (weather != "cloudy") {
  console.log("Today it's cloudy. Grab a jacket!");
}

//If the weather is NOT cloudy (strict)
if (weather !== "cloudy") {
  console.log("Today it's cloudy. Grab a jacket!");
}
