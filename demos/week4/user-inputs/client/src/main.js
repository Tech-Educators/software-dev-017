const messageForm = document.querySelector("#messageForm");
//Select your HTML form element!

function handleSubmitMessageForm(event) {
  event.preventDefault();
  //prevent default to stop form data ending up in the url bar!

  const formData = new FormData(messageForm);
  // capture data from the form
  const formValues = Object.fromEntries(formData);
  //create new object from the values captured in the form

  fetch("http://localhost:8080/messages", {
    //aim your fetch request at the server endpoint
    method: "POST",
    //method must be appropriate for what your trying to do, GET, POST etc
    headers: {
      "Content-Type": "application/json",
    },
    //Tell the server what kind of data to expect
    body: JSON.stringify({ formValues }),
    //The body of the data that gets sent to the server will be turned into strings
  });
  console.log(formValues);
  //Check the the data you think youre sending is ACTUALLY the data that was sent
}
messageForm.addEventListener("submit", handleSubmitMessageForm);
//Attach event listener to submit button
