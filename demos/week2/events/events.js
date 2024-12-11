console.log("test");

//I want to log a message in the console when the user clicks the button
//I need an event to interact with the user

//========================================================
//Structure of an event
//event listener --> this is the element in our DOM that will listen for a specific user interaction (click, submit, scroll...)
//the addEventListener method expects two arguments: the first argument is the name onf the event as a string, the second argument is a callback function. Events are predefined
//event handler --> this is how we respond to the user's interaction
//========================================================

// STEP 1: Select the DOM element we are manipulating
const buttonConsole = document.getElementById("button-console");
// const buttonConsole = document.querySelector("#button-console");

//We need to tell the button to listen to a particular interaction --> event listener
// buttonConsole.addEventListener(event, response)

buttonConsole.addEventListener("click", handleClick);

//We need to tell the browser what to do after the user clicks on the the button --> event handler
function handleClick() {
  console.log("You have clicked the button!");
}

//=================================================
//I want to change the background colour when the user click on the the button
// STEP 1: Select the DOM element
const buttonColour = document.getElementById("button-colour");
buttonColour.addEventListener("click", handleClickColour);

function handleClickColour() {
  document.body.style.backgroundColor = "blue";
}
