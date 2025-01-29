//we are going to refactor how we handle state and change to simplify the process

import { useState } from "react";

export default function Form() {
  //I will only have one state variable
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
  });

  function handleChangeFormValues(event) {
    //With this approach, we can only track current changes in the current input.
    //If I type a value in the username input, the email input is empty; when I go to the email input to type a value, the previous value in username is lost.
    //We need a way to recover the previous values in our state object, and add the new values from the input we are currently typing --> spread operator
    //This is the formValues state object when we type in the username input
    // formValues = {
    //     username: "Manny",
    //     email:""
    // }
    //This is the formValues state object when we type in the email input
    // formValues = {
    //     username: "",
    //     email:"m@gmail.com"
    // }
    //This is the formValues state object we want: a merged object with all properties filled in
    // formValues = {
    //     username:"Manny",
    //     email: "m@gmail.com"
    // }
    setFormValues({
      ...//the spread operator is merging the two following objects here
      formValues, //this object contains the previous input value the user filled in
      [event.target.name]: event.target.value, //this object contains the current input value we are typing
    });
  }

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
          onChange={handleChangeFormValues}
          value={formValues.username} //this is our state object
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          required
          onChange={handleChangeFormValues}
          value={formValues.email} //this is our state object
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
