console.log("test");

//I want to handle the data that comes from the form
// STEP 1: Select the form from the DOM
const studentForm = document.getElementById("studentForm");

//I want to collect the data from the form when the user clicks the button
//We need an event for the user to interact
//Events have two parts: one listens for the user interaction, the other responds to the user with an action
//event listener --> it goes in the form (the button is just one element in our form)
//the event listener has two arguments: the event, and the event handler (response to the user interaction)
studentForm.addEventListener("submit", handleSubmit);
//event handler
//The default behaviour of the submit event is to send the data to the url --> we need to stop this behaviour!
function handleSubmit(event) {
  //I want the default behaviour of my submit event to stop
  event.preventDefault();
  //I want to handle the form data and structure it in a convenient way (objects)
  //We need to build an object to store our data
  //I cannot write the object myself because I don't know the user's data
  //I cannot constrain a specific data type for each property
  //I can write a template object called FormData, and we will give it the structure of our form as an argument
  const formData = new FormData(studentForm);
  console.log(formData);
  //Once I have the template object created (FormData), we can now add the actual input to fill in the gaps in the template
  const formValuesFromInput = Object.fromEntries(formData);
  console.log(formValuesFromInput);
  //We can send a confirmation to the user that the data was collected successfully
  alert("Data was sent successfully!");
}
