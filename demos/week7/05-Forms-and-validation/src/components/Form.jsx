import { useState } from "react";

export default function Form() {
  // I need to store my formValues --> state!
  // Each input value is going to be stored in a different state variable
  //In vanilla JS, this is how we set up how to store the form values:
  // const formData = new FormData(form)
  // const formValues = Object.fromEntries(formData)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // I need a tool to track the changes in the input data --> the onChange event
  //we need an event listener --> onChange
  //we need an event handler --> handleChange
  function handleChangeUsername(event) {
    //this is tracking the changes in the username input value
    setUsername(event.target.value); //value = "Manny"
    console.log(event.target.value);
  }

  function handleChangeEmail(event) {
    //this is tracking the changes in the email input value
    setEmail(event.target.value); //value = "m@gmail.com"
    console.log(event.target.value);
  }

  //we need to add an event to our form to submit it --> onSubmit
  //we need the event listener and the event handler
  function handleSubmit(event) {
    event.preventDefault();
    //what is the task here? send the form values to the database
    //I need to fetch the POST route in the server
    //I need to send the formValues there --> it's the same way we did in vanilla JS.
    // fetch("url/postRoute", {
    //     method: "POST",
    //     headers: {
    //         content-type: "application/json"
    //         body: JSON.stringify({username, email})
    //     }
    // })
  }

  return (
    <>
      <h2>Form</h2>
      {/* the event listener goes in the form tag */}
      <form onSubmit={handleSubmit}>
        {/* I can use label and input to build my form */}
        {/* the attribute for in the label is now HTMLfor */}
        {/* the most important attribute in your input is name! Match the value of the name attribute to a column name in the database table */}
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Write your username"
          required
          onChange={handleChangeUsername}
          value={username} //this is our state variable
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          required
          onChange={handleChangeEmail}
          value={email} //this is our state variable
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
