//Callback functions are functions we use in place of a parameter

//Here my parameters are going to be replaced with primitives!
function add(a, b) {
  return a + b;
}

// console.log(add(2, 8));

function sayUsername() {
  console.log(`Your name is Manny`);
}

function sayLocation() {
  console.log(`Your location is Norwich`);
}

function sayUsernameAndLocation(username, location) {
  //I am calling username and location, because they will be replaced by actual functions. I am using them as if they were already functions.
  username();
  location();
  //I can't console log username and location because the arguments (values) are not primitives, they are blocks of code (other functions).
  //   console.log(`Hello ${username}, your location is ${location}`);
}

sayUsernameAndLocation(sayUsername, sayLocation);
//You could also write the function arguments directly in the function call
// sayUsernameAndLocation(
//   function sayUsername() {
//     console.log(`Your name is Manny`);
//   },
//   function sayLocation() {
//     console.log(`Your location is Norwich`);
//   }
// );

//===================================================
//Example

//I want to add an image to my website for now, but I know I will have to reuse this code to add more images later
// STEP 1: select the DOM element I am interacting with

//global scope
const mainContainer = document.getElementById("main-container");

function createImage(src, alt, classname) {
  //local, function, or block scope
  const newImg = document.createElement("img");
  newImg.src = src;
  newImg.alt = alt;
  newImg.className = classname;
  mainContainer.appendChild(newImg);
}

function createHeading(title) {
  const newHeading = document.createElement("h2");
  newHeading.textContent = title;
  mainContainer.appendChild(newHeading);
}

//This function combines creating an image and creating a heading
function createImageWithHeading(
  createHeading,
  heading,
  createImage,
  src,
  alt,
  classname
) {
  createHeading(heading);
  createImage(src, alt, classname);
}

createImageWithHeading(
  createHeading,
  "Oatie",
  createImage,
  "https://www.mrsjoneskitchen.com/wp-content/uploads/2023/01/Oat-Biscuits.jpg",
  "Oatie",
  "oatie-styles"
);
createImageWithHeading(
  createHeading,
  "Custard Cream",
  createImage,
  "https://moversandbakers.co.uk/wp-content/uploads/2020/06/custard-creams_0501.jpg",
  "custard cream",
  "custard-styles"
);

createImageWithHeading(
  createHeading,
  "Bourbon",
  createImage,
  "https://www.janespatisserie.com/wp-content/uploads/2024/02/BourbonBiscuits10-2.jpg",
  "bourbon",
  "bourbon-styles"
);

//!Here I am calling both actions (functions) separetely, but after refactoring the code, I only have to call the function that puts all actions together (createImageWithHeading)

// createHeading("Custard Cream");
// createImage(
//   "https://moversandbakers.co.uk/wp-content/uploads/2020/06/custard-creams_0501.jpg",
//   "custard cream"
// );
// createHeading("Bourbon");
// createImage(
//   "https://www.janespatisserie.com/wp-content/uploads/2024/02/BourbonBiscuits10-2.jpg",
//   "Bourbon"
// );
// createHeading("Oatie");
// createImage(
//   "https://www.mrsjoneskitchen.com/wp-content/uploads/2023/01/Oat-Biscuits.jpg",
//   "Oatie"
// );
