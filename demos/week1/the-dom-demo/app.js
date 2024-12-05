console.log("test");

//I want to see the document object in the console
console.log(document);
console.log(window);

//I want to see the document directory of properties in the console
console.dir(document);

//==================================================
//How to manipulate the DOM

//STEP 1: Select the HTML element
//I want to select an element from my HTML to manipulate it in JS
const myH2 = document.getElementById("title");
console.log(myH2);

//querySelector will select an HTML element using the id, class, or tag name
// const mainContainer = document.querySelector(".main-container");
// console.log(mainContainer);

//I want to change the content of the h2
myH2.textContent = "This is a better, more inspired title";

//I want add a new HTML element to the DOM
const mainContainer = document.querySelector(".main-container");

//In this case, I want to create a new image to add to the DOM, inside the div (mainContainer)
const newImg = document.createElement("img");
console.log(newImg);
newImg.src = "https://i.ebayimg.com/images/g/MyYAAOSwOqZfFos~/s-l1200.jpg";
newImg.alt = "A rubber duck with sunglasses shouting";
// newImg.width
// newImg.height
console.log(newImg);

mainContainer.appendChild(newImg);

//If I want to style individual elements, I will give them a classname to use in CSS
newImg.className = "newImg";

// newImg.style.border = "10px solid black";

//I want to style some elements in the document
document.body.style.fontFamily = "monospace";
document.body.style.backgroundColor = "blue";

//I want to remove an element from the DOM
//STEP 1: Select the element
const myH1 = document.querySelector("h1");
myH1.remove();
